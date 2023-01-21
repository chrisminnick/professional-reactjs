import axios from 'axios';

async function submitCart(data) {
  return axios
    .post('http://localhost:8080/checkout', {
      data,
    })
    .catch((error) => {
      console.log(error);
    });
}

export default submitCart;
