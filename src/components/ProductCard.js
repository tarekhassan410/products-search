import { React } from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <div
      key={product.id}
      className="bg-white rounded-xl shadow-xl cursor-pointer hover:shadow-2xl"
    >
      <div className="text-center">
        <img
          src={product.image}
          className="h-64 object-contain rounded-lg p-2"
          alt={product.name}
        />
      </div>
      <div className="">
        <div className="py-3 px-3">
          <span className="font-bold text-gray-800 text-base">
            {product.name.length > 10
              ? product.name.substring(0, 80) + "..."
              : product.name}
          </span>
          <div className=" text-orange-600 font-bold">{product.price} L.E.</div>
          <div className="text-gray-800 font-bold text-sm">{product.brand}</div>
          <div className="text-sm text-gray-600 font-light">
            {product.category.name}
          </div>
        </div>
      </div>
    </div>
  );
}
