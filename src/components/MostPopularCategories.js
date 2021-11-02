import React from "react";
import cn from "classnames";
import Button from "./Button";

function MostPopularCategories(props) {
  return (
    <div className={cn("bg-gray-200 p-5")}>
      <p className={cn("text-blue-900 text-xl font-bold pt-3")}>
        {props.title}
      </p>
      <div className={cn("pt-3")}>
        <Button
          className={cn(
            "bg-white text-center font-bold rounded-full text-blue-900 px-4 py-1"
          )}
          buttonName={props.moreButton}
        />
        <img className={cn("w-60 h-60")} src={props.imageUrl} alt="" />
      </div>
    </div>
  );
}

export default MostPopularCategories;
