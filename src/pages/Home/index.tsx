import * as S from './styles'
import { ReactTyped } from 'react-typed'
import profile from '../../midia/profile.webp'

function Home() {
  return (
    <S.ContainerGeral>
      <S.ContainerCentro>
        <div>
          <S.Titulo>Olá, me chamo João Marcelo</S.Titulo>
          <S.Subtitulo>
            Desenvolvedor{' '}
            <ReactTyped
              strings={['Fullstack', 'Frontend', 'Backend']}
              typeSpeed={60}
              backSpeed={80}
              backDelay={1500}
              loop
            />
          </S.Subtitulo>
          <S.Paragrafo>
            {' '}
            Sou um Desenvolvedor Full Stack formado pela EBAC e graduando em
            Ciência da Computação. Com habilidades em HTML, CSS, JavaScript e
            Python, tenho experiência tanto no front-end quanto no back-end.
            Estou sempre em busca de novos desafios para aprimorar minhas
            habilidades e conhecimentos.
          </S.Paragrafo>
        </div>
        <div>
          <S.Imagem src={profile} />
        </div>
        <S.ContainerLinks>
          <a href="http://github.com/JayfckZ" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joaomarcelbatista/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </S.ContainerLinks>
      </S.ContainerCentro>
    </S.ContainerGeral>
  )
}

export default Home
