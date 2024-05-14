function App() {

  return (
      <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
          <div className="flex justify-center items-center h-20 bg-gray-200">
              <a className="text-violet-950 font-semibold text-5xl">
                  Nasz projekt
              </a>
          </div>
          <div className="flex justify-center items-center">
              <input
                  className="mt-8 px-6 py-2 bg-gray-200 rounded-md border border-violet-950 focus:ring-2 focus:ring-color-8 focus:outline-none"
                  type="text"
                  placeholder="Wprowadź dane"
              />
          </div>
          <div className="flex justify-center items-center">
              <button
                  className="mt-6 px-4 py-2 text-violet-950 font-semibold rounded-md border border-violet-950 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
                  Wyślij dane
              </button>
          </div>
          <div className="justify-center">
              <ul className="text-gray-200 mt-6 rounded-md border border-blue-950 ml-60 mr-60 h-96">

              </ul>
          </div>
      </div>
  )
}

export default App
