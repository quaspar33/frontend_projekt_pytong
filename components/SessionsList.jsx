import React, { useEffect, useState } from "react";
import axios from "axios";

function SessionsList() {
    const [selectedValue, setSelectedValue] = useState("");
    const [races, setRaces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/races");
                setRaces(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <select
            className="px-4 py-2 bg-gray-300 rounded-md border border-violet-950 focus:ring-2 focus:ring-color-8 focus:outline-none"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            <option>
                Wybierz sesję
            </option>
            {races.map((item, index) => (
                <option key={index} value={item}>
                    {item.country_name} GP {item.year}
                </option>
            ))}
        </select>
    );
}

export default SessionsList;
