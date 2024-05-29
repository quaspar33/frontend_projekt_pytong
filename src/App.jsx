import React, { useEffect, useState } from "react";
import f1_logo from "../public/f1-Symbol.png";
import axios from "axios";
import { Bars3Icon, ArrowLeftIcon } from "@heroicons/react/24/solid";

function App() {
    const [selectedValue, setSelectedValue] = useState("");
    const [races, setRaces] = useState([]);
    const [raceData, setRaceData] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const racesResponse = await axios.get("http://127.0.0.1:5000/races");
                setRaces(racesResponse.data);
                const authorsResponse = await axios.get("http://127.0.0.1:5000/authors");
                setAuthors(authorsResponse.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const handleSendData = async () => {
        try {
            await axios.post("http://127.0.0.1:5000/send-session_key-data", {
                selectedValue: selectedValue
            });
            console.log("Dane zostały wysłane:", selectedValue);
        } catch (error) {
            console.error("Błąd podczas wysyłania danych:", error);
        }
        try {
            const response = await axios.get("http://127.0.0.1:5000/race");
            setRaceData(response.data);
            console.log("Dane zostały pobrane:", response.data);
        } catch (error) {
            console.error("Błąd podczas pobierania danych:", error);
        }
    };

    const toggleMenu = async () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
            <div className="flex justify-center border-b border-indigo-950 h-20 bg-gray-300 relative">
                <div className="flex mr-auto">
                    <button
                        className="rounded-md ml-1 hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out transform hover:scale-90"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <ArrowLeftIcon className="h-10 w-20 text-indigo-950"/>
                        ) : (
                            <Bars3Icon className="h-10 w-20 text-indigo-950"/>
                        )}
                    </button>
                    <div
                        className={`absolute top-20 rounded-br w-50 bg-gray-300 transition-all duration-500 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                        <ul className="border-r border-indigo-950 overflow-auto">
                            <li className="py-2 px-4 border-b border-indigo-950"> Autorzy: </li>
                            {authors.map((author, index) => (
                                <li className="py-2 px-4 border-b border-indigo-950" key={index}>{author.name} {author.ska}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mr-20">
                    <img src={f1_logo} alt="Logo" className="h-15 mr-3"/>
                    <a className="text-black mt-3 font-medium text-5xl">
                        PROJECT
                    </a>
                </div>
            </div>
            <div className="flex mt-8 justify-center">
                <select
                    className="px-4 py-2 bg-gray-200 rounded-md border border-black focus:ring-2 focus:ring-color-8 focus:outline-none"
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    <option>
                        Wybierz sesję
                    </option>
                    {races.map((item, index) => (
                        <option key={index} value={item.session_key}>
                            {item.country_name} GP {item.year}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex mt-8 justify-center">
                <button
                    className="px-4 py-2 text-black font-semibold rounded-md border border-black hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={handleSendData}
                >
                    Wyślij dane
                </button>
            </div>
            <div className="flex mt-16 justify-center">
                <ul className="rounded-md border border-indigo-950 ml-60 mr-60 h-96 w-full overflow-auto">
                    {Object.entries(raceData).map(([key, value], index) => (
                        <li key={index} className="py-2 px-4 border-b border-indigo-950">
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;
