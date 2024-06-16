import { Link } from "react-router-dom";
import NavBar from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import CardComponent from "../src/components/CardComponent2";
import { nanoid } from "@reduxjs/toolkit";

const products = [
    {
        id: "yellow-mustard-oil-classic",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9435_800x.jpg?v=1708001371",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9436_800x.jpg?v=1708001374",
        title: "100% Pure...",
        content: 275,
        PreviousPrice: 329,
        save: 16,
    },
    {
        id: "sunflower-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9423_800x.jpg?v=1703749253",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9424_800x.jpg?v=1708001213",
        title: "100% Natural Cold",
        content: 290,
        PreviousPrice: 339,
        save: 14,
    },
    {
        id: "black-sesame-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9313_800x.jpg?v=1708001210",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9314_800x.jpg?v=1708001212",
        title: "Black Sesame Oil...",
        content: 368,
        PreviousPrice: 449,
        save: 18,
    },
    {
        id: "white-sesame-oil-classic",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9429_800x.jpg?v=1703849984",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9430_800x.jpg?v=1703849986",
        title: "Buy 100% Pure...",
        content: 275,
        PreviousPrice: 329,
        save: 16,
        hidden: "hidden",
    },
    {
        ImageUrl:
            "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
        title: "Organic Extra Light",
        content: 299,
        PreviousPrice: 369,
        save: 19,
        hidden: "hidden",
    },
    // {
    //     ImageUrl:
    //         "https://farmnaturelle.com/cdn/shop/files/Rectangle9356_800x.jpg?v=1703849688",
    //     PlaceHolder:
    //         "https://farmnaturelle.com/cdn/shop/files/Rectangle9357_800x.jpg?v=1703849690",
    //     title: "Extra Virgin Olive...",
    //     content: 309,
    //     PreviousPrice: 379,
    //     save: 18,
    //     hidden: "hidden",
    // },
    {
        id: "black-mustard-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9304_5e288c25-7779-4d43-b049-30fa89946889_800x.jpg?v=1708001211",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9305_444d3e7e-98ea-43f4-8c19-c4b7f178614e_800x.jpg?v=1708001213",
        title: "Organic Cold Pressed...",
        content: 290,
        PreviousPrice: 339,
        save: 14,
    },
    {
        id: "groundnut-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9331_800x.jpg?v=1708001211",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9332_800x.jpg?v=1708001213",
        title: "100% Pure Organic...",
        content: 580,
        PreviousPrice: 695,
        save: 17,
    },
    {
        id: "organic-extra-virgin-coconut-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9369_800x.jpg?v=1703749125",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9370_800x.jpg?v=1708001197",
        title: "Organic Extra Virgin...",
        content: 449,
        PreviousPrice: 499,
        save: 10,
        hidden: "hidden",
    },
    {
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9339_800x.jpg?v=1708001195",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9340_800x.jpg?v=1708001199",
        title: "100% Pure Coconut...",
        content: 389,
        PreviousPrice: 429,
        save: 9,
        hidden: "hidden",
    },
];

function CookingOils() {
    return (
        <>
            <div>
                <NavBar />
                <div className="w-full bg-[#F5F5F5]">
                    <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                        <Link to="/" title="Back to Home">
                            Home&nbsp;
                        </Link>
                        /<span className="text-black">&nbsp;Cooking Oil</span>
                    </p>
                    <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                to={`/collections/best-seller-cooking-oil/products/${product.id}`}
                            >
                                <CardComponent
                                    key={product.title}
                                    {...product}
                                    id={nanoid()}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CookingOils;
