import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
import { nanoid } from "@reduxjs/toolkit";

const products = [
    {   
        id:"acv-cinnamon-honey-fenugreek",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_38e8be56-efc8-4584-bb40-a9998cd27a2f_800x.jpg?v=1703749530",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_6e7d5bcd-67a9-470c-88e9-955ce7799ee3_800x.jpg?v=1708001287",
        title: "Original Apple Cider...",
        content: 525,
        PreviousPrice: 675,
        save: 22,
    },
    {   
        id:"acv-ginger-turmeric",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_33e16e03-4d5c-41ba-8b9c-fc9feb96421c_800x.jpg?v=1708001285",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_ec189c7d-a173-43ed-a806-7ef2afc5b96b_800x.jpg?v=1708001287",
        title: "Original Apple Cider...",
        content: 525,
        PreviousPrice: 675,
        save: 22,
    },
    {
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_33e16e03-4d5c-41ba-8b9c-fc9feb96421c_800x.jpg?v=1708001285",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_ec189c7d-a173-43ed-a806-7ef2afc5b96b_800x.jpg?v=1708001287",
        title: "Original Apple Cider...",
        content: 525,
        PreviousPrice: 675,
        save: 22,
    },
    {
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_d93ab713-7e93-4bf7-9830-34a2061f10ff_800x.jpg?v=1703749654",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_8ccadb4a-dd63-4a45-8279-e6c6c699a018_800x.jpg?v=1708001287",
        title: "Apple Cider Vinegar...",
        content: 495,
        PreviousPrice: 625,
        save: 21,
    },
];

function Apple() {
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /
                    <span className="text-black">
                        &nbsp;Apple Cider Vinegar
                    </span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Link to={`/collections/apple-cider-vinegar/products/${product.id}`} key={index}>
                        <Card key={index} id={nanoid()} {...product} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Apple;
