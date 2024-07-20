import { Container, languageColors } from '../../styles/global'
import * as S from './styles'

const python =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
const html =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
const javascript =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
const typescript =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
const bootstrap =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
const gulp =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg'
const cypress =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg'
const jquery =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg'
const react =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
const vue =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
const django =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg'
const postgre =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'

function Sobre() {
  return (
    <S.ContainerGeral>
      <Container>
        <S.Titulo>Sobre mim</S.Titulo>
        <S.Paragrafo>
          Desde cedo, sempre fui fascinado por tecnologia e computação, o que me
          levou a cursar Técnico de Informática. Essa formação inicial não
          apenas me deu uma base sólida, mas também despertou uma paixão intensa
          pela programação.
          <br />
          <br />
          Atualmente, estou cursando o 4º período de Ciência da Computação, com
          ênfase no desenvolvimento Full Stack. Minha jornada acadêmica e
          prática me levou a uma admiração especial por Python e pelo
          desenvolvimento frontend. No frontend, tenho prazer em criar
          interfaces de usuário intuitivas e atraentes utilizando HTML, CSS, e
          JavaScript, além de frameworks modernos como React. Transformar
          designs complexos em aplicações web responsivas e funcionais é algo
          que realmente me motiva.
          <br />
          <br />
          No backend, desenvolvo aplicações robustas e escaláveis com Python e
          Django. Gosto de implementar soluções eficientes e seguras que atendam
          às necessidades dos usuários e aos requisitos dos projetos.
        </S.Paragrafo>
        <S.Titulo>Habilidades Técnicas</S.Titulo>
        <S.Subtitulo>Frontend</S.Subtitulo>
      </Container>
      <S.Sessao language={languageColors.html}>
        <Container>
          <div className="texto">
            <S.TituloSec data-aos="fade-right">HTML e CSS</S.TituloSec>
            <S.Paragrafo>
              Criação de interfaces de usuário responsivas e atraentes,
              utilizando HTML e CSS, além de pré-processadores como SASS, LESS e
              SCSS para melhorar a modularidade e a manutenção do código.
            </S.Paragrafo>
          </div>
          <img src={html} alt="HTML logo" width="200px" />
        </Container>
      </S.Sessao>
      <S.Sessao
        data-aos="fade-left"
        language={languageColors.js}
        className="invert"
      >
        <Container>
          <div className="texto">
            <S.TituloSec>JavaScript</S.TituloSec>
            <S.Paragrafo>
              Linguagem de programação dinâmica essencial para o desenvolvimento
              web, permitindo a criação de sites interativos e dinâmicos. Com
              JavaScript, é possível manipular elementos HTML e CSS em tempo
              real, criar interfaces de usuário responsivas e integrar
              funcionalidades complexas.
            </S.Paragrafo>
          </div>
          <img src={javascript} alt="JavaScript logo" width="200px" />
        </Container>
      </S.Sessao>
      <S.Sessao data-aos="fade-right" language={languageColors.ts}>
        <Container>
          <div className="texto">
            <S.TituloSec>TypeScript</S.TituloSec>
            <S.Paragrafo>
              Um superconjunto de JavaScript que adiciona tipagem estática ao
              código, ajudando a evitar erros e melhorar a manutenção e
              escalabilidade das aplicações. TypeScript é especialmente útil em
              projetos maiores e mais complexos.
            </S.Paragrafo>
          </div>
          <img src={typescript} alt="TypeScript logo" width="200px" />
        </Container>
      </S.Sessao>

      <Container>
        <S.Subtitulo>Ferramentas e Tecnologias</S.Subtitulo>
      </Container>
      <S.Sessao
        data-aos="fade-left"
        language={languageColors.bootstrap}
        className="invert"
      >
        <Container>
          <div className="texto">
            <S.TituloSec>Bootstrap</S.TituloSec>
            <S.Paragrafo>
              Desenvolvimento de interfaces responsivas e mobile-first com o
              framework Bootstrap.
            </S.Paragrafo>
          </div>
          <img src={bootstrap} alt="Bootstrap logo" width="200px" />
        </Container>
      </S.Sessao>
      <S.Sessao data-aos="fade-right" language={languageColors.gulpparcel}>
        <Container>
          <div className="texto">
            <S.TituloSec>Gulp e Parcel</S.TituloSec>
            <S.Paragrafo>
              Automatização de tarefas de desenvolvimento e otimização de
              projetos web.
            </S.Paragrafo>
          </div>
          <img src={gulp} alt="Gulp logo" width="200px" />
        </Container>
      </S.Sessao>
      <S.Sessao
        data-aos="fade-left"
        language={languageColors.tests}
        className="invert"
      >
        <Container>
          <div className="texto">
            <S.TituloSec>Testing Library, Jest e Cypress</S.TituloSec>
            <S.Paragrafo>
              Implementação de testes unitários e de integração para garantir a
              qualidade e funcionalidade das aplicações. Testing Library para
              testes de componentes React, Cypress para testes end-to-end e Jest
              para testes gerais e de unidades.
            </S.Paragrafo>
          </div>
          <img src={cypress} alt="Cypress logo" width="200px" />
        </Container>
      </S.Sessao>
      <S.Sessao data-aos="fade-right" language={languageColors.jquery}>
        <Container>
          <div className="texto">
            <S.TituloSec>jQuery</S.TituloSec>
            <S.Paragrafo>
              Manipulação e interatividade simplificadas em projetos legados.
            </S.Paragrafo>
          </div>
          <img src={jquery} alt="jQuery logo" width="200px" />
        </Container>
      </S.Sessao>

      <Container>
        <S.Subtitulo>Frameworks e Bibliotecas</S.Subtitulo>
      </Container>
      <S.Sessao
        data-aos="fade-left"
        language={languageColors.react}
        className="invert"
      >
        <Container>
          <div className="texto">
            <S.TituloSec>React</S.TituloSec>
            <S.Paragrafo>
              Criação de componentes reutilizáveis e interfaces modernas
              utilizando React, junto com a gestão de estado através do Redux.
            </S.Paragrafo>
          </div>
          <img src={react} alt="React logo" width="200px" />
        </Container>
      </S.Sessao>
      <S.Sessao data-aos="fade-right" language={languageColors.vue}>
        <Container>
          <div className="texto">
            <S.TituloSec>Vue</S.TituloSec>
            <S.Paragrafo>
              Experiência na construção de aplicações reativas e performáticas
              com Vue.js.
            </S.Paragrafo>
          </div>
          <img src={vue} alt="Vue logo" width="200px" />
        </Container>
      </S.Sessao>

      <Container>
        <S.Subtitulo>Backend</S.Subtitulo>
      </Container>
      <S.Sessao
        data-aos="fade-left"
        language={languageColors.python}
        className="invert"
      >
        <Container>
          <div className="texto">
            <S.TituloSec>Python</S.TituloSec>
            <S.Paragrafo>
              Desenvolvimento de backend robusto e escalável, com conhecimento
              em frameworks como Django para construção de aplicações web
              seguras e eficientes.
            </S.Paragrafo>
          </div>
          <img src={python} alt="Python logo" width="200px" />
        </Container>
      </S.Sessao>
      <S.Sessao data-aos="fade-right" language={languageColors.django2}>
        <Container>
          <div className="texto">
            <S.TituloSec>Django</S.TituloSec>
            <S.Paragrafo>
              Framework de backend escrito em Python, utilizado para criar a
              lógica do servidor, gerenciar bancos de dados e construir a parte
              do sistema que interage com a base de dados e processa
              solicitações do cliente.
            </S.Paragrafo>
          </div>
          <img src={django} alt="Django logo" width="200px" />
        </Container>
      </S.Sessao>

      <Container>
        <S.Subtitulo>Banco de Dados</S.Subtitulo>
      </Container>
      <S.Sessao
        data-aos="fade-left"
        language={languageColors.postgre2}
        className="invert"
      >
        <Container>
          <div className="texto">
            <S.TituloSec>PostgreSQL</S.TituloSec>
            <S.Paragrafo>
              Desenvolvimento de backend robusto e escalável, com conhecimento
              em frameworks como Django para construção de aplicações web
              seguras e eficientes.
            </S.Paragrafo>
          </div>
          <img src={postgre} alt="PostgreSQL logo" width="200px" />
        </Container>
      </S.Sessao>
      <Container>
        <S.Titulo>Experiência</S.Titulo>
        <S.Paragrafo>
          Tenho experiência prática no desenvolvimento de projetos pessoais e
          acadêmicos, onde apliquei minhas habilidades técnicas para resolver
          problemas complexos e criar soluções inovadoras. Meu portfólio inclui
          desde páginas de eventos e listas de tarefas até clones de plataformas
          populares e projetos de e-commerce. Essa experiência me proporcionou
          uma compreensão abrangente das necessidades e desafios do
          desenvolvimento Full Stack, tanto no frontend quanto no backend.
        </S.Paragrafo>
        <S.Titulo>Motivação e Objetivos</S.Titulo>
        <S.Paragrafo>
          Sou movido por desafios e busco constantemente aprimorar minhas
          habilidades e conhecimentos. Estou sempre em busca de soluções
          inovadoras e eficientes, e adoro trabalhar em projetos que envolvam
          tanto o frontend quanto o backend, permitindo-me aplicar toda a gama
          de minhas habilidades.
        </S.Paragrafo>
        <S.Titulo>Contato</S.Titulo>
        <S.Paragrafo>
          <ul>
            <li>
              <i className="bi bi-envelope"></i>
              <span>E-mail:</span>
              <a href="mailto:joaomarcelo1015ba@gmail.com">
                joaomarcelo1015ba@gmail.com
              </a>
            </li>
            <li>
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/joaomarcelbatista/"
                target="_blank"
                rel="noreferrer"
              >
                João Marcelo Batista
              </a>
            </li>
            <li>
              <i className="bi bi-github"></i>
              <span>Github:</span>
              <a
                href="http://github.com/JayfckZ"
                target="_blank"
                rel="noreferrer"
              >
                JayfckZ
              </a>
            </li>
          </ul>
        </S.Paragrafo>
      </Container>
    </S.ContainerGeral>
  )
}

export default Sobre
