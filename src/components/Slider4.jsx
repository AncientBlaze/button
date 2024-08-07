import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";
import Slider from "react-slick";
import React from "react";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";

const CarouselComponent4 = () => {
    const products = [
        {
            id: "body-revitlizer-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_79cf5e46-0c60-4e75-aace-881115784fd3_800x.png?v=1714052859",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_56f02ccc-0613-4129-a1fb-53080772d02f_800x.png?v=1714052859",
            title: "Body Revitilizer Juice",
            PreviousPrice: 0,
            content: 0,
            hidden: "hidden",
        },
        {
            id: "slimfit-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_322aa64c-c3a9-4bc8-a4b4-958d1435158d_800x.jpg?v=1714050510",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_4b094ce5-cde7-42fe-aefb-65ca541ddfa3_800x.jpg?v=1714050510",
            title: "Slim Fit Juice",
            PreviousPrice: 2156,
            content: 999,
            hidden: null,
        },
        {
            id: "immunity-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_c664de08-e1df-42c1-bef6-ed9146acad00_800x.png?v=1714050546",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_5b2a26c1-6eee-435b-a91e-e522528e9c7b_800x.png?v=1714050547",
            title: "Strongest Ayurvedic 6...",
            PreviousPrice: 2156,
            content: 999,
            hidden: null,
        },
        {
            id: "easing-diabetes",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_446dd4ae-e8a1-4add-8851-a6507a512b59_800x.png?v=1714049445",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_288428b1-77a0-46c6-8cee-6abfac33eae1_800x.png?v=1714049444",
            title: "Easing Diabetes",
            PreviousPrice: 2056,
            content: 949,
            hidden: "hidden",
        },
        {
            id: "giloy-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_a4028fcd-59ab-4f15-9e4f-4010b8a572b4_800x.png?v=1714050634",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_59a381d1-6441-4b21-9947-ba3e420b612e_800x.png?v=1714050635",
            title: "100% Pure Herbal...",
            PreviousPrice: 1856,
            content: 849,
            hidden: "hidden",
        },
        {
            id: "amla-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_b9ab028d-a331-48f9-9751-93f109576017_800x.jpg?v=1714050669",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_f23b1409-7a41-46ca-a0c4-b2cb44a1ea76_800x.jpg?v=1714050668",
            title: "Amla Juice 100%",
            PreviousPrice: 1756,
            content: 799,
            hidden: "hidden",
        },
        {
            id: "neem-juice",
            save: 55,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_1c415fe2-6230-4092-9385-ff713a887201_800x.jpg?v=1714052494",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_dc9c6f66-0bf7-443f-9544-f6576284b547_800x.jpg?v=1714052493",
            title: "Neem Juice",
            PreviousPrice: 1656,
            content: 749,
            hidden: "hidden",
        },
        {
            id: "tulsi-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_004df024-ed33-458d-aea1-6e51827032ab_800x.jpg?v=1714052517",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_b510d237-9eec-4cbb-abd8-0a7272e05582_800x.jpg?v=1714052517",
            title: "Tulsi Juice Most...",
            PreviousPrice: 1956,
            content: 899,
            hidden: "hidden",
        },
        {
            id: "aloevera-wheatgrass-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_047add8d-cc48-4702-8731-35cf403a0d56_800x.jpg?v=1714052542",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_29994c0f-65e9-4967-8bb2-272a7f1b34ec_800x.jpg?v=1714052541",
            title: "Aloevera WheatGrass J...",
            PreviousPrice: 1956,
            content: 899,
            hidden: "hidden",
        },
        {
            id: "aloevera-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_37e192c9-2780-485f-8b49-ef97b113677d_800x.jpg?v=1714052560",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/2_37e192c9-2780-485f-8b49-ef97b113677d_800x.jpg?v=1714052560",
            title: "Aloevera Juice Stronge...",
            PreviousPrice: 1756,
            content: 799,
            hidden: "hidden",
        },
        {
            id: "triphala-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_bc280e4b-ed7d-4208-bfba-bb75b1409910_800x.jpg?v=1714052582",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_9b65e138-da6d-46f4-b167-34d9acec905f_800x.jpg?v=1714052583",
            title: "Triphala Juice",
            PreviousPrice: 1956,
            content: 899,
            hidden: "hidden",
        },
        {
            id: "kidney-stone-crusher-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_9437b3be-2b5d-4708-9eb0-5eb48f0f7aa4_800x.jpg?v=1714049205",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_7b84664c-9194-4da1-bfe7-4d66670a0cb0_800x.jpg?v=1714049205",
            title: "Ayurvedic Kidney Ston...",
            PreviousPrice: 2156,
            content: 999,
        },
        {
            id: "noni-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_facb5c7e-9bc8-475b-adda-d62911bf3546_800x.jpg?v=1714052666",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_4f168fe7-e577-4de0-8730-27ff2e945e2c_800x.jpg?v=1714052667",
            title: "Noni Juice Supports...",
            PreviousPrice: 2156,
            content: 999,
            hidden: "hidden",
        },
        {
            id: "body-revitlizer-juice",
            save: 54,
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/2_79cf5e46-0c60-4e75-aace-881115784fd3_800x.png?v=1714052859",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/1_56f02ccc-0613-4129-a1fb-53080772d02f_800x.png?v=1714052859",
            title: "Body Revitilizer Juice",
            PreviousPrice: 0,
            content: 0,
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
    }
    return (
        <div className="w-full h-auto bg-[#FAF9F4] py-10">
            <div className="w-full h-screen flex">
                <div className="w-1/3 h-full flex justify-center items-center">
                    <div className="w-3/4 h-2/4 p-5">
                        <div className="text-left text-[#855245] font-jost font-semibold text-4xl">
                            Herbal Juices
                        </div>
                        <div className="text-left text-[#855245] text-sm pt-[45px] my-2">
                            Pure, Organic herbal juices sourced from farm ingredients has no added sugar.
                        </div>
                        <div className="text-left w-32 h-20 my-2 flex justify-center items-center gap-2 relative">
                            <button className="border border-[#855245] p-3 rounded-full cursor-pointer text-sm text-[#7A7976] text-center" onClick={() => slider?.current?.slickPrev()} tabIndex={-1}><CgArrowLeft /></button>
                            <button className="border border-[#855245] p-3 rounded-full cursor-pointer text-sm text-[#7A7976] text-center" onClick={() => slider?.current?.slickNext()} tabIndex={-1}><CgArrowRight /></button>
                        </div>
                        <Link to={"/collections/herbal-juice"}>
                            <button className="bg-[#855245] text-white w-[210px] h-[45px] rounded-lg hover:text-[#855245] border border-white hover:bg-white transition-colors duration-1000 hover:border hover:border-[#855245]">Shop Now</button>
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
                            {
                                products.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={`collections/herbal-juice/products/${item.id}`}
                                    >
                                        <CardComponent
                                            save={item.save}
                                            PlaceHolder={item.PlaceHolder}
                                            ImageUrl={item.ImageUrl}
                                            title={item.title}
                                            PreviousPrice={item.PreviousPrice}
                                            content={item.content}
                                        />
                                    </Link>
                                ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselComponent4;
