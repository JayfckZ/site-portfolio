import styled, { createGlobalStyle } from "styled-components"

export const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`
