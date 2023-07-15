export const handleCart = (product, amount) => {
  console.log(product);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const isProductExist = cart.find((item) => item.id === product.id);
  if (isProductExist) {
    const updateCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + amount || item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
  } else {
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...product, quantity: amount || 1 }])
    );
  }
  alert("Product added to cart");
};
