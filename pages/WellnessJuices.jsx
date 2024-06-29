import { Link } from "react-router-dom";
import NavBar from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
import Card2 from "../src/components/CardComp3";

const herbalJuiceList = [
    {
        id: "smiling-liver",
        save: 23,
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/1_98b2b386-ba0d-488b-96fb-882a52e2d204.jpg?v=1714049005",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/3_5e4c89b6-fcd8-4b5b-a0af-3dce6c683d26.jpg?v=1714049006",
        title: "Smiling Liver Juice...",
        PreviousPrice: 1099,
        content: 849,
        hidden: "hidden"
    },
    {
        id: "piles-vanish-1",
        save: 54,
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/1_dce904a4-a7e3-4499-94b1-9bc050c38f14.jpg?v=1714048953",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/2_659d3110-4c28-461e-8de2-825ac8626235.jpg?v=1714048972",
        title: "Piles Vanish Juice...",
        PreviousPrice: 2056,
        content: 949,
        hidden: "hidden"
    },
    {
        id: "kidney-stone-crusher-juice",
        save: 54,
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/1_7b84664c-9194-4da1-bfe7-4d66670a0cb0.jpg?v=1714049205",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/2_9437b3be-2b5d-4708-9eb0-5eb48f0f7aa4.jpg?v=1714049205",
        title: "Ayurvedic Kidney Stone...",
        PreviousPrice: 2156,
        content: 999,
        hidden: "hidden"
    },
    {
        save: 54,
        ImageUrl: "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
        title: "Cholestrol Reduction &...",
        PreviousPrice: 1856,
        content: 849,
        hidden: "hidden"
    },
    // Add more objects here if needed
];

function WellnessJuice() {
    return (
        <div>
            <NavBar />
            <div className="w-full bg-[#F5F5F5]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Wellness Juice</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {herbalJuiceList.map((product, index) => (
                        <Link key={index} to={`/collections/herbal-juice/products/${product.id}`}>
                            {product.PlaceHolder === undefined ? (
                                <Card2 {...product} />
                            ) : (
                                <Card {...product} />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WellnessJuice;
