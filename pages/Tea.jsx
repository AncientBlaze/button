import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";

const Tea = () => (
    <div>
        <Nav />
        <div className="w-full h-auto bg-[#FAF9F4]">
            <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                <Link to="/" title="Back to Home">
                    Home&nbsp;
                </Link>
                /
                <span className="text-black">
                    &nbsp;Tea
                </span>
            </p>
            <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                {products.map(product => (
                    <Link to={`/collections/tea/products/${product.id}`} key={product.id}>
                        <Card {...product} />
                    </Link>
                ))}
            </div>
        </div>
        <Footer />
    </div>
);

export default Tea;

const products = [
    {
        id: "apple-cinnamon-tea",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
        title: "Apple Cinnamon Green...",
        content: 240,
        PreviousPrice: 389,
        save: 39,
    },
    {
        id: "moringa-green-tea",
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/2_6d22d326-4bd5-48a4-a01f-d019862ff85b.jpg?v=1703749394",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/3_01ca5bed-8d76-4b9a-afe5-cfc4c6724982.jpg?v=1708001392",
        title: "Moringa Green Tea",
        content: 210,
        PreviousPrice: 339,
        save: 39,
    },
    {
        id: "turmeric-green-tea",
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/1_3d0c0408-8129-44f9-a983-9fce09b7f6b9.jpg?v=1708001400",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/2_6152b138-9fee-4283-89e8-0ad31183b72e.jpg?v=1703748902",
        title: "Turmeric Green Tea",
        content: 210,
        PreviousPrice: 339,
        save: 39,
    },
    {
        id: "masala-tea",
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/2_516e747c-328b-4b4a-bd87-780495144903.jpg?v=1703749356",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/3_f4bc7924-fa87-4bc0-8ef7-4c35a802b0ee_800x.jpg?v=1703749358",
        title: "Masala Green Tea",
        content: 210,
        PreviousPrice: 339,
        save: 39,
    },
    {
        id: "kashmiri-kahwa-tea",
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/2_6da9359b-f2fa-4f8f-b91b-0e0010796619.jpg?v=1703849966",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/3_4e3826a2-5f90-4090-a16a-dfde48bf8ab1.jpg?v=1708001344",
        title: "Kashmiri Kahwa Tea",
        content: 240,
        PreviousPrice: 389,
        save: 39,
    },
    {
        id: "lemongrass-mint-green-tea",
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/1_f161c1ee-563e-4dec-94e3-862684c5165d.jpg?v=1703749319",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/3_7426ac1c-8635-4fba-a875-f01b29ee257a_800x.jpg?v=1708001344",
        title: "Lemongrass Mint Green Tea",
        content: 210,
        PreviousPrice: 339,
        save: 39,
    },
    {
        id: "tulsi-green-tea",
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/2_0a36776a-47f8-4eec-aea1-985615a10e1e.jpg?v=1703748873",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/4_66b349af-62e2-43d3-80f2-78d40ff755b5.jpg?v=1708001344",
        title: "Tulsi Green Tea",
        content: 210,
        PreviousPrice: 339,
        save: 39,
    }
];

