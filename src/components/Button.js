import React from "react";
import cn from "classnames";

function Button(props) {
  return (
    <div>
      <button
        className={cn(props.className)}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.buttonName ?? "**name plz**"}
      </button>
    </div>
  );
}

export default Button;
