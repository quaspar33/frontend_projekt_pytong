import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
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
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
          <div className="flex justify-center h-20 bg-gray-300">
              <a className="text-violet-950 mt-3 font-semibold text-5xl">
                  PROJECT
              </a>
          </div>
          <div className="flex mt-8 justify-center">
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
          </div>
          <div className="flex mt-8 justify-center">
              <button className="px-4 py-2 text-violet-950 font-semibold rounded-md border border-violet-950 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Wyślij dane
              </button>
          </div>
          <div className="flex mt-8 justify-center">
              <ul className="rounded-md border border-blue-950 ml-60 mr-60 h-96 w-full">

              </ul>
          </div>
      </div>
  )
}

export default App
