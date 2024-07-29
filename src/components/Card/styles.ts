import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.corFundoCard};
  // padding: 12px;
  border-radius: 8px;
  color: ${(props) => props.theme.corSecundaria};
  justify-content: space-between;

  img {
    // border-radius: 4px 4px 0 0;
    width: 100%;
    object-fit: cover;
  }

  .techs {
    display: flex;
    gap: 8px;
    margin: 0 12px 16px;

    img {
      width: 25px;
    }
  }

  h2 {
    margin: 8px 12px 4px;
    font-size: 28px;
  }

  p {
    font-size: 14px;
    margin: 8px 12px;
  }

  .button-container {
    display: block;
    margin: 8px 12px;
  }
`

export const Link = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  padding: 6px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
  background-color: ${(props) => props.theme.corBotaoCard};
  color: ${(props) => props.theme.corFundo};
  display: flex;
  align-itens: center;
  justify-content: space-between;

  i {
    margin-left: 4px;
  }
`
