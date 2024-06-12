import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { EstiloGlobal, Container } from "./styles/global"
import { ThemeProvider } from "styled-components"
import temaLight from "./themes/light"
import temaDark from "./themes/dark"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos from "./pages/Projetos"
import Cabecalho from "./containers/Cabecalho"

function App() {
  const [trocaTema, setTrocaTema] = useState(true)
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
    setTrocaTema(!trocaTema)
  }

  return (
    <ThemeProvider theme={trocaTema ? temaDark : temaLight}>
      <EstiloGlobal />
      <Cabecalho trocaTema={funcTrocaTema} tema={trocaTema} />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </ThemeProvider>
  )
}

export default App
