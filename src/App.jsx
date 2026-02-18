import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateRoutine from './Pages/CreateRoutine';
import MyRoutines from './Pages/MyRoutines';
import CurrentRoutine from './Pages/CurrentRoutine';
import Support from "./Pages/Support"
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer'; // Import the new component

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Forces footer to bottom */}
      <Router>
        <Header />
        <main className="flex-grow-1"> {/* Main content area */}
          <Routes>
            <Route path='/' element={<Dashboard />} /> 
            <Route path='/create-routine' element={<CreateRoutine />} />
            <Route path='/my-routines' element={<MyRoutines />} />
            <Route path='/current-routine' element={<CurrentRoutine/>} />
            <Route path='/support' element={<Support/>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
