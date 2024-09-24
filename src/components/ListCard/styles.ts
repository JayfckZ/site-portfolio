import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const GridContainer = styled.div`
  padding: 32px 0 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (width <= ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
