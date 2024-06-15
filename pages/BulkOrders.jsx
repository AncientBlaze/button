import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import { Link } from "react-router-dom";

export default function BulkOrders() {
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
                    src="https:/farmnaturelle.com/cdn/shop/files/Frame_14857631_24e99a43-f359-4831-aefa-02c2c37c14cf.png?v=1698825737"
                    loading="lazy"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-white font-bold font-jost">
                    <h1 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[64px] leading-relaxed font-semibold font-[open-sans]">
                        Bulk Orders(B2B)
                    </h1>
                    <nav className="text-center">
                        <Link to="/" title="Back to the home page">
                            Home
                        </Link>
                        <span>/</span>
                        <span>Bulk Orders</span>
                    </nav>
                </div>
            </picture>
            <div className="w-full h-auto bg-[#F5F5F5] grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 p-14 justify-items-center gap-10">
                <div className="w-full h-full float-left py-10">
                    <h3 className="text-[#006944] text-5xl font-semibold">
                        Bulk Orders
                    </h3>
                    <div className="text-left text-[16px] py-5 font-medium px-1">
                        <p>
                            Hi, if you need the highest quality of the produce
                            in bulk from the range of products we deal in, at
                            most reasonable prices then you have reached the
                            right place.
                        </p>
                        <br />
                        <p>
                            We are suppliers to at least 40 bulk buyers who are
                            from different industrial verticals like Cosmetics,
                            Super-foods (Honey brands), (Edible Cooking Oils, A2
                            Desi Cow Ghee or Herbal Juices/ Capsules) or Gifting
                            etc. Contact us for more details on prices and
                            Delivery terms. We normally send stocks within 24
                            hours of receipt of order.
                        </p>
                    </div>
                </div>
                <div className="w-full h-full float-right flex justify-center items-center px-2 py-2 font-jost overflow-hidden">
                    <div className="h-[80%] w-full border border-[#006944] rounded-lg px-5 py-4">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1f49151004c207fcd82c8bfdbdffddf1.svg?v=1697797949"
                            alt="apos"
                        />
                        <p className="text-3xl py-2">
                            Delivering Excellence,Every Time.
                        </p>
                        <p className="text-gray-500">
                            Farm Naturelle has consistently upheld their promise
                            of timely deliveries. Their commitment to
                            punctuality has made ordering from them a
                            hassle-free experience every time
                        </p>
                        <div className="w-full auto flex py-1 justify-start items-center">
                            <img
                                src="https://farmnaturelle.com/cdn/shop/files/figure.author__photo.jpg?v=1697798741"
                                alt="picture"
                            />
                            <div className="h-full w-full flex-1 justify-center items-center">
                                <p>Vrushali Kulkarni</p>
                                <p>Business Owner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto bg-[#F5F5F5] p-20">
                <div className="w-full h-auto border border-[#006944] rounded-md p-10 flex-col justify-center items-center bg-white">
                    <div className="w-full text-center p-10 font-jost font-medium">
                        <p className="text-5xl">Write to us</p>
                        <div className="w-full py-6">
                            <p className="text-[#006944] text-3xl font-Normal">
                                Personal Details
                            </p>
                        </div>
                    </div>
                    <form className="w-full">
                        <div className="grid grid-cols-2 gap-2 justify-items-center">
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    First Name
                                </label>
                                <input
                                    placeholder="Enter your First Name"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Last Name
                                </label>
                                <input
                                    placeholder="Enter your Last Name"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Email Id
                                </label>
                                <input
                                    placeholder="Enter your Email Id"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Contact Number
                                </label>
                                <input
                                    placeholder="Enter your Contact Number"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                ></input>
                            </div>
                        </div>
                    </form>
                    <div className="w-full h-auto py-10">
                        <p className="text-[#006944] text-3xl font-Normal text-center">
                            About your company
                        </p>
                        <div className="flex-col text-gray-800 text-lg  py-10 font-bold">
                            <div className="w-full flex justify-around py-5">
                                <p className="w-1/2">
                                    Do you have an existing business?
                                </p>
                                <div className="flex justify-center items-center gap-10 h-full w-full px-2">
                                    <span className="flex gap-2">
                                        <input type="radio" name="Yes" />
                                        <label htmlFor="Yes">Yes</label>
                                    </span>
                                    <span className="flex gap-2">
                                        <input type="radio" name="No" />
                                        <label htmlFor="No">No</label>
                                    </span>
                                </div>
                            </div>
                            <div className="w-full flex justify-around py-5 ">
                                <p className="w-1/2">
                                    Do you have a capital of over 3 lakhs?
                                </p>
                                <div className="flex justify-center items-center gap-10 h-full w-full px-2">
                                    <span className="flex gap-2">
                                        <input type="radio" name="Yes" />
                                        <label htmlFor="Yes">Yes</label>
                                    </span>
                                    <span className="flex gap-2">
                                        <input type="radio" name="No" />
                                        <label htmlFor="No">No</label>
                                    </span>
                                </div>
                            </div>
                            <div className="w-full flex justify-around py-5 ">
                                <p className="w-1/2">Do you have GST number?</p>
                                <div className="flex justify-center items-center gap-10 h-full w-full px-2">
                                    <span className="flex gap-2">
                                        <input type="radio" name="Yes" />
                                        <label htmlFor="Yes">Yes</label>
                                    </span>
                                    <span className="flex gap-2">
                                        <input type="radio" name="No" />
                                        <label htmlFor="No">No</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 justify-items-center">
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    What is your Company name?
                                </label>
                                <input
                                    placeholder="Enter your Company/Brand name?"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Company Location
                                </label>
                                <input
                                    placeholder="Enter your Company Location"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Company Email Id
                                </label>
                                <input
                                    placeholder="Enter your Company Email Id"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Products Interested in?
                                </label>
                                <input
                                    placeholder="Products Interested in?"
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto mx-auto flex justify-center py-6 text-white">
                        <button className="self-center bg-[#006944] w-full h-14 rounded-lg">
                            SEND
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
