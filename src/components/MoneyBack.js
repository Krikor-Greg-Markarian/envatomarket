import React from "react";
import cn from "classnames";
import { FaWallet } from "react-icons/fa";

function MoneyBack(props) {
  return (
    <div
      className={cn(
        "bg-gray-200 flex justify-center items-center w-3/12 p-1 text-blue-900 font-bold"
      )}
    >
      <div className={cn("flex")}>
        <div className={cn("flex-shrink")}>
          <FaWallet className={cn("inline")} />
        </div>
        <div className={cn("flex-shrink inline pl-1")}>
          <p
            className={cn(
              "text-blue-900 hover:text-yellow-500   cursor-pointer transition duration-500 ease-in-out"
            )}
          >
            100% Money back
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoneyBack;
