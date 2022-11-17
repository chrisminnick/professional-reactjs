export async function fetchProducts() {
  const response = await fetch('http://localhost:3000/data/products.json');
  return response;
}
