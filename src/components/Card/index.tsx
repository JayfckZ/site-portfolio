import { CardContainer, Link } from './styles'

const Card = ({ capa, titulo, descricao, gitLink, deployLink }: Projeto) => {
  return (
    <CardContainer>
      <div>
        <img src={capa} />
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </div>
      <div className="button-container">
        <Link target="_blank" href={gitLink}>
          Ver repositório
        </Link>
        <Link target="_blank" href={deployLink}>
          Ver projeto
        </Link>
      </div>
    </CardContainer>
  )
}

export default Card
