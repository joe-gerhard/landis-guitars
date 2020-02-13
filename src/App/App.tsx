import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Styled } from './styles';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import EventsPage from '../pages/EventsPage';

const App = () => {
  
  return (
    <Styled.App>
     <Header />
     <MenuBar />
     <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/" component={HomePage} />
     </Switch>
     <Footer />
    </Styled.App>
  );
}

export default App;
