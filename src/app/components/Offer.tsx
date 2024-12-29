"use client";
import React from "react";
type Offer = {
  title: string;
  description: string;
};

const specialOffer: React.FC = () => {
  const offer: Offer[] = [
    {
      title: "Happy Hour",
      description: "Order Around 7am To 10am And Get 30% Discount On Toppings",
    },
    {
      title: "Birthday Deals",
      description: "Speacial Deals And Discounts For Birthday And Events",
    },
    {
      title: "Exciting Flavours",
      description: "New flavours of Shakes, Icecreams And Cakes",
    },
  ];

  const handleOffer = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb=6 text-white">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offer.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOffer(offer.description)}
              className="bg-white shadow-lg rounded-lg text-center hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-red-600">
                {offer.title}
              </h3>
              <p className="text-gray-700 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default specialOffer;
