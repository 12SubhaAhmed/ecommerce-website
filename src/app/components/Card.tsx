import React from "react";
import Image from "next/image";

interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps extends Products {
  onAddToCart: (product: Products) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-110"
        height={300}
        width={300}
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-slate-600 mb-4">${price}</p>
      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        aria-label={`Add ${name} to cart`}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;

