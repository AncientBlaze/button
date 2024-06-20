import { AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";
import { useState } from "react";
import IndexHeart from "../Modal/Wishlist";
import Cart from "../Modal/Cart";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Nav() {
    document.addEventListener("scroll", function () {
        const boxElement = document.querySelector(".Box");
        if (window.scrollY > 0) {
            boxElement.style.display = "block";
            boxElement.style.transition =
                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
        } else {
            boxElement.style.display = "none";
        }
    });

    const cartProducts = useSelector((state) => state?.cart?.cartItems);
    const wishlistItems = useSelector(
        (state) => state?.wishlists?.wishlistItems,
    );
    const [Modalopen, setModalOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const open = () => {
        setModalOpen(true);
    };

    const close = () => {
        setModalOpen(false);
    };

    const openHandler = () => {
        setOpenModal(true);
    };

    const closeHandler = () => {
        setOpenModal(false);
    };

    const Handler = () => {
        const copyText = "NFARM100";
        navigator.clipboard.writeText(copyText);
        toast.done("Copied the text: " + copyText, {
            position: "top-center"
            });
    };
    return (
        <>
            <Sticky top={0} innerZ={20}>
                <header className="shadow-lg w-full bg-[#006944] flex justify-center items-center text-white space-x-2 h-10">
                    <div className="flex px-10 gap-3">
                        <p className="text-[14px] font-jost">
                            Get an extra 5% discount on orders over ₹1000, up to
                            ₹100 - Use coupon NFARM100
                        </p>
                        <img 
                            className="cursor-pointer"
                            onClick={Handler}
                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ph_copy.svg?v=1695374232"
                            alt="copy"
                            width="inherit"
                            height="auto"
                        />
                    </div>
                </header>
                <nav className="flex items-center justify-between relative w-full px-5 py-2 bg-white">
                    <div className="flex items-center font-medium font-jost ">
                        <Link to="/">
                            <img src="https://farmnaturelle.com/cdn/shop/files/Logo_1_1.png?v=1694410359" alt="logo" />
                        </Link>
                        <ul className="flex text-sm overflow-visible items-center divide-x-[1px] divide-[#A8B324] cursor-pointer ml-4">
                            <li className="border-r px-4 flex items-center relative group">
                                Shop by Concern
                                <ul className="absolute hidden h-0 group-hover:h-auto group-hover:block bg-white shadow-lg my-5 max-w-96 w-96 top-2 z-20 py-3 font-[16px]">
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link to={"/collections/herbal-juice/products/piles-vanish"}>
                                            <span className="underlined">
                                                Piles Relief
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link to={"/collections/herbal-juice/products/smiling-liver"}>
                                            <span className="underlined">
                                                Healthy Liver
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link
                                            to={"/collections/herbal-juice/products/magical-man-booster"}
                                        >
                                            <span className="underlined">
                                                Magic Man Booster
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link
                                            to={"/collections/herbal-juice/products/digestive-fitness"}
                                        >
                                            <span className="underlined">
                                                Digestive Fitness
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link to={"/collections/herbal-juice/products/easing-diabetes"}>
                                            <span className="underlined">
                                                Easing Diabetes
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link
                                            to={
                                                "/collections/herbal-juice/products/anti-hangover-ready-to-drink-shot"
                                            }
                                        >
                                            <span className="underlined">
                                                Hangover Shots
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            Revital Body Shots
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link
                                            to={
                                                "/collections/herbal-juice/products/kidney-stone-crusher-juice"
                                            }
                                        >
                                            <span className="underlined">
                                                Kidney Stone Care
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link to={"/collections/herbal-juice/products/women-glow"}>
                                            <span className="underlined">
                                                Glowing Woman
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link to={"/collections/herbal-juice/products/stress-buster"}>
                                            <span className="underlined">
                                                Stress Buster
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            Powerful Heart
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link to={"/collections/herbal-juice/products/joints-and-body-pain-relief"}>
                                            <span className="underlined">
                                                Pain Relief
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <Link to={"/collections/herbal-juice/products/joints-and-body-pain-relief"}>
                                        <span className="underlined">
                                            Win Weight
                                        </span>
                                        </Link>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            Detox Miracle Shot
                                        </span>
                                    </li>
                                </ul>
                                <RiArrowDropDownLine className="group-hover:rotate-180 group-hover:transition-all size-7" />
                            </li>
                            <li className="border-r px-4 flex items-center relative group">
                                <Link
                                    to={`/collections`}
                                    className="group-hover:text-[#006944]"
                                >
                                    Shop by products
                                </Link>
                                <ul className="absolute hidden group-hover:block group-hover:transition group-hover:ease-linear group-hover:duration-500 bg-white shadow-lg my-5 max-w-96 w-96 top-2 z-20 py-3 font-[16px]">
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/collections/honey`}>
                                                Honey
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/best-seller-cooking-oil`}
                                            >
                                                Cooking Oil
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/collections/ghee`}>
                                                A2 Desi Ghee
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/apple-cider-vinegar`}
                                            >
                                                Apple Cider Vinegar
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/herbal-juice`}
                                            >
                                                Herbal Juice
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/collections/turmeric`}>
                                                Hill Turmeric
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/jaggery-amla-candy`}
                                            >
                                                Jaggery Amla Candy
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/wellness-oil`}
                                            >
                                                Wellness oils
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/chawanprash`}
                                            >
                                                Chyawanprash
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/nuts-in-honey`}
                                            >
                                                Nuts in Honey
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/collections/stevia`}>
                                                Stevia
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/collections/shilajit`}>
                                                Shilajit
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/collections/saffron`}>
                                                Saffron
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/mouth-freshners`}
                                            >
                                                Mouth Freshner
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/collections/condiments`}
                                            >
                                                Condiment
                                            </Link>
                                        </span>
                                    </li>
                                </ul>
                                <RiArrowDropDownLine className="group-hover:rotate-180 transition-all size-7" />
                            </li>
                            <li className="border-r px-4 flex items-center relative group">
                                Business with us
                                <ul className="absolute hidden group-hover:block group-hover:transition group-hover:ease-linear group-hover:duration-500 bg-white shadow-lg my-5 max-w-96 w-96 top-2 z-20 py-3 font-[16px]">
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/pages/private-labelling`}
                                            >
                                                Private Label
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/pages/bulk-orders`}>
                                                Bulk Purchase (B2B)
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link
                                                to={`/pages/dealership-enquiry`}
                                            >
                                                Dealership Enquiry
                                            </Link>
                                        </span>
                                    </li>
                                    <li className="text-nowrap px-4 pb-1 mt-1 hover:text-[#006944]">
                                        <span className="underlined">
                                            <Link to={`/pages/contact`}>
                                                Contact Us
                                            </Link>
                                        </span>
                                    </li>
                                </ul>
                                <RiArrowDropDownLine className="group-hover:rotate-180 transition-all size-7" />
                            </li>
                            <li className="border-r px-4 flex items-center h-7">
                                <Link to={`/pages/consult-an-acharya`}>
                                    Consult an Acharya(Doctor)
                                </Link>
                            </li>
                            <li className="border-r px-4 flex items-center h-7">
                                <Link to={`/collections/gift`}>Gifting</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center list-none">
                        <div className="flex justify-around items-center gap-5 w-full">
                            <li className="cursor-pointer">
                                <button className="flex justify-center items-center relative">
                                    <p className="absolute -top-2.5 -right-3 flex justify-center items-center text-center bg-[#006944] text-white p-1 rounded-full text-sm scale-75 h-5 w-5">
                                        {wishlistItems?.length}
                                    </p>
                                    <svg
                                        onClick={() =>
                                            openModal
                                                ? closeHandler()
                                                : openHandler()
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        overflow="unset"
                                        className="icon"
                                    >
                                        <path
                                            d="M12.4869 22C12.2364 21.9968 11.9918 21.9232 11.7804 21.7875C8.18822 19.57 5.48518 17.3766 3.2783 14.8705C2.01853 13.5287 1.04215 11.942 0.408559 10.207C-0.730606 6.84675 0.5832 2.9211 3.46882 1.07256C4.78425 0.221399 6.35422 -0.134962 7.90363 0.0659208C9.45304 0.266804 10.8831 1.01212 11.9431 2.17126C12.1376 2.37977 12.3162 2.60031 12.4869 2.81685C12.7194 2.51694 12.97 2.2317 13.2371 1.96275C13.8816 1.32075 14.6473 0.816306 15.4888 0.479444C16.3303 0.142583 17.2302 -0.0198119 18.1351 0.00192686C19.0214 0.0266866 19.8936 0.23235 20.6992 0.606539C21.5048 0.980728 22.2271 1.51571 22.8227 2.17928C25.0693 4.63732 25.6012 7.62065 24.3072 10.8045C23.6255 12.404 22.6611 13.8647 21.4613 15.1151C19.3548 17.3836 16.9713 19.3724 14.3683 21.0336C14.019 21.2662 13.6578 21.4907 13.3006 21.7113L13.1934 21.7795C12.9825 21.9174 12.738 21.9937 12.4869 22Z"
                                            stroke="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {openModal && (
                                        <IndexHeart
                                            modalOpen={openModal}
                                            handleclose={closeHandler}
                                        />
                                    )}
                                </AnimatePresence>
                            </li>

                            <li className="cursor-pointer">
                                <div
                                    id="search"
                                    className="hidden bg-white border w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5"
                                >
                                    <div className="flex justify-around items-center h-full w-full gap-5">
                                        <div className="w-full h-1/2 flex border justify-around items-center rounded-lg">
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                className="w-full px-5 rounded-lg outline-none text-black placeholder:text-black placeholder:text-sm"
                                            />
                                            <span className="h-full w-10 rounded-md flex justify-center items-center">
                                                <FaSearch
                                                    color="#BEBEBE"
                                                    size={20}
                                                />
                                            </span>
                                        </div>
                                        <div
                                            className="border hover:border-black border-gray-500 rounded-full h-6 w-7 cursor-pointer text-xs flex items-center justify-center hover:text-black transition-all duration-300 text-gray-500"
                                            onClick={() =>
                                                (document.getElementById(
                                                    "search",
                                                ).style.display = "none")
                                            }
                                        >
                                            X
                                        </div>
                                    </div>
                                </div>
                                <img
                                    onClick={() => {
                                        document.getElementById(
                                            "search",
                                        ).style.display = "block";
                                    }}
                                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/seach.svg?v=1695633116"
                                    alt="Search"
                                />
                            </li>
                            <Link to={"/account/login"}>
                                <li className="cursor-pointer">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/account.svg?v=1695630427"
                                        alt="Account"
                                    />
                                </li>
                            </Link>
                            <li className="cursor-pointer">
                                <button
                                    className="relative"
                                    onClick={() =>
                                        Modalopen ? close() : open()
                                    }
                                >
                                    <img
                                        src="https://farmnaturelle.com/cdn/shop/t/64/assets/cart-alt_60x.png?v=6375129234202687581713351401"
                                        alt="cart"
                                    />
                                    <p className="absolute -top-3 -right-2 flex justify-center items-center text-center bg-[#006944] text-white p-1 rounded-full text-sm scale-75 h-5 w-5">
                                        {cartProducts?.length}
                                    </p>
                                </button>

                                <AnimatePresence>
                                    {Modalopen && (
                                        <Cart
                                            modalOpen={Modalopen}
                                            handleClose={close}
                                        />
                                    )}
                                </AnimatePresence>
                            </li>
                        </div>
                    </div>
                </nav>
            </Sticky>
            <div className="Box">
                <div
                    className="fixed bottom-0 -translate-y-20 hover:opacity-80 h-12 w-12 right-3"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    {" "}
                    <button className="bg-white shadow-2xl p-3 rotate-180 w-12 h-12 rounded-full flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 129 129"
                            className="icon"
                        >
                            <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Nav;