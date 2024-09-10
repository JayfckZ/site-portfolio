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
        <Link
          as={!deployLink ? 'button' : 'a'}
          target="_blank"
          href={deployLink}
          disabled={!deployLink}
        >
          <i className="bi bi-globe-americas"></i>
          {deployLink ? 'Ver projeto' : <small>Deploy indisponível</small>}
          <div />
        </Link>
      </div>
    </CardContainer>
  )
}

export default Card
