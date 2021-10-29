import React from "react";
import cn from "classnames";

function BestDeals(props) {
  return (
    <div className={cn("border-r-2 w-7/12 p-5")}>
      <div className={cn("products relative")}>
        <div className={cn("absolute left-1")}>
          <div className={cn("bg-blue-900 rounded-full w-14 h-14")}>
            <div className={cn("flex justify-center item-center pt-4")}>
              <p className={cn(" text-white font-bold")}>{props.discount}</p>
            </div>
          </div>
        </div>
      </div>
      <p className={"text-blue-900"}>{props.title}</p>
      <div className={cn("pt-2 pb-2")}>
        <p className={cn("inline text-yellow-600 font-bold")}>
          {props.newPrice}
        </p>
        <p className={cn("inline line-through pl-1 text-gray-500")}>
          {props.oldPrice}
        </p>
      </div>
      <hr className={cn("w-1/12 pt-2")}></hr>
      <div className={cn("flex")}>
        <div className={cn("flex-shrink")}>
          <p className={cn("text-blue-900")}>{props.pcsAvailable}</p>
        </div>
        <div className={cn("flex-shrink")}>
          <p className={cn("text-2xl font-bold pt-2 pr-20")}>{props.number}</p>
        </div>
      </div>
    </div>
  );
}

export default BestDeals;
