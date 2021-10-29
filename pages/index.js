import cn from "classnames";
import axios from "axios";
import BlackNavbar from "../src/components/BlackNavbar";
import BlueNavbar from "../src/components/BlueNavbar";
import WhiteNavbar from "../src/components/WhiteNavbar";
import LastNavbar from "../src/components/LastNavbar";
import {
  Fa500Px,
  FaAccessibleIcon,
  FaAccusoft,
  FaInstagram,
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

export default function Home({
  boxComponents,
  mostPopularCategories,
  latestProduct,
  bestDealsOfTheWeek,
  getRidOfBakteria,
  latestReviews,
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
      <section className={cn("flex justify-center items-center")}>
        <div className={cn("grid grid-cols-2")}>
          <div className={cn("col-span-1 w-8/12")}>
            <p className={cn("text-blue-900 text-5xl font-bold")}>
              Antibacterial Media Mask
            </p>
            <p className={cn("text-2xl pt-4 pb-4 text-blue-900")}>
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
          </div>
          <div className={cn("mask")}>asdasd</div>
        </div>
      </section>
      {/* 3 box sections  */}
      <section>
        <div className={cn("container mx-auto")}>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid grid-cols-3")}>
              {boxComponents.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <BoxComponent
                    imageUrl={item.imageUrl}
                    description={item.description}
                    newButton={item.newButton}
                    moreButton={item.moreButton}
                    isNew={item.isNew}
                    isMore={item.isMore}
                    isDiscounted={item.isDiscounted}
                    oldPrice={item.oldPrice}
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
            <div className={cn("grid grid-cols-5")}>
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
        <div className={cn("container mx-auto")}>
          <Products />
        </div>
      </section>
      {/* latest products part */}
      <section>
        <div className={cn("container mx-auto")}>
          <p className={cn("text-4xl font-bold text-blue-900 text-center")}>
            Latest products
          </p>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("grid grid-cols-3")}>
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
      <section>
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
      <section>
        <div className={cn("container mx-auto")}>
          <p className={cn("text-4xl font-bold text-blue-900 text-center")}>
            Best Deals of the week!
          </p>
          <div className={cn("container mx-auto")}>
            <div className={cn("border-2 border-yellow-500 bg-white")}>
              <div className={cn("grid grid-cols-4")}>
                <div className={cn("col-span-1")}>
                  {bestDealsOfTheWeek.map((item, idx) => (
                    <BestDeals
                      imageUrl={item.imageUrl}
                      title={item.title}
                      newPrice={item.newPrice}
                      oldPrice={item.oldPrice}
                      discount={item.discount}
                      pcsAvailable={item.pcsAvailable}
                      number={item.number}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* top 5 bestseller section */}
      <section>
        <div className={cn("container mx-auto")}>
          <p className={cn("text-4xl font-bold text-blue-900 text-center")}>
            Top 5 Bestsellers in:
          </p>
          <div className={cn("flex justify-center items-center pt-3")}>
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
            <div className={cn("grid grid-cols-3")}>
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
        <p className={cn("text-4xl font-bold text-blue-900 text-center")}>
          Featured products
        </p>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("grid grid-cols-3")}>
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
              <div className={cn("col-span-1")}>
                {latestReviews.map((item, idx) => (
                  <LatestReviews
                    description={item.description}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* follow on instagram section */}

      <section>
        <p className={cn("text-blue-900 text-lg font-bold text-center pl-4")}>
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

  const boxComponents = boxComponentsResponse.data.data || [];
  const mostPopularCategories = mostPopularCategoriesResponse.data.data || [];
  const latestProduct = latestProductResponse.data.data || [];
  const bestDealsOfTheWeek = bestDealsOfTheWeekResponse.data.data || [];
  const getRidOfBakteria = getRidOfBakteriaResponse.data.data || [];
  const latestReviews = latestReviewsResponse.data.data || [];

  return {
    props: {
      boxComponents: boxComponents,
      mostPopularCategories: mostPopularCategories,
      latestProduct: latestProduct,
      bestDealsOfTheWeek: bestDealsOfTheWeek,
      getRidOfBakteria: getRidOfBakteria,
      latestReviews: latestReviews,
    }, // will be passed to the page component as props
  };
}
