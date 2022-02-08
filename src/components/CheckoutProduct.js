import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

export default function CheckoutProduct({
  id,
  title,
  ratings,
  price,
  description,
  category,
  image,
  prime,
}) {
    const dispatch = useDispatch()
  return (
    <div className="grid grid-cols-5">
      <Image src={image} objectFit="contain" height={200} width={200} />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="text-yellow-500 h-5" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <Currency quantity={price} currency="USD" />
        {prime && (
          <div className="flex items-center space-x-2 ">
            <img
              src="https://links.papareact.com/fdw"
              className="w-12"
              alt="Prime"
            />
            <p className="text-xs text-gray-500">Free next day delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={() => dispatch(removeFromBasket({id}))}>Remove from Cart</button>
      </div>
    </div>
  );
}
