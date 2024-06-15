import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="flex-col bg-[#F5F5F5] overflow-hidden">
            <Nav />
            <picture className="relative">
                <source
                    media="(max-width:767px)"
                    srcSet="https:/farmnaturelle.com/cdn/shop/files/image_12510.png?v=1704274357"
                    loading="lazy"
                    width="100%"
                    height="auto"
                />
                <img
                    className="w-full"
                    src="https://farmnaturelle.com/cdn/shop/files/Group_14856874.png?v=1697981044"
                    loading="lazy"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-white font-bold font-jost">
                    <h1 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[64px] leading-relaxed font-semibold font-[open-sans]">
                        Contact Us
                    </h1>
                    <nav className="text-center">
                        <Link to="/" title="Back to the home page">
                            Home
                        </Link>
                        <span>/</span>
                        <span>Contact</span>
                    </nav>
                </div>
            </picture>
            <div className="w-full h-auto flex">
                <div className="w-[70%] h-auto gap-10 text-left px-20 text-[#666A6A] p-10">
                    <p className="text-xl">Contact Form</p>
                    <p className="text-sm pb-5">
                        We value our customers greatly, and are always here to
                        help. If you have any questions, queries or comments
                        feel free to drop us a line and we will get back to you
                        as soon as we can
                    </p>
                    <div className="flex flex-col gap-5">
                        <input
                            className="w-full p-3"
                            type="text"
                            placeholder="Full Name"
                        />
                        <input
                            className="w-full p-3"
                            type="text"
                            placeholder="Enter Your Email Address*"
                            required
                        />
                        <input
                            className="w-full p-3"
                            type="text"
                            placeholder="Contact Number*"
                            required
                        />
                        <textarea
                            className="w-full h-32 p-3"
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    <button className="bg-[#006944] text-white p-3 rounded-md font-jost font-medium uppercase my-4">
                        Send A Message
                    </button>
                </div>
                <div className="w-[30%]">
                    <div className="contact_form_image">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_8919.jpg?v=1697981756"
                            alt=""
                            loading="lazy"
                            width="auto"
                            height="auto"
                        />
                        <p>
                            <b></b>
                        </p>
                    </div>

                    <div className="contact_form_image">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_9132_1.jpg?v=1703834393"
                            alt=""
                            loading="lazy"
                            width="auto"
                            height="auto"
                        />
                        <p>
                            &nbsp; For any query, please write to us
                            atpurefarmnatural@gmail.com
                        </p>
                    </div>

                    <div className="contact_form_image">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_8923.png?v=1697981741"
                            alt=""
                            loading="lazy"
                            width="auto"
                            height="auto"
                        />
                        <p></p>
                    </div>

                    <div className="contact_form_image">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_9131.jpg?v=1703835670"
                            alt=""
                            loading="lazy"
                            width="auto"
                            height="auto"
                        />
                        <p>Phone:+91 9810988725,+91-81305-31333</p>
                    </div>

                    <div className="contact_form_image">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Group_14856876.png?v=1697981835"
                            alt=""
                            loading="lazy"
                            width="auto"
                            height="auto"
                        />
                        <p></p>
                    </div>

                    <div className="contact_form_image">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_9131.jpg?v=1703835670"
                            alt=""
                            loading="lazy"
                            width="auto"
                            height="auto"
                        />
                        <p>
                            Ground Floor and Basement, Building No 239,
                            Sector-38, Sector-38,Gurugram, Haryana, 122018
                        </p>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <div>
                            <img
                                src="//farmnaturelle.com/cdn/shop/files/DSC02765_fcba58d9-1240-46e6-b41c-978d408842d2_320x_jpg.png?v=1697981741"
                                alt=""
                                loading="lazy"
                                width="auto"
                                height="auto"
                            />
                        </div>

                        <div className="flex justify-center items-center bg-[#006944] px-12 h-[165px] py-16 my-2">
                            <div className="grid grid-cols-2 gap-3">
                                <Link to="https://www.instagram.com/farm_naturelle?igsh=ZGNjOWZkYTE3MQ%3D%3D">
                                    <img src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_1_b6c3718e-bfe2-4369-9d87-21ac714ab742.svg?v=1703835178" />
                                </Link>
                                <Link to="https://www.youtube.com/@FarmNaturalProduce">
                                    <img src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_1_0ba3d2e2-518b-4803-9fe8-a9013464fb89.svg?v=1703835178" />
                                </Link>
                                <Link to="https://www.facebook.com/farmnaturelle1?mibextid=2JQ9oc">
                                    <img src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_1_4baee3a8-becf-4dca-a39f-313d67dfe7a6.svg?v=1703835178" />
                                </Link>
                                <Link to="">
                                    <img src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_1.svg?v=1703835178" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="contact_form_image">
                        <img
                            src="//farmnaturelle.com/cdn/shop/files/Rectangle_8920.png?v=1697981741"
                            alt=""
                            loading="lazy"
                            width="auto"
                            height="auto"
                        />
                        <p></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
