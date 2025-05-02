import "../Tailwind.css";
import { ProductCard } from "../components/Productcard.jsx";
export function ProductPagina({ cart, setCart }) {
  const citybike = {
    title: "Citybike",
    desc: "bike suitable for hardened routes and short trips",
    price: "€100",
  };
  const cargobike = {
    title: "Cargobike",
    desc: "bike suitable for vacations and long trips",
    price: "€240",
  };
  const kidsbike = {
    title: "Kidsbike",
    desc: "bike suitable for childern up to 1.65 meters",
    price: "€60",
  };
  const mountainbike = {
    title: "Mountainbike",
    desc: "bike suitable for offroad",
    price: "€130,50",
  };
  const products = [citybike, cargobike, mountainbike, kidsbike];
  return (
    <div className="flex flex-col items-center content-center">
      <br />
      <h1 className=" text-6xl text-gray-800"> Products Page</h1>

      {products.map((product, index) => {
        return (
          <ProductCard
            product={product}
            cart={cart}
            setCart={setCart}
            key={index}
          />
        );
      })}
    </div>
  );
}
