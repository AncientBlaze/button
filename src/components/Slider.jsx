import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";
import Slider from "react-slick";
import React from "react";
import CardComponent from "./CardComponent";

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
            <button className="bg-[#855245] text-white w-[210px] h-[45px] rounded-lg hover:text-[#855245] border border-white hover:bg-white transition-colors duration-1000 hover:border hover:border-[#855245]">View All</button>
          </div>
        </div>
        <div className="w-2/3 h-full bg-transparent  flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center">
            <Slider
              ref={slider}
              {...settings}
              className="w-full h-screen flex items-center"
            >
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_04c1d709-5e90-40b5-83fc-6ee87ba55563_800x.jpg?v=1708000860" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_52d72052-4078-4146-a5bb-7eb9c66b2070_800x.jpg?v=1703749282" title="Vana Tulsi Flower" PreviousPrice={459} content={369} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_3f8e2c55-7493-4cb5-9602-9b75acfe9ce7_800x.jpg?v=1708763010" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_78e4eb2a-d5c1-4523-b807-354c41bf870e_800x.jpg?v=1708763010" title="Pure Raw Honey,..." PreviousPrice={459} content={369} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_75cb66fc-8827-4469-b0a2-5456ada81da5_800x.jpg?v=1703849930" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_2fa5af93-b422-4d24-98f1-22ef85b3926c_800x.jpg?v=1703849928" title="100% Pure Honey" PreviousPrice={459} content={369} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_bff6cfee-eb5b-478b-8a44-95b3426944a7_800x.jpg?v=1708001032" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_d987ed37-23dd-46aa-93ab-f96258e38e16_800x.jpg?v=1708001030" title="Raw, Natural, Unproce..." PreviousPrice={549} content={399} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_319a4a90-daac-4d41-b4c8-b355b39719f6_800x.jpg?v=1708001078" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_3171cc9b-2acc-4d6a-b1bd-2d8d06abe74e_800x.jpg?v=1703748932" title="Turmeric Infused Hone.." PreviousPrice={549} content={399} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_eb73063c-67d2-4c43-a0a1-617fe56121c5_800x.jpg?v=1708001034" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_589f952b-21fa-4871-836b-0b4d1092b3c7_800x.jpg?v=1703849858" title="Ginger Infused Honey..." PreviousPrice={549} content={399} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_b809fbd5-9755-4de8-9cd7-b81628928481_800x.jpg?v=1703749409" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_0287f5c9-3d50-4227-8f22-5f74fdbdf29d_800x.jpg?v=1708001027" title="Neem Flora Honey" PreviousPrice={459} content={369} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_6ee2bc0d-8dc9-41f6-b200-22878503132c_800x.jpg?v=1703849660" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_57e75349-e4d7-45c7-8273-4f0a5f09887e_800x.jpg?v=1708001027" title="Elyctapus Flora Honey" PreviousPrice={459} content={369} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_02314507-5857-4219-a1b5-306c47a83dd1_800x.jpg?v=1708000860" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_58201a2c-cc05-4076-8ce1-c2ad03d1b0c4_800x.jpg?v=1708000855" title="100% Pure &..." PreviousPrice={459} content={369} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_3fa0040a-f84f-4dce-80a7-6486dc348730_800x.jpg?v=1708000860" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_9fb1a6dd-b7a5-425f-a2ad-e7becfcf438f_800x.jpg?v=1708000856" title="Wild Berry Flower..." PreviousPrice={459} content={369} save={16}/>
              <CardComponent PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_980b14e4-1a71-421d-b869-36ac98fb3ae7_800x.jpg?v=1708000860" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_d4fe84a4-f1f1-4d1a-adf1-ddc608c14814_800x.jpg?v=1708000855" title="Litchi Flower Wild..." PreviousPrice={459} content={369} save={16}/>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;