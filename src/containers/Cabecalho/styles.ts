import styled from "styled-components"

export const Header = styled.div`
  color: ${(props) => props.theme.corSecundaria};
  padding: 24px;

  position: sticky;
  top: 0;
  left: 0;

  #container {
    display: grid;
    grid-template-columns: 1fr 1fr;

    nav {
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
`

export const Titulo = styled.h1`
  width: auto;
  color: ${(props) => props.theme.corPrincipal};
`

export const BotaoPagina = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.corPrincipal};
  padding: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corTerciaria};
  }
`

export const BotaoTema = styled(BotaoPagina)`
  font-size: 24px;
  padding: 8px 10px;
  border-radius: 50%;
`
