import React from "react";
import cn from "classnames";
import Button from "./Button";

function LatestProducts(props) {
  return (
    <div className={cn("border-2 bg-white p-4")}>
      <div
        style={{
          width: "270px",
          height: "280px",
          backgroundImage: `url(${props.imageUrl})`,
        }}
      >
        {props.isSale ? (
          <Button
            className={cn(
              "bg-yellow-600 text-white text-center rounded-full text-sm px-2"
            )}
            buttonName={props.sale}
          />
        ) : null}

        {props.isHot ? (
          <Button
            className={cn(
              "bg-red-700 text-white text-center rounded-full text-sm px-2"
            )}
            buttonName={props.hot}
          />
        ) : null}
      </div>
      <p className={cn("text-blue-900 pt-2")}>{props.title}</p>

      {props.isNewPrice ? (
        <p className={cn("inline font-bold text-blue-900 text-xl")}>
          {props.newPrice}
        </p>
      ) : null}

      {props.isOldPrice ? (
        <p className={cn("inline line-through text-gray-500 text-lg pl-2 ")}>
          {props.oldPrice}
        </p>
      ) : null}
      {/* <RatingCompo /> */}
    </div>
  );
}

export default LatestProducts;
