import styled from "styled-components"
import { Container } from "../../styles/global"

export const ContainerGeral = styled(Container)`
  height: calc(100vh - 93px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    display: block;
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    padding-top: 12px;
  }
`

export const ContainerCentro = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  color: ${(props) => props.theme.corSecundaria};

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    div:nth-child(1) {
      order: 2;
    }

    div:nth-child(2) {
      order: 1;
      margin-top: 24px;
    }

    div:nth-child(3) {
      order: 3;
      margin: 0 0 24px;
    }
  }
`

export const Titulo = styled.h2`
  color: ${(props) => props.theme.corPrincipal};
  font-size: 48px;
`

export const Subtitulo = styled.h4`
  margin: 12px 0;
  font-size: 20px;
`

export const Paragrafo = styled.p``

export const Imagem = styled.img`
  width: 240px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.corPrincipal};
  align-self: center;
`

export const ContainerLinks = styled.div`
  flex-direction: row !important;
  justify-content: center !important;
  gap: 16px;
  font-size: 32px;
  font-weight: bold;

  a {
    color: ${(props) => props.theme.corSecundaria};
  }
`
