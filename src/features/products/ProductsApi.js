export function fetchAllProduct() {
    return new Promise(async (resolve) => {
      const response = await fetch("https://dummyjson.com/products?limit=18");
      const data = await response.json();
      resolve({ data });
    });
  }
  export function fetchProductById(id) {
    return new Promise(async (resolve) => {
      const response = await fetch('https://dummyjson.com/products/' + id);
      const data = await response.json();
      resolve({ data });
    });
  }