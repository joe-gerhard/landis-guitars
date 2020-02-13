import styled, { css } from 'styled-components'
import { FC } from 'react'
import { Theme } from '../../styles/theme'

type EventsPageProps = {
  theme: Theme
}

const EventsPage: FC = styled('main')<EventsPageProps>(({ theme }) => css`
  
`);

export const Styled = {
  EventsPage,
}