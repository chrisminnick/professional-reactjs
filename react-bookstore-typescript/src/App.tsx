import Footer from './Footer';
import Header from './Header';
import MainContainer from './MainContainer';
import './App.css';
import { products } from './data/products.ts';

function App() {
  return (
    <div className="container">
      <Header />
      <MainContainer products={products} />
      <Footer />
    </div>
  );
}

export default App;
