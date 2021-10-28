import React from "react";
import cn from "classnames";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Button from "./Button";

function BlackNavbar(props) {
  return (
    <div className={cn("bg-black p-3")}>
      <div className={cn("grid grid-cols-2")}>
        <div className={cn("col-span-1")}>
          <div className={cn("flex")}>
            <div className={cn("flex-shrink")}>
              <FaCanadianMapleLeaf
                className={cn("text-green-600 inline text-2xl")}
              />
              <p className={cn("font-bold text-white inline text-2xl")}>
                envato
              </p>
              <p className={cn("inline text-green-600 text-2xl")}>market</p>
            </div>
          </div>
        </div>
        <p className={cn("flex justify-end")}>
          <Button
            className={cn(
              "text-white bg-green-500 text-center hover:bg-green-600 px-3 py-1 rounded"
            )}
            buttonName={"Buy now"}
          />
        </p>
      </div>
    </div>
  );
}

export default BlackNavbar;
