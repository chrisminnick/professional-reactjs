import axios from 'axios';

async function getProducts() {
    const products = await axios.get('http://localhost:5000/books/products.json');
    return products;
}

export default getProducts; 