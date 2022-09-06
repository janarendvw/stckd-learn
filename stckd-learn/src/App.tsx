import { useState } from 'react'
import './App.css'
import Navbar from './components/UI/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainContainer from './components/UI/MainContainer'
import Subjects from './pages/Subjects'
import Subject from './pages/Subject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<MainContainer/>}>
    <Route path='/subjects' element={<Subjects/>}/>
    <Route path='/subject/:subjectId' element={<Subject/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
