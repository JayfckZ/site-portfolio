import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const languageColors = {
  html: '#DD6B20',
  js: '#F7DF1E',
  ts: '#3178C6',
  bootstrap: '#7952B3',
  gulpparcel: '#E55137',
  jquery: '#0769AD',
  tests: '#6D9D8F',
  react: '#61DAFB',
  vue: '#42B883',
  python: '#4CAF50',
  django: '#092E20',
  django2: '#00C853',
  postgre: '#003B5C',
  postgre2: '#007AB8'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    transition: all 0.3s;
    overflow-x: clip;
  }

  body {
    background-color: ${(props) => props.theme.corFundo};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (width <= ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
