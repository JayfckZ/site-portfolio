import styled from 'styled-components'
import { breakpoints, Container } from '../../styles/global'

type Props = {
  language: string
}

export const ContainerGeral = styled.div`
  padding-bottom: 64px;
`

export const Titulo = styled.h2`
  margin-top: 64px;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 32px;

  @media (width < ${breakpoints.tablet}) {
    text-align: center;
  }
`
export const TituloSec = styled.h2`
  margin-top: 30px;
  font-size: 24px;
`
export const Subtitulo = styled.h3`
  margin: 32px 0;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 20px;

  @media (width < ${breakpoints.tablet}) {
    text-align: center;
  }
`

export const Paragrafo = styled.p`
  margin: 12px 0;
  font-size: 16px;
  color: ${(props) => props.theme.corSecundaria};

  a {
    color: ${(props) => props.theme.corSecundaria};
  }

  li {
    display: flex;
    gap: 8px;

    @media (width < ${breakpoints.tablet}) {
      span {
        display: none;
      }
    }
  }

  @media (width < ${breakpoints.tablet}) {
    text-align: center;
  }
`

export const Sessao = styled.section<Props>`
  background-image: linear-gradient(
    90deg,
    ${(props) => `${props.theme.corFundo}, ${props.language}`}
  );
  padding: 16px 0;

  ${TituloSec} {
    color: ${(props) =>
      props.language == '#F7DF1E' ? '#F0DB4F' : props.language};
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (width < ${breakpoints.tablet}) {
      flex-direction: column-reverse;
      justify-content: center;
      position: relative;
      z-index: 1;

      .texto {
        text-align: center;
      }
    }
  }

  ${Paragrafo} {
    max-width: 460px;

    @media (width < ${breakpoints.tablet}) {
      color: #fff;
    }
  }

  &.invert {
    text-align: end;
    background-image: linear-gradient(
      270deg,
      ${(props) => `${props.theme.corFundo}, ${props.language}`}
    );

    ${Container} {
      flex-direction: row-reverse;
    }
  }

  @media (width < ${breakpoints.tablet}) {
    position: relative;

    &::after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      content: '';
    }

    &.invert {
      ${Container} {
        flex-direction: column-reverse;
      }
    }
  }
`
