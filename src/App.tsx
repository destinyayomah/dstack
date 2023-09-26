import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work';
import { useState } from 'react';

export const textPrimary = '#777778';
export const bgPrimary = '#151515';
export const bgSecondary = '#1B1B1D';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
        <Route path='/work' element={<Work isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
