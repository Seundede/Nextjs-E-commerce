import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product({
    id,
    title,
    price,
    description,
    category,
    image
  }) {
  const dispatch = useDispatch();
  const MIN_RATING = 1;
  const MAX_RATING = 5;
  const [ratings] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [prime] = useState(Math.random() < 0.5);

  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    ratings,
    prime,
  };

  return (
    <div className="bg-white flex flex-col m-5 z-30 p-10 relative" key={id}>
      <p className="top-2 absolute right-2 text-xs text-gray-400 italic">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(ratings)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {prime && (
        <div className="flex items-center space-x-2 -mt-5 my-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/1200px-Amazon_Prime_Logo.svg.png"
            className="w-12"
            alt="Prime"
          />
          <p className="text-xs text-gray-500">Free next day delivery</p>
        </div>
      )}
      <button
        className="mt-auto button"
        onClick={() => dispatch(addToBasket(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
