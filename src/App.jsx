import Session_list from "../components/SessionsList.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import ButtonComp from "../components/ButtonComp.jsx";

function App() {
  return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
          <div className="flex justify-center h-20 bg-gray-300">
              <a className="text-violet-950 mt-3 font-semibold text-5xl">
                  PROJECT
              </a>
          </div>
          <div className="flex mt-8 justify-center">
              <Session_list/>
          </div>
          <div className="flex mt-8 justify-center">
              <ButtonComp/>
          </div>
          <div className="flex mt-8 justify-center">
              <ul className="rounded-md border border-blue-950 ml-60 mr-60 h-96 w-full">

              </ul>
          </div>
      </div>
  )
}

export default App
