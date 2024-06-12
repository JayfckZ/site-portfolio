import * as S from "./styles"
import { Container } from "../../styles/global"

type Props = {
  trocaTema: () => void
  tema: boolean
}
function Cabecalho({ trocaTema, tema }: Props) {
  return (
    <S.Header>
      <Container id="container">
        <S.Titulo>João</S.Titulo>
        <nav>
          <S.BotaoPagina>Início</S.BotaoPagina>
          <S.BotaoPagina>Sobre</S.BotaoPagina>
          <S.BotaoPagina>Projetos</S.BotaoPagina>
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
      </Container>
    </S.Header>
  )
}

export default Cabecalho
