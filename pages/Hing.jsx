import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";

const products = [
    {
        id: "hing",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9491_800x.jpg?v=1703849891",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9487_800x.jpg?v=1708001344",
        title: "100% Pure and...",
        content: 395,
        PreviousPrice: 595,
        save: 34,
        hidden: "hidden"
    },
];

function Hing() {
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Hing</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Link key={index} to={`/collections/${product.id}/products/${product.id}`}>
                            <Card {...product} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hing;
