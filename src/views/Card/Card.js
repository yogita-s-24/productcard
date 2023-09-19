import React from "react";
import { useState } from "react";
import ProductCard from "./../../views/ProductCard/ProductCard";
import './Card.css'

export default function Card() {
  const [product, setProduct] = useState([
    {
      name: "Mango",
      price: 150,
      emoji: "🍊",
      bgColor: "#F99107",
    },
    {
      name: "Apple",
      price: 250,
      emoji: "🍎",
      bgColor: "#F43107",
    },
    {
      name: "Banana",
      price: 299,
      emoji: "🍌",
      bgColor: "#FDC207",
    },
    {
      name: "Graphs",
      price: 399,
      emoji: "🍇",
      bgColor: "#FD6688",
    },
  ]);
  return (
    <div className="container">
      <div className="flex-box">
        {product.map((productInfo) => {
          const { name, emoji, price, bgColor } = productInfo;

          return (
            <ProductCard
              name={name}
              emoji={emoji}
              price={price}
              bgColor={bgColor}
            />
          );
        })}
      </div>
    </div>
  );
}
