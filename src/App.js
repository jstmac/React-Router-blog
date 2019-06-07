import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import NoMatch from './Components/NoMatch';
import { Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
