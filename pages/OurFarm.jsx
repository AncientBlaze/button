import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "../assets/Card2";
export default function Private() {
    const settings = {
        adaptiveHeight: true,
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="flex-col bg-[#F5F5F5] overflow-hidden">
            <Nav className="relative text-white" />
            <picture>
                <source
                    media="(ma leleft-1/3x-width:767px)"
                    srcSet="https://farmnaturelle.com/cdn/shop/files/Group_14856880_2_c5eee7e4-ca30-404a-99d0-ecbdadf0df41.png?v=1698342106"
                    loading="lazy"
                    width="100%"
                    height="auto"
                />
                <img
                    className="w-full"
                    src="https://farmnaturelle.com/cdn/shop/files/Group_14856861.png?v=1697702303"
                    loading="lazy"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-white font-bold font-jost">
                    <h1 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[64px] leading-relaxed font-semibold font-[open-sans]">
                        Our Farm
                    </h1>
                    <nav className="text-center">
                        <Link to="/" title="Back to the home page">
                            Home
                        </Link>
                        <span>/</span>
                        <span>Our Farm</span>
                    </nav>
                </div>
            </picture>
            <div className="w-full h-auto flex flex-col justify-center items-center p-10">
                <div className="text-black font-semibold font-jost text-center">
                    <p className="text-sm text-[gray] pb-5">OUR FARMS</p>
                    <p className="text-3xl py-2">
                        <span className="text-[#006944]">
                            &quot;From Our Farm
                        </span>{" "}
                        to Your Table&quot;
                    </p>
                    <p className="text-sm text-gray-600 px-20 font-normal py-3">
                        At Farm Naturelle, we&apos;ve cultivated our own slice
                        of paradise in Ram Nagar, where every sunrise brings a
                        new promise of sustainable farming and organic
                        beekeeping, ensuring that every product we offer is a
                        testament to the purity of nature&apos;s gifts.
                    </p>
                    <div className="pt-5 pb-16">
                        <button className="uppercase px-20 py-2 rounded-md bg-[#006944] text-white">
                            Book A Visit
                        </button>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="relative text-white">
                            <img
                                src="https://farmnaturelle.com/cdn/shop/files/Rectangle_8582.png?v=1697704445"
                                alt="Honey"
                            />
                            <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl font-semibold">
                                HONEY COLLECTION
                            </p>
                        </div>
                        <div className="relative text-white">
                            <img
                                src="https://farmnaturelle.com/cdn/shop/files/Group_28816.jpg?v=1698756507"
                                alt="A2 Ghee"
                            />
                            <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl font-semibold text-nowrap">
                                A2 GHEE DAIRY FARM
                            </p>
                        </div>
                        <div className="relative text-white">
                            <img
                                src="https://farmnaturelle.com/cdn/shop/files/Rectangle_8584.png?v=1697704445"
                                alt="HERBS"
                            />
                            <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl font-semibold">
                                HERBS GARDEN
                            </p>
                        </div>
                        <div className="relative text-white">
                            <img
                                src="https://farmnaturelle.com/cdn/shop/files/Rectangle_8585.png?v=1697704445"
                                alt="MANGI"
                            />
                            <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl font-semibold">
                                FRUIT FARM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto px-40 py-10">
                <p className="text-6xl text-center font-satisfy font-light bg-[url(https://farmnaturelle.com/cdn/shop/files/image_12444.jpg?v=1697710967)] bg-no-repeat w-full h-full bg-cover bg-clip-text text-transparent p-5">
                    &quot;Organic farming anchors Farm Natural,nurturing the
                    land today for a sustainable tomorrow.&quot;
                </p>
            </div>
            <div className="w-full h-screen bg-[#006944] flex-1">
                <div className="w-full h-auto flex px-32 py-10 text-center font-jost font-medium text-white text-4xl">
                    <p>
                        We’ve have over 400 Honey Collection workers to collect
                        jungle honey and{" "}
                        <span className="text-[#CBD82D]">
                            15000 Honey boxes to bring Nature Goodness to you
                        </span>
                    </p>
                </div>
                <div className="w-full h-auto p-10">
                    <Slider dotsClass="slick-d" {...settings}>
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/projects-v1-img2_jpg_f8290060-c5ff-4637-a6b9-2369012e3e13.jpg?v=1698823190"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/projects-v1-img3_jpg_357811c0-6d02-425c-9c91-5e587a783a4e.jpg?v=1698823235"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/projects-v1-img4_jpg_0abaee93-30e2-422f-89bd-2ff78443bdcb.jpg?v=1698823263"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/projects-v1-img1_jpg_1003450c-4cb6-4c6f-af0a-1fa77f0c036e.jpg?v=1698823283"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/projects-v1-img3_jpg_357811c0-6d02-425c-9c91-5e587a783a4e.jpg?v=1698823235"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/16b2ef4a-579b-4e46-a045-eb66cbe1fee2_conv.png?v=1698827617"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/538ff8a6-bd23-4e4c-b444-044cf24f91e0_conv.png?v=1698827617"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/0af52814-eab1-4b18-9f9a-f834f6fae4fe_conv.png?v=1698827617"
                            }
                        />
                    </Slider>
                </div>
                <div className="w-full h-auto mx-auto text-center font-medium font-jost antialiased">
                    <button className="w-auto h-auto mx-auto text-white text-md uppercase border px-10 py-3 rounded-lg">
                        book a visit
                    </button>
                </div>
            </div>
            <div className="w-full h-auto ">
                <p className="text-3xl text-center font-jost font-semibold py-20 text-[#006944]">
                    <span className="text-black">
                        Cultivating Wellness:&nbsp;
                    </span>
                    Herb Gardens Enriched with 15+ Medicinal Plants
                </p>
                <div className="w-full h-auto p-10 pb-96">
                    <Slider {...settings} dotsClass="slick">
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/0F3DDC2B-5D4D-4134-AEB6-AA5F06011C3A_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/1DA3AAA9-F33F-4DC7-BAEB-1485BFC8FCAF_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/IMG_3790.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/IMG_3781.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/IMG_3794.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/176C227E-5116-4DAA-8355-E1507727461D_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/A9D7F331-4A1B-4D5B-BF7C-E6EB56C95069_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/IMG_3792.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/477A33FD-C13C-46FE-AFAD-EAB82017D096_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/C1FC6215-2CF4-49E8-9DBF-A787F3918A7B_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/IMG_3780.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/591B16B5-10FA-4D11-B0B1-EC2753C85077_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/0F3DDC2B-5D4D-4134-AEB6-AA5F06011C3A_conv.png?v=1698828010"
                            }
                        />
                        <Card
                            image={
                                "https://farmnaturelle.com/cdn/shop/files/IMG_3789.png?v=1698828010"
                            }
                        />
                    </Slider>
                </div>
            </div>
            <div className="h-auto w-full relative">
                <div className="rounded-lg h-[420px] w-[1100px] flex items-center justify-center bg-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-10 z-10">
                    <div className="h-full w-1/2 bg-white bg-[url(https://farmnaturelle.com/cdn/shop/files/Rectangle_9786.jpg?v=1703665423)]"></div>
                    <div className="h-full w-1/2 text-left px-10 font-jost text-black">
                        <p className="text-md text-gray-400 absolute top-5">
                            OUR STAY AT RAMNAGAR
                        </p>
                        <p className="text-4xl py-2">
                            Stay at
                            <span className="text-[#006944]"> Farm House</span>
                        </p>
                        <p className="text-gray-500 text-sm py-1">
                            Serene escape blending modern comfort with nature's
                            bounty. Embrace tranquility, experience sustainable
                            farming, and rejuvenate.
                        </p>
                        <ul className="grid grid-cols-2 w-full gap-3">
                            <li className="flex items-center gap-2">
                                <img
                                    src="//farmnaturelle.com/cdn/shop/files/Frame_1.svg?v=1697717852"
                                    alt=""
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                />
                                Dining Room with Tv &amp; Fridge
                            </li>

                            <li className="flex items-center gap-2">
                                <img
                                    src="//farmnaturelle.com/cdn/shop/files/Frame_1.svg?v=1697717852"
                                    alt=""
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                />
                                Lounge
                            </li>

                            <li className="flex items-center gap-2">
                                <img
                                    src="//farmnaturelle.com/cdn/shop/files/Frame_1.svg?v=1697717852"
                                    alt=""
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                />
                                Extra Bed @ ₹1000
                            </li>

                            <li className="flex items-center gap-2">
                                <img
                                    src="//farmnaturelle.com/cdn/shop/files/Frame_1.svg?v=1697717852"
                                    alt=""
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                />
                                Food @ Extra Cost
                            </li>
                        </ul>
                        <ul className="grid grid-cols-1 gap-2 py-5">
                            <li className="flex justify-between border px-3 cursor-pointer py-3 items-center rounded-lg bg-gray-200">
                                <p>Room 1 (1 King Size Bed)</p>
                                <div className="flex gap-2">
                                    <p className="text-[#006944]">₹3500</p>
                                    <span>Per Night</span>
                                </div>
                            </li>
                            <li className="flex justify-between border px-3 cursor-pointer py-3 items-center rounded-lg bg-gray-200">
                                <p>Room 2 (2 King Size Beds)</p>
                                <div div className="flex gap-2">
                                    <p className="text-[#006944]">₹5500</p>
                                    <span>Per Night</span>
                                </div>
                            </li>
                        </ul>
                        <button className="bg-[#006944] text-white px-8 py-2 rounded-lg">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-[165vh] w-full relative">
                <div className="h-auto w-full bg-[#006944] flex">
                    <img
                        className="w-full absolute z-0"
                        src="https://farmnaturelle.com/cdn/shop/files/Frame_14857361.png?v=1697731826"
                        alt=""
                    />
                    <div className="h-full w-1/2 absolute z-0 top-0 flex items-center px-10 font-jost">
                        <div className="text-[#A0AA25] font-bold text-md py-2">
                            <p className="uppercase">
                                Experience the Beauty of Nature
                            </p>
                            <br />
                            <p className="text-white font-bold text-4xl px-2">
                                <a>Book Your Farm Visit</a>
                            </p>
                            <p className="text-white font-bold text-lg">
                                <a>During the Visit</a>
                            </p>
                            <br />
                            <ul className="text-white grid gap-4 font-normal">
                                <li>
                                    The farms have over 5000+ fruit trees,
                                    several vegetables and also cash crop.
                                    Morning Evening one can see thousands of
                                    birds of different species chirping and
                                    these tree tops are creating an amazingly
                                    beautiful environment.
                                </li>

                                <li>
                                    Witness humans, birds, and lush greens in
                                    perfect harmony, a model of sustainable
                                    living.
                                </li>

                                <li>
                                    Engage with farmers and beekeepers,
                                    uncovering ethical and sustainable
                                    practices.
                                </li>
                            </ul>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-1/2 absolute z-0 top-0 left-1/2 flex items-center px-10 font-jost">
                    <form className="border h-auto w-full p-10 grid grid-flow-row gap-4">
                        <input
                            className="w-full border bg-transparent p-2 text-white placeholder:text-white"
                            type="text"
                            placeholder="First Name*"
                        />
                        <input
                            className="w-full border bg-transparent p-2 text-white placeholder:text-white"
                            type="text"
                            placeholder="Enter Your Email Address*"
                        />
                        <input
                            className="w-full border bg-transparent p-2 text-white placeholder:text-white"
                            type="text"
                            placeholder="Contact Number*"
                        />
                        <input
                            className="w-full border bg-transparent p-2 text-white"
                            type="date"
                        />
                        <div className="w-full border bg-transparent p-2 text-white flex justify-start">
                            <input type="radio" name="visit" />
                            <div className="flex justify-between w-full px-2">
                                <label>2 Hour visit</label>
                                <p>
                                    ₹599/-{" "}
                                    <span className="text-[#006944]">
                                        -Free
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full border bg-transparent p-2 text-white flex justify-start">
                            <input type="radio" name="visit" />
                            <div className="flex justify-between w-full px-2">
                                <label>
                                    Stay at Resort Room 1{" "}
                                    <p>(1 King Size Bed)</p>
                                </label>
                                <p className="text-[#006944]">
                                    ₹3500/-{" "}
                                    <span className="text-white">
                                        -Per Night
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full border bg-transparent p-2 text-white flex justify-start">
                            <input type="radio" name="visit" />
                            <div className="flex justify-between w-full px-2">
                                <label>
                                    Stay at Resort{" "}
                                    <p> Room 1 (2 King Size Bed)</p>
                                </label>
                                <p className="text-[#006944]">
                                    ₹3500/-{" "}
                                    <span className="text-white">
                                        -Per Night
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button className="bg-[#006944] text-white px-8 py-2 rounded-lg w-full">
                            BOOK A FREE VISIT
                        </button>
                    </form>
                </div>
            </div>
            <div className="h-auto w-full bg-transparent font-jost font-semibold p-10">
                <p className="text-[#006944] text-center text-3xl py-10">
                    Beauty of Fruit Farm
                </p>
                <Slider {...settings} dotsClass="slick">
                    <Card image="https://farmnaturelle.com/cdn/shop/files/projects-v1-img1_jpg.png?v=1697736928" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/projects-v1-img2_jpg.png?v=1697736928" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/projects-v1-img4_jpg.png?v=1697736928" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/5401367c-ac5f-43c8-ba05-0b47441b6fdd.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/E4FE35F8-789F-4B3E-BCCA-0CFF32E47569_conv.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_3874.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_3936.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_3892.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/6F54F5E3-9199-4C0A-9B77-4BE79F4ACCDC.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_3940.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_3882.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_0654.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_3872.png?v=1698828732" />
                    <Card image="https://farmnaturelle.com/cdn/shop/files/IMG_3181_2.png?v=1698828732" />
                </Slider>
            </div>
            <Footer />
        </div>
    );
}
