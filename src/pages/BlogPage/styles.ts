import styled, { css } from 'styled-components'
import { FC } from 'react'
import { Theme } from '../../styles/theme'

type BlogPageProps = {
  theme: Theme
}

const BlogPage: FC = styled('main')<BlogPageProps>(({ theme }) => css`
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding: 20px;
`);

export const Styled = {
  BlogPage,
}