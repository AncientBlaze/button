import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
function HoneyNuts() {
    const products = [
        {
            id: "wallnut-in-cinnamon",
            catagory:"nuts-in-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Walnut2_800x.jpg?v=1703749109",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Walnut3_800x.jpg?v=1703749109",
            title: "Walnut in Cinnamon...",
            content: 479,
            PreviousPrice: 799,
            save: 40,
        },
        {
            id: "figs-in-cinnamon-honey",
            catagory:"nuts-in-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/2_76b4bceb-21eb-40bc-8b49-d94fff2ccc61_800x.jpg?v=1703849709",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/3_881facd8-88e6-44cf-b3d6-8bc762df73f8_800x.jpg?v=1708001119",
            title: "Figs in Cinnamon",
            content: 599,
            PreviousPrice: 799,
            save: 25,
        },
        {
            id: "cashew-in-cinnamon-honey",
            catagory:"nuts-in-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Cashew2_800x.jpg?v=1703749861",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/Cashew3_800x.jpg?v=1703749861",
            title: "Cashew in Cinnamon",
            content: 539,
            PreviousPrice: 799,
            save: 33,
        },
        {
            id: "mix-nut-in-cinnamon-honey",
            catagory:"nuts-in-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/2_76b4bceb-21eb-40bc-8b49-d94fff2ccc61_800x.jpg?v=1703849709",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/3_89ebac74-72a2-4c03-946d-b17fd95e6a18_800x.jpg?v=1708001119",
            title: "Mix Nut in...",
            content: 539,
            PreviousPrice: 799,
            save: 33,
        },
        {
            id: "almond-in-cinnamon-honey",
            catagory:"nuts-in-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/Almond2_800x.jpg?v=1708001070",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/180gm1_800x.jpg?v=1708001086",
            title: "Almond in Cinnamon...",
            content: 479,
            PreviousPrice: 799,
            save: 18,
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
                    /<span className="text-black">&nbsp;Nuts In Honey</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Link to={`/collections/nuts-in-honey/products/${product.id}`} key={index}>
                            <Card {...product} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HoneyNuts;
