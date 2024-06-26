import { Link } from "react-router-dom";

const date = new Date();
const getYear = date.getFullYear()

function Footer() {
    return (
        <>
            <div className="flex-col">
                <div className="footer h-[calc(657px+env(safe-area-inset-bottom))]" style={{ backgroundImage: `url(https://farmnaturelle.com/cdn/shop/files/Group_14856848.png?v=1696491609)` }}>
                    <div className="py-20">
                        <h3 className="text-center font-jost font-medium text-[#006944] text-5xl">
                            Also Available On
                        </h3>
                        <div className="w-full h-20 my-2 text-3xl flex justify-around items-center py-2 px-2">
                            <img
                                className="w-24 h-auto"
                                src="//farmnaturelle.com/cdn/shop/files/Link_Amazon_png_480x.png?v=1696490249"
                                alt="Image of footer-image"
                                loading="lazy"
                            />
                            <img
                                className="w-24 h-auto"
                                src="//farmnaturelle.com/cdn/shop/files/FLIPKART_1_480x.png?v=1704798125"
                                alt="Image of footer-image"
                                loading="lazy"
                            />
                            <img
                                className="w-24 h-auto"
                                src="//farmnaturelle.com/cdn/shop/files/image_12383_480x.png?v=1696490466"
                                alt="Image of footer-image"
                                loading="lazy"
                            />
                            <img
                                className="w-24 h-auto"
                                src="//farmnaturelle.com/cdn/shop/files/Link_meesho_png_480x.png?v=1696490466"
                                alt="Image of footer-image"
                                loading="lazy"
                            />
                            <img
                                className="w-24 h-auto"
                                src="//farmnaturelle.com/cdn/shop/files/NicePng_alibaba-logo-png_2803824_1_480x.png?v=1696490466"
                                alt="Image of footer-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full bg-[#006944] font-jost flex">
                    <div className="h-full w-1/4 px-10 py-16 flex flex-col text-white text-sm">
                        <img
                            className="h-1/2 w-1/3"
                            src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_cropped-cropped-FN_logo_2021-1-e1662637473598_png.png?v=1696492045"
                            alt=""
                        />
                        <p className="text-wrap py-5">
                            Become a Insider and get 10% off your order today.
                            Plus we&apos;ll keep you up-to-date with the latest
                            theme news.
                        </p>
                        <form className="flex justify-between items-center bg-white divide-x divide-gray h-10 rounded-md text-md ml-1 mr-4">
                            <input
                                type="text"
                                placeholder="Enter your email Address"
                                className="w-full px-2"
                            />
                            <input
                                type="button"
                                value={"→"}
                                className="text-black h-full px-2"
                            />
                        </form>
                    </div>
                    <div className="h-full w-[75%] px-10 py-16 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 text-white">
                        <div className="h-full flex flex-col items-start">
                            <h3 className="text-xl font-medium">Categories</h3>
                            <ul className="list-none">
                                <Link to={"/collections/honey"}>
                                    <li className="py-2 px-1 cursor-pointer">Honey</li>
                                </Link>
                                <Link to={"/collections/best-seller-cooking-oil"}>
                                    <li className="py-2 px-1 cursor-pointer">Cooking Oil</li>
                                </Link>
                                <Link to={"/collections/ghee"}>
                                    <li className="py-2 px-1 cursor-pointer">A2 Ghee</li>
                                </Link>
                                <Link to={"/collections/apple-cider-vinegar"}>
                                    <li className="py-2 px-1 cursor-pointer">Apple Cidar Vinegar</li>
                                </Link>
                                <Link to={"/collections/herbal-juice"}>
                                    <li className="py-2 px-1 cursor-pointer">Herbal Juices</li>
                                </Link>
                                <Link to={"/collections/turmeric"}>
                                    <li className="py-2 px-1 cursor-pointer">Hill Turmeric</li>
                                </Link>
                                <Link to={"/collections/jaggery-amla-candy"}>
                                    <li className="py-2 px-1 cursor-pointer">Amla candy</li>
                                </Link>
                                <Link to={"/collections/wellness-oils"}>
                                    <li className="py-2 px-1 cursor-pointer">Wellness Oils</li>
                                </Link>
                                <Link to={"/collections/stevia"}>
                                    <li className="py-2 px-1 cursor-pointer">Stevia</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="h-full flex flex-col items-start">
                            <h3 className="text-xl font-medium">Important Links</h3>
                            <ul className="list-none">
                                <Link to={"/pages/about-us"}>
                                    <li className="py-2 px-1 cursor-pointer">About us</li>
                                </Link>
                                <Link to={"/pages/our-farm"}>
                                    <li className="py-2 px-1 cursor-pointer">Our Farms</li>
                                </Link>
                                <Link to={"/pages/contact"}>
                                    <li className="py-2 px-1 cursor-pointer">Contact us</li>
                                </Link>
                                <Link to={"/pages/bulk-orders"}>
                                    <li className="py-2 px-1 cursor-pointer">Bulk Purchase</li>
                                </Link>
                                <Link>
                                    <li className="py-2 px-1 cursor-pointer">Blogs</li>
                                </Link>
                                <Link to={"/pages/privacy-policy"}>
                                    <li className="py-2 px-1 cursor-pointer">Privacy Policy</li>
                                </Link>
                                <Link>
                                    <li className="py-2 px-1 cursor-pointer">Terms and Conditions</li>
                                </Link>
                                <Link>
                                    <li className="py-2 px-1 cursor-pointer">Shipping Policy</li>
                                </Link>
                                <Link>
                                    <li className="py-2 px-1 cursor-pointer">Refund Policy</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-xl font-medium">Contact us</h3>
                            <ul className="list-none py-2 text-md">
                                <li className="cursor-pointer">PHONE:</li>
                                <li className="cursor-pointer">98109 88725,81305 31333</li>
                            </ul>
                            <ul className="list-none py-2 text-md">
                                <li className="cursor-pointer">EMAIL:</li>
                                <li className="cursor-pointer">hello@farmnaturelle.com</li>
                            </ul>
                            <div className="h-auto w-full flex justify-center items-center gap-4 py-5 pr-6">
                                <Link to={"https://www.facebook.com/farmnaturelle1?mibextid=2JQ9oc"}>
                                    <img className="w-auto h-5" src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_813fd181-8ecb-4903-89e0-c8d56b5f4a97.svg?v=1696492952" alt="" />
                                </Link>
                                <Link to={"https://www.youtube.com/@FarmNaturalProduce"}>
                                    <img className="w-auto h-5" src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_9a739226-ca78-472b-b733-10b2032b2c65.svg?v=1696492952" alt="" />
                                </Link>
                                <Link to={"https://www.youtube.com/@FarmNaturalProduce"}>
                                    <img className="w-auto h-5" src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/whatsapp__icon_2da3a4fd-647f-488f-bca2-c6a85190f40c.svg?v=1704272395" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-20 bg-[#006944] flex items-center p-10 justify-between text-white">
                    <p>&copy; {getYear} Farm Naturelle . All rights reserved.</p>
                    <div className="flex gap-2">
                        <img
                            className="w-auto h-6"
                            src="https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-visa.png?v=77682190091476822571713351401"
                            alt="Image of footer-image"
                            loading="lazy"
                        />
                        <img
                            className="w-auto h-6"
                            src="https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-mastercard.png?v=25567033732622262981713351401"
                            alt="Image of footer-image"
                            loading="lazy"
                        />
                        <img
                            className="w-auto h-6"
                            src="https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-americanexp.png?v=137006734920877356331713351401"
                            alt="Image of footer-image"
                            loading="lazy"
                        />
                        <img
                            className="w-auto h-6"
                            src="https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-paypal.png?v=48995582256179621891713351401"
                            alt="Image of footer-image"
                            loading="lazy"
                        />
                        <img
                            className="w-auto h-6"
                            src="https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-discover.png?v=11980595818515657511713351401"
                            alt="Image of footer-image"
                            loading="lazy"
                        />
                        <img
                            className="w-auto h-6"
                            src="https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-shopify.png?v=48862370562683140221713351401"
                            alt="Image of footer-image"
                            loading="lazy"
                        />
                        <img
                            className="w-auto h-6"
                            src="https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-7.png?v=15029955320502882341713351401"
                            alt="Image of footer-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
