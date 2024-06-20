import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";

const products = [
    {   
        id:"turmeric-with-black-pepper",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_b21af706-c19f-495e-8684-fa4c13ea8b56_800x.jpg?v=1708001310",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_6c2f78ab-c997-49e0-bab9-dd14e0b79ca0_800x.jpg?v=1703749015",
        title: "Pure Himalayan Mountain...",
        content: 310,
        PreviousPrice: 369,
        save: 16,
    },
    {   
        id:"turmeric-milk-masala",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_c66f704f-ee21-4f84-9c6b-7ca30cd27508_800x.jpg?v=1703748966",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_405a635b-3b67-4d1a-852f-19ca78d8f919_800x.jpg?v=1708001313",
        title: "Golden Milk Masala",
        content: 369,
        PreviousPrice: 439,
        save: 16,
    },
    {   id:"plain-turmeric",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_d14483a9-8a4f-42d5-8e66-e83b7e506b81_800x.jpg?v=1708001311",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_c0ef04df-dcfd-4964-8436-6af00be07bf8_800x.jpg?v=1708001313",
        title: "Pure Himalayan Mountain...",
        content: 299,
        PreviousPrice: 359,
        save: 17,
    },
];

function HillTurmeric() {
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Hill Turmeric</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Link to={`/collections/turmeric/products/${product.id}`} key={index}>
                        <Card key={index} {...product} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HillTurmeric;
