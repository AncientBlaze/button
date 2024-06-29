import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
import Card2 from "../src/components/CardComp3";


function Gift() {
    const products = [
        {
            id: "150x4-red-box-with-dipper",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/150x10g1_800x.jpg?v=1703748858",
            title: "150 x 4 red box...",
            content: 1494,
            PreviousPrice: 1195,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "blue-foliage-box-with-dipper-spoon-and-pepper-bag",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_8787-2_207e35ba-a884-47df-a550-8b66a93b8909_800x.jpg?v=1708001405",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/IMG_8787_e36519c2-c0de-440b-b6df-3f00f9b46a9d_800x.jpg?v=1708001407",
            title: "Blue Foliage Box...",
            content: 1659,
            PreviousPrice: 2063,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "red-foliage-box-with-dipper-spoon-and-pepper-bag",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_8787-3_800x.jpg?v=1703749179",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/IMG_8787_800x.jpg?v=1703749181",
            title: "Red Foliage Box...",
            content: 1750,
            PreviousPrice: 2188,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "775g x 1 Kraft Wooden Box with Dipper Plain Or Infused Honey Or Nuts in cinnamon honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_80161_400x_f853f57e-7e3d-4dd4-b837-5efb7a862740_800x.jpg?v=1713351149",
            title: "775 x 1 red box...",
            content: 959,
            PreviousPrice: 1199,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "400g-x-1-in-kraft-wooden-box-with-dipper-plain-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_80101_800x.jpg?v=1703749446",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/IMG_80101_800x.jpg?v=1703749448",
            title: "400g x 1...",
            content: 795,
            PreviousPrice: 994,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "55g-x-7-all-infused-honey-spoon-a-different-flavor-for-each-day-of-the-week",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_78421_800x.jpg?v=1703749456",
            title: "55g x 7...",
            content: 795,
            PreviousPrice: 994,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "750gx2-in-jute-bag-with-dipper",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_78423_800x.jpg?v=1708001416",
            title: "750gx2 in jute...",
            content: 1475,
            PreviousPrice: 1844,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "300gx1-in-jute-bag-with-dipper",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_78371_400x_e004947d-aac3-4312-b16b-8d7cb2a5df7d_800x.jpg?v=1713351098",
            title: "300gx1 in jute...",
            content: 615,
            PreviousPrice: 769,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "350g-x-3-in-jute-bag-with-dipper",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_78431_800x.jpg?v=1703748871",
            title: "350g x 3...",
            content: 1375,
            PreviousPrice: 1799,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "300g-x-2-in-jute-bag-with-dipper",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/150x10g1_b80ce7c8-9145-4da7-abe8-5b60207ef7fe_800x.jpg?v=1713351098",
            title: "300g x 2...",
            PreviousPrice: 1206,
            content: 965,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "775g-x-1-with-dipper-in-embroidered-jute-potli",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/775gpotli1_800x.jpg?v=1703749469",
            title: "775g x 1...",
            content: 889,
            PreviousPrice: 1111,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "400g-x-1-with-dipper-in-embroidered-jute-potli",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/400gpotli1_800x.jpg?v=1703749449",
            title: "400g x 1...",
            content: 600,
            PreviousPrice: 750,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "350-g-x-3-red-box-with-dipper-infuser",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/redbox11_800x.jpg?v=1708001405",
            title: "350 g x...",
            content: 1350,
            PreviousPrice: 1688,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "250gx2-blue-box-with-dipper",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/250gx21_800x.jpg?v=1703748861",
            title: "250gx2 blue box...",
            content: 995,
            PreviousPrice: 1244,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "40g-x-10-honey",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/40x10g_800x.jpg?v=1703749451",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/40x10_800x.jpg?v=1708001407",
            title: "40g x 10...",
            content: 850,
            PreviousPrice: 1063,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "gift-the-finest-honeys-9-bottles",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/55X91_800x.jpg?v=1708001372",
            title: "55g x9 Any...",
            content: 795,
            PreviousPrice: 994,
            save: 20,
            hidden: "hidden",
        },
        {
            id: "red-tulip-box-1",
            ImageUrl:
                "https://farmnaturelle.com/cdn/shop/files/IMG_0265_800x.jpg?v=1708001372",
            PlaceHolder:
                "https://farmnaturelle.com/cdn/shop/files/IMG_0268_800x.jpg?v=1708001374",
            title: "Red Tulip Box",
            PreviousPrice: 1994,
            content: 1595,
            save: 20,
            hidden: "hidden",
        },
        {
            ImageUrl: "https://farmnaturelle.com/cdn/shop/files/IMG_7444_800x.jpg?v=1703749908",
            PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/File_009_800x.jpg?v=1703749910",
            title: "Chocolate Tulip Box",
            PreviousPrice: 1744,
            content: 1395,
            save: 20,
            hidden: "hidden"
        }
    ];
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Gift</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) =>
                        product.PlaceHolder === undefined ? (
                            <Link
                                key={index}
                                to={`/collections/gift/products/${product.id}`}
                            >
                                <Card2
                                    {...product}
                                />
                            </Link>
                        ) : (
                            <Link
                                key={index}
                                to={`/collections/gift/products/${product.id}`}
                            >
                                <Card
                                    {...product}
                                />
                            </Link>
                        ),
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Gift;
