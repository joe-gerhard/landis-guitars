import React from 'react'
import { Styled } from './styles';

type CardProps = {
  children: any;
}

const Card : React.FC<CardProps> = ({ children }) => {
  return (
    <Styled.Card>
      {children}
    </Styled.Card>
  )
}

export default Card;
