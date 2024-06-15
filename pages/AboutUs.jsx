import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function AboutUs() {
    return (
        <div className="flex-col bg-[#F5F5F5] overflow-hidden">
            <Nav />
            <picture className="relative">
                <source
                    media="(max-width:767px)"
                    srcSet="https://farmnaturelle.com/cdn/shop/files/Group_14856859.png?v=1697442469"
                    loading="lazy"
                    width="100%"
                    height="auto"
                />
                <img
                    className="w-full"
                    src="https://farmnaturelle.com/cdn/shop/files/Group_14856858.jpg?v=1697442418"
                    loading="lazy"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-white font-bold font-jost">
                    <h1 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[64px] leading-relaxed font-semibold font-[open-sans]">
                        About Us
                    </h1>
                    <nav className="text-center">
                        <Link to="/" title="Back to the home page">
                            Home
                        </Link>
                        <span>/</span>
                        <span>About us</span>
                    </nav>
                </div>
            </picture>
            <div className="w-full h-screen flex">
                <div className="w-1/2 h-full p-10 py-20">
                    <div className="w-full h-full relative">
                        <img
                            src="https://farmnaturelle.com/cdn/shop/files/about-v1-img1.jpg_1.jpg?v=1697444603"
                            alt=""
                        />
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#006944] divide-x divide-[#3D774B] flex justify-center items-center w-auto px-12 rounded-lg h-32">
                            <img
                                className="px-5 py-2"
                                src="https://farmnaturelle.com/cdn/shop/files/noun-plant-growth-3618464_1.svg?v=1697444759"
                                alt=""
                            />
                            <div className="flex flex-col gap-2 px-5 text-white font-jost text-nowrap py-3">
                                <p className="text-5xl">5,00,000 +</p>
                                <p className="text-lg text-[#CBD82D]">
                                    Happy Customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full p-10 font-jost font-medium">
                    <p className="text-xl text-nowrap text-[gray]">
                        WELCOME TO FARM NATURELLE
                    </p>
                    <p className="text-4xl text-wrap pb-2">
                        Nourish Your Body with
                        <p className="text-[#006944]"> Nature’s Goodness</p>
                    </p>
                    <p className="text-2xl text-[#006944] py-2">
                        We Are Your Source for Organic Wellness
                    </p>
                    <p className="text-xl text-slate-600 py-10 font-normal">
                        Discover a journey of well-being with Farm Naturelle.
                        We&apos;re passionate about providing you with natural,
                        organic products that nurture your health and the
                        environment. With over 30 years of experience, we stand
                        as a trusted brand, committed to ethical practices and
                        the health of our customers.
                    </p>
                    <ul className="flex flex-col gap-4 py-1 ">
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base text-slate-600">
                            Farm-Fresh Quality
                        </li>
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base text-slate-600">
                            Embracing Organic Practices
                        </li>
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base text-slate-600">
                            Sustainable Living SHOP NOW
                        </li>
                    </ul>
                    <div className="flex justify-start py-5">
                        <button className="bg-[#006944] text-xl px-5 py-3 rounded-lg my-5 text-white">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto bg-[#F2F7E3]">
                <img className="w-full" src="../public/image.png" alt="hehe" />
            </div>
            <div className="w-full h-auto p-10">
                <div className="font-playfair text-center text-8xl scale-110 font-extrabold bg-clip-text text-transparent bg-no-repeat bg-[url(https://farmnaturelle.com/cdn/shop/files/Rectangle_9756.png?v=1697615137)] h-80">
                    1o Years Expertise Cultivating Nature, Enriching Lives.
                </div>
            </div>
            <div className="w-full h-auto">
                <div className="bg-[url(https://farmnaturelle.com/cdn/shop/files/farm_try_2_1.png?v=1697615538)] w-full h-screen">
                    <div className="w-full h-full flex">
                        <div className="w-1/2 h-full flex justify-end items-center relative">
                            <div className="w-[85%] h-[90%] rounded-xl bg-white p-5 text-left font-jost absolute top-1/2 left-1/2 -translate-x-52 -translate-y-1/2">
                                <p className="text-lg font-jost uppercase font-medium text-[gray]">
                                    Our Founder
                                </p>
                                <p className="text-5xl font-jost font-medium py-5">
                                    Meet Our Visionary Founder
                                    <span className="text-[#006944] text-nowrap">
                                        {" "}
                                        Rajneesh Chawla
                                    </span>
                                </p>
                                <p className="text-3xl font-jost font-medium py-2">
                                    He is the Visionary Behind Our Farm
                                    Naturelle
                                </p>
                                <p className="text-zinc-500">
                                    Mr. Rajneesh Chawla, our seasoned
                                    entrepreneur and the driving force behind
                                    Farm Naturelle, brings three decades of
                                    experience to our journey. His unwavering
                                    dedication to organic practices,
                                    sustainability, and community well-being
                                    defines Farm Naturelle&apos;s ethos.
                                    Inspired by a visit to a farm in Ram Nagar,
                                    the seeds of our mission were sown. Today,
                                    Mr. Chawla leads us toward a healthier,
                                    happier, and more sustainable future,
                                    offering products that reflect his passion
                                    for organic living and a better world for
                                    all. Join us on this natural journey, guided
                                    by our founder&apos;s vision.
                                </p>
                                <div className="w-full py-2">
                                    <Link
                                        to={
                                            "https://cdn.shopify.com/videos/c/o/v/97667e9f095e4abd848941356723c77d.mov"
                                        }
                                    >
                                        <button className="uppercase m-2 bg-[#006944] text-lg px-5 py-3 rounded-lg my-5 text-white">
                                            Listen Rajneesh Ji Story
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-full flex justify-start items-center">
                            <div className="w-[92%] h-[95%] bg-[url(https://farmnaturelle.com/cdn/shop/files/image_12445.jpg?v=1697614609)] rounded-xl flex justify-center items-end">
                                <div className="w-full flex text-white justify-around px-10 items-center text-4xl py-5">
                                    <Link
                                        to={
                                            "https://cdn.shopify.com/videos/c/o/v/97667e9f095e4abd848941356723c77d.mov"
                                        }
                                    >
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_14856455.svg?v=1697614278"
                                            alt="Play"
                                        />
                                    </Link>
                                    <p className="text-[#95BD58] scale-125">
                                        Mr. Rajnesh Chawla
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-screen flex">
                <div className="w-1/2 h-full p-10 py-20">
                    <div className="w-full h-full relative">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_9320.jpg?v=1697624769"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-1/2 h-full p-10 font-jost font-medium">
                    <p className="text-lg text-nowrap text-[gray]">
                        OUR PHILOSOPHY
                    </p>
                    <p className="text-4xl text-wrap pb-2">
                        <span className="text-[#006944]">
                            Cultivating Nature&apos;s{" "}
                        </span>
                        Wisdom
                    </p>
                    <p className="text-2xl text-[#006944] py-10">
                        Happy Planet,Healthy You
                    </p>
                    <p className="text-xl text-slate-600 py-2 font-normal">
                        Our journey begins with a deep understanding that our
                        well-being is deeply connected to the health of our
                        planet. That&apos;s why we&apos;re committed to
                        sustainable practices. It&apos;s not just about making
                        great products; it&apos;s about leaving a positive mark
                        on the environment. We believe in giving back as much as
                        we take.
                    </p>
                    <ul className="flex flex-col gap-4 py-2 text-slate-600 scale-100">
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base">
                            Traditional Wisdom, Modern Approach
                        </li>
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base">
                            Embracing Organic Practices
                        </li>
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base">
                            Authenticity and Ethics
                        </li>
                    </ul>
                    <div className="flex justify-start py-5">
                        <button className="bg-[#006944] text-xl px-5 py-3 rounded-lg my-5 text-white">
                            Shop this
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto bg-transparent py-10">
                <div className="w-full h-auto flex justify-between items-center bg-[url(https://farm-naturelle-new.myshopify.com/cdn/shop/files/Section.png?v=1697626031)] bg-no-repeat bg-contain">
                    <div className="w-1/2 h-full px-16 py-24">
                        <p className="text-6xl text-white font-semibold font-jost grid gap-2">
                            <span className="text-[#CBD82D]">
                                From Soil to Soul:
                            </span>
                            <p className="text-nowrap">Where Nature Thrives,</p>
                            <p>Health Flourishes</p>
                        </p>
                        <div className="justify-start text-white text-lg py-10 font-semibold font-jost">
                            <Link
                                to={
                                    "https://www.youtube.com/watch?v=FQ7I2OfLf5A&ab_channel=FarmNaturalProduce"
                                }
                            >
                                <button className="border rounded-xl px-5 py-4">
                                    HAVE A LOOK AT OUR FARMS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/4 h-[50%] grid justify-items-center">
                        <button className="btn_ripple">
                            <FaPlay />
                        </button>
                        <div>
                            <p className="text-[#cbd82d] font-shadows text-3xl">
                                watch the video
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex">
                <div className="w-1/2 h-full p-10 font-jost font-medium">
                    <p className="text-lg text-nowrap text-[gray]">
                        OUR MISSION
                    </p>
                    <p className="text-5xl text-wrap py-2">
                        <span className="text-[#006944]">
                            Nurturing Health,{" "}
                        </span>
                        Embracing Sustainability
                    </p>
                    <p className="text-2xl text-[#006944] py-10">
                        We’re are on Mission for Healthier India.
                    </p>
                    <p className="text-xl text-slate-600 font-normal">
                        Our mission at Farm Naturelle is to contribute towards a
                        healthier world. We believe that the path to wellness
                        begins with the choices we make. By providing natural,
                        organic products and promoting sustainable practices, we
                        aim to play a part in building a healthier, more vibrant
                        planet for generations to come.
                    </p>
                    <ul className="flex flex-col gap-4 py-2 text-slate-600 scale-100">
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base">
                            Cultivating Wellness
                        </li>
                        <li className="bg-[url(https://farmnaturelle.com/cdn/shop/files/Symbol.svg?v=1697454096)] bg-no-repeat bg-left bg-contain pl-10 text-base">
                            Embracing Organic Practices
                        </li>
                    </ul>
                    <div className="flex justify-start py-5">
                        <Link to={"/pages/contact"}>
                            <button className="bg-[#006944] uppercase text-xl px-5 py-3 rounded-lg my-5 text-white">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 h-full p-10 py-20">
                    <div className="w-full h-full relative">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_9321.jpg?v=1697629386"
                            alt="hand of plants"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
