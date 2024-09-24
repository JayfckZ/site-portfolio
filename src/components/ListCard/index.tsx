import { useState } from 'react'

import { Container } from '../../styles/global'
import Card from '../Card'
import { GridContainer } from './styles'

type Props = {
  projetos: Projeto[]
}

const ListCard = ({ projetos }: Props) => {
  const [filtro, setFiltro] = useState('todos')

  const projetosFiltrados = projetos.filter((project) => {
    if (filtro == 'todos') return true
    if (filtro == 'back')
      return project.type == 'back' || project.type == 'full'
    if (filtro == 'front')
      return project.type == 'front' || project.type == 'full'
  })

  return (
    <Container>
      <GridContainer>
        {projetosFiltrados.map((projeto) => (
          <Card
            key={projeto.titulo}
            capa={projeto.capa}
            titulo={projeto.titulo}
            techs={projeto.techs}
            descricao={projeto.descricao}
            gitLink={projeto.gitLink}
            deployLink={projeto.deployLink}
          />
        ))}
      </GridContainer>
    </Container>
  )
}

export default ListCard
