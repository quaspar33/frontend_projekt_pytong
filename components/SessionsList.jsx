import React, { useState } from "react";
import sessions from "../public/dane_testowe.json";

const SessionsList = () => {
    const [selectedValue, setSelectedValue] = useState("");

    return (
        <div>
            <select
                className="mt-8 px-6 py-2 bg-gray-300 rounded-md border border-violet-950 focus:ring-2 focus:ring-color-8 focus:outline-none"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
            >
                <option value="">Wybierz opcję</option>
                {sessions.sessions.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SessionsList;

