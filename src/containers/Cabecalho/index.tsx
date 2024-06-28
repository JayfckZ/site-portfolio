import * as S from "./styles"
import { Container } from "../../styles/global"
import { useLocation } from "react-router-dom"
import { useState } from "react"

type Props = {
  trocaTema: () => void
  tema: boolean
}
function Cabecalho({ trocaTema, tema }: Props) {
  const location = useLocation()

  let tituloPagina = "Portfólio"

  const [botaoAtivo, setBotaoAtivo] = useState<string>(location.pathname)

  if (location.pathname == "/") {
    tituloPagina = "Portfólio"
  } else {
    tituloPagina = "João"
  }

  const atualizaBotao = (path: string) => {
    setBotaoAtivo(path)
  }

  return (
    <S.Header>
      <S.ContainerHeader id="container">
        <S.Titulo>{tituloPagina}</S.Titulo>
        <nav>
          <S.BotaoPagina
            onClick={() => atualizaBotao("/")}
            ativo={botaoAtivo === "/"}
            to="/"
          >
            Início
          </S.BotaoPagina>
          <S.BotaoPagina
            onClick={() => atualizaBotao("/sobre")}
            ativo={botaoAtivo === "/sobre"}
            to="/sobre"
          >
            Sobre
          </S.BotaoPagina>
          <S.BotaoPagina
            onClick={() => atualizaBotao("/projetos")}
            ativo={botaoAtivo === "/projetos"}
            to="/projetos"
          >
            Projetos
          </S.BotaoPagina>
          {tema ? (
            <S.BotaoTema onClick={trocaTema}>
              <i className="bi bi-brightness-high"></i>
            </S.BotaoTema>
          ) : (
            <S.BotaoTema onClick={trocaTema}>
              <i className="bi bi-moon-stars"></i>
            </S.BotaoTema>
          )}
        </nav>
      </S.ContainerHeader>
    </S.Header>
  )
}

export default Cabecalho
