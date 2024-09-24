import Card from '../Card'
import { GridContainer } from './styles'

type Props = {
  projetos: Projeto[]
}

const ListCard = ({ projetos }: Props) => {
  return (
    <GridContainer>
      {projetos.map((projeto) => (
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
  )
}

export default ListCard
