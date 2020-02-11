import React from 'react'
import { Styled } from './styles'

type ErrorProps = {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <Styled.Error showError={error}>
      {error}
    </Styled.Error>
  )
}

export default Error
