import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import FirstTest from './components/FirstTest'
import SecondTest from './components/SecondTest'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/first-test' element={<FirstTest />} />
        <Route path='/second-test' element={<SecondTest />} />
      </Routes>
    </Router>
  )
}

export default App
