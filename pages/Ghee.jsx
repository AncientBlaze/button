import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
import { nanoid } from "@reduxjs/toolkit";

function Ghee() {
    const products = [
        {
            id: "ae019b10-1e48-4420-9f34-4dfdc8d54496",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/2_6334cefd-be7f-46fd-a2ec-f4afb83e43f4_800x.jpg?v=1703749493",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/3_6ffc569d-4534-4507-97ba-2f4a6afb76d0_800x.jpg?v=1703749499",
            title: "From Naturelle 100%...",
            content: 789,
            PreviousPrice: 519,
            save: 34,
        },
        {
            id: "bcda387b-802b-41d0-b254-5b7be7198e22",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/2_749637ab-9d9e-4be2-9213-5a284f8f231e_800x.jpg?v=1708001310",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/3_58147d53-ae6c-4ab3-916e-50719d69ad36_800x.jpg?v=1708001313",
            title: "Organic A2 Desi...",
            content: 1999,
            PreviousPrice: 2865,
            save: 30,
        },
    ];

    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Ghee</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product) => (
                        <Card key={product.title} {...product} id={nanoid()} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Ghee;
