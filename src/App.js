import React from 'react';
import { Container } from 'reactstrap';
import {
  HashRouter as BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux'
import reduxStore from './redux';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import Posts from './pages/Posts';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Menu from './components/Menu'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        <Menu />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/tasks" component={Tasks} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
