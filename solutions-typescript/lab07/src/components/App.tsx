import Footer from './Footer';
import Header from './Header';
import Main from './MainContainer';
import productsData from '../data/products';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Main products={productsData} />
      <Footer />
    </div>
  );
}

export default App;
