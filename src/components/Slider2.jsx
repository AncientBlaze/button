import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";
import Slider from "react-slick";
import React from "react";
import CardComponent from "./CardComponent";

const CarouselComponent2 = () => {
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
    };
    return (
        <div className="w-full h-auto bg-[#FAF9F4] py-10">
            <div className="w-full h-screen flex">
                <div className="w-1/3 h-full flex justify-center items-center">
                    <div className="w-3/4 h-2/4 p-5">
                        <div className="text-left text-[#855245] font-jost font-semibold text-4xl">
                            Cold Pressed Cooking Oils
                        </div>
                        <div className="text-left text-[#855245] text-sm pt-[45px] my-2">
                            Cold-pressed, natural cooking oils sourced from farm
                            ingredients for healthier cuisine
                        </div>
                        <div className="text-left w-32 h-20 my-2 flex justify-center items-center gap-2 relative">
                            <button
                                className="border border-[#855245] p-3 rounded-full cursor-pointer text-sm text-[#7A7976] text-center"
                                onClick={() => slider?.current?.slickPrev()}
                                tabIndex={-1}
                            >
                                <CgArrowLeft />
                            </button>
                            <button
                                className="border border-[#855245] p-3 rounded-full cursor-pointer text-sm text-[#7A7976] text-center"
                                onClick={() => slider?.current?.slickNext()}
                                tabIndex={-1}
                            >
                                <CgArrowRight />
                            </button>
                        </div>
                        <button className="bg-[#855245] text-white w-[210px] h-[45px] rounded-lg hover:text-[#855245] border border-white hover:bg-white transition-colors duration-1000 hover:border hover:border-[#855245]">
                            View All
                        </button>
                    </div>
                </div>
                <div className="w-2/3 h-full bg-transparent flex justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center">
                        <Slider
                            ref={slider}
                            {...settings}
                            className="w-full h-screen flex items-center"
                        >
                            <CardComponent
                                save={14}
                                PlaceHolder="https://farmnaturelle.com/cdn/shop/files/Rectangle9305_444d3e7e-98ea-43f4-8c19-c4b7f178614e_800x.jpg?v=1708001213"
                                ImageUrl="https://farmnaturelle.com/cdn/shop/files/Rectangle9304_5e288c25-7779-4d43-b049-30fa89946889_800x.jpg?v=1708001211"
                                title="Organic Cold Pressed..."
                                PreviousPrice={339}
                                content={290}
                            />
                            <CardComponent
                                save={16}
                                PlaceHolder="https://farmnaturelle.com/cdn/shop/files/Rectangle9436_800x.jpg?v=1708001374"
                                ImageUrl="https://farmnaturelle.com/cdn/shop/files/Rectangle9435_800x.jpg?v=1708001371"
                                title="100% Pure..."
                                PreviousPrice={329}
                                content={275}
                            />
                            <CardComponent
                                save={14}
                                PlaceHolder="https://farmnaturelle.com/cdn/shop/files/Rectangle9424_800x.jpg?v=1708001213"
                                ImageUrl="https://farmnaturelle.com/cdn/shop/files/Rectangle9423_800x.jpg?v=1703749253"
                                title="100% Natural Cold"
                                PreviousPrice={339}
                                content={290}
                            />
                            <CardComponent
                                save={18}
                                PlaceHolder="https://farmnaturelle.com/cdn/shop/files/Rectangle9314_800x.jpg?v=1708001212"
                                ImageUrl="https://farmnaturelle.com/cdn/shop/files/Rectangle9313_800x.jpg?v=1708001210"
                                title="Black Sesame Oil..."
                                PreviousPrice={449}
                                content={368}
                            />
                            <CardComponent
                                save={16}
                                PlaceHolder="https://farmnaturelle.com/cdn/shop/files/Rectangle9430_800x.jpg?v=1703849986"
                                ImageUrl="https://farmnaturelle.com/cdn/shop/files/Rectangle9429_800x.jpg?v=1703849984"
                                title="Buy 100% Pure..."
                                PreviousPrice={329}
                                content={275}
                            />
                            <CardComponent
                                save={19}
                                PlaceHolder="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif"
                                ImageUrl="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif"
                                title="Organic Extra Light"
                                PreviousPrice={369}
                                content={299}
                            />
                            <CardComponent
                                save={18}
                                PlaceHolder="https://farmnaturelle.com/cdn/shop/files/Rectangle9357_800x.jpg?v=1703849690"
                                ImageUrl="https://farmnaturelle.com/cdn/shop/files/Rectangle9356_800x.jpg?v=1703849688"
                                title="Extra Virgin Olive..."
                                PreviousPrice={379}
                                content={309}
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent2;
