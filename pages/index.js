import cn from "classnames";
import axios from "axios";
import BlackNavbar from "../src/components/BlackNavbar";
import BlueNavbar from "../src/components/BlueNavbar";
import WhiteNavbar from "../src/components/WhiteNavbar";
import LastNavbar from "../src/components/LastNavbar";
import {
  Fa500Px,
  FaAccessibleIcon,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
  FaDirections,
} from "react-icons/fa";
import BoxComponent from "../src/components/BoxComponent";
import MostPopularCategories from "../src/components/MostPopularCategories";
import Products from "../src/components/Products";
import Button from "../src/components/Button";
import LatestProducts from "../src/components/LatestProducts";
import { SiFsecure } from "react-icons/si";
import BestDeals from "../src/components/BestDeals";
import GetRidOfBecteria from "../src/components/GetRidOfBecteria";
import LatestReviews from "../src/components/LatestReviews";
import React, { useState } from "react";
import MoneyBack from "../src/components/MoneyBack";
import { GiHeartPlus } from "react-icons/gi";
import Link from "next/dist/client/link";

export default function Home({
  boxComponents,
  mostPopularCategories,
  latestProduct,
  bestDealsOfTheWeek,
  getRidOfBakteria,
  latestReviews,
  moneyBack,
}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      {/* //here is the first navbar black navbar */}
      <section>
        <BlackNavbar />
      </section>
      {/* //here is the second navbar blue navbar */}
      <section>
        <BlueNavbar />
      </section>
      {/* here is the third navbar with white background and bunch of icons */}
      <section>
        <WhiteNavbar />
      </section>
      {/* here is the last navbar with some li tags */}
      <section>
        <hr />
        <LastNavbar />
      </section>
      {/* here is the section were antibacterial media masks are marketed */}
      <div className={cn("bg-gray-200 py-16")}>
        <section
          className={cn(
            "flex justify-center items-center container mx-auto w-8/12"
          )}
        >
          <div className={cn("grid grid-cols-2 ")}>
            <div className={cn("col-span-1 w-8/12 ")}>
              <p className={cn("text-blue-900 text-5xl font-bold")}>
                Antibacterial Media Mask
              </p>
              <p className={cn("text-2xl pt-6 pb-6 text-blue-900")}>
                Just a few seconds to measure your body temperature.
              </p>
              <div className={cn("flex")}>
                <div className={cn("flex-shrink")}>
                  <Fa500Px className={cn("text-gray-500 inline")} />
                </div>
                <div className={cn("flex-shrink pl-2")}>
                  <p className={cn("inline font-bold text-gray-500")}>
                    Anti-Bacterial
                  </p>
                </div>
                <div className={cn("flex-shrink pl-12")}>
                  <FaAccessibleIcon className={cn("text-gray-500 inline")} />
                </div>
                <div className={cn("flex-shrink pl-2")}>
                  <p className={cn("inline font-bold text-gray-500")}>
                    Anti-Virus
                  </p>
                </div>
              </div>
              <div className={cn("pt-6")}>
                <Button
                  className={cn(
                    "bg-yellow-500 rounded-full px-14 py-4 text-center text-white font-bold hover:bg-white hover:text-yellow-500 transition duration-500 ease-in-out"
                  )}
                  buttonName={"Shop now"}
                />
              </div>
            </div>
            <div className={cn("col-span-1")}>
              <div className={cn("mask relative")}>
                <div className={cn("abolute")}>
                  <div
                    className={cn(
                      "bg-yellow-400 absolute top-0 right-24 w-32 h-32 rounded-full"
                    )}
                  >
                    <p
                      className={cn(
                        "text-center pt-8 text-xl font-bold text-blue-900"
                      )}
                    >
                      only
                    </p>
                    <p
                      className={cn(
                        "text-center text-4xl font-bold text-blue-900"
                      )}
                    >
                      $25
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 3 box sections  */}
      <section>
        <div className={cn("container mx-auto")}>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid grid-cols-3 gap-8")}>
              {boxComponents.map((item, idx) => (
                <div className={cn("col-span-1 pt-8")}>
                  <BoxComponent
                    imageUrl={item.imageUrl}
                    isNew={item.isNew}
                    isMore={item.isMore}
                    newButton={item.newButton}
                    description={item.description}
                    moreButton={item.moreButton}
                    isDiscounted={item.isDiscounted}
                    discount={item.discount}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("container mx-auto")}>
          <p
            className={cn(
              "flex justify-center pt-12 pb-6 item-center text-2xl text-blue-900 font-bold"
            )}
          >
            Check out the most popular categories
          </p>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid grid-cols-5 gap-2")}>
              {mostPopularCategories.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <MostPopularCategories
                    imageUrl={item.imageUrl}
                    title={item.title}
                    moreButton={item.moreButton}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* here are the products section */}
      <section>
        <div className={cn("container mx-auto pt-14 pb-8")}>
          <Products />
        </div>
      </section>
      {/* latest products part */}
      <section>
        <div className={cn("container mx-auto")}>
          <p
            className={cn(
              "text-4xl font-bold text-blue-900 pt-12 pb-8 text-center"
            )}
          >
            Latest products
          </p>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid grid-cols-5")}>
              {latestProduct.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <LatestProducts
                    imageUrl={item.imageUrl}
                    isSale={item.isSale}
                    sale={item.sale}
                    isHot={item.isHot}
                    hot={item.hot}
                    title={item.title}
                    isNewPrice={item.isNewPrice}
                    newPrice={item.newPrice}
                    isOldPrice={item.isOldPrice}
                    oldPrice={item.oldPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 100% secure delivery section */}
      <section className={cn("pt-24 pb-24")}>
        <div className={cn("container mx-auto")}>
          <div className={cn("bg-green-100 p-8")}>
            <div className={cn("grid grid-cols-4")}>
              <div className={cn("col-span-2")}>
                <div className={cn("flex")}>
                  <div className={cn("flex-shrink pt-1")}>
                    <SiFsecure className={cn("inline")} />
                  </div>
                  <div className={cn("flex-shrink pl-1")}>
                    <p
                      className={cn("text-green-600 inline font-bold text-2xl")}
                    >
                      100% Secure delivery without contacting the courier
                    </p>
                  </div>
                </div>
              </div>
              <div className={cn("col-span-1")}></div>
              <div className={cn("col-span-1")}>
                <div className={cn("float-right")}>
                  <Button
                    className={cn(
                      "bg-green-600 rounded-full px-6 py-1 text-center text-white font-bold"
                    )}
                    buttonName={"More"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best deals of the week section */}
      <section className={cn("pb-24")}>
        <div className={cn("container mx-auto")}>
          <p
            className={cn("text-4xl font-bold text-blue-900 pb-10 text-center")}
          >
            Best Deals of the week!
          </p>
          <div className={cn("container mx-auto")}>
            <div className={cn("border-2 border-yellow-500 bg-white")}>
              <div className={cn("grid grid-cols-5")}>
                {bestDealsOfTheWeek.map((item, idx) => (
                  <div className={cn("col-span-1")}>
                    <BestDeals
                      imageUrl={item.imageUrl}
                      title={item.title}
                      newPrice={item.newPrice}
                      oldPrice={item.oldPrice}
                      discount={item.discount}
                      pcsAvailable={item.pcsAvailable}
                      number={item.number}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* top 5 bestseller section */}
      <section className={cn("pb-24")}>
        <div className={cn("container mx-auto")}>
          <p className={cn("text-4xl font-bold text-blue-900 text-center")}>
            Top 5 Bestsellers in:
          </p>
          <div className={cn("flex justify-center pb-6 items-center pt-3")}>
            <p
              className={cn("text-blue-900 inline text-xl underline font-bold")}
            >
              Blood Pressure
            </p>
            <p
              className={cn(
                "text-blue-900 inline pl-8 text-xl hover:underline"
              )}
            >
              face masks
            </p>
            <p
              className={cn(
                "text-blue-900 inline pl-8 text-xl hover:underline"
              )}
            >
              Stomatology
            </p>
          </div>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid grid-cols-5")}>
              {latestProduct.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <LatestProducts
                    imageUrl={item.imageUrl}
                    isSale={item.isSale}
                    sale={item.sale}
                    isHot={item.isHot}
                    hot={item.hot}
                    title={item.title}
                    isNewPrice={item.isNewPrice}
                    newPrice={item.newPrice}
                    isOldPrice={item.isOldPrice}
                    oldPrice={item.oldPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* get rid of bakteria section */}
      <section>
        <div className={cn("container mx-auto")}>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid grid-cols-2 gap-8")}>
              {getRidOfBakteria.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <GetRidOfBecteria
                    imageUrl={item.imageUrl}
                    isNew={item.isNew}
                    title={item.title}
                    newButtonName={item.newButtonName}
                    isDiscounted={item.isDiscounted}
                    discount={item.discount}
                    buttonNameMore={item.buttonNameMore}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Featured products section */}
      <section>
        <p
          className={cn(
            "text-4xl font-bold pt-20 pb-6 text-blue-900 text-center"
          )}
        >
          Featured products
        </p>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("grid grid-cols-5")}>
            {latestProduct.map((item, idx) => (
              <div className={cn("col-span-1")}>
                <LatestProducts
                  imageUrl={item.imageUrl}
                  isSale={item.isSale}
                  sale={item.sale}
                  isHot={item.isHot}
                  hot={item.hot}
                  title={item.title}
                  isNewPrice={item.isNewPrice}
                  newPrice={item.newPrice}
                  isOldPrice={item.isOldPrice}
                  oldPrice={item.oldPrice}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Latest Review section */}
      <section>
        <div className={cn("latestReview")}>
          <div
            className={cn("inline")}
            className={cn("flex justify-center items-center")}
          >
            <img
              src="https://mymedi-be87.kxcdn.com/mymedi/wp-content/uploads/2020/08/quote-icon.png"
              alt=""
            />
            <p
              className={cn(
                "text-4xl font-bold text-blue-900 text-center pl-4"
              )}
            >
              Latest reviews
            </p>
          </div>
          <div className={cn("container mx-auto")}>
            <div className={cn("grid grid-cols-4 gap-8")}>
              {latestReviews.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <LatestReviews
                    description={item.description}
                    name={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* follow on instagram section */}

      <section>
        <p
          className={cn(
            "text-blue-900 pt-8 pb-8 text-lg font-bold text-center pl-4"
          )}
        >
          Follow <span className={cn("text-2xl font-bold")}> @MYMEDI </span> on
          instagram
        </p>
        <div className={cn("container mx-auto")}>
          <div className={cn("grid grid-cols-6")}>
            <div className={cn("col-span-1")}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className={cn(
                  "instagram rounded cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              >
                {isShown && (
                  <div
                    className={cn(
                      "w-full h-full rounded bg-blue-700 opacity-50"
                    )}
                  >
                    <div className={cn("flex justify-center items-center")}>
                      <FaInstagram
                        className={cn("text-white text-2xl mt-20")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={cn("col-span-1")}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className={cn(
                  "instagram2 rounded cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              >
                {isShown && (
                  <div
                    className={cn(
                      "w-full h-full rounded bg-blue-700 opacity-50"
                    )}
                  >
                    <div className={cn("flex justify-center items-center")}>
                      <FaInstagram
                        className={cn("text-white text-2xl mt-20")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={cn("col-span-1")}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className={cn(
                  "instagram3 rounded cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              >
                {isShown && (
                  <div className={cn("bg-blue-700 opacity-50 h-full w-full")}>
                    <div className={cn("flex justify-center items-center")}>
                      <FaInstagram
                        className={cn("text-white text-2xl mt-20")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={cn("col-span-1")}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className={cn(
                  "instagram4 rounded cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              >
                {isShown && (
                  <div className={cn("bg-blue-700 opacity-50 w-full h-full ")}>
                    <div className={cn("flex justify-center items-center")}>
                      <FaInstagram
                        className={cn("text-white text-2xl mt-20")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={cn("col-span-1")}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className={cn(
                  "instagram4 rounded cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              >
                {isShown && (
                  <div className={cn("bg-blue-700 opacity-50 w-full h-full ")}>
                    <div className={cn("flex justify-center items-center")}>
                      <FaInstagram
                        className={cn("text-white text-2xl mt-20")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={cn("col-span-1")}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className={cn(
                  "instagram4 rounded cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                )}
              >
                {isShown && (
                  <div className={cn("bg-blue-700 opacity-50 w-full h-full ")}>
                    <div className={cn("flex justify-center items-center")}>
                      <FaInstagram
                        className={cn("text-white text-2xl mt-20")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join our newsletter and get
$20 discount for your first order */}

      <section>
        <p className={cn("text-4xl pt-20 font-bold text-blue-900 text-center")}>
          Join our newsletter and get <br></br> $20 discount for your first
          order
        </p>
        <div className={cn("container mx-auto pt-6")}>
          <div className={cn("flex justify-center items-center")}>
            <input
              placeholder="Enter your email address"
              className={cn("p-3 rounded-full px-20")}
              type="text"
              name=""
              id=""
            />
            <Button
              className={cn(
                "text-center text-white p-3 border-2 border-yellow-500 hover:bg-white px-8 rounded-full font-bold ml-4 bg-yellow-500 hover:text-yellow-500"
              )}
              buttonName={"Subscribe"}
            />
          </div>
        </div>
      </section>

      {/* Money back section and more */}

      <section className= {cn("pt-12 pb-12")}>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("grid grid-cols-3")}>
            {moneyBack.map((item, idx) => (
              <div className={cn("col-span-1")}>
                <MoneyBack
                  isWallet={item.isWallet}
                  title={item.title}
                  isPackage={item.isPackage}
                  isDelivery={item.isDelivery}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer before lat section */}

      <section className={cn("pt-4")}>
        <div className={cn("container mx-auto")}>
          <div className={cn("grid grid-cols-6 ")}>
            <div className={cn("col-span-1")}>
              <div className={cn("border-r-2")}>
                <div className={cn("flex pt-10 ")}>
                  <div className={cn("flex-shrink")}>
                    <GiHeartPlus
                      className={cn("text-blue-300 text-3xl inline ")}
                    />
                  </div>
                  <div className={cn("flex-shrink pl-2")}>
                    <p className={cn("text-blue-800 text-2xl font-bold")}>
                      MYMEDI
                    </p>
                  </div>
                </div>
                <p className={cn("text-gray-500 pt-4 pb-4")}>
                  1487 Rocky Horse Carrefour Arlington, TX 16819
                </p>
                <p className={cn("underline text-gray-500 text-sm")}>
                  Show on map
                </p>
                <div className={cn("flex pt-4")}>
                  <div className={cn("flex-shrink")}>
                    <FaFacebookF
                      className={cn(
                        "text-gray-500 text-lg cursor-pointer hover:text-blue-900"
                      )}
                    />
                  </div>
                  <div className={cn("flex-shrink pl-3")}>
                    <FaInstagram
                      className={cn(
                        "text-gray-500 text-lg cursor-pointer hover:text-blue-900"
                      )}
                    />
                  </div>
                  <div className={cn("flex-shrink pl-3")}>
                    <FaYoutube
                      className={cn(
                        "text-gray-500 text-lg cursor-pointer hover:text-blue-900"
                      )}
                    />
                  </div>
                  <div className={cn("flex-shrink pl-3")}>
                    <FaPinterestP
                      className={cn(
                        "text-gray-500 text-lg cursor-pointer hover:text-blue-900"
                      )}
                    />
                  </div>
                  <div className={cn("flex-shrink pl-3")}>
                    <FaLinkedinIn
                      className={cn(
                        "text-gray-500 cursor-pointer hover:text-blue-900"
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={cn("col-span-2 pl-3")}>
              <p className={cn("text-blue-900 font-bold pl-8 pb-4")}>
                Need help
              </p>
              <div className={cn("flex pl-3")}>
                <div className={cn("flex-shrink ")}>
                  <FaPhone className={cn("text-yellow-500 text-xl inline")} />
                </div>
                <div className={cn("flex-shrink")}>
                  <p className={cn("text-blue-900 font-bold inline text-2xl")}>
                    0020 500 - MYMEDI - 000
                  </p>
                  <p className={cn("text-gray-500 pt-4 text-sm")}>
                    Monday - Friday: 9:00-20:00
                  </p>
                  <p className={cn("text-gray-500 pt-2 text-sm")}>
                    Saturday: 11:00 - 15:00
                  </p>
                </div>
              </div>
              <hr className={cn("mt-4 ml-12 w-9/12")}></hr>
              <div className={cn("flex pl-8 pt-3")}>
                <div className={cn("flex-shrink pt-1")}>
                  <FaRegEnvelope className={cn("text-blue-900")} />
                </div>
                <div className={cn("flex-shrink pl-4")}>
                  <p className={cn("text-blue-900 font-bold")}>
                    Contact@example.com
                  </p>
                </div>
              </div>
            </div>
            <div className={cn("col-span-1")}>
              <p className={cn("text-blue-900 font-bold")}>information</p>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-4"
                )}
              >
                <Link href="">
                  <a href="">About us</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Delivery information</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Privacy Policy</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Sales</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Terms &amp; Conditions</a>
                </Link>
              </li>
            </div>
            <div className={cn("col-span-1")}>
              <p className={cn("text-blue-900 font-bold")}>Account</p>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-4"
                )}
              >
                <Link href="">
                  <a href="">My account</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">My orders</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Returns</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Shipping</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Wishlist</a>
                </Link>
              </li>
            </div>
            <div className={cn("col-span-1")}>
              <p className={cn("text-blue-900 font-bold")}>Store</p>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-4"
                )}
              >
                <Link href="">
                  <a href="">Affiliate</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Bestsellers</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Discount</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Latest products</a>
                </Link>
              </li>
              <li
                className={cn(
                  "text-blue-900 list-none hover:text-yellow-500 transition duration-500 ease-in-out pt-2"
                )}
              >
                <Link href="">
                  <a href="">Sale</a>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </section>

      {/* footer last section */}

      <section>
        <div className={cn("container mx-auto pt-8")}>
          <div className={cn("p-4 border-t-2")}>
            <p className={cn("text-blue-900 inline pt-2")}>
              Copyright &copy; 2020 Mymedi. All Rights Reserved
            </p>
            <img
              className={cn("inline float-right")}
              src="https://mymedi-be87.kxcdn.com/mymedi/wp-content/uploads/2020/08/payment.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const boxComponentsResponse = await axios.get(
    "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/boxComponents"
  );

  const mostPopularCategoriesResponse = await axios.get(
    "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/mostPopularCategories"
  );

  const latestProductResponse = await axios.get(
    "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/latestProduct"
  );
  const bestDealsOfTheWeekResponse = await axios.get(
    "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/bestDealsOfTheWeek"
  );

  const getRidOfBakteriaResponse = await axios.get(
    "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/getRidOfBakteria"
  );

  const latestReviewsResponse = await axios.get(
    "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/latestReviews"
  );

  const moneyBackResponse = await axios.get(
    "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/moneyBack"
  );

  const boxComponents = boxComponentsResponse.data.data || [];
  const mostPopularCategories = mostPopularCategoriesResponse.data.data || [];
  const latestProduct = latestProductResponse.data.data || [];
  const bestDealsOfTheWeek = bestDealsOfTheWeekResponse.data.data || [];
  const getRidOfBakteria = getRidOfBakteriaResponse.data.data || [];
  const latestReviews = latestReviewsResponse.data.data || [];
  const moneyBack = moneyBackResponse.data.data || [];

  return {
    props: {
      boxComponents: boxComponents,
      mostPopularCategories: mostPopularCategories,
      latestProduct: latestProduct,
      bestDealsOfTheWeek: bestDealsOfTheWeek,
      getRidOfBakteria: getRidOfBakteria,
      latestReviews: latestReviews,
      moneyBack: moneyBack,
    }, // will be passed to the page component as props
  };
}
