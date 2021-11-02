import React from "react";
import { FaWallet, FaDribbble, FaFirstOrder } from "react-icons/fa";
import cn from "classnames";

function MoneyBack(props) {
  return (
    <div className={cn("bg-gray-200 px-28 py-2 border-r-2 border-gray-300")}>
      {props.isWallet ? (
        <div>
          <FaWallet className={cn("text-blue-900 inline")} />
          <p
            className={cn(
              "text-blue-900 pl-2 inline font-bold hover:text-yellow-500 cursor-pointer transition duration-500 ease-in-out"
            )}
          >
            {props.title}
          </p>
        </div>
      ) : null}

      {props.isPackage ? (
        <div>
          <FaDribbble className={cn("text-blue-900 inline")} />
          <p
            className={cn(
              "text-blue-900 pl-2 inline font-bold hover:text-yellow-500 cursor-pointer transition duration-500 ease-in-out"
            )}
          >
            {props.title}
          </p>
        </div>
      ) : null}
      {props.isDelivery ? (
        <div>
          <FaFirstOrder className={cn("text-blue-900 inline")} />
          <p
            className={cn(
              "text-blue-900 pl-2 inline font-bold hover:text-yellow-500 cursor-pointer transition duration-500 ease-in-out"
            )}
          >
            {props.title}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default MoneyBack;
