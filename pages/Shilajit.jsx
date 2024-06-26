import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";

function Shilajit() {
    const products = [
        {   
            id:"himalayan-shilajit-shilajeet-resin-bull-power-performance-booster-for-endurance-and-stamina-100-ayurvedic-silajit-for-man-woman",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/ShilajitFront25g_800x.png?v=1711173556",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Shilajitresin_800x.png?v=1711173556",
            title: "Pure Himalayan Shilajit",
            content: 429,
            PreviousPrice: 579,
            save: 26,
        },
        {   
            id:"himalayan-shilajit-infused-honey-300gm-help-improve-strength-stamina-for-men-women-shilajeet-gold-infused-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Shilaji_800x.png?v=1711014184",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Banner1_800x.png?v=1711099109",
            title: "Shilajit Honey |...",
            content: 395,
            PreviousPrice: 879,
            save: 55,
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
                    /<span className="text-black">&nbsp;Shilajit</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Link key={index} to={`/collections/shilajit/products/${product.id}`}>
                        <Card {...product} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Shilajit;
