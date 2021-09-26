import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to React Bookstore</h1>
        <p>
          We have several books. Feel free to browse for as long as you like. Click on a cover image to see details, or click the Add to Cart button to add a book to your shopping cart.
        </p>
        
      </header>
      <Footer />
    </div>
  );
}

export default App;
