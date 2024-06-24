import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";

const products = [
    {
        id: "castor-seed-oil",
        ImageUrl:
        "https://farmnaturelle.com/cdn/shop/files/Rectangle9456_800x.jpg?v=1708001285",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9457_800x.jpg?v=1708001287",
        title: "100% Pure Natural...",
        content: 269,
        PreviousPrice: 320,
        save: 16,
    },
    {
        id: "black-seed-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9449_800x.jpg?v=1708001248",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9450_800x.jpg?v=1708001251",
        title: "100% Pure Black...",
        content: 339,
        PreviousPrice: 430,
        save: 21,
    },
    {
        id: "avocado-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9442_15612b03-e829-4d47-9529-9bae1bd44490_800x.jpg?v=1703749705",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9443_7a77cf59-f1d5-4828-90ca-8fd970983aa9_800x.jpg?v=1703749707",
        title: "100% Pure Extra...",
        content: 569,
        PreviousPrice: 690,
        save: 18,
    },
    {
        id: "flax-seed-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9463_800x.jpg?v=1708001247",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9464_800x.jpg?v=1708001251",
        title: "Flax Seed Oil",
        content: 269,
        PreviousPrice: 320,
        save: 16,
    }
];

function WellnessOil() {
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Wellness Oils</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Link to={`/collections/wellness-oils/products/${product.id}`} key={index}>
                            <Card {...product} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WellnessOil;
