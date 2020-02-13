import styled, { css } from 'styled-components'
import { FC } from 'react'
import { Theme } from '../../styles/theme'

type AboutPageProps = {
  theme: Theme
}

const AboutPage: FC = styled('main')<AboutPageProps>(({ theme }) => css`
  
`);

export const Styled = {
  AboutPage,
}