import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Styled } from './styles';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';

const App = () => {
  
  return (
    <Styled.App>
     <Header />
     <MenuBar />
     <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={HomePage} />
      <Route path="/blog" component={HomePage} />
      <Route path="/events" component={HomePage} />
     </Switch>
     <Footer />
    </Styled.App>
  );
}

export default App;
