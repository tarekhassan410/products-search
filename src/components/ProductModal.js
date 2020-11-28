import { React } from "react";
import { motion } from "framer-motion";
export default function ProductModal({ product }) {
  return (
    <motion.div className="fixed">modal</motion.div>
    // <div className="fixed bg-blue-300 container m-auto shadow-2xl rounded-xl">
    //   <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1 overflow-y-scroll h-full">
    //     <div>
    //       <img className="w-full p-4" src={product.image} />
    //     </div>
    //     <div className="p-4">
    //       <div className="font-bold mb-2">{product.brand}</div>
    //       <div className="mb-2 text-gray-900">{product.category.name}</div>
    //       <div className="mb-2 text-xl leading-relaxed">{product.name}</div>
    //       <div className="mb-2 text-2xl font-bold text-red-600">
    //         {product.price} L.E.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
