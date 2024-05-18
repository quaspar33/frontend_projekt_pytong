import React, { useState, useEffect } from "react";

const SessionsList = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const [races, setRaces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/races");
                const data = await response.json();
                setRaces(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <select
                className="px-4 py-2 bg-gray-300 rounded-md border border-violet-950 focus:ring-2 focus:ring-color-8 focus:outline-none"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
            >
                <option>
                    Wybierz sesję
                </option>
                {races.map((item, index) => (
                    <option>
                        {item.country_name} GP {item.year}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SessionsList;
