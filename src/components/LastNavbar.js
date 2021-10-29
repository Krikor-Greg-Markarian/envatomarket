import React from "react";
import cn from "classnames";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

function LastNavbar(props) {
  return (
    <div className={cn("flex justify-center items-center")}>
      <div className={cn("w-8/12")}>
        <div className={cn("p-3")}>
          <div className={cn("grid grid-cols-9  ")}>
            <div className={cn("col-span-1")}>
              <div className={cn("flex")}>
                <div className={cn("flex-shrink")}>
                  <AiOutlineMenu className={cn("inline")} />
                </div>
                <div className={cn("flex-shrink")}>
                  <li className={cn("list-none")}>
                    <a
                      className={cn("inline text-blue-900 text-sm font-bold ")}
                      href="/"
                    >
                      Products
                    </a>
                  </li>
                </div>
                <div className={cn("flex-shrink")}>
                  <FaAngleDown className={cn("inline")} />
                </div>
              </div>
            </div>
            <div className={cn("col-span-6")}>
              <div className={cn("flex")}>
                <div className={cn("flex-shrink")}>
                  <li className={cn("list-none")}>
                    <Link href="">
                      <a
                        className={cn("text-blue-900 text-sm inline font-bold")}
                        href=""
                      >
                        Home Medical Supplies
                      </a>
                    </Link>
                  </li>
                </div>
                <div className={cn("flex-shrink")}>
                  <FaAngleDown className={cn("inline")} />
                </div>
                <div className={cn("flex-shrink pl-4")}>
                  <li className={cn("list-none")}>
                    <Link href="">
                      <a
                        className={cn("text-blue-900 text-sm inline font-bold")}
                        href=""
                      >
                        Homepages
                      </a>
                    </Link>
                  </li>
                </div>
                <div className={cn("flex-shrink")}>
                  <FaAngleDown className={cn("inline")} />
                </div>
                <div className={cn("flex-shrink pl-4")}>
                  <li className={cn("list-none")}>
                    <Link href="">
                      <a
                        className={cn("text-blue-900 text-sm inline font-bold")}
                        href=""
                      >
                        Shop
                      </a>
                    </Link>
                  </li>
                </div>
                <div className={cn("flex-shrink")}>
                  <FaAngleDown className={cn("inline")} />
                </div>
                <div className={cn("flex-shrink pl-4")}>
                  <li className={cn("list-none")}>
                    <Link href="">
                      <a
                        className={cn("text-blue-900 text-sm inline font-bold")}
                        href=""
                      >
                        Pages
                      </a>
                    </Link>
                  </li>
                </div>
                <div className={cn("flex-shrink")}>
                  <FaAngleDown className={cn("inline")} />
                </div>
                <div className={cn("flex-shrink pl-4")}>
                  <li className={cn("list-none")}>
                    <Link href="">
                      <a
                        className={cn("text-blue-900 text-sm inline font-bold")}
                        href=""
                      >
                        Collection
                      </a>
                    </Link>
                  </li>
                </div>
                <div className={cn("flex-shrink")}>
                  <FaAngleDown className={cn("inline")} />
                </div>
                <div className={cn("flex-shrink pl-4")}>
                  <li className={cn("list-none")}>
                    <Link href="">
                      <a
                        className={cn("text-blue-900 text-sm inline font-bold")}
                        href=""
                      >
                        Blog
                      </a>
                    </Link>
                  </li>
                </div>

                <div className={cn("flex-shrink pl-4")}>
                  <li className={cn("list-none")}>
                    <Link href="">
                      <a
                        className={cn("text-blue-900 text-sm inline font-bold")}
                        href=""
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className={cn("col-span-2")}>
              <p className={cn("text-sm text-gray-500")}>
                Need help? 0020 500 - MYMEDI - 000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastNavbar;
