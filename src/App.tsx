import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

import temaDark from './themes/dark'
import temaLight from './themes/light'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Cabecalho from './components/Cabecalho'

import { EstiloGlobal } from './styles/global'

function App() {
  const [trocaTema, setTrocaTema] = useState(() => {
    const temaSalvo = localStorage.getItem('tema')
    return temaSalvo ? JSON.parse(temaSalvo) : true
  })

  function funcTrocaTema() {
    setTrocaTema((prevTema: unknown) => {
      const novoTema = !prevTema
      localStorage.setItem('tema', JSON.stringify(novoTema))
      return novoTema
    })
  }

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema')
    if (temaSalvo) {
      setTrocaTema(JSON.parse(temaSalvo))
    }
  }, [])

  return (
    <ThemeProvider theme={trocaTema ? temaDark : temaLight}>
      <EstiloGlobal />
      <Router>
        <Cabecalho trocaTema={funcTrocaTema} tema={trocaTema} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
