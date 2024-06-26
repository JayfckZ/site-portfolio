import styled, { createGlobalStyle } from "styled-components"

export const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    transition: all 0.3s
  }

  body {
    background-color: ${(props) => props.theme.corFundo};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
