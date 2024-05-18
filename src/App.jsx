import Session_list from "../components/SessionsList.jsx";
import Button from "../components/Button.jsx";

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
              <Button/>
          </div>
          <div className="justify-center">
              <ul className="text-gray-200 mt-8 rounded-md border border-blue-950 ml-60 mr-60 h-96">

              </ul>
          </div>
      </div>
  )
}

export default App
