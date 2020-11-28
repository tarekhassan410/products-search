import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/tarekhassan410/products-json/products/${id}`
    )
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, []);

  return (
    <div className="px-4 mt-10">
      <Link
        className="shadow-lg bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 py-2 px-4 rounded-md text-dark text-lg"
        to="/"
      >
        <svg
          className="w-6 h-6 inline mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        <span className="text-lg">Back</span>
      </Link>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-4">
        <div className="">
          {" "}
          <img className="rounded-xl shadow-lg" src={product.image} />{" "}
        </div>
        <div className="pt-4 md:px-4">
          <div className="font-bold text-sm text-orange-700">
            {" "}
            {product.brand}{" "}
          </div>
          <div className="font-bold text-lg my-2"> {product.name} </div>
          <div className="font-bold text-sm text-orange-700 my-2">
            {" "}
            {product.price} $
          </div>
          {/* <button className="bg-orange-500 w-full py-2 font-bold rounded-md shadow-lg">
            {" "}
            Add to cart{" "}
            <svg
              className="w-6 h-6 inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
}
