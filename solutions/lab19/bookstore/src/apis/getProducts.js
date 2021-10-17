import axios from 'axios';

async function getProducts() {
    const products = await axios.get('http://localhost:3000/data/products.json');
    return products;
}

export default getProducts; 