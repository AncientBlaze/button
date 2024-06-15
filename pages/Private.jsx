import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import { Link } from "react-router-dom";
export default function Private() {
    return (
        <div className="flex-col bg-[#F5F5F5] overflow-hidden">
            <Nav />
            <picture className="relative">
                <source
                    media="(max-width:767px)"
                    srcSet="https:/farmnaturelle.com/cdn/shop/files/Component_153.png?v=1698826408"
                    loading="lazy"
                    width="100%"
                    height="auto"
                />
                <img
                    className="w-full"
                    src="https:/farmnaturelle.com/cdn/shop/files/Group_14856872.png?v=1697974300"
                    loading="lazy"
                    alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-white font-bold font-jost">
                    <h1 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[64px] leading-relaxed font-semibold font-[open-sans]">
                        Private Labelling
                    </h1>
                    <nav className="text-center">
                        <Link to="/" title="Back to the home page">
                            Home
                        </Link>
                        <span>/</span>
                        <span>Private Labelling</span>
                    </nav>
                </div>
            </picture>
            <div className="w-full h-auto bg-[#F5F5F5] grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 p-14 justify-items-center gap-10">
                <div className="w-full h-full float-left py-10">
                    <h3 className="text-[#006944] text-5xl font-semibold">
                        Private Labelling
                    </h3>
                    <div className="text-left text-[16px] py-5 font-medium px-1">
                        <p>
                            We are among the finest White labellers for our
                            range of products. You shall be provided with the
                            top Notch natural/Organic produce in the choice of
                            your bottles at most affordable prices.
                        </p>
                        <br />
                        <p>
                            We even give you end to end solution, from white
                            labelling to execution of your online & offline
                            orders per requested schedule. Expect the highest
                            satisfaction smile from your customers.
                        </p>
                        <br />
                        <p>
                            Over 20 start-ups and aNother 15 leading brands are
                            currently getting white labelling done for the range
                            of products we deal in.
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
                            Products at most affordable prices, really
                            appreciate it
                        </p>
                        <p className="text-gray-500">
                            They have the best high-quality, reliable, and
                            inNovative products.
                        </p>
                        <div className="w-full auto flex py-1 justify-start items-center">
                            <img
                                src="https://farmnaturelle.com/cdn/shop/files/Mateusz-Czajka_jpg.png?v=1697973798"
                                alt="pictur"
                            />
                            <div className=" h-full w-full flex-1 justify-center items-center">
                                <p>Madhav Roy</p>
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
                                    placeholder=""
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Last Name
                                </label>
                                <input
                                    placeholder=""
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Email Id
                                </label>
                                <input
                                    placeholder=""
                                    className="w-full p-4 rounded-lg border border-black outline-none"
                                    type="text"
                                />
                            </div>
                            <div className="rounded-lg grid gap-2 grid-flow-row w-full text-gray-500">
                                <label className="text-xl font-jost font-semibold text-gray-800">
                                    Contact Number
                                </label>
                                <input
                                    placeholder=""
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
