import React from "react";
import cn from "classnames";
import Button from "./Button";

function BoxComponent(props) {
  return (
    <div>
      <div
        className={cn("p-4 rounded")}
        style={{
          width: "390px",
          height: "270px",
          backgroundImage: `url(${props.imageUrl})`,
        }}
      >
          {props.isNew ? (<Button
          className={cn("bg-green-400 text-sm text-white rounded-full px-4")}
          buttonName={props.newButton}
        />) : null}
        
        <p className={cn("text-blue-900 text-2xl font-bold pt-4 pb-9 w-5/12")}>
          {props.description}
        </p>
{props.isMore ? ( <Button
          className={cn(
            "bg-blue-900 text-white px-6 rounded-full py-1 text-center "
          )}
           buttonName={props.moreButton}
        />) : null}

        {props.isDiscounted ? ( <p className= {cn("text-yellow-500 text-2xl pl-4 pt-2")}>{props.discount}-30%</p> ) : null}
       
            

      </div>
    </div>
  );
}

export default BoxComponent;
