import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Cart from './containers/Cart';
import BookDelete from './containers/BookDelete';
import AddBook from './containers/AddBook';
import DetailBook from './containers/DetailBook';
import Category from './containers/Category';

function App() {
  return <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/BookDelete" component={BookDelete} />
        <Route path="/AddBook" component={AddBook} />
        <Route path="/DetailBook/:id" component={DetailBook} />
        <Route path="/Category/:id" component={Category} />
      </Switch>
      <Footer />
    </BrowserRouter>



  </div>;
}

export default App;
