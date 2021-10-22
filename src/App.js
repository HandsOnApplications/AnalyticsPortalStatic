import React, { Component, lazy, Suspense } from 'react';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { HeaderBar, NavBar, NotFound } from './components';
import About from './About';
import TileReports from './components/TileReports';

const Products = withRouter(
  lazy(() => import(/* webpackChunkName: "products" */ './products/Products'))
);

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <div className="section columns">
          <NavBar />
          <main className="column contentColumn">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect from="/" exact to="/tileReports" />
                <Route path="/tileReports" component={TileReports} />
                <Route path="/products" component={Products} />
                <Route path="/about" component={About} />
                <Route exact path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
