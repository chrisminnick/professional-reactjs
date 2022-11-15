import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import productsData from '../data/products';

function App(props) {
  return (
    <div className="container">
      <Header />
      <Main products={productsData} />
      <Footer />
    </div>
  );
}

export default App;
