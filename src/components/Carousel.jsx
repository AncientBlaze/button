import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Consult from "./Consult.jsx";

import { Link } from "react-router-dom";

const Carousel = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        dots: true,
        dotsClass: "slick-dots",
        arrows: false,
    };
    return (
        <>
            <Slider
                className="bg-[#006944] selection:border-none active:border-none"
                {...settings}
            >
                <div className="relative h-full">
                    <img
                        className="h-screen"
                        src={"./Image1.jpg"}
                        alt="image"
                    />
                    <div className="absolute h-[344px] w-[561px] top-[30px] left-[51px] flex justify-center items-center font-jost text-2xl">
                        <div className="font-[open-sans] font-semibold text-wrap">
                            <h2 className="text-[20px]">
                                The most Trusted Ayurvedic &amp; Organic Brand
                            </h2>
                            <h3 className="text-7xl py-5 font-[open-sans] font-semibold">
                                Say No to Health Issues,
                                <span className="text-[#006944]">
                                    Yes to Life
                                </span>
                            </h3>
                            <h3>
                                <div className="flex my-5 items-center font-light gap-2">
                                    <img
                                        className="h-[22px] w-[111px]"
                                        src="https://farmnaturelle.com/cdn/shop/files/Frame_30544.png?v=1695641721"
                                        alt=""
                                        width={"auto"}
                                    />
                                    <p className="text-[20px]">
                                        Over 3 lacs + Happy Customers
                                    </p>
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="h-screen"
                        src={"./Image2.webp"}
                        alt="image"
                    />
                    <div className="absolute top-0 translate-x-[-50%] left-1/2 overflow-hidden text-white">
                        <div className="font-[open-sans] font-semibold text-nowrap pb-20 h-auto w-full text-center pt-5 tabindex-0">
                            <h2 className="text-[20px]">
                                Healthy Living Starts with Healthy Eating
                            </h2>
                            <h3 className="text-7xl py-5 font-[open-sans] font-semibold text-wrap">
                                From Farm To{" "}
                                <span className="text-[#C1CE30]">
                                    Your Table
                                </span>
                            </h3>
                            <h3>
                                <div className="flex my-5 items-center font-light gap-2 justify-center">
                                    <img
                                        className="h-[22px] w-[111px]"
                                        src="https://farmnaturelle.com/cdn/shop/files/Frame_30544.png?v=1695641721"
                                        alt=""
                                        width={"auto"}
                                    />
                                    <p className="text-[20px]">
                                        Over 3 lacs + Happy Customers
                                    </p>
                                </div>
                                <br />
                                <Link to={"/collections"}>
                                <span className="transition-all duration-300 ease-in-out border rounded-md border-white text-white bg-transparent px-16 py-5 font-jost text-semibold hover:text-[#006944] hover:bg-white">
                                    Explore our Products
                                </span>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="h-screen"
                        src={"./Image3.jpg"}
                        alt="image"
                    />
                    <div className="absolute top-0 translate-x-[-50%] left-1/2 overflow-hidden text-white">
                        <div className="font-[open-sans] font-semibold text-nowrap pb-20 h-auto w-full text-center pt-5 tabindex-0">
                            <h2 className="text-[20px]">
                                Healthy Living Starts with Healthy Eating
                            </h2>
                            <h3 className="text-7xl py-5 font-[open-sans] font-semibold text-nowrap">
                                Go Organic With{" "}
                                <span className="text-[#C1CE30]">
                                    20+ Acre of Farm
                                </span>
                            </h3>
                            <h3>
                                <br />
                                <Link to={"/pages/our-farm"}>
                                    <span className="transition-all duration-300 ease-in-out border rounded-md border-white text-white bg-transparent px-12 py-3 font-jost text-semibold hover:text-[#006944] hover:bg-white">
                                        Visit Our Farm
                                    </span>
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="h-screen"
                        src={"./Image4.jpg"}
                        alt="image"
                    />
                    <span className="absolute top-0 left-0 h-full w-full px-10 m-10 font-[open-sans] ">
                        <Consult
                            header={
                                <p className="text-[20px] uppercase font-semibold">
                                    The Most Trusted Ayurvedic
                                </p>
                            }
                            notKnown={
                                <>
                                    <div className="flex text-[70px]">
                                        <span className="text-[#C1CE30]">
                                            Don&apos;t Delay
                                        </span>
                                        &nbsp;Your
                                    </div>
                                    <div className="text-white py-6 text-nowrap text-[open-sans] text-[70px]">
                                        Health Concerns !
                                    </div>
                                </>
                            }
                            para={
                                <p className="text-[20px]">
                                    Consult With Acharayas(Doctors)and get
                                </p>
                            }
                        />
                    </span>
                </div>
            </Slider>
        </>
    );
};

export default Carousel;
