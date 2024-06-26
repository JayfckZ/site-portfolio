import { useEffect, useState } from "react"
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { EstiloGlobal, Container } from "./styles/global"
import { ThemeProvider } from "styled-components"
import temaLight from "./themes/light"
import temaDark from "./themes/dark"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"
import Cabecalho from "./containers/Cabecalho"

function App() {
  const [trocaTema, setTrocaTema] = useState(() => {
    const temaSalvo = localStorage.getItem("tema")
    return temaSalvo ? JSON.parse(temaSalvo) : true
  })

  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/sobre",
      element: <Sobre />
    },
    {
      path: "/projetos",
      element: <Projetos />
    }
  ])

  function funcTrocaTema() {
    setTrocaTema((prevTema: unknown) => {
      const novoTema = !prevTema
      localStorage.setItem("tema", JSON.stringify(novoTema))
      return novoTema
    })
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema")
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
