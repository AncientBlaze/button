import { Link } from "react-router-dom";
import NavBar from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import CardComponent from "../src/components/CardComponent2";
import { nanoid } from "@reduxjs/toolkit";

const herbalJuiceList = [
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_322aa64c-c3a9-4bc8-a4b4-958d1435158d_800x.jpg?v=1714050510",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_4b094ce5-cde7-42fe-aefb-65ca541ddfa3_800x.jpg?v=1714050510",
        title: "Slim Fit Juice",
        PreviousPrice: 2156,
        content: 999,
        hidden: null,
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_c664de08-e1df-42c1-bef6-ed9146acad00_800x.png?v=1714050546",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_5b2a26c1-6eee-435b-a91e-e522528e9c7b_800x.png?v=1714050547",
        title: "Strongest Ayurvedic 6...",
        PreviousPrice: 2156,
        content: 999,
        hidden: null,
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_446dd4ae-e8a1-4add-8851-a6507a512b59_800x.png?v=1714049445",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_288428b1-77a0-46c6-8cee-6abfac33eae1_800x.png?v=1714049444",
        title: "Easing Diabetes",
        PreviousPrice: 2056,
        content: 949,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_a4028fcd-59ab-4f15-9e4f-4010b8a572b4_800x.png?v=1714050634",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_59a381d1-6441-4b21-9947-ba3e420b612e_800x.png?v=1714050635",
        title: "100% Pure Herbal...",
        PreviousPrice: 1856,
        content: 849,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_b9ab028d-a331-48f9-9751-93f109576017_800x.jpg?v=1714050669",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_f23b1409-7a41-46ca-a0c4-b2cb44a1ea76_800x.jpg?v=1714050668",
        title: "Amla Juice 100%",
        PreviousPrice: 1756,
        content: 799,
        hidden: "hidden",
    },
    {
        save: 55,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_1c415fe2-6230-4092-9385-ff713a887201_800x.jpg?v=1714052494",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_dc9c6f66-0bf7-443f-9544-f6576284b547_800x.jpg?v=1714052493",
        title: "Neem Juice",
        PreviousPrice: 1656,
        content: 749,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_004df024-ed33-458d-aea1-6e51827032ab_800x.jpg?v=1714052517",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_b510d237-9eec-4cbb-abd8-0a7272e05582_800x.jpg?v=1714052517",
        title: "Tulsi Juice Most...",
        PreviousPrice: 1956,
        content: 899,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_047add8d-cc48-4702-8731-35cf403a0d56_800x.jpg?v=1714052542",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_29994c0f-65e9-4967-8bb2-272a7f1b34ec_800x.jpg?v=1714052541",
        title: "Aloevera WheatGrass J...",
        PreviousPrice: 1956,
        content: 899,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_37e192c9-2780-485f-8b49-ef97b113677d_800x.jpg?v=1714052560",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_37e192c9-2780-485f-8b49-ef97b113677d_800x.jpg?v=1714052560",
        title: "Aloevera Juice Stronge...",
        PreviousPrice: 1756,
        content: 799,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_bc280e4b-ed7d-4208-bfba-bb75b1409910_800x.jpg?v=1714052582",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_9b65e138-da6d-46f4-b167-34d9acec905f_800x.jpg?v=1714052583",
        title: "Triphala Juice",
        PreviousPrice: 1956,
        content: 899,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_9437b3be-2b5d-4708-9eb0-5eb48f0f7aa4_800x.jpg?v=1714049205",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_7b84664c-9194-4da1-bfe7-4d66670a0cb0_800x.jpg?v=1714049205",
        title: "Ayurvedic Kidney Ston...",
        PreviousPrice: 2156,
        content: 999,
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_facb5c7e-9bc8-475b-adda-d62911bf3546_800x.jpg?v=1714052666",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_4f168fe7-e577-4de0-8730-27ff2e945e2c_800x.jpg?v=1714052667",
        title: "Noni Juice Supports...",
        PreviousPrice: 2156,
        content: 999,
        hidden: "hidden",
    },
    {
        save: 54,
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/2_79cf5e46-0c60-4e75-aace-881115784fd3_800x.png?v=1714052859",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/1_56f02ccc-0613-4129-a1fb-53080772d02f_800x.png?v=1714052859",
        title: "Body Revitilizer Juice",
        PreviousPrice: 0,
        content: 0,
        hidden: "hidden",
    },
    // Add more objects here if needed
];

function HerbalJuice() {
    return (
        <div>
            <NavBar />
            <div className="w-full bg-[#F5F5F5]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Herbal Juice</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {herbalJuiceList.map((product, index) => (
                        <CardComponent key={index} id={nanoid()} {...product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HerbalJuice;
