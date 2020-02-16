import styled, { css } from 'styled-components'
import { FC } from 'react'
import { Theme } from '../../styles/theme'

type AboutPageProps = {
  theme: Theme
}

const AboutPage: FC = styled('main')<AboutPageProps>(({ theme }) => css`
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding: 20px;
`);

export const Styled = {
  AboutPage,
}