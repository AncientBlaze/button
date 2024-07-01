import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";
import Slider from "react-slick";
import React from "react";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";

const CarouselComponent2 = () => {
    const products = [
        {
            id: "yellow-mustard-oil-classic",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9435_800x.jpg?v=1708001371",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9436_800x.jpg?v=1708001374",
            title: "100% Pure...",
            content: 275,
            PreviousPrice: 329,
            save: 16,
        },
        {
            id: "sunflower-oil",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9423_800x.jpg?v=1703749253",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9424_800x.jpg?v=1708001213",
            title: "100% Natural Cold",
            content: 290,
            PreviousPrice: 339,
            save: 14,
        },
        {
            id: "black-sesame-oil",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9313_800x.jpg?v=1708001210",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9314_800x.jpg?v=1708001212",
            title: "Black Sesame Oil...",
            content: 368,
            PreviousPrice: 449,
            save: 18,
        },
        {
            id: "white-sesame-oil-classic",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9429_800x.jpg?v=1703849984",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9430_800x.jpg?v=1703849986",
            title: "Buy 100% Pure...",
            content: 275,
            PreviousPrice: 329,
            save: 16,
            hidden: "hidden",
        },
        {
            ImageUrl:
                "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
            title: "Organic Extra Light",
            content: 299,
            PreviousPrice: 369,
            save: 19,
            hidden: "hidden",
        },
        {
            id: "black-mustard-oil",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9304_5e288c25-7779-4d43-b049-30fa89946889_800x.jpg?v=1708001211",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9305_444d3e7e-98ea-43f4-8c19-c4b7f178614e_800x.jpg?v=1708001213",
            title: "Organic Cold Pressed...",
            content: 290,
            PreviousPrice: 339,
            save: 14,
        },
        {
            id: "groundnut-oil",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9331_800x.jpg?v=1708001211",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9332_800x.jpg?v=1708001213",
            title: "100% Pure Organic...",
            content: 580,
            PreviousPrice: 695,
            save: 17,
        },
        {
            id: "organic-extra-virgin-coconut-oil",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9369_800x.jpg?v=1703749125",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9370_800x.jpg?v=1708001197",
            title: "Organic Extra Virgin...",
            content: 449,
            PreviousPrice: 499,
            save: 10,
            hidden: "hidden",
        },
        {
            id: "organic-virgin-coconut-oil",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9339_800x.jpg?v=1708001195",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9340_800x.jpg?v=1708001199",
            title: "100% Pure Coconut...",
            content: 389,
            PreviousPrice: 429,
            save: 9,
            hidden: "hidden",
        },
    ];

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
                        <Link to={"collections/best-seller-cooking-oil"}>
                            <button className="bg-[#855245] text-white w-[210px] h-[45px] rounded-lg hover:text-[#855245] border border-white hover:bg-white transition-colors duration-1000 hover:border hover:border-[#855245]">
                                View All
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-2/3 h-full bg-transparent flex justify-center items-center">
                    <div className="w-full h-full flex justify-center items-center">
                        <Slider
                            ref={slider}
                            {...settings}
                            className="w-full h-screen flex items-center"
                        >
                            {products.map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/collections/best-seller-cooking-oil/products/${item.id}`}
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
        </div>
    );
};

export default CarouselComponent2;
