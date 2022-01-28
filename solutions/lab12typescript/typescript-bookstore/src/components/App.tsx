import {useState,useEffect} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import './App.css';

type Book = {
  id:string,
  title:string,
  author:string,
  published?:string,
  country?:string,
  lang?:string,
  pages?:string,
  image?:string,
  url?:string
}

function App() {
  const [itemsInCart, setItemsInCart] = useState(():any =>[]);
  const [products, setProducts] = useState<Array<Book>>([{id:"0",title:"none",author:"none"}]);
  const [isLoading, setIsLoading] = useState(false);  

  useEffect(() => {
    async function fetchData() {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/data/products.json');
            const json = await response.json();
            setProducts(json);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
  }, [setProducts]);

  useEffect(() => {
    shuffleArray(products);
  }
  , [products]);

  function shuffleArray(array:Book[]) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  function addToCart(id:string) {
    let newItems:string[] = [...itemsInCart, id];
    setItemsInCart(newItems)
  }

  function removeFromCart(idToRemove:string) {
    let newItems:string[] = itemsInCart.filter(
      (          id: string) => id !== idToRemove);
    setItemsInCart(newItems);
  }  

  return (
    <div className="container">
      <Header />
      {(isLoading)?"Loading":""}
      <Main products = {products}
            itemsInCart = {itemsInCart} 
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            />
      <Footer />
    </div>
  );
  }

export default App;