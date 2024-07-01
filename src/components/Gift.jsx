import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Gift = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    dotsClass: "slick-dot",
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <>
      <div className="px-10 relative">
        <button
          id="b1"
          className="absolute top-1/2 left-10 text-white p-3 rounded-full cursor-pointer text-md bg-[#AFAEAA] text-center"
          onClick={() => {
            slider?.current?.slickPrev();
          }}
          tabIndex={-1}
        >
          <CgArrowLeft />
        </button>
        <button
          id="b2"
          className="absolute top-1/2 right-10 text-white p-3 rounded-full cursor-pointer text-md bg-[#AFAEAA] text-center"
          onClick={() => {
            slider?.current?.slickNext();
          }}
          tabIndex={-1}
        >
          <CgArrowRight />
        </button>
        <div className="w-full h-auto bg-transparent px-5">
          <p className="text-center text-5xl font-jost ">Gift Your Loved ones Healthy Living <span className="text-[#006944]">starts @ Rs 499 only</span></p>
          <div className="container mx-auto my-8 font-jost bg-transparent">
            <Slider
              ref={slider}
              {...settings}>
              <div className="w-full h-[400px] bg-transparent flex justify-between items-center px-5">
                <div className="relative">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Frame_14857384.png?v=1696467233"
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="absolute top-[25%] left-2 flex flex-col p-10">
                    <p className="text-white text-[40px] font-bold leading-[60px] ">
                      Chocolate Tulip Box
                    </p>
                    <p className="text-white text-[20px] leading-[30px]">
                      2 Bottles of Honey (400g each) With Dipper
                    </p>
                    <p className="text-yellow-500 text-[20px] leading-[30px]">
                      Starting From ₹949 only -
                    </p>
                    <Link to={"collections/gift/products/chocolate-tulip-box"}>
                      <button className="mt-20 transition-colors duration-900 w-[200px] border border-[#006944] hover:bg-[#006944] bg-white hover:text-white text-lg font-jost font-bold uppercase text-[#006944] py-3 px-4 rounded-md my-2 cursor-pointer">
                        Buy Now
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
              <div className="w-full h-[400px] bg-transparent flex justify-between items-center px-5">
                <div className="relative">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Frame_14857385.png?v=1696467232"
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="absolute top-[25%] left-2 flex flex-col p-10">
                    <p className="text-white text-[40px] font-bold leading-[60px] ">
                      Red Tulip Box
                    </p>
                    <p className="text-white text-[20px] leading-[30px]">
                      3 Bottles of Honey (400g each) With Dipper
                    </p>
                    <p className="text-yellow-500 text-[20px] leading-[30px]">
                      Starting From ₹1130 only -
                    </p>
                    <Link to={"collections/gift/products/red-tulip-box-1"}>
                      <button className="mt-20 transition-colors duration-900 w-[200px] border border-[#006944] hover:bg-[#006944] bg-white hover:text-white text-lg font-jost font-bold uppercase text-[#006944] py-3 px-4 rounded-md my-2 cursor-pointer">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-[400px] bg-transparent flex justify-between items-center px-5">
                <div className="relative">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_14856905-png.png?v=1698909761"
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="absolute top-[25%] left-2 flex flex-col p-10">
                    <p className="text-white text-[40px] font-bold leading-[60px] ">
                      Gift the Finest Honeys
                    </p>
                    <p className="text-white text-[20px] leading-[30px]">
                      10 Bottles of Honey (40g each)
                    </p>
                    <p className="text-yellow-500 text-[20px] leading-[30px]">
                      Starting From ₹600 only -
                    </p>
                    <Link to={"collections/gift/products/40g-x-10-honey"}>
                      <button className="mt-20 transition-colors duration-900 w-[200px] border border-[#006944] hover:bg-[#006944] bg-white hover:text-white text-lg font-jost font-bold uppercase text-[#006944] py-3 px-4 rounded-md my-2 cursor-pointer">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-[400px] bg-transparent flex justify-between items-center px-5">
                <div className="relative">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Group_14856904_bb3f9c95-2369-4228-a85b-522a148cf7f8.png?v=1698912009"
                    alt=""
                    className="absolute top-0 left-0"
                  />
                  <div className="absolute top-[25%] left-2 flex flex-col p-10">
                    <p className="text-white text-[40px] font-bold leading-[60px] ">
                      Gift The Finest Honeys
                    </p>
                    <p className="text-white text-[20px] leading-[30px]">
                      9 Bottles of Honey (55g each)
                    </p>
                    <p className="text-yellow-500 text-[20px] leading-[30px]">
                      Starting From ₹695 only -
                    </p>
                    <Link to={"collections/gift/products/gift-the-finest-honeys-9-bottles"}>
                      <button className="mt-20 transition-colors duration-900 w-[200px] border border-[#006944] hover:bg-[#006944] bg-white hover:text-white text-lg font-jost font-bold uppercase text-[#006944] py-3 px-4 rounded-md my-2 cursor-pointer">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <Link to={"collections/gift"}>
        <button className="uppercase text-sm font-jost font-semibold mx-auto transition-colors duration-900 w-auto px-12 border border-[#006944] hover:bg-[#006944] text-[#006944] hover:text-white py-3 rounded-xl my-2 cursor-pointer">Shop This</button>
        </Link>
      </div>
      <p className="text-center text-4xl font-jost text-[#006944] font-medium py-5">Customers Love our products</p>
    </>
  );
};
export default Gift;