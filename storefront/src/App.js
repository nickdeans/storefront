import './App.css';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Categories from './components/storefront/Categories.js'
import Header from './components/storefront/Header.js'
import Footer from './components/storefront/Footer';
import Products from './components/storefront/Products';

function App() {
  return (
    <div className="App">
      <Provider store={store()}>
        <Header />
        <Categories />
        <Products />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
