import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";
import Slider from "react-slick";
import React from "react";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";


const products = [
  {
    id: "acacia-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_02314507-5857-4219-a1b5-306c47a83dd1_800x.jpg?v=1708000860",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_58201a2c-cc05-4076-8ce1-c2ad03d1b0c4_800x.jpg?v=1708000855",
    title: "100% Pure &...",
    PreviousPrice: 459,
    content: 369,
    save: 16,
    hidden: "hidden",
  },
  {
    id: "tulsi-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_04c1d709-5e90-40b5-83fc-6ee87ba55563_800x.jpg?v=1708000860",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_52d72052-4078-4146-a5bb-7eb9c66b2070_800x.jpg?v=1703749282",
    title: "Vana Tulsi Flower",
    PreviousPrice: 459,
    content: 369,
    save: 16,
  },
  {
    id: "jamun-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_75cb66fc-8827-4469-b0a2-5456ada81da5_800x.jpg?v=1703849930",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_2fa5af93-b422-4d24-98f1-22ef85b3926c_800x.jpg?v=1703849928",
    title: "100% Pure Honey",
    PreviousPrice: 459,
    content: 369,
    save: 16,
  },
  {
    id: "jungle-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_3f8e2c55-7493-4cb5-9602-9b75acfe9ce7_800x.jpg?v=1708763010",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_78e4eb2a-d5c1-4523-b807-354c41bf870e_800x.jpg?v=1708763010",
    title: "100% Pure Raw,...",
    PreviousPrice: 459,
    content: 369,
    save: 16,
  },
  {
    id: "himalayan-shilajit-infused-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/Banner1_800x.png?v=1711099109",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/Shilaji_800x.png?v=1711014184",
    title: "Shilajit Honey |...",
    PreviousPrice: 879,
    content: 395,
    save: 55,
    hidden: "hidden",
  },
  {
    id: "clove-infused-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_127381a2-7f8d-46a8-88f5-39f52a20db09_800x.jpg?v=1708001084",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_4479e5c0-9319-497a-8e8f-a5b8a16622b8_800x.jpg?v=1708001080",
    title: "Clove Infused Honey...",
    PreviousPrice: 549,
    content: 399,
    save: 27,
    hidden: "hidden",
  },
  {
    id: "neem-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_b809fbd5-9755-4de8-9cd7-b81628928481_800x.jpg?v=1703749409",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_0287f5c9-3d50-4227-8f22-5f74fdbdf29d_800x.jpg?v=1708001027",
    title: "Neem Flora Honey",
    PreviousPrice: 459,
    content: 369,
    save: 20,
    hidden: "hidden",
  },
  {
    id: "berry-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_3fa0040a-f84f-4dce-80a7-6486dc348730_800x.jpg?v=1708000860",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_9fb1a6dd-b7a5-425f-a2ad-e7becfcf438f_800x.jpg?v=1708000856",
    title: "Wild Berry Flower...",
    PreviousPrice: 459,
    content: 369,
    save: 20,
    hidden: "hidden",
  },
  {
    id: "ashwagandha-infused-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_800x.jpg?v=1708001089",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_800x.jpg?v=1708001070",
    title: "Ashwagandha Infused honey",
    PreviousPrice: 549,
    content: 399,
    save: 27,
    hidden: "hidden",
  },
  {
    id: "litchi-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_980b14e4-1a71-421d-b869-36ac98fb3ae7_800x.jpg?v=1708000860",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_d4fe84a4-f1f1-4d1a-adf1-ddc608c14814_800x.jpg?v=1708000855",
    title: "Litchi Flower Wild...",
    PreviousPrice: 459,
    content: 369,
    save: 20,
    hidden: "hidden",
  },
  {
    id: "immunity-herbs-infused-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_3e381489-9f3b-4c91-a474-67a9a86b2ac0_800x.jpg?v=1703849909",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_a75e82f9-c754-43e8-b12a-419a9b0eddfa_800x.jpg?v=1703849907",
    title: "Immunity Herbs Infused",
    PreviousPrice: 539,
    content: 439,
    save: 19,
    hidden: "hidden",
  },
  {
    id: "turmeric-infused-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_319a4a90-daac-4d41-b4c8-b355b39719f6_800x.jpg?v=1708001078",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_3171cc9b-2acc-4d6a-b1bd-2d8d06abe74e_800x.jpg?v=1703748932",
    title: "Turmeric Infused Honey...",
    PreviousPrice: 549,
    content: 399,
    save: 27,
    hidden: "hidden",
  },
  {
    id: "cinnamon-infused-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_bff6cfee-eb5b-478b-8a44-95b3426944a7_800x.jpg?v=1708001032",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_d987ed37-23dd-46aa-93ab-f96258e38e16_800x.jpg?v=1708001030",
    title: "Raw, Natural, Unproce...",
    PreviousPrice: 549,
    content: 399,
    save: 16,
    hidden: "visible",
  },
  {
    id: "ginger-infused-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_eb73063c-67d2-4c43-a0a1-617fe56121c5_800x.jpg?v=1708001034",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_589f952b-21fa-4871-836b-0b4d1092b3c7_800x.jpg?v=1703849858",
    title: "Ginger Infused Honey...",
    PreviousPrice: 549,
    content: 399,
    save: 16,
    hidden: "hidden",
  },
  {
    id: "eucalyptus-flora-honey",
    PlaceHolder:
      "https://farmnaturelle.com/cdn/shop/files/3_6ee2bc0d-8dc9-41f6-b200-22878503132c_800x.jpg?v=1703849660",
    ImageUrl:
      "https://farmnaturelle.com/cdn/shop/files/2_57e75349-e4d7-45c7-8273-4f0a5f09887e_800x.jpg?v=1708001027",
    title: "Elyctapus Flora Honey",
    PreviousPrice: 459,
    content: 369,
    save: 16,
    hidden: "hidden",
  },
  // Add more products here...
];

