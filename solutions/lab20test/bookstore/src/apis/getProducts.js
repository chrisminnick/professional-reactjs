import axios from 'axios';

const {
    REACT_APP_CONTENT_HOST: contentHost,
  } = process.env;
  
async function getProducts() {
    const products = await axios.get(`${contentHost}/data/products.json`);
    return products;
}

export default getProducts; 