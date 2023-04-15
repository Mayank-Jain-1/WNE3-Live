
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AIprompt from './components/AIprompt'

function App() {
  

  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/prompt" element={<AIprompt />}></Route>
     </Routes>
    </div>
  )
}

export default App
