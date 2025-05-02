export function ProductCard({ product, cart, setCart }) {
  function handleClick() {
    setCart([...cart, product]);
  }
  return (
    <>
      <h3 className="text-3xl font-bold"> {product.title}</h3>
      <p>{product.desc}</p>
      <button className="mb-5 mt-3">{product.price}</button>
      <button onClick={() => handleClick()}>
        {cart.find((item) => item.title == product.title)
          ? "Added to cart"
          : "Add to cart"}
      </button>
      <br />
    </>
  );
}