const CarouselComponent = () => {
  const slider = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    visualViewport: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="w-full h-screen bg-[#FAF9F4] flex py-10">
        <div className="w-1/3 h-full flex justify-center items-center">
          <div className="w-3/4 h-2/4 p-5">
            <div className="text-left text-[#855245] font-jost font-semibold text-4xl">
              Pure Honey
            </div>
            <div className="text-left text-[#855245] text-sm pt-[45px] my-2">
              Bee-produced, unprocessed honey from a farm, pure and natural.
            </div>
            <div className="text-left w-32 h-20 my-2 flex justify-center items-center gap-2 relative">
              <button className="border border-[#855245] p-3 rounded-full cursor-pointer text-sm text-[#7A7976] text-center" onClick={() => slider?.current?.slickPrev()} tabIndex={-1}><CgArrowLeft /></button>
              <button className="border border-[#855245] p-3 rounded-full cursor-pointer text-sm text-[#7A7976] text-center" onClick={() => slider?.current?.slickNext()} tabIndex={-1}><CgArrowRight /></button>
            </div>
            <Link to={"/collections/honey"}>
              <button className="bg-[#855245] text-white w-[210px] h-[45px] rounded-lg hover:text-[#855245] border border-white hover:bg-white transition-colors duration-1000 hover:border hover:border-[#855245]">View All</button>
            </Link>
          </div>
        </div>
        <div className="w-2/3 h-full bg-transparent  flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center">
            <Slider
              ref={slider}
              {...settings}
              className="w-full h-screen flex items-center"
            >
              {products.map((item, index) => (
                <Link
                key={index}
                to={`/collections/honey/products/${item.id}`}
            >
                <CardComponent
                    id={item.id}
                    PlaceHolder={item.PlaceHolder}
                    ImageUrl={item.ImageUrl}
                    title={item.title}
                    PreviousPrice={item.PreviousPrice}
                    content={item.content}
                    save={item.save}
                />
            </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;