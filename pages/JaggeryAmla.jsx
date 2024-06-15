import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
import { nanoid } from "@reduxjs/toolkit";

const products = [
    {
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_2c2ad549-91b8-496c-a268-c5b49e3a230f_800x.jpg?v=1708001342",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_2696c6c4-fe31-4df6-a91e-8b99ce45653c_800x.jpg?v=1703749897",
        title: "Dried Dry Jaggery...",
        content: 359,
        PreviousPrice: 439,
        save: 18,
    },
];

function JaggeryAmla() {
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /
                    <span className="text-black">&nbsp;Jaggery Amla Candy</span>
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

export default JaggeryAmla;
