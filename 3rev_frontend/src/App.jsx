import { useState} from 'react'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AIprompt from './components/AIprompt'
import Productpage from './components/Productpage'
import Betapage from './components/Betapage'
import Login from './components/Login'
import Address from './components/Address'
import ImageComponent from './components/ImageComponent'


function App() {
  
  

  const [aimage , setAimage] = useState("")

  
  console.log(aimage)
  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/prompt" element={<AIprompt onImageChange={setAimage} />}></Route>
     <Route path="/checkout" element={<Productpage aimage={aimage}/>}></Route>
     <Route path="/betapage" element={<Betapage/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/address" element={<Address/>}></Route>
     <Route path="/test" element={<ImageComponent/>}></Route>
     
     </Routes>
    </div>
  )

  console.log(aimage)
}

export default App
