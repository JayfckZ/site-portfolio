import styled from "styled-components"
import { Container } from "../../styles/global"
import { Link } from "react-router-dom"

type propStyle = {
  ativo?: boolean
}

export const ContainerHeader = styled(Container)`
  max-width: 90%;
`

export const Header = styled.div`
  color: ${(props) => props.theme.corSecundaria};
  // background-color: ${(props) => props.theme.corFundo};
  padding: 18px 24px 8px;

  position: sticky;
  top: 0;
  left: 0;

  z-index: 1;

  #container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    nav {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 8px;
    }

    @media (width <= 767px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Titulo = styled.h1`
  width: auto;
  color: ${(props) => props.theme.corPrincipal};

  @media (width <= 767px) {
    display: none;
  }
`

export const BotaoPagina = styled(Link)<propStyle>`
  background-color: ${(propStyle) =>
    propStyle.ativo ? (props) => props.theme.corPrincipal : "transparent"};
  color: ${(propStyle) =>
    propStyle.ativo
      ? (props) => props.theme.corTerciaria
      : (props) => props.theme.corPrincipal};
  padding: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corTerciaria};
  }
`

export const BotaoTema = styled.button<propStyle>`
  background-color: ${(propStyle) =>
    propStyle.ativo ? (props) => props.theme.corPrincipal : "transparent"};
  color: ${(propStyle) =>
    propStyle.ativo
      ? (props) => props.theme.corTerciaria
      : (props) => props.theme.corPrincipal};
  padding: 8px 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corTerciaria};
  }
`
