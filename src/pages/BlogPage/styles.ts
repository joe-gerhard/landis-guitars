import styled, { css } from 'styled-components'
import { FC } from 'react'
import { Theme } from '../../styles/theme'

type BlogPageProps = {
  theme: Theme
}

const BlogPage: FC = styled('main')<BlogPageProps>(({ theme }) => css`
  
`);

export const Styled = {
  BlogPage,
}