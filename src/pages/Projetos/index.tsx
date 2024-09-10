import {
  html,
  css,
  javascript,
  typescript,
  bootstrap,
  gulp,
  grunt,
  // cypress,
  jquery,
  react,
  redux,
  router,
  vue,
  python,
  django,
  docker,
  postgre
} from '../../styles/global'

import ListCard from '../../components/ListCard'
// const img = 'https://placehold.it/200x100'
import taskflow from '../../midia/taskflow.jpeg'
import quack from '../../midia/quack.jpeg'
import eplay from '../../midia/eplay.png'
import efood from '../../midia/efood.png'
import todoreact from '../../midia/to-do-react.png'
import todovue from '../../midia/to-do-vue.png'
import disney from '../../midia/disney.png'
import tech from '../../midia/tech-talk.png'
import sorteador from '../../midia/sorteador.png'
import japurei from '../../midia/japurei.png'
import julies from '../../midia/julies.png'
import ruby from '../../midia/ruby.png'
import calcmedias from '../../midia/calcmedias.png'
import gamehub from '../../midia/gamehub.png'

const projetos = [
  {
    capa: taskflow,
    titulo: 'TaskFlow',
    techs: [python, django, html, css, javascript, bootstrap, docker, postgre],
    descricao:
      'Este projeto é uma aplicação de gerenciamento de tarefas para uma startup de projetos, permitindo aos usuários criar, visualizar, editar e excluir tarefas associadas a diferentes projetos. A interface apresenta uma barra lateral com a lista de projetos, onde ao selecionar um projeto, as tarefas são exibidas na área principal com detalhes como título, descrição, status, data de criação e usuário responsável. A aplicação foi desenvolvida utilizando Django no backend, com Bootstrap para o design responsivo, PostgreSQL como banco de dados, e Docker para containerização e fácil deploy.',
    gitLink: 'https://github.com/JayfckZ/taskflow',
    deployLink: ''
  },
  {
    capa: quack,
    titulo: 'Quack',
    techs: [python, django, html, css, javascript, bootstrap, docker, postgre],
    descricao:
      'Quack é uma plataforma de microblogging inspirada no Twitter, onde os usuários, chamados Quackers, compartilham atualizações rápidas em Quacks. Desenvolvida com Django, Docker, PostgreSQL e Bootstrap, a aplicação oferece uma experiência de usuário simplificada e personalizada, com uma interface moderna e responsiva.',
    gitLink: 'https://github.com/JayfckZ/quack',
    deployLink: '' //https://quack-production-b68f.up.railway.app/'
  },
  {
    capa: eplay,
    titulo: 'EPLAY',
    techs: [html, css, typescript, react, redux, router],
    descricao:
      'EPLAY é um e-commerce virtual de jogos desenvolvido como um projeto pessoal utilizando React, TypeScript, Redux e React Router. O site é responsivo, permitindo que os usuários naveguem por uma ampla coleção de jogos, adicionem ao carrinho e finalizem a compra de forma rápida e segura em qualquer dispositivo. A integração com uma API externa garante um catálogo interessante, oferecendo a melhor experiência para os gamers.',
    gitLink: 'https://github.com/JayfckZ/eplay/tree/parte-4',
    deployLink: 'https://eplay-z.vercel.app/'
  },
  {
    capa: efood,
    titulo: 'eFood',
    techs: [html, css, typescript, react, redux, router],
    descricao:
      'eFood é uma plataforma de pedidos online desenvolvida como um projeto pessoal utilizando React, TypeScript, Redux e React Router. Com um design responsivo, o site oferece aos usuários a facilidade de explorar uma variedade de restaurantes e opções culinárias. Eles podem adicionar seus pratos preferidos ao carrinho e concluir a compra de maneira rápida e segura, seja qual for o dispositivo utilizado. A integração com uma API externa garante um menu diversificado e atualizado, proporcionando uma experiência gastronômica excepcional para todos os entusiastas da culinária.',
    gitLink: 'https://github.com/JayfckZ/efood/tree/parte-4',
    deployLink: 'https://efood-web.vercel.app/'
  },
  {
    capa: todoreact,
    titulo: 'Lista de Tarefas com React',
    techs: [html, css, typescript, react, redux, router],
    descricao:
      'Um projeto de lista de tarefas responsiva utilizando React, Redux, Styled Components e React Router. As tarefas podem ser adicionadas, removidas, editadas, pesquisadas e filtradas, cada um contendo seus próprios filtros de prioridade e status.',
    gitLink: 'https://github.com/JayfckZ/minhas-tarefas',
    deployLink: 'https://minhas-tarefas-neon.vercel.app/'
  },
  {
    capa: todovue,
    titulo: 'Lista de Tarefas com Vue',
    techs: [html, css, javascript, bootstrap, vue],
    descricao:
      'O app foi construindo a partir do VueJS, garantindo organização na hora da estruturação do código, e estilizado com Bootstrap, garantindo uma interface intuitiva, dinâmica e responsiva.',
    gitLink: 'https://github.com/JayfckZ/todo-list',
    deployLink: 'https://to-do-list-ten-woad.vercel.app/'
  },
  {
    capa: disney,
    titulo: 'Clone Disney+',
    techs: [html, css, javascript, gulp],
    descricao:
      'Este projeto consiste em uma página inicial inspirada no Disney+, onde os visitantes podem explorar os diferentes planos disponíveis e obter informações sobre como assinar o serviço. Utilizando HTML, CSS, JavaScript e Gulp, desenvolvi uma interface amigável e visualmente atraente, que reflete a magia e a diversão associadas à marca Disney. A página inicial apresenta uma prévia do conteúdo oferecido pelo serviço, juntamente com detalhes sobre os planos de assinatura, permitindo aos usuários tomar decisões informadas sobre o que melhor se adequa às suas necessidades de entretenimento. Além disso, o design responsivo garante uma experiência de navegação perfeita em dispositivos de diferentes tamanhos, proporcionando acessibilidade a um público amplo.',
    gitLink: 'https://github.com/JayfckZ/clone_disneyplus',
    deployLink: 'https://clone-disneyplus-gamma-three.vercel.app/'
  },
  {
    capa: tech,
    titulo: 'EBAC Tech Talk',
    techs: [html, css, javascript],
    descricao:
      'O projeto consiste em uma landing page para promover o evento fictício "EBAC Tech Talk 2024". Desenvolvida utilizando a ferramenta de empacotamento Parcel, a página apresenta um design moderno e responsivo, com destaque para o uso de gradientes no fundo para adicionar dinamismo visual. Além disso, a página oferece informações detalhadas sobre o evento, como local, agenda e inscrições, proporcionando uma experiência atraente e informativa para os visitantes.',
    gitLink: 'https://github.com/JayfckZ/tech_talk',
    deployLink: 'https://techs-talk-seven.vercel.app/'
  },
  {
    capa: sorteador,
    titulo: 'Sorteador de Números',
    techs: [html, css, javascript, grunt],
    descricao:
      'O Sorteador de Números foi desenvolvido como uma aplicação web simples, onde os usuários podem inserir um número máximo desejado para o sorteio. A geração aleatória de números é realizada em JavaScript, enquanto a estilização da interface foi feita com Less. A complexidade do projeto reside na utilização do Grunt, uma ferramenta de automação de tarefas, para compilar e minificar os arquivos Less e JavaScript, visando otimizar o desempenho e a eficiência da aplicação.',
    gitLink: 'https://github.com/JayfckZ/sorteador_grunt',
    deployLink: 'https://sorteador-grunt-sepia.vercel.app/'
  },
  {
    capa: japurei,
    titulo: 'Japurei',
    techs: [html, css, bootstrap],
    descricao:
      'Japurei é um projeto WEB feito com Bootstrap. Ao contrário de outros projetos, o CSS foi pouco utilizado, dando mais visibilidade para as estilizações oferecidas pela biblioteca Bootstrap. O site também é responsivo, ou seja, se adequa ao tamanho da tela e dispositivo do usuário.',
    gitLink: 'https://github.com/JayfckZ/JapureiViagens',
    deployLink: 'https://japurei.vercel.app/'
  },
  {
    capa: julies,
    titulo: "Julie's Restaurant",
    techs: [html, css, bootstrap],
    descricao:
      "O site Julie's Restaurant foi construído com Bootstrap para garantir responsividade, validação de formulários foi implementada utilizando jQuery Validate, e máscaras de entrada foram aplicadas usando jQuery Mask para melhorar a experiência do usuário.",
    gitLink: 'https://github.com/JayfckZ/JuliesRestaurant',
    deployLink: 'https://juliesrestaurant.vercel.app/'
  },
  {
    capa: ruby,
    titulo: 'Ruby Motorsports',
    techs: [html, css, jquery],
    descricao:
      'Ruby Motorsport foi um projeto da EBAC para pôr em prática as funcionalidades do jQuery. Utilizando carrossel de imagens, animações de página, botões interativos que mudam automaticamente a sessão de Contato, menu hambúrguer, máscaras e validação de formulário.',
    gitLink: 'https://github.com/JayfckZ/RubyMotorsport',
    deployLink: 'https://ruby-motorsport.vercel.app/'
  },
  {
    capa: calcmedias,
    titulo: 'Calculadora de Médias',
    techs: [html, css, javascript],
    descricao:
      'Um projeto envolvendo HTML, CSS, JavaScript. Aqui foi bastante utilizado o conceito do DOM para manipular tags HTML e adicionar linhas à tabela de notas.',
    gitLink: 'https://github.com/JayfckZ/site-calculadora_de_medias',
    deployLink: 'https://site-calculadora-de-medias.vercel.app/'
  },
  {
    capa: gamehub,
    titulo: 'GameHub',
    techs: [html, css],
    descricao:
      'Iniciando nos conceitos de HTML e CSS, o site GameHub foi um aprofundamento nos conceitos aprendidos até então, resultando em um site simples e funcional, com uma estética agradável, moderna e um tema popular.',
    gitLink: 'https://github.com/JayfckZ/site-gamehub',
    deployLink: 'https://site-gamehub.vercel.app/'
  }
]

function Projetos() {
  return <ListCard projetos={projetos} />
}

export default Projetos
