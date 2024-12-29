"use client";
import { useEffect, useState } from "react";
//import { useRouter } from "next/navigation";
import { Products } from "@/pages/types";
import ProductCard from "./Card";
import Image from "next/image";

const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [cart, setCart] = useState<Products[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  //const router = useRouter();

  // Fetching products and loading cart from localStorage
  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProduct();

    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []); // Empty dependency array to run only once on component mount

  // Add product to cart
  const addToCart = (product: Products) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Redirect to checkout
  const goToCheckOut = () => {
    setIsCheckOut(true);
  }

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          background: "/images/bg.jpg",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Most Requested Items
          </h1>
          <p className="text-xl text-white">Explore Our New Flavours</p>
        </div>

        {/* product section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* cart section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 transform ease-in-out"
          >
            {showCart ? "Hide Cart" : "View Cart"}({cart.length} items)
          </button>

          {/* Cart details */}
          {showCart && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Your Items Includes:{" "}
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform hover:text-black"
                        />
                        <span className="ml-4 text-lg font-medium text-slate-600">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>
                    <div>
                      <button
                        onClick={goToCheckOut}
                        className="bg-green-600 py-3 px-8 ml-4 rounded-lg text-lg shadow-md hover:bg-green-900 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-3 px-8 ml-4 rounded-lg text-lg shadow-md hover:bg-red-900 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-600">Your Cart Is Empty</p>
              )}
            </div>
          )}
        </div>

        {/**Check out section */}
        {isCheckOut && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                CheckOut
              </h2>
              <p className="text-lg text-red-600">
                Please Confirm Your Order Before Proceeding
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckOut(false)}
                  className="bg-blue-500 text-whitee py-2 px-6 rounded-lg text-lg shadow-md text-white hover:bg-yellow-500 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() =>
                    alert("Order Confirm..! Will Deliver At Your Door Step!")
                  }
                  className="bg-blue-400 text-whitee py-2 px-6 rounded-lg text-lg shadow-md hover:bg-yellow-500 text-white transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
