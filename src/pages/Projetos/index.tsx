import { useState } from 'react'
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
  flask,
  docker,
  postgre,
  Container
} from '../../styles/global'

import { Button, FilterContainer } from './styles'

import ListCard from '../../components/ListCard'
// const img = 'https://placehold.it/200x100'
import ruby_v2 from '../../midia/ruby_v2.png'
import coffee_listing from '../../midia/coffee-listing.jpeg'
import python_project from '../../midia/python-project.png'
// import java_project from '../../midia/java-project.png'
// import javascript_project from '../../midia/javascript-project.png'
// import typescript_project from '../../midia/typescript-project.png'
import product_list_cart from '../../midia/product-list-cart.jpeg'
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

const projetos: Projeto[] = [
  {
    capa: ruby_v2,
    titulo: 'Ruby Motorsport V2 [EM DESENVOLVIMENTO]',
    techs: [html, css, javascript, typescript, react, redux, router],
    descricao:
      'Ruby Motorsport V2 foi uma evolução significativa do projeto desenvolvido inicialmente na EBAC, desta vez utilizando React, React Router e integração com uma API. Na nova versão, o foco esteve na modernização do front-end, tornando o site mais dinâmico e eficiente. As funcionalidades incluem um carrossel de imagens com componentes reutilizáveis, animações aprimoradas, navegação fluida entre páginas com o React Router, além de botões interativos que atualizam informações automaticamente. A integração com a API permitiu exibir dados em tempo real, elevando a experiência do usuário.',
    gitLink: 'https://github.com/JayfckZ/RubyMotorsportV2',
    type: 'front'
  },
  {
    capa: coffee_listing,
    titulo: 'Lista de Cafés',
    techs: [html, css, typescript, react],
    descricao:
      'Este é um projeto de listagem de cafés, onde os usuários podem visualizar uma coleção de cafés de diferentes tipos. A interface foi desenvolvida em React e estilizada com styled-components, permitindo uma experiência de navegação fluida e dinâmica. Os dados dos produtos são carregados via fetch a partir de uma API externa, possibilitando a exibição dos cafés disponíveis e filtragem entre todos os produtos e os que estão disponíveis no momento.',
    gitLink: 'https://github.com/JayfckZ/simple-coffee-listing',
    deployLink: 'https://simple-coffee-listing-nine-mocha.vercel.app/',
    type: 'front'
  },
  {
    capa: python_project,
    titulo: 'Previsão do Tempo com Python e API',
    techs: [python, flask],
    descricao:
      'Este projeto é uma aplicação simples, desenvolvida em Python utilizando o framework Flask, que permite aos usuários consultar a previsão do tempo em tempo real para qualquer cidade, consumindo a API da OpenWeather. Com uma interface amigável, o projeto oferece uma experiência agradável e responsiva para os usuários.',
    gitLink: 'https://github.com/JayfckZ/previsao_tempo_python',
    type: 'back'
  },
  {
    capa: python_project,
    titulo: 'Banco em Python',
    techs: [python],
    descricao:
      'Uma aplicação em Python que simula operações bancárias como depósitos, saques e transferências entre usuários. Os dados das contas são armazenados em um arquivo CSV, garantindo que o saldo e as transações sejam mantidos entre as execuções do programa.',
    gitLink: 'https://github.com/JayfckZ/conta_bancaria_python',
    type: 'back'
  },
  {
    capa: taskflow,
    titulo: 'TaskFlow',
    techs: [python, django, html, css, javascript, bootstrap, docker, postgre],
    descricao:
      'Este projeto é uma aplicação de gerenciamento de tarefas para uma startup de projetos, permitindo aos usuários criar, visualizar, editar e excluir tarefas associadas a diferentes projetos. A interface apresenta uma barra lateral com a lista de projetos, onde ao selecionar um projeto, as tarefas são exibidas na área principal com detalhes como título, descrição, status, data de criação e usuário responsável. A aplicação foi desenvolvida utilizando Django no backend, com Bootstrap para o design responsivo, PostgreSQL como banco de dados, e Docker para containerização e fácil deploy.',
    gitLink: 'https://github.com/JayfckZ/taskflow',
    type: 'full'
  },
  {
    capa: quack,
    titulo: 'Quack',
    techs: [python, django, html, css, javascript, bootstrap, docker, postgre],
    descricao:
      'Quack é uma plataforma de microblogging inspirada no Twitter, onde os usuários, chamados Quackers, compartilham atualizações rápidas em Quacks. Desenvolvida com Django, Docker, PostgreSQL e Bootstrap, a aplicação oferece uma experiência de usuário simplificada e personalizada, com uma interface moderna e responsiva.',
    gitLink: 'https://github.com/JayfckZ/quack',
    // deployLink: 'https://quack-production-b68f.up.railway.app/',
    type: 'full'
  },
  {
    capa: eplay,
    titulo: 'EPLAY',
    techs: [html, css, typescript, react, redux, router],
    descricao:
      'EPLAY é um e-commerce virtual de jogos desenvolvido como um projeto pessoal utilizando React, TypeScript, Redux e React Router. O site é responsivo, permitindo que os usuários naveguem por uma ampla coleção de jogos, adicionem ao carrinho e finalizem a compra de forma rápida e segura em qualquer dispositivo. A integração com uma API externa garante um catálogo interessante, oferecendo a melhor experiência para os gamers.',
    gitLink: 'https://github.com/JayfckZ/eplay/tree/parte-4',
    deployLink: 'https://eplay-z.vercel.app/',
    type: 'front'
  },
  {
    capa: efood,
    titulo: 'eFood',
    techs: [html, css, typescript, react, redux, router],
    descricao:
      'eFood é uma plataforma de pedidos online desenvolvida como um projeto pessoal utilizando React, TypeScript, Redux e React Router. Com um design responsivo, o site oferece aos usuários a facilidade de explorar uma variedade de restaurantes e opções culinárias. Eles podem adicionar seus pratos preferidos ao carrinho e concluir a compra de maneira rápida e segura, seja qual for o dispositivo utilizado. A integração com uma API externa garante um menu diversificado e atualizado, proporcionando uma experiência gastronômica excepcional para todos os entusiastas da culinária.',
    gitLink: 'https://github.com/JayfckZ/efood/tree/parte-4',
    deployLink: 'https://efood-web.vercel.app/',
    type: 'front'
  },
  {
    capa: todoreact,
    titulo: 'Lista de Tarefas com React',
    techs: [html, css, typescript, react, redux, router],
    descricao:
      'Um projeto de lista de tarefas responsiva utilizando React, Redux, Styled Components e React Router. As tarefas podem ser adicionadas, removidas, editadas, pesquisadas e filtradas, cada um contendo seus próprios filtros de prioridade e status.',
    gitLink: 'https://github.com/JayfckZ/minhas-tarefas',
    deployLink: 'https://minhas-tarefas-neon.vercel.app/',
    type: 'front'
  },
  {
    capa: todovue,
    titulo: 'Lista de Tarefas com Vue',
    techs: [html, css, javascript, bootstrap, vue],
    descricao:
      'O app foi construindo a partir do VueJS, garantindo organização na hora da estruturação do código, e estilizado com Bootstrap, garantindo uma interface intuitiva, dinâmica e responsiva.',
    gitLink: 'https://github.com/JayfckZ/todo-list',
    deployLink: 'https://to-do-list-ten-woad.vercel.app/',
    type: 'front'
  },
  {
    capa: disney,
    titulo: 'Clone Disney+',
    techs: [html, css, javascript, gulp],
    descricao:
      'Este projeto consiste em uma página inicial inspirada no Disney+, onde os visitantes podem explorar os diferentes planos disponíveis e obter informações sobre como assinar o serviço. Utilizando HTML, CSS, JavaScript e Gulp, desenvolvi uma interface amigável e visualmente atraente, que reflete a magia e a diversão associadas à marca Disney. A página inicial apresenta uma prévia do conteúdo oferecido pelo serviço, juntamente com detalhes sobre os planos de assinatura, permitindo aos usuários tomar decisões informadas sobre o que melhor se adequa às suas necessidades de entretenimento. Além disso, o design responsivo garante uma experiência de navegação perfeita em dispositivos de diferentes tamanhos, proporcionando acessibilidade a um público amplo.',
    gitLink: 'https://github.com/JayfckZ/clone_disneyplus',
    deployLink: 'https://clone-disneyplus-gamma-three.vercel.app/',
    type: 'front'
  },
  {
    capa: product_list_cart,
    titulo: 'Lista de produtos com carrinho',
    techs: [html, css, javascript],
    descricao:
      'Este site foi desenvolvido para gerenciar uma lista de produtos com uma funcionalidade completa de carrinho de compras, utilizando HTML, CSS e JavaScript.',
    gitLink: 'https://github.com/JayfckZ/product-list-with-cart',
    deployLink: 'https://product-list-with-cart-puce.vercel.app',
    type: 'front'
  },
  {
    capa: tech,
    titulo: 'EBAC Tech Talk',
    techs: [html, css, javascript],
    descricao:
      'O projeto consiste em uma landing page para promover o evento fictício "EBAC Tech Talk 2024". Desenvolvida utilizando a ferramenta de empacotamento Parcel, a página apresenta um design moderno e responsivo, com destaque para o uso de gradientes no fundo para adicionar dinamismo visual. Além disso, a página oferece informações detalhadas sobre o evento, como local, agenda e inscrições, proporcionando uma experiência atraente e informativa para os visitantes.',
    gitLink: 'https://github.com/JayfckZ/tech_talk',
    deployLink: 'https://techs-talk-seven.vercel.app/',
    type: 'front'
  },
  {
    capa: sorteador,
    titulo: 'Sorteador de Números',
    techs: [html, css, javascript, grunt],
    descricao:
      'O Sorteador de Números foi desenvolvido como uma aplicação web simples, onde os usuários podem inserir um número máximo desejado para o sorteio. A geração aleatória de números é realizada em JavaScript, enquanto a estilização da interface foi feita com Less. A complexidade do projeto reside na utilização do Grunt, uma ferramenta de automação de tarefas, para compilar e minificar os arquivos Less e JavaScript, visando otimizar o desempenho e a eficiência da aplicação.',
    gitLink: 'https://github.com/JayfckZ/sorteador_grunt',
    deployLink: 'https://sorteador-grunt-sepia.vercel.app/',
    type: 'front'
  },
  {
    capa: japurei,
    titulo: 'Japurei',
    techs: [html, css, bootstrap],
    descricao:
      'Japurei é um projeto WEB feito com Bootstrap. Ao contrário de outros projetos, o CSS foi pouco utilizado, dando mais visibilidade para as estilizações oferecidas pela biblioteca Bootstrap. O site também é responsivo, ou seja, se adequa ao tamanho da tela e dispositivo do usuário.',
    gitLink: 'https://github.com/JayfckZ/JapureiViagens',
    deployLink: 'https://japurei.vercel.app/',
    type: 'front'
  },
  {
    capa: julies,
    titulo: "Julie's Restaurant",
    techs: [html, css, bootstrap],
    descricao:
      "O site Julie's Restaurant foi construído com Bootstrap para garantir responsividade, validação de formulários foi implementada utilizando jQuery Validate, e máscaras de entrada foram aplicadas usando jQuery Mask para melhorar a experiência do usuário.",
    gitLink: 'https://github.com/JayfckZ/JuliesRestaurant',
    deployLink: 'https://juliesrestaurant.vercel.app/',
    type: 'front'
  },
  {
    capa: ruby,
    titulo: 'Ruby Motorsport',
    techs: [html, css, jquery],
    descricao:
      'Ruby Motorsport foi um projeto da EBAC para pôr em prática as funcionalidades do jQuery. Utilizando carrossel de imagens, animações de página, botões interativos que mudam automaticamente a sessão de Contato, menu hambúrguer, máscaras e validação de formulário.',
    gitLink: 'https://github.com/JayfckZ/RubyMotorsport',
    deployLink: 'https://ruby-motorsport.vercel.app/',
    type: 'front'
  },
  {
    capa: calcmedias,
    titulo: 'Calculadora de Médias',
    techs: [html, css, javascript],
    descricao:
      'Um projeto envolvendo HTML, CSS, JavaScript. Aqui foi bastante utilizado o conceito do DOM para manipular tags HTML e adicionar linhas à tabela de notas.',
    gitLink: 'https://github.com/JayfckZ/site-calculadora_de_medias',
    deployLink: 'https://site-calculadora-de-medias.vercel.app/',
    type: 'front'
  },
  {
    capa: gamehub,
    titulo: 'GameHub',
    techs: [html, css],
    descricao:
      'Iniciando nos conceitos de HTML e CSS, o site GameHub foi um aprofundamento nos conceitos aprendidos até então, resultando em um site simples e funcional, com uma estética agradável, moderna e um tema popular.',
    gitLink: 'https://github.com/JayfckZ/site-gamehub',
    deployLink: 'https://site-gamehub.vercel.app/',
    type: 'front'
  }
]

function Projetos() {
  const [filtro, setFiltro] = useState('todos')

  const projetosFiltrados = projetos.filter((projeto) => {
    if (filtro == 'todos') return true
    if (filtro == 'front')
      return projeto.type == 'front' || projeto.type == 'full'
    if (filtro == 'back')
      return projeto.type == 'back' || projeto.type == 'full'
  })

  return (
    <Container>
      <FilterContainer>
        <h2>Filtre os projetos:</h2>
        <Button
          isSelected={filtro == 'todos'}
          onClick={() => setFiltro('todos')}
        >
          Todos
        </Button>
        <Button
          isSelected={filtro == 'front'}
          onClick={() => setFiltro('front')}
        >
          Frontend
        </Button>
        <Button isSelected={filtro == 'back'} onClick={() => setFiltro('back')}>
          Backend
        </Button>
      </FilterContainer>
      <ListCard projetos={projetosFiltrados} />
    </Container>
  )
}

export default Projetos
