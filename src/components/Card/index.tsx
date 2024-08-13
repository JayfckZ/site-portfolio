import { CardContainer, Link } from './styles'

const Card = ({
  capa,
  titulo,
  techs,
  descricao,
  gitLink,
  deployLink
}: Projeto) => {
  return (
    <CardContainer>
      <div>
        <img src={capa} />
        <h2>{titulo}</h2>
        <div className="techs">
          {techs.map((tech) => (
            <img key={tech} src={tech} />
          ))}
        </div>
        <p>{descricao}</p>
      </div>
      <div className="button-container">
        <Link target="_blank" href={gitLink}>
          <i className="bi bi-github"></i>
          Ver repositório
          <div />
        </Link>
        <Link target="_blank" href={deployLink}>
          <i className="bi bi-globe-americas"></i>
          Ver projeto
          <div />
        </Link>
      </div>
    </CardContainer>
  )
}

export default Card
