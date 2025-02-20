import axios from 'axios';

function submitCart(data) {
  return axios
    .post('http://localhost:8080/checkout', {
      data,
    })
    .catch((error) => {
      console.log(error);
    });
}

export default submitCart;
