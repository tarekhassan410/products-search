import { React } from "react";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 pb-20 mt-5">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}{" "}
    </section>
  );
}
