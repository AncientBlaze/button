/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Nav from "../../src/components/header/Nav";
import Footer from "../../src/components/footer/Footer";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "../../assets/Card3";
import { Link } from "react-router-dom";
import { FaFacebookF, FaPinterest, FaTwitter,FaEnvelope } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../../src/store/cartSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function MagicmanBooster({ price }) {
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(add(product));
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [selectedOption, setSelectedOption] = useState(949);
    const [selectedOption1, setSelectedOption1] = useState("2,056");
    const [selectedOption2, setSelectedOption2] = useState("54%");

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    let sliderRef3 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    const prevSlick = () => {
        sliderRef1.slickPrev();
    };
    const nextSlick = () => {
        sliderRef1.slickNext();
    };
    const prevSlick1 = () => {
        sliderRef3.slickPrev();
    };
    const nextSlick1 = () => {
        sliderRef3.slickNext();
    };
    const [count, setCount] = useState(1);
    const [offerExpanded, setOfferExpanded] = useState(false);

    const products = [
        {
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/ShilajitFront25g_800x.png?v=1711173556",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Shilajitresin_800x.png?v=1711173556",
            title: "Pure Himalayan Shilajit",
            content: 429,
            PreviousPrice: 579,
            save: 26,
        },
        {
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
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9449_800x.jpg?v=1708001248",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Rectangle9450_800x.jpg?v=1708001251",
            title: "100% Pure Black...",
            content: 339,
            PreviousPrice: 430,
            save: 21,
        },
    ];

    const images = [
        {
            img: "https://farmnaturelle.com/cdn/shop/files/1_717e2b24-b57f-4180-8848-8a1f951b183e.jpg?v=1714049827",
            alt: "1st",
        },
        {
            img: "https://farmnaturelle.com/cdn/shop/files/2_5e366ade-1d78-40ec-8a7d-c25a792dcd88.jpg?v=1714049828",
            alt: "2nd",
        },
        {
            img: "https://farmnaturelle.com/cdn/shop/files/3_ce1cb85d-e393-4d1f-9795-d5ed5fc80b01.jpg?v=1714049827",
            alt: "3rd",
        },
        {
            img: "https://farmnaturelle.com/cdn/shop/files/4_bc0e5d8d-188c-4290-afd4-76af88dccf68.jpg?v=1714049827",
            alt: "4th",
        },
        {
            img: "https://farmnaturelle.com/cdn/shop/files/5_0cc6c605-e40d-4bd3-8201-2d782e3ee75e.jpg?v=1714049828",
            alt: "5th",
        },
        {
            img: "https://farmnaturelle.com/cdn/shop/files/6_1d6fe85e-d6e6-453b-b552-916a87f4ecb6.jpg?v=1714049827",
            alt: "6th",
        },
    ];

    return (
        <>
            <Nav />
            <div className="p-10 w-full bg-[#F2F7E3] relative">
                <p className="text-sm absolute top-5 px-10 uppercase cursor-pointer text-gray-500">
                    <Link to="/">Home</Link>
                    /All products
                </p>
                <div className="w-full flex flex-col lg:flex-row-reverse xl:flex-row sm:flex-col justify-center items-start">
                    <div className="w-full sm:w-1/2 px-10 md:px-20">
                        <div className="w-full py-1">
                            <Slider
                                infinite={true}
                                arrows={false}
                                asNavFor={nav2}
                                ref={(slider) => (sliderRef1 = slider)}
                            >
                                {images.map((item, index) => (
                                    <div key={index}>
                                        <img
                                            height="auto"
                                            width="100%"
                                            src={item.img}
                                            alt={item.alt}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </Slider>
                            <div className="w-full">
                                <div className="w-full flex justify-center py-10 items-center gap-3">
                                    <Link
                                        to={
                                            "//www.facebook.com/sharer.php?u=https://farmnaturelle.com/products/stress-buster"
                                        }
                                    >
                                        <i>
                                            <FaFacebookF />
                                        </i>
                                    </Link>
                                    <Link
                                        to={
                                            "//twitter.com/share?url=https://farmnaturelle.com/products/stress-buster&amp;text=STRESS%20Buster"
                                        }
                                    >
                                        <i>
                                            <FaTwitter />
                                        </i>
                                    </Link>

                                    <Link
                                        to={
                                            "//pinterest.com/pin/create/button/?url=https://farmnaturelle.com/products/stress-buster&amp;media=http://farmnaturelle.com/cdn/shop/files/1_e68ddc85-4dd2-4122-ab48-7ee7a756fb17_1024x1024.png?v=1714049317&amp;description=STRESS%20Buster"
                                        }
                                    >
                                        <i>
                                            <FaPinterest />
                                        </i>
                                    </Link>
                                    <Link
                                        to={
                                            "mailto:?subject=Check out this site!&amp;body=https://farmnaturelle.com/products/stress-buster"
                                        }
                                    >
                                        <i>
                                            <FaEnvelope />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-20 relative group">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex justify-between w-full px-10">
                                <button
                                    className="bg-white hover:bg-[#006944] text-[#000000] shadow-md w-10 h-10 rounded-full hover:text-white flex justify-center items-center transition-colors duration-500"
                                    onClick={prevSlick}
                                >
                                    <RiArrowLeftSLine size={32} />
                                </button>
                                <button
                                    className="bg-white hover:bg-[#006944] text-black shadow-md w-10 h-10 rounded-full hover:text-white flex justify-center items-center transition-colors duration-500"
                                    onClick={nextSlick}
                                >
                                    <RiArrowRightSLine size={32} />
                                </button>
                            </div>
                            <Slider
                                infinite={false}
                                asNavFor={nav1}
                                ref={(slider) => (sliderRef2 = slider)}
                                slidesToShow={4}
                                slidesToScroll={1}
                                arrows={false}
                                dots={false}
                                focusOnSelect={true}
                            >
                                {images.map((item, index) => (
                                    <div key={index}>
                                        <img
                                            height={120}
                                            width={120}
                                            src={item.img}
                                            alt={item.alt}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="flex flex-col font-bold font-jost justify-between">
                        <div className="text-3xl px-2 font-bold">
                            Magical Man Booster
                        </div>
                        <div className="px-2 py-5 flex gap-2 justify-start font-light text-sm items-center">
                            <span className="flex gap-2">
                                <em>
                                    <svg
                                        className="fill-[#DEDEDE] size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 475.075 475.075"
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"></path>
                                        </g>
                                    </svg>
                                </em>
                                <em>
                                    <svg
                                        className="fill-[#DEDEDE] size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 475.075 475.075"
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"></path>
                                        </g>
                                    </svg>
                                </em>
                                <em>
                                    <svg
                                        className="fill-[#DEDEDE] size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 475.075 475.075"
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"></path>
                                        </g>
                                    </svg>
                                </em>
                                <em>
                                    <svg
                                        className="fill-[#DEDEDE] size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 475.075 475.075"
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"></path>
                                        </g>
                                    </svg>
                                </em>
                                <em>
                                    <svg
                                        className="fill-[#DEDEDE] size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        id="Capa_1"
                                        x="0px"
                                        y="0px"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 475.075 475.075"
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <path d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704 c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706 l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136 c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386 c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136 c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"></path>
                                        </g>
                                    </svg>
                                </em>
                            </span>
                            <p>0 (0 Reviews)</p>
                        </div>
                        <div className="text-[#313131] text-3xl font-jost font-semibold flex items-center gap-2 bg-[#F2F7E3] p-5">
                            <p>Rs.{selectedOption}.00 </p>
                            <span className="text-sm line-through text-red-700 font-normal">
                                Rs.{selectedOption1}.00
                            </span>
                            <div className="scale-75 px-4 p-1 bg-[#00641C] rounded-xl text-white font-bold text-2xl">
                                {selectedOption2}
                            </div>
                        </div>
                        <div className="text-[#313131] font-jost font-semibold py-10">
                            <ul>
                                <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/np_tick_1308418_000000_svg.svg?v=1696564417)] bg-no-repeat bg-[1%] p-2 px-10">
                                    Shatavari's Natural Power
                                </li>
                                <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/np_tick_1308418_000000_svg.svg?v=1696564417)] bg-no-repeat bg-[1%] p-2 px-10">
                                    Safed Musli to Improve Performance
                                </li>
                                <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/np_tick_1308418_000000_svg.svg?v=1696564417)] bg-no-repeat bg-[1%] p-2 px-10">
                                    Shilajit to Your Rescue
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>Size</p>
                            <div className="font-light text-sm flex gap-2">
                                <select
                                    className="border border-[#006944] py-2 text-left rounded-lg w-1/2 px-3 outline-none"
                                    onChange={(e) => {
                                        setSelectedOption(e.target.value);
                                        let options = {
                                            949: {
                                                price: "2056",
                                                discount: "54%",
                                            },
                                            1895: {
                                                price: "4,355",
                                                discount: "56%",
                                            },
                                            2845: {
                                                price: "6,812",
                                                discount: "58%",
                                            },
                                        };
                                        const selectedoption =
                                            options[e.target.value];
                                        var selected = selectedoption;
                                        setSelectedOption1(selected.price);
                                        setSelectedOption2(selected.discount);
                                    }}
                                >
                                    <option value={949}>
                                        1 Month Course- 1+1 Free
                                    </option>
                                    <option value={1895}>
                                        2 Month Course- 2+2 Free
                                    </option>
                                    <option value={2845}>
                                        3 Month Course- 3+3 Free
                                    </option>
                                </select>
                                <div className="flex gap-2 justify-center items-center w-1/3 border border-[#006944] rounded-lg px-5">
                                    <button
                                        className="w-1/2 py-2 px-3 flex justify-center"
                                        onClick={() => {
                                            if (count > 1) {
                                                setCount(count - 1);
                                            }
                                        }}
                                    >
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_2.svg?v=1696501243"
                                            alt=""
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                        />
                                    </button>
                                    <div className="text-2xl text-[#006944] font-medium w-full h-full flex justify-center items-center border-l border-r border-black">
                                        {count}
                                    </div>
                                    <button
                                        className="w-1/2 py-2 px-3 flex justify-center"
                                        onClick={() => {
                                            setCount(count + 1) &&
                                                dispatch(
                                                    increaseQuantity(
                                                        cartProduct.id,
                                                    ),
                                                );
                                        }}
                                    >
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame.svg?v=1696501243"
                                            alt=""
                                            width="auto"
                                            height="auto"
                                            loading="lazy"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full bg-[#006944] text-white my-3 py-1 rounded-lg flex justify-center items-center">
                                <div className="flex gap-2 py-3 justify-center items-center">
                                    <button
                                        onClick={() => {
                                            addToCart({
                                                title: "Magic Man Booster",
                                                ImageUrl:
                                                    "https://farmnaturelle.com/cdn/shop/files/1_717e2b24-b57f-4180-8848-8a1f951b183e.jpg?v=1714049827",
                                                content: selectedOption * count,
                                                quantity: count,
                                                save: "Save 23%",
                                                hidden: "hidden",
                                            });
                                        }}
                                        className="uppercase"
                                    >
                                        Add To Cart
                                    </button>
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_3.svg?v=1696577007"
                                        alt=""
                                        width="auto"
                                        height="auto"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-base text-black font-jost font-semibold px-5 py-2 bg-[#F2F7E3]">
                            <p className="text-lg">Offers</p>
                            <p className="border-b border-[#006944] py-5">
                                Get an extra 6% off on orders above ₹3000 using
                                code ABV3.
                            </p>
                            <p className="border-b border-[#006944] py-5">
                                Get an extra 9% off on orders above ₹5000 using
                                code ABV5.
                            </p>
                            <div>
                                <div
                                    className={`${
                                        offerExpanded ? "block" : "hidden"
                                    }`}
                                >
                                    <p className="border-b border-[#006944] py-5">
                                        Buy one, get one free on raw honey at
                                        1549 only.
                                    </p>
                                    <p className="border-b border-[#006944] py-5">
                                        Get a free 250g amla candy worth ₹550 on
                                        orders above ₹4000.
                                    </p>
                                </div>
                                <div
                                    role="button"
                                    className="flex justify-start items-center"
                                    onClick={() => {
                                        setOfferExpanded(!offerExpanded);
                                        document.getElementById(
                                            "offer",
                                        ).innerHTML = offerExpanded
                                            ? "More offers"
                                            : "Less offers";
                                    }}
                                >
                                    <span className="py-3 pr-2">
                                        {offerExpanded ? (
                                            <LuChevronUp />
                                        ) : (
                                            <LuChevronDown />
                                        )}
                                    </span>
                                    <p id="offer">More offers</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-2">
                            <div className="flex w-full justify-between items-center text-[#757473] font-normal">
                                <p className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Group_6.svg?v=1696589466)] bg-no-repeat bg-[1%] px-10">
                                    Free shipping on all orders
                                </p>
                                <p className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Group_6.svg?v=1696589466)] bg-no-repeat bg-[1%] px-10">
                                    COD Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen p-10 bg-[#F2F7E3]">
                <div className="w-full h-[1px] bg-[#F2F7E3]">
                    <div className="w-full px-16 py-5 bg-[#F2F7E3]">
                        <Tabs>
                            <TabList className="flex justify-between py-2">
                                <Tab className="outline-none cursor-pointer font-jost text-3xl text-[#006944] focus:underline">
                                    PRODUCT DETAILS
                                </Tab>
                                <Tab className="outline-none cursor-pointer font-jost text-3xl text-[#006944] focus:underline">
                                    WHO SHOULD TAKE IT?
                                </Tab>
                                <Tab className="outline-none cursor-pointer font-jost text-3xl text-[#006944] focus:underline">
                                    KEY INGREDIENTS
                                </Tab>
                            </TabList>
                            <TabPanel className="text-lg">
                                <p className="py-5 text-sm text-[#727271]">
                                    Experience holistic enhancements for your
                                    intimate well-being with our herbal
                                    capsules. Crafted from pure, organic
                                    ingredients, our capsules offer a natural
                                    path to invigorate your sexual health.
                                    Discover a natural way to elevate your
                                    vitality, fostering a deeper connection and
                                    enriched wellness.{" "}
                                </p>
                                <p></p>
                                <ul className="text-base">
                                    <li className="text-[#727271] py-2 px-10 bg-[url(https://farmnaturelle.com/cdn/shop/files/Vector_7.svg?v=1696824655)] bg-no-repeat bg-[1%]">
                                        <b className="text-black">
                                            Shatavari's Natural Power:
                                        </b>{" "}
                                        Relieve stress, soothe anxiety, and
                                        ignite passion effortlessly. Discover
                                        newfound vitality and endurance in men
                                        while enhancing libido in both genders.{" "}
                                    </li>
                                    <li className="text-[#727271] py-2 px-10 bg-[url(https://farmnaturelle.com/cdn/shop/files/Vector_7.svg?v=1696824655)] bg-no-repeat bg-[1%]">
                                        <b>
                                            <span className="text-black">
                                                Safed Musli to Improve
                                                Performance:
                                            </span>
                                        </b>{" "}
                                        Elevate your desire with increased
                                        libido while promoting healthier
                                        testosterone levels. Unleash your
                                        potential for enhanced sexual
                                        performance the pure, organic way.{" "}
                                    </li>
                                    <li className="text-[#727271] py-2 px-10 bg-[url(https://farmnaturelle.com/cdn/shop/files/Vector_7.svg?v=1696824655)] bg-no-repeat bg-[1%]">
                                        <b className="text-black">
                                            Shilajit to Your Rescue:
                                        </b>{" "}
                                        This ancient treasure ignites
                                        testosterone production, enhancing your
                                        sexual prowess. Embrace the power of
                                        pure, organic herbal capsules to
                                        invigorate your intimate moments
                                        effortlessly.{" "}
                                    </li>
                                </ul>
                                <p></p>
                            </TabPanel>

                            <TabPanel>
                                <p className="py-5 text-sm text-[#727271]">
                                    All men, women of all ages and children can
                                    consume it.
                                </p>
                            </TabPanel>

                            <TabPanel>
                                <p className="py-5 text-sm text-[#727271]">
                                    Satavari Dry, Shafed Musli, Shilajeet, Konch
                                    Seed, Watermelon Seed, Aloevera,
                                    Ashwagandha, Beetroot
                                </p>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="h-[130vh] w-full">
                <div className="w-full h-full text-center py-2 font-jost relative">
                    <p className="text-[gray] py-2">Benefits</p>
                    <p className="text-4xl font-medium text-[#006944]">
                        <span className="text-black">Benefits Of </span>
                        Magical Man Booster{" "}
                    </p>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] flex-col items-center justify-center">
                        <div className="w-full flex items-center rounded-[50%] bg-[#DEEEC0]">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/B_Magical_Man_Booster.png?v=1703237231"
                                alt="Benefits"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute top-0 left-0 -translate-x-[82%] w-full flex flex-row-reverse h-auto text-sm">
                            <div className="flex items-start gap-1">
                                <div className="w-full text-wrap">
                                    <div className="w-auto text-center flex flex-col justify-center items-center -my-5">
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_14857505.png?v=1696832200"
                                            title=""
                                            width="52px"
                                            height="42px"
                                            loading="lazy"
                                        />
                                        <h4 className="text-2xl text-[#006944]">
                                            Improving Sexual Wellness with
                                            Kaunch Seeds
                                        </h4>
                                        <p>
                                            Kaunch seeds are a natural
                                            aphrodisiac that ignites desire and
                                            enhances virility. Boosting both
                                            sperm count and motility, it
                                            elevates your intimate wellness.
                                            Elevate your confidence with
                                            increased semen production.{" "}
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_28630.png?v=1696832266"
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 translate-x-[83%] w-full flex flex-row-reverse h-auto">
                            <div className="flex items-start gap-1">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_28630_1.png?v=1696833635"
                                    alt="arrow"
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                />
                                <div className="w-full">
                                    <div className="w-full -my-5 text-center flex flex-col justify-center items-center text-sm">
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/weight.png?v=1696832154"
                                            title=""
                                            width="42px"
                                            height="auto"
                                            loading="lazy"
                                        />
                                        <h4 className="text-2xl text-[#006944]">
                                            All-in-One Intimacy Solutions
                                        </h4>
                                        <p>
                                            Rediscover your desires, nurture
                                            intimate moisture, and alleviate
                                            discomfort during intimacy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-0 -translate-x-[92%] translate-y-32 w-full flex flex-reverse h-auto">
                            <div className="flex items-start gap-1">
                                <div className="w-full text-wrap">
                                    <div className="w-auto text-center flex flex-col justify-center items-center -my-5">
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_14857508.png?v=1696832109"
                                            title=""
                                            width="50px"
                                            height="50px"
                                            loading="lazy"
                                        />
                                        <h4 className="text-2xl text-[#006944]">
                                            Nurturing Wellness Inside Out
                                        </h4>
                                        <p>
                                            Crafted from pure, natural
                                            ingredients, these capsules serve as
                                            a gentle tonic for your general
                                            health. Embrace the power of
                                            nature's goodness in every capsule,
                                            revitalizing your body and
                                            invigorating your spirit.{" "}
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_28631.png?v=1696833634"
                                    alt="arrow"
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 translate-x-[82%] translate-y-20 w-full flex flex-row-reverse h-auto">
                            <div className="flex items-start gap-1">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_28631_1.png?v=1696833635"
                                    alt="arrow"
                                    width="auto"
                                    height="auto"
                                    loading="lazy"
                                />
                                <div className="w-full">
                                    <div className="w-full -my-5 text-center flex flex-col justify-center items-center text-sm">
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856851_1.png?v=1696831956"
                                            title=""
                                            width="42px"
                                            height="auto"
                                            loading="lazy"
                                        />
                                        <h4 className="text-2xl text-[#006944]">
                                            Elevate Intimate Moments with
                                            Ashwagandha
                                        </h4>
                                        <p>
                                            AshwagandhaEnhance your intimacy
                                            naturally and embrace a fulfilling
                                            connection. Ashwagandha, a
                                            time-honored herb, is renowned for
                                            kindling desire, heightening
                                            pleasure, and boosting performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center px-10 text-xl">
                <p>USAGE</p>
                <p className="text-5xl font-semibold">
                    How To <span className="text-[#006944]">Use</span>
                </p>
                <div className="flex justify-around items-center w-full py-36">
                    <div className="w-[30%] h-48 bg-[#006944] rounded-xl text-8xl relative">
                        <p className="absolute -top-10 left-10 transform -translate-x-1/2 -translate-y-1/2 text-[#D1E0D6]">
                            01
                        </p>
                        <img
                            className="absolute -top-12 left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1_Magical_Man_Booster.png?v=1703237213"
                            alt=""
                        />
                        <p className="text-[#D1E0D6] text-3xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 text-nowrap scale-75">
                            Shake well before use
                        </p>
                    </div>
                    <div className="w-[30%] h-48 bg-[#99C459] rounded-xl text-8xl relative">
                        <p className="absolute -top-10 left-10 transform -translate-x-1/2 -translate-y-1/2 text-[#D1E0D6]">
                            02
                        </p>
                        <img
                            className="absolute -top-12 left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/2_Magical_Man_Booster.png?v=1703237213"
                            alt=""
                        />
                        <p className="text-[#D1E0D6] text-3xl font-semibold absolute top-1/2 left-0 transform scale-75">
                            Mix 25ml of juice in a glass of water.
                        </p>
                    </div>
                    <div className="w-[30%] h-48 bg-[#006944] rounded-xl text-8xl relative">
                        <p className="absolute -top-10 left-10 transform -translate-x-1/2 -translate-y-1/2 text-[#D1E0D6]">
                            03
                        </p>
                        <img
                            className="absolute -top-12 left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/3_Magical_Man_Booster.png?v=1703237213"
                            alt=""
                        />
                        <p className="text-[#D1E0D6] text-3xl font-semibold absolute top-0 left-0 transform translate-y-20 scale-75">
                            Take empty stomach in the morning and 1 hour post
                            dinner
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#DEEACD] h-auto text-center text-[gray] font-semibold font-jost py-10">
                <p className="uppercase py-5">result</p>
                <p className="text-4xl text-black">What Will You Achieve</p>
                <div>
                    <div className="flex justify-around py-10 px-10">
                        <div className="w-[23%] h-32 bg-white rounded-3xl text-center text-[#B3B3B3] font-light p-5 relative">
                            <div className="text-7xl text-[#006944] absolute -top-7 left-0">
                                94
                                <span className="font-playfair text-2xl font-extrabold">
                                    %
                                </span>
                            </div>
                            <p className="text-xl text-left absolute top-1/2 left-0 px-5">
                                Felt improvement in digestive system
                            </p>
                        </div>
                        <div className="w-[23%] h-32 bg-white rounded-3xl text-center text-[#B3B3B3] font-light p-5 relative">
                            <div className="text-7xl text-[#006944] absolute -top-7  left-0">
                                93
                                <span className="font-playfair text-2xl font-extrabold">
                                    %
                                </span>
                            </div>
                            <p className="text-xl text-left absolute top-1/2 left-0 px-5">
                                Observed huge improvement in Energy Levels
                            </p>
                        </div>
                        <div className="w-[23%] h-32 bg-white rounded-3xl text-center text-[#B3B3B3] font-light p-5 relative">
                            <div className="text-7xl text-[#006944] absolute -top-7  left-0">
                                93
                                <span className="font-playfair text-2xl font-extrabold">
                                    %
                                </span>
                            </div>
                            <p className="text-xl text-left absolute top-1/2 left-0 px-5">
                                Noticed improvement in skin health and glow
                            </p>
                        </div>
                        <div className="w-[23%] h-32 bg-white rounded-3xl text-center text-[#B3B3B3] font-light p-5 relative">
                            <div className="text-7xl text-[#006944] absolute -top-7  left-0">
                                93
                                <span className="font-playfair text-2xl font-extrabold">
                                    %
                                </span>
                            </div>
                            <p className="text-xl text-left absolute top-1/2 left-0 px-5">
                                Noticed Noticed improvement in Joints
                                health/Joint pain
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-auto text-center text-[gray] font-medium font-jost py-10">
                <p className="py-2">COMPARISON</p>
                <p className="text-4xl text-black">
                    See why Farm Naturelle is
                    <span className="text-[#006944]"> 100 times Better</span>
                </p>
                <div className="w-full flex flex-col lg:flex-row lg:justify-around sm:px-11 sm:py-5">
                    <div className="w-1/2 h-auto text-[#006944] rounded-xl text-center font-semibold font-jost">
                        <p className="text-3xl py-10">
                            Farm Naturelle Men Wellness Juice
                        </p>
                        <div className="w-full flex flex-col justify-center items-center font-light">
                            <p className="bg-[#006944] text-left w-3/4 rounded-lg px-10 py-5 text-white">
                                Organic
                            </p>
                            <p className="bg-[url(https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_9.png?v=1703153821)] bg-[1%] bg-no-repeat text-left w-3/4 rounded-lg px-10 py-5 text-[#006944]">
                                Pure{" "}
                            </p>
                            <p className="bg-[#006944] text-left w-3/4 rounded-lg px-10 py-5 text-white">
                                Unprocessed, Raw
                            </p>
                            <p className="bg-[url(https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_9.png?v=1703153821)] bg-[1%] bg-no-repeat text-left w-3/4 rounded-lg px-10 py-5 text-[#006944]">
                                No added sugar
                            </p>
                            <p className="bg-[#006944] text-left w-3/4 rounded-lg px-10 py-5 text-white">
                                High Nutritional Value
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2 h-48 text-[#006944] rounded-xl text-center font-semibold font-jost">
                        <p className="text-3xl py-10">Normal Juice</p>
                        <div className="w-full flex flex-col justify-center items-center font-light">
                            <p className="bg-[url(https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ic_baseline-question-mark.png?v=1703226972)] bg-no-repeat bg-[1%] bg-[#006944] text-left w-3/4 rounded-lg px-10 py-5 text-white">
                                Non-organic
                            </p>
                            <p className="bg-[url(https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ic_baseline-question-mark.png?v=1703226972)] bg-no-repeat bg-[1%] bg-white text-left w-3/4 rounded-lg px-10 py-5 text-[#006944]">
                                Added Chemicals
                            </p>
                            <p className="bg-[url(https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ic_baseline-question-mark.png?v=1703226972)] bg-no-repeat bg-[1%] bg-[#006944] text-left w-3/4 rounded-lg px-10 py-5 text-white">
                                Filtered, heated, pasteurized
                            </p>
                            <p className="bg-[url(https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ic_baseline-question-mark.png?v=1703226972)] bg-no-repeat bg-[1%] bg-white text-left w-3/4 rounded-lg px-10 py-5 text-[#006944]">
                                Added Sugar
                            </p>
                            <p className="bg-[url(https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ic_baseline-question-mark.png?v=1703226972)] bg-no-repeat bg-[1%] bg-[#006944] text-left w-3/4 rounded-lg px-10 py-5 text-white">
                                Less Nutritional Value
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-auto bg-[url(https://farmnaturelle.com/cdn/shop/files/div.icon-real-deal.jpg?v=1696929748)] font-jost text-center py-10 text-white">
                <p>WHY FARM NATURELLE?</p>
                <p className="text-5xl">Here’s why we’re the real deal.</p>
                <div className="w-full flex justify-around items-center mt-10 px-32">
                    <div className="h-44 border border-[gray] w-full rounded-full backdrop-blur-sm m-5 flex flex-col justify-center items-center">
                        <img
                            src="https://farmnaturelle.com/cdn/shop/files/1.svg?v=1696938023"
                            alt="organic"
                        />
                        <p>Own Organic Farm</p>
                    </div>
                    <div className="h-44 border border-[gray] w-full rounded-full backdrop-blur-sm m-5 flex flex-col justify-center items-center">
                        <img
                            src="https://farmnaturelle.com/cdn/shop/files/2.svg?v=1696938023"
                            alt="box"
                        />
                        <p>Own PACKAGING UNIT</p>
                    </div>
                    <div className="h-44 border border-[gray] w-full rounded-full backdrop-blur-sm m-5 flex flex-col justify-center items-center">
                        <img
                            src="https://farmnaturelle.com/cdn/shop/files/3.svg?v=1696938023"
                            alt="honey"
                        />
                        <p>Own Apiary (I5K Honey Boxes )</p>
                    </div>
                    <div className="h-44 border border-[gray] w-full rounded-full backdrop-blur-sm m-5 flex flex-col justify-center items-center">
                        <img
                            src="https://farmnaturelle.com/cdn/shop/files/4.svg?v=1696938023"
                            alt=""
                        />
                        <p>Own manufacturing Unit</p>
                    </div>
                    <div className="h-44 border border-[gray] w-full rounded-full backdrop-blur-sm m-5 flex flex-col justify-center items-center">
                        <img
                            src="https://farmnaturelle.com/cdn/shop/files/5.svg?v=1696938023"
                            alt=""
                        />
                        <p>Ethical Certified</p>
                    </div>
                </div>
                <div className="w-full py-10">
                    <button
                        className="bg-transparent text-white border border-white px-20 py-3 rounded-xl"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        Buy now
                    </button>
                </div>
            </div>
            <div className="w-full h-auto text-center text-[#006944] text-4xl py-10 font-jost">
                <div>
                    <p>
                        You May{" "}
                        <span className="text-[#006944] font-semibold">
                            Like These
                        </span>
                    </p>
                </div>
                <div className="w-full h-auto px-20 relative !flex !justify-center py-10 bg-[#F8F7F1]">
                    <button
                        className="absolute top-1/2 left-5 bg-white hover:bg-[#006944] text-black w-10 h-10 rounded-full hover:text-white flex justify-center items-center transition-colors duration-500 z-10"
                        onClick={prevSlick1}
                    >
                        <RiArrowLeftSLine color="black" size={28} />
                    </button>
                    <button
                        className="absolute top-1/2 right-5 bg-white hover:bg-[#006944] text-black w-10 h-10 rounded-full hover:text-white flex justify-center items-center transition-colors duration-500 z-10"
                        onClick={nextSlick1}
                    >
                        <RiArrowRightSLine size={28} />
                    </button>
                    <Slider
                        className="w-full bg-[#F8F7F1]"
                        arrows={false}
                        infinite={true}
                        slidesToScroll={4}
                        slidesToShow={4}
                        ref={(slider) => (sliderRef3 = slider)}
                    >
                        {products.map((item, index) => (
                            <div key={index}>
                                <Card key={index} id={nanoid()} {...item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Footer />
        </>
    );
}
