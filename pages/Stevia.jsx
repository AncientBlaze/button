import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
import { nanoid } from "@reduxjs/toolkit";

const products = [
    {
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9475_800x.jpg?v=1708001356",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9471_800x.jpg?v=1703749243",
        title: "Stevia(Sugar Replacement)",
        content: 289,
        PreviousPrice: 369,
        save: 22,
    },
];
function Stevia() {
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Stevia</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Card key={index} id={nanoid()} {...product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Stevia;
