import styled, { createGlobalStyle } from 'styled-components'

export const python =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
export const html =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
export const css =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
export const javascript =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
export const typescript =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
export const bootstrap =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
export const gulp =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg'
export const grunt =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original.svg'
export const cypress =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg'
export const jquery =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg'
export const react =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
export const redux =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'
export const router =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg'
export const vue =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
export const django =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg'
export const flask =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'
export const java =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
export const docker =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
export const postgre =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'

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
  java: '#D50032',
  docker: '#2496ED',
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
