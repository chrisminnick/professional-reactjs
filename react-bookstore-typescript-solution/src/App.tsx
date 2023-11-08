import Footer from './Footer.tsx';
import Header from './Header.tsx';
import MainContainer from './MainContainer.tsx';
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
