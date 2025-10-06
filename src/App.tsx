import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Projects from './pages/projects/Projects'
import Loader from './components/loader/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Tempo do carregamento (pode ajustar — 6 segundos é o ideal pro efeito)
    const timer = setTimeout(() => setLoading(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader /> // mostra a animação antes de tudo
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

