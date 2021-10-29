import React from "react";
import cn from "classnames";

function LatestReviews(props) {
  return (
    <div className={cn("flex justify-center items-center mt-40")}>
      <div className={cn("bg-white p-5 rounded")}>
        <p className={cn("text-blue-900")}>{props.description}</p>
        <p className={cn("text-blue-900 pt-3")}>{props.name}</p>
      </div>
    </div>
  );
}

export default LatestReviews;
