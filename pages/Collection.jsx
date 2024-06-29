import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../assets/Card";
import Sticky from "react-stickynode";

function Collection() {
    return (
        <>
            <Sticky top={0}>
                <Nav />
            </Sticky>
            <div className="bg-[#F6F5F0] p-10">
                <p className="px-2 text-4xl">All Collections</p>
                <div className="grid xl:grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 justify-items-center px-10 gap-7">
                    <Link to={"/collections/all-products"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/ShilajitFront25g_grande.png?v=1711173556"
                            text="All Products"
                            items={78}
                        />
                    </Link>
                    <Link to={"/collections/apple-cider-vinegar"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/2_38e8be56-efc8-4584-bb40-a9998cd27a2f_grande.jpg?v=1703749530"
                            text="Apple Cidar Vinegar"
                            items={4}
                        />
                    </Link>
                    <Card
                        image="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_grande.gif"
                        text="Best Sellers"
                        items={0}
                    />
                    <Link to={"honey"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/2_78e4eb2a-d5c1-4523-b807-354c41bf870e_grande.jpg?v=1708763010"
                            text="Best Seller-Honey"
                            items={18}
                        />
                    </Link>
                    <Card
                        image="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_grande.gif"
                        text="Chawanprash"
                        items={0}
                    />
                    <Card
                        image="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_grande.gif"
                        text="Condiments"
                        items={0}
                    />
                    <Link to={"/collections/best-seller-cooking-oil"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/Rectangle9435_grande.jpg?v=1708001371"
                            text="Cooking Oil"
                            items={10}
                        />
                    </Link>
                    <Link to={"/collections/ghee"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/2_6334cefd-be7f-46fd-a2ec-f4afb83e43f4_grande.jpg?v=1703749493"
                            text="Ghee"
                            items={2}
                        />
                    </Link>
                    <Link to={"/collections/gift"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/150x10g1_grande.jpg?v=1703748858"
                            text="Gift"
                            items={18}
                        />
                    </Link>
                    <Link to={"/collections/herbal-juice"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/1_4b094ce5-cde7-42fe-aefb-65ca541ddfa3_grande.jpg?v=1714050510"
                            text="Herbal Juice"
                            items={13}
                        />
                    </Link>
                    <Link to={"/collections/turmeric"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/2_b21af706-c19f-495e-8684-fa4c13ea8b56_grande.jpg?v=1708001310"
                            text="Hill Turmeric"
                            items={3}
                        />
                    </Link>
                    <Link to={"/collections/hing"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/Rectangle9491_grande.jpg?v=1703849891"
                            text="Hing"
                            items={1}
                        />
                    </Link>
                    <Card
                        image="https://farmnaturelle.com/cdn/shop/files/ShilajitFront25g_grande.png?v=1711173556"
                        text="Home page"
                        items={17}
                    />
                    <Link to="/collections/Honey">
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/2_58201a2c-cc05-4076-8ce1-c2ad03d1b0c4_grande.jpg?v=1708000855"
                            text="Honey"
                            items={13}
                        />
                    </Link>
                    <Link to={"/collections/jaggery-amla-candy"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/2_2c2ad549-91b8-496c-a268-c5b49e3a230f_grande.jpg?v=1708001342"
                            text="Jaggery Amla Candy"
                            items={1}
                        />
                    </Link>
                    <Card
                        image="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_grande.gif"
                        text="/collections/Mouth Freshners"
                        items={0}
                    />
                    <Link to={"/collections/shilajit"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/ShilajitFront25g_grande.png?v=1711173556"
                            text="New Arrivals"
                            items={2}
                        />
                    </Link>
                    <Link to={"/collections/nuts-in-honey"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/Walnut2_grande.jpg?v=1703749109"
                            text="Nuts in Honey"
                            items={5}
                        />
                    </Link>
                    <Link to={"/collections/best-seller-cooking-oil"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/Rectangle9313_grande.jpg?v=1708001210"
                            text="Oil"
                            items={10}
                        />
                    </Link>
                    <Link to={"/collections/honey"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/2_58201a2c-cc05-4076-8ce1-c2ad03d1b0c4_grande.jpg?v=1708000855"
                            text="Pure Honey"
                            items={8}
                        />
                    </Link>
                    <Card
                        image="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_grande.gif"
                        text="Saffron"
                        items={0}
                    />
                    <Link to={"/collections/shilajit"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/ShilajitFront25g_grande.png?v=1711173556"
                            text="Shilajit"
                            items={2}
                        />
                    </Link>
                    <Card
                        image="https://farmnaturelle.com/cdn/shop/files/1_98b2b386-ba0d-488b-96fb-882a52e2d204_grande.jpg?v=1714049005"
                        text="Shop by Concern"
                        items={13}
                    />
                    <Link to={"/collections/stevia"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/Rectangle9475_grande.jpg?v=1708001356"
                            text="Stevia"
                            items={1}
                        />
                    </Link>

                    <Card
                        image="https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_grande.gif"
                        text="Tea"
                        items={7}
                    />
                    <Link to={"/collections/wellness-juice"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/1_98b2b386-ba0d-488b-96fb-882a52e2d204_grande.jpg?v=1714049005"
                            text="Wellness Juice"
                            items={8}
                        />
                    </Link>
                    <Link to={"/collections/wellness-oil"}>
                        <Card
                            image="https://farmnaturelle.com/cdn/shop/files/Rectangle9449_grande.jpg?v=1708001248"
                            text="Wellness Oil"
                            items={4}
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Collection;
