import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductGrid} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;