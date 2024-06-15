import Slider from "react-slick";
import ReviewSlides from "./ReviewSlides";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import React from "react";
import { Link } from "react-router-dom";
function Review() {
    const slider = React.useRef(null);
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dotsClass: "slick-do",
        dots: true,
    };
    return (
        <div>
            <div className="w-full h-[150vh] bg-[#006944] flex relative justify-around px-28 py-16">
                <div className="overflow-hidden bg-transparent h-full w-1/2 hover:shadow-2xl text-4xl font-jost font-medium text-pretty text-left text-white p-1">
                    <p className="text-sm font-jost font-light text-yellow-500">
                        WELCOME TO FARM NATURELLE
                    </p>
                    <p>
                        Here Nature&#39;s Purest Treasures are nurtured and
                        harvested for your well-being.
                    </p>
                    <img
                        className="aspect-video w-full h-screen object-cover py-5"
                        src="https://farmnaturelle.com/cdn/shop/files/ABOUT_2_280x.jpg?v=1703232158"
                        alt=""
                    />
                </div>
                <div className="overflow-hidden bg-transparent h-full w-1/2 hover:shadow-2xl font-jost font-medium text-pretty text-left text-white p-1">
                    <img
                        className="aspect-video w-full h-screen object-cover py-5"
                        src="https://farmnaturelle.com/cdn/shop/files/Rectangle_9245_280x.jpg?v=1703160482"
                        alt=""
                    />
                    <div className="px-2">
                        <p className="text-[14px]">
                            At Farm Naturelle, we believe that the path to true
                            wellness begins with embracing the gifts of nature.
                            Through our organic farming methods and sustainable
                            approach, we deliver a diverse range of products
                            that are not only good for you but also good for the
                            planet. Join us as we cultivate a healthier future,
                            one harvest at a time, and savor the authentic
                            flavors of Farm Naturelle that nourish both body and
                            soul.
                        </p>
                        <div className="flex items-center gap-5 py-1">
                            <Link to={"pages/about-us"}>
                                <button className="text-white border border-white px-10 text-xl py-2 rounded-xl hover:underline decoration-1">
                                    Know More
                                </button>
                            </Link>
                            <Link to={"pages/our-farm"}>
                                <button className="text-[#006944] border border-[#006944] px-5 text-xl bg-white py-2 rounded-xl hover:underline decoration-1">
                                    Book A Farm Visit
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img
                    className="w-40 h-full object-contain absolute top-0 left-1/2 translate-x-[-50%]"
                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/image_12200.png?v=1696473257"
                    alt=""
                />
            </div>
            <div className="w-full h-screen bg-[url(https://farmnaturelle.com/cdn/shop/files/amazon_1.jpg?v=1696486290)] bg-no-repeat bg-center bg-cover flex justify-center items-start">
                <div className="w-1/2 h-[75%] text-center px-20 text-[#006944] py-20">
                    <p className="text-[50px] font-jost font-semibold py-5">
                        Over 30,000 reviews on Amazon
                    </p>
                    <p className="text-[25px] font-jost font-normal">
                        We’ve received a lot of love and are thrilled to share
                        some of the experiences of our happy customers.
                    </p>
                </div>
            </div>
            <div className="w-full bg-[#006944] h-20 px-16 py-6 text-white">
                <div className="w-full h-full flex justify-around items-center">
                    <div className="flex justify center items-center gap-2 text-sm w-32 text-center">
                        <img
                            className="h-12 p-1"
                            src="https://farmnaturelle.com/cdn/shop/files/Group_4.svg?v=1696486763"
                            alt=""
                        />
                        <p>20 Acres of Farm</p>
                    </div>
                    <div className="flex justify center items-center gap-2 text-sm w-32 text-center">
                        <img
                            className="h-12 p-1"
                            src="https://farmnaturelle.com/cdn/shop/files/Frame_14856636.svg?v=1696486846"
                            alt=""
                        />
                        <p>Presticides Free</p>
                    </div>
                    <div className="flex justify center items-center gap-2 text-sm w-32 text-center">
                        <img
                            className="h-12 p-1"
                            src="https://farmnaturelle.com/cdn/shop/files/Group_5.svg?v=1696487241"
                            alt=""
                        />
                        <p>Natural & Organic</p>
                    </div>
                    <div className="flex justify center items-center gap-2 text-sm w-32 text-center">
                        <img
                            className="h-12 p-1"
                            src="https://farmnaturelle.com/cdn/shop/files/Frame_14856637.svg?v=1696487241"
                            alt=""
                        />
                        <p>Antibiotic Free</p>
                    </div>
                    <div className="flex justify center items-center gap-2 text-sm w-36 text-center">
                        <img
                            className="h-12 p-1"
                            src="https://farmnaturelle.com/cdn/shop/files/Frame_14856633.svg?v=1696487241"
                            alt=""
                        />
                        <p>High Quality Herbs</p>
                    </div>
                    <div className="flex justify center items-center gap-2 text-sm w-32 text-center">
                        <img
                            className="h-12 p-1"
                            src="https://farmnaturelle.com/cdn/shop/files/Frame_14856640.svg?v=1696487241"
                            alt=""
                        />
                        <p>NON TOXIC</p>
                    </div>
                    <div className="flex justify center items-center gap-2 text-sm w-32 text-center">
                        <img
                            className="h-12 p-1"
                            src="https://farmnaturelle.com/cdn/shop/files/Frame_14856635.svg?v=1696487241"
                            alt=""
                        />
                        <p>Organic Certified</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto justify-center font-jost">
                <div className="w-1/2 h-1/2 mx-auto text-center py-10 ">
                    <h1 className="text-5xl py-6">Happy Customers</h1>
                    <p className="text-2xl">
                        With million of products delivered, discover why
                        customers trust us with there daily health
                    </p>
                </div>
            </div>
            <div className="w-full h-screen overflow-hidden p-16 relative">
                <button
                    className="absolute top-[40%] left-5 text-white p-3 rounded-full cursor-pointer text-md bg-[#AFAEAA] text-center"
                    onClick={() => {
                        slider?.current?.slickPrev();
                    }}
                    tabIndex={-1}
                >
                    <CgArrowLeft />
                </button>
                <button
                    className="absolute top-[40%] right-5 text-white p-3 rounded-full cursor-pointer text-md bg-[#AFAEAA] text-center"
                    onClick={() => {
                        slider?.current?.slickNext();
                    }}
                    tabIndex={-1}
                >
                    <CgArrowRight />
                </button>
                <Slider ref={slider} {...settings} arrows={false}>
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/review2_a046a2da-b0d8-4f5b-8f6e-de3bed4517eb_200x200.png?v=1697806030"
                        }
                        name={"Dr Sangeeta Mathur"}
                        text={`"Farm Natural equals trust. 4 years of satisfaction as a loyal customer. Exceptional customer service and genuine products. Kudos for maintaining quality in today's adulteration era!"`}
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/aunty_200x200.png?v=1697806157"
                        }
                        name={"Suruchi Singhal"}
                        text={`"Farm Naturelle has a monopoly in my kitchen right from the variety of the flavourful delicious honey , I have been using it from last three years and can smell and feel the purity of the products.."`}
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/review1_200x200.png?v=1696488115"
                        }
                        name={"Nikita Kaushal"}
                        text={`"I have been using  honey from Farm Naturelle for over four years now and have never bought any other brand since then. The products are wonderful, unadulterated and cost effective."`}
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/aunty1_200x200.png?v=1697806157"
                        }
                        name={"Nikita Kaushel"}
                        text={
                            "I use Farm Naturelle honey for baking and smoothies. It's improved my health, and I trust their pure, natural products. Wishing them success!"
                        }
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/review3_200x200.png?v=1696489454"
                        }
                        name={"Rohit Rallan"}
                        text={
                            "I have been using Farm Naturelle Raw honey for many years and will continue to do so, simply because of its purity and freshness...to stay healthy keep away from food which is mass produced"
                        }
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/review2_200x200.png?v=1696489454"
                        }
                        name={"Kiran Bhatia"}
                        text={
                            "I am using Farm Naturelle products since 2018 when I was desperately looking for substitutes of refined oils. Now perhaps my entire family and friends are good buyers of their products."
                        }
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/raj_200x200.png?v=1697806257"
                        }
                        name={"Raj"}
                        text={
                            "Since trying Farm Natural Honey, no other brand has compared. Only tried others when shipping was halted. It's the best in texture, taste, and packaging. Feels like a gift to myself every time I buy. Hoping for consistent quality and pricing. A fantastic product for daily use."
                        }
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/neera_200x200.png?v=1697806325"
                        }
                        name={"Neera Vijayan"}
                        text={
                            "Knowing Rajneesh for 20+ years, a trusted friend passionate about farming and health. We love Farm Naturelle's products for personal care. I recommend Farm Naturelle to all of India and worldwide."
                        }
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/meena_200x200.png?v=1697806400"
                        }
                        name={"Menakshi Batra"}
                        text={
                            "Farm Naturelle has really lived up to its name and promise! I started using their honey a few years back and have never turned to another product. I have since tried their other products and have not been disappointed! Highly recommend this brand!"
                        }
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/yesh_200x200.png?v=1697806503"
                        }
                        name={"Yesh Kaushal"}
                        text={
                            "I am a regular consumer of honey. I have been using Farm Naturelle Honey products for many years and have been fully satisfied with the quality of the products. Over the years they have added new varieties which I continue to try and relish"
                        }
                    />
                    <ReviewSlides
                        imageUrl={
                            "https://farmnaturelle.com/cdn/shop/files/sanajy_200x200.png?v=1697806597"
                        }
                        name={"Sanjay Saxena"}
                        text={
                            "Loyal Farm Naturelle customer for years, their pure honey is unmatched in taste and quality. Mr. Chawla and team, keep expanding your product range for all to enjoy!"
                        }
                    />
                </Slider>
            </div>
        </div>
    );
}

export default Review;
