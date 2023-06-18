import { useState} from 'react'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AIprompt from './components/AIprompt'
import Productpage from './components/Productpage'
import Betapage from './components/Betapage'
import Login from './components/Login'


function App() {
  
  

  const [aimage , setAimage] = useState("")

  
  console.log(aimage)
  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/prompt" element={<AIprompt onImageChange={setAimage} />}></Route>
     <Route path="/prompt/checkout" element={<Productpage aimage={aimage}/>}></Route>
     <Route path="/betapage" element={<Betapage/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     </Routes>
    </div>
  )

  console.log(aimage)
}

export default App
