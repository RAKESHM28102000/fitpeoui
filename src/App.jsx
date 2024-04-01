import Home from "./components/Home"
import Sidebar from "./components/Sidebar"

function App() {
  return (<>
  <div className="flex relative bg-white items-center flex-col justify-start lg:flex-row lg:items-start w-full min-h-screen overflow-scroll">
   <Sidebar/>
   <Home/>

  </div>
  </>
  )
}

export default App
