import React from 'react';
import { Styled } from './styles';
import CTABar from '../CTABar';
import MainDisplay from '../MainDisplay';

const App = () => {
  return (
    <Styled.App>
      <CTABar />
      <MainDisplay />
    </Styled.App>
  );
}

export default App;
