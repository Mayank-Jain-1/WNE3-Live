import {useCallback} from 'react'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AIprompt from './components/AIprompt'
import Productpage from './components/Productpage'


function App() {
  
  

  const handleCallback = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/prompt" element={<AIprompt callback={handleCallback} />}></Route>
     <Route path="/prompt/checkout" element={<Productpage />}></Route>
     </Routes>
    </div>
  )
}

export default App
