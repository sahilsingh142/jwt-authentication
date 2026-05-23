import {Routes, Route} from "react-router-dom"
import Sign from "./Authentication/Sign.jsx"
import Login from "./Authentication/Login.jsx"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Sign/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
