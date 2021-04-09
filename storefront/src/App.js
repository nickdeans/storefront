import './App.css';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Categories from './components/storefront/Categories.js'
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer';
import Products from './components/storefront/Products';
import SimpleCart from './components/cart/SimpleCart.js';
import Cart from './components/cart/Shopping-cart.js'

function App() {
  return (
    <div className="App">
      <Provider store={store()}>
        <Header />
        <SimpleCart />
        <Cart />
        <Categories />
        <Products />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
