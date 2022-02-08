import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const count = useSelector((state) => state.basket.items);
  return (
    <header>
      <div className="flex items-center p-1 flex-grow py-2 bg-amazon_blue">
        <div
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
          
        </div>
        <div className="bg-yellow-500 hover:bg-yellow-600 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input
            type="text"
            className="p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none "
          />
          <SearchIcon className="p-4 h-12" />
        </div>
        <div className="text-white flex items-center text-xs mx-6 space-x-6 whitespace-nowrap">
          <div className="link" onClick={!session ? signIn : signOut}>
            {session ? `Hello,${session.user.name}` : <p>Hello, Sign in</p>}
            <p className="font-extrabold md:text-sm">
              {session ? "Sign Out" : "Account & Lists"}
            </p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">&Orders</p>
          </div>
          <div
            className="link relative flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute bg-yellow-400 rounded-full top-0 right-0 h-4 w-4 md:right-5 text-center text-bold text-black">
              {count.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-3">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-3 p-2 pl-6 bg-amazon_blue-light text-xs items-center text-white">
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Today's Deals</p>
        <p className="link">Customer Service</p>
        <p className="link">Registry</p>
        <p className="link hidden lg:inline-flex">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Sell</p>
      </div>
    </header>
  );
}
