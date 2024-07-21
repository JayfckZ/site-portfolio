import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.corFundoCard};
  padding: 12px;
  border-radius: 20px;
  color: ${(props) => props.theme.corSecundaria};
  justify-content: space-between;

  img {
    border-radius: 8px 8px 0 0;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    margin: 8px 0;
  }

  .button-container {
    display: block;
  }
`

export const Link = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  padding: 6px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
  background-color: ${(props) => props.theme.corPrincipal};
  color: #fff;
`
