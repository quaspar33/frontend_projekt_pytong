import Session_list from "../components/SessionsList.jsx";

function App() {

  return (
      <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
          <div className="flex justify-center items-center h-20 bg-gray-300">
              <a className="text-violet-950 font-semibold text-5xl">
                  Nasz projekt
              </a>
          </div>
          <div className="flex mt-8 justify-center items-center">
              <Session_list/>
          </div>
          <div className="flex justify-center items-center">
              <button
                  className="mt-8 px-4 py-2 text-violet-950 font-semibold rounded-md border border-violet-950 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                  Wyślij dane
              </button>
          </div>
          <div className="justify-center">
              <ul className="text-gray-200 mt-8 rounded-md border border-blue-950 ml-60 mr-60 h-96">

              </ul>
          </div>
      </div>
  )
}

export default App
