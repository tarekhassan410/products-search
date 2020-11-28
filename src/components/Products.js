import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 pb-20 mt-5">
      {products.map((product) => (
        <div>
          <Link to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </div>
      ))}{" "}
    </section>
  );
}
