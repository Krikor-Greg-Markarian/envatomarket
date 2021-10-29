import React from "react";
import cn from "classnames";
import Button from "./Button";

function GetRidOfBecteria(props) {
  return (
    <div
      className={cn("rounded")}
      style={{
        width: "600px",
        height: "230px",
        backgroundImage: `url(${props.imageUrl})`,
      }}
    >
      <div className={cn("p-8")}>
        {props.isNew ? (
          <Button
            className={cn(
              "bg-green-700 rounded-full px-3 text-sm text-center text-white"
            )}
            buttonName={props.newButtonName}
          />
        ) : null}

        <p className={cn("text-blue-900 pt-3 pb-9 font-bold text-2xl w-6/12")}>
          {props.title}
          {props.isDiscounted ? (
            <p className={cn("text-yellow-600 text-5xl")}>{props.discount}</p>
          ) : null}
        </p>

        <Button
          className={cn(
            "bg-blue-900 rounded-full px-8 py-2 text-sm text-center text-white"
          )}
          buttonName={props.buttonNameMore}
        />
      </div>
    </div>
  );
}

export default GetRidOfBecteria;
