import React from "react";
import cn from "classnames";
import Link from "next/link";

function Products(props) {
  return (
    <div className={cn("container mx-auto")}>
      <div className={cn("grid grid-cols-6")}>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold")}>Wound Care</p>
          <li
            className={cn(
              "text-blue-800 list-none pt-3 transition duration-500 ease-in-out hover:text-yellow-600 hover:underline"
            )}
          >
            <Link href="">
              <a href="">Bandages</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Gypsum Foundations</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Patches and tapes</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Stomatology</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Surgical sutures</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Uniforms</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Wound healing</a>
            </Link>
          </li>
        </div>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold")}>Higiene</p>
          <li
            className={cn(
              "text-blue-800 list-none pt-3 transition duration-500 ease-in-out hover:text-yellow-600 hover:underline"
            )}
          >
            <Link href="">
              <a href="">Disponsable products</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Face masks</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Gloves</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Protect covers</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Sterilization</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Surgical covers</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Uniforms</a>
            </Link>
          </li>
        </div>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold")}>Laboratory</p>
          <li
            className={cn(
              "text-blue-800 list-none pt-3 transition duration-500 ease-in-out hover:text-yellow-600 hover:underline"
            )}
          >
            <Link href="">
              <a href="">Devices</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Diagnostic tests</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Disinfectants</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Dyes</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Pipettes</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Test-tubes</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Tubes</a>
            </Link>
          </li>
        </div>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold")}>Tools</p>
          <li
            className={cn(
              "text-blue-800 list-none pt-3 transition duration-500 ease-in-out hover:text-yellow-600 hover:underline"
            )}
          >
            <Link href="">
              <a href="">Accessories Tools</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Blood pressure</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Capsules</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Dental</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Micrscope</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Pressure</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Sugar level</a>
            </Link>
          </li>
        </div>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold")}>Diagnosis</p>
          <li
            className={cn(
              "text-blue-800 list-none pt-3 transition duration-500 ease-in-out hover:text-yellow-600 hover:underline"
            )}
          >
            <Link href="">
              <a href="">Biopsy tools</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Endoscopes</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Monitoring</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Otoscopes</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Oxygen concentrators</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Tables and assistants</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Thermometer</a>
            </Link>
          </li>
        </div>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold")}>Equipment</p>
          <li
            className={cn(
              "text-blue-800 list-none pt-3 transition duration-500 ease-in-out hover:text-yellow-600 hover:underline"
            )}
          >
            <Link href="">
              <a href="">Blades</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Education</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Germicidal lamps</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Heart Health</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Infusion stands</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Lighting</a>
            </Link>
          </li>
          <li
            className={cn(
              "text-blue-800 list-none pt-2 hover:text-yellow-600 transition duration-500 ease-in-out hover:underline"
            )}
          >
            <Link href="">
              <a href="">Machines</a>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Products;
