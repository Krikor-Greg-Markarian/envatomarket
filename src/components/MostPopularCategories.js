import React from "react";
import cn from "classnames";
import Button from "./Button";

function MostPopularCategories(props) {
  return (
    <div className={cn("bg-gray-200 p-5")}>
      <div
        style={{
          width: "230px",
          height: "260px",
          // backgroundImage: `url(${props.imageUrl})`,
        }}
      >
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
        </div>
      </div>
    </div>
  );
}

export default MostPopularCategories;
