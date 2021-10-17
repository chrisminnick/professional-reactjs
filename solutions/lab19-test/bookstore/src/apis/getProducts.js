import axios from 'axios';

async function getProducts(host) {
    const products = await axios.get(`${host}/data/products.json`);
    return products;
}

export default getProducts; 