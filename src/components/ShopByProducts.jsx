import SimpleCard from "./CardComp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ShopByProducts = () => {
    const cardVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        visible: {
            scale: 1.1,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <>
            <div>
                <section>
                    <div>
                        <div className="flex-col w-full">
                            <img className="mx-auto w-[142px]" src="https://farmnaturelle.com/cdn/shop/files/Group_110799_2.png?v=1696441013" alt="" loading="lazy" />
                            <p className="text-center text-[#006944] font-semibold text-4xl text-[40px] py-2">Shop by Products</p>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center">
                        <div className="h-auto w-auto flex justify-center items-center">
                            <div className="grid lg:grid-cols-6 gap-8 pt-20 md:grid-cols-4 sm:grid-cols-2">
                                <div className="">
                                    <Link to={"/collections/honey"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/HOney.jpg?v=1708961843" text="Raw Honey" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/best-seller-cooking-oil"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Yellow_mustard.jpg?v=1708961843" text="Cooking Oil" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/ghee"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Ghee.jpg?v=1708961843" text="A2 Desi Cow Ghee" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/apple-cider-vinegar"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Frame_14857546_1_1015b620-3cb5-4f58-a8ea-2d1d44d1db15.png?v=1696440208" text="Apple Cider Vinegar" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/herbal-juice"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Juice.jpg?v=1708961843" text="Herbal Juices" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/turmeric"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Turmeric.jpg?v=1708961844" text="Hill Turmeric" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/jaggery-amla-candy"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Amla.jpg?v=1708961844" text="Jaggery Amla Candy" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/wellness-oil"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Wellbess_oils.jpg?v=1708961843" text="Wellness Oils" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/nuts-in-honey"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/ACV.jpg?v=1708961843" text="Nuts in Honey" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/hing"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Hing.jpg?v=1708961843" text="Hing" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/stevia"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Stevia.jpg?v=1708961843" text="Stevia" />
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to={"/collections/shilajit"}>
                                        <SimpleCard title="https://farmnaturelle.com/cdn/shop/files/Shilajit_icon_ecf9d51c-8d37-4337-ba17-72bf9d78f26f.png?v=1711030964" text="Shilajit" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="p-5">
                                <Link to={"/collections/Tea"}>
                                    <motion.div variants={cardVariants} whileHover="visible">
                                        <div className="h-auto w-[160px] rounded-3xl border-2 border-[#006944] overflow-hidden ">
                                            <img src="https://farmnaturelle.com/cdn/shop/files/Tea.jpg?v=1708961844" alt="" />
                                        </div>
                                    </motion.div>
                                    <p className="text-center p-1 font-jost font-medium text-[#006944]">Tea</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ShopByProducts;
