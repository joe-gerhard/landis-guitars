import React from 'react'
import { Styled } from './styles';

const CTABar: React.FC = () => {
  return (
    <Styled.CTABar>
      <h1>Questions?</h1>
      <Styled.Input type="text" placeholder="First name"/>
      <Styled.Input type="text" placeholder="Last name"/>
      <Styled.Input type="text" placeholder="Phone number"/>
      <Styled.TextArea></Styled.TextArea>
      <div>
       <input type="checkbox"/>
       Newsletter Sign Up
      </div>
    </Styled.CTABar>
  )
} 

export default CTABar;
