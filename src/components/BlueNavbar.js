import React from "react";
import cn from "classnames";

function BlueNavbar(props) {
  return (
    <div className={cn("bg-blue-900 p-2")}>
      <div className={cn("inline text-center text-yellow-500")}>
        <p>
          Due to the COVID 19 epidemic, orders may be processed with a slight
          delay
          <span className={cn(" text-white text-yellow-500 float-right pr-5")}>A</span>
        </p>
      </div>
    </div>
  );
}

export default BlueNavbar;
