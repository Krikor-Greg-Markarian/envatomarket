import React from "react";
import cn from "classnames";
import Link from "next/link";

function Products(props) {
  return (
    <div className={cn("container mx-auto")}>
      <div className={cn("grid grid-cols-6")}>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold")}>Wound Care</p>
          <li
            className={cn(
              "text-blue-800 list-none pt-3 transition duration-500 ease-in-out hover:text-yellow-600 hover:underline"
            )}
          >
            <Link href="">
              <a href="">Bandages</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Gypsum Foundations</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Patches and tapes</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Stomatology</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Surgical sutures</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Uniforms</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Wound healing</a>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Products;
