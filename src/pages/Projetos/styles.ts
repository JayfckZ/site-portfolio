import styled from 'styled-components'

type Props = {
  isSelected: boolean
}

export const FilterContainer = styled.div`
  padding-top: 48px;

  h2 {
    color: ${(props) => props.theme.corPrincipal};
    margin-bottom: 16px;
  }
`

export const Button = styled.button<Props>`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-right: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? props.theme.corPrincipal : props.theme.corBotaoCard};
  color: ${(props) =>
    props.isSelected ? props.theme.corTerciaria : props.theme.corFundo};

  &:disabled {
    filter: brightness(50%);
    cursor: default;
  }
`
