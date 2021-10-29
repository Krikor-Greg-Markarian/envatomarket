import React from "react";
import { GiHeartPlus } from "react-icons/gi";
import {
  FaAngleDown,
  FaFireAlt,
  FaHeart,
  FaExclamationCircle,
} from "react-icons/fa";
import cn from "classnames";

function WhiteNavbar(props) {
  return (
    <div className={cn("flex justify-center items-center")}>
      <div className={cn("p-4 w-8/12")}>
        <div className={cn("grid grid-cols-5")}>
          <div className={cn("col-span-1")}>
            <div className={cn("flex pt-1")}>
              <div className={cn("flex-shrink")}>
                <GiHeartPlus className={cn("text-blue-300 text-5xl inline ")} />
              </div>
              <div className={cn("flex-shrink pl-2")}>
                <p className={cn("text-blue-800 text-4xl font-bold")}>MYMEDI</p>
              </div>
            </div>
          </div>
          <div className={cn("col-span-2")}>
            <input
              className={cn("rounded-full p-3 bg-gray-100 px-24")}
              type="text"
              name=""
              id=""
              placeholder="Search for products"
            />
          </div>
          <div className={cn("col-span-1")}>
            <div className={cn("flex pt-3")}>
              <div className={cn("flex-shrink")}>
                <p className={cn("inline")}>English</p>
              </div>
              <div className={cn("flex-shrink")}>
                <FaAngleDown className={cn("inline")} />
              </div>
              <div className={cn("flex")}>
                <div className={cn("flex-shrink pl-3")}>
                  <p className={cn("inline")}>USD</p>
                </div>
                <div className={cn("flex-shrink")}>
                  <FaAngleDown className={cn("inline")} />
                </div>
              </div>
            </div>
          </div>
          <div className={cn("col-span-1")}>
            <div className={cn("flex pt-3")}>
              <div className={cn("flex-shrink ")}>
                <FaFireAlt className={cn("text-2xl text-yellow-600")} />
              </div>
              <div className={cn("flex-shrink pl-3")}>
                <FaHeart className={cn("text-2xl text-yellow-600")} />
              </div>
              <div className={cn("flex-shrink pl-3")}>
                <FaExclamationCircle
                  className={cn("text-2xl text-yellow-600")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteNavbar;
