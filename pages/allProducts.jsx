import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
import Card from "../src/components/CardComponent2";
import Card2 from "../src/components/CardComp3";

const products = [
    {
        id: "acv-cinnamon-honey-fenugreek",
        catagory: "apple-cider-vinegar",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_38e8be56-efc8-4584-bb40-a9998cd27a2f_800x.jpg?v=1703749530",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_6e7d5bcd-67a9-470c-88e9-955ce7799ee3_800x.jpg?v=1708001287",
        title: "Original Apple Cider...",
        content: 525,
        PreviousPrice: 675,
        save: 22,
    },
    {
        id: "acv-ginger-turmeric",
        catagory: "apple-cider-vinegar",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_33e16e03-4d5c-41ba-8b9c-fc9feb96421c_800x.jpg?v=1708001285",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_ec189c7d-a173-43ed-a806-7ef2afc5b96b_800x.jpg?v=1708001287",
        title: "Original Apple Cider...",
        content: 525,
        PreviousPrice: 675,
        save: 22,
    },
    {
        id: "acv-ginger-garlic",
        catagory: "apple-cider-vinegar",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_33e16e03-4d5c-41ba-8b9c-fc9feb96421c_800x.jpg?v=1708001285",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_ec189c7d-a173-43ed-a806-7ef2afc5b96b_800x.jpg?v=1708001287",
        title: "Original Apple Cider...",
        content: 525,
        PreviousPrice: 675,
        save: 22,
    },
    {
        id: "apple-cider-vinegar",
        catagory: "apple-cider-vinegar",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_d93ab713-7e93-4bf7-9830-34a2061f10ff_800x.jpg?v=1703749654",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_8ccadb4a-dd63-4a45-8279-e6c6c699a018_800x.jpg?v=1708001287",
        title: "Apple Cider Vinegar...",
        content: 495,
        PreviousPrice: 625,
        save: 21,
    },
    {
        id: "yellow-mustard-oil-classic",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9435_800x.jpg?v=1708001371",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9436_800x.jpg?v=1708001374",
        title: "100% Pure...",
        content: 275,
        PreviousPrice: 329,
        save: 16,
    },
    {
        id: "sunflower-oil",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9423_800x.jpg?v=1703749253",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9424_800x.jpg?v=1708001213",
        title: "100% Natural Cold",
        content: 290,
        PreviousPrice: 339,
        save: 14,
    },
    {
        id: "black-sesame-oil",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9313_800x.jpg?v=1708001210",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9314_800x.jpg?v=1708001212",
        title: "Black Sesame Oil...",
        content: 368,
        PreviousPrice: 449,
        save: 18,
    },
    {
        id: "white-sesame-oil-classic",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9429_800x.jpg?v=1703849984",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9430_800x.jpg?v=1703849986",
        title: "Buy 100% Pure...",
        content: 275,
        PreviousPrice: 329,
        save: 16,
        hidden: "hidden",
    },
    {
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_800x.gif",
        title: "Organic Extra Light",
        content: 299,
        PreviousPrice: 369,
        save: 19,
        hidden: "hidden",
    },
    {
        id: "black-mustard-oil",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9304_5e288c25-7779-4d43-b049-30fa89946889_800x.jpg?v=1708001211",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9305_444d3e7e-98ea-43f4-8c19-c4b7f178614e_800x.jpg?v=1708001213",
        title: "Organic Cold Pressed...",
        content: 290,
        PreviousPrice: 339,
        save: 14,
    },
    {
        id: "groundnut-oil",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9331_800x.jpg?v=1708001211",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9332_800x.jpg?v=1708001213",
        title: "100% Pure Organic...",
        content: 580,
        PreviousPrice: 695,
        save: 17,
    },
    {
        id: "organic-extra-virgin-coconut-oil",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9369_800x.jpg?v=1703749125",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9370_800x.jpg?v=1708001197",
        title: "Organic Extra Virgin...",
        content: 449,
        PreviousPrice: 499,
        save: 10,
        hidden: "hidden",
    },
    {
        id: "organic-virgin-coconut-oil",
        catagory: "best-seller-cooking-oil",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9339_800x.jpg?v=1708001195",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9340_800x.jpg?v=1708001199",
        title: "100% Pure Coconut...",
        content: 389,
        PreviousPrice: 429,
        save: 9,
        hidden: "hidden",
    },
    {
        id: "a2-sahiwali-ghee",
        catagory: "ghee",
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
        id: "a2-desi-cow-ghee-from-grass-fed-gir-cows-vedic-bilona-method-curd-churned-golden-grainy-aromatic-keto-friendly-non-gmo-and-a-wooden-spoon",
        catagory: "ghee",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_749637ab-9d9e-4be2-9213-5a284f8f231e_800x.jpg?v=1708001310",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_58147d53-ae6c-4ab3-916e-50719d69ad36_800x.jpg?v=1708001313",
        title: "Organic A2 Desi...",
        content: 1999,
        PreviousPrice: 2865,
        save: 30,
    },
    {
        id: "slimfit-juice",
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
        id: "immunity-juice",
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
        id: "easing-diabetes",
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
        id: "giloy-juice",
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
        id: "amla-juice",
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
        id: "neem-juice",
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
        id: "tulsi-juice",
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
        id: "aloevera-wheatgrass-juice",
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
        id: "aloevera-juice",
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
        id: "triphala-juice",
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
        id: "kidney-stone-crusher-juice",
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
        id: "noni-juice",
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
        id: "body-revitlizer-juice",
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
    {
        id: "chatpata-amla-candy",
        catagory: "jaggery-amla-candy",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_2c2ad549-91b8-496c-a268-c5b49e3a230f_800x.jpg?v=1708001342",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_2696c6c4-fe31-4df6-a91e-8b99ce45653c_800x.jpg?v=1703749897",
        title: "Dried Dry Jaggery...",
        content: 359,
        PreviousPrice: 439,
        save: 18,
    },
    {
        id: "turmeric-with-black-pepper",
        catagory: "turmeric",
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
        id: "turmeric-milk-masala",
        catagory: "turmeric",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_c66f704f-ee21-4f84-9c6b-7ca30cd27508_800x.jpg?v=1703748966",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_405a635b-3b67-4d1a-852f-19ca78d8f919_800x.jpg?v=1708001313",
        title: "Golden Milk Masala",
        content: 369,
        PreviousPrice: 439,
        save: 16,
    },
    {
        id: "plain-turmeric",
        catagory: "turmeric",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_d14483a9-8a4f-42d5-8e66-e83b7e506b81_800x.jpg?v=1708001311",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_c0ef04df-dcfd-4964-8436-6af00be07bf8_800x.jpg?v=1708001313",
        title: "Pure Himalayan Mountain...",
        content: 299,
        PreviousPrice: 359,
        save: 17,
    },
    {
        id: "hing",
        catagory: "hing",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9491_800x.jpg?v=1703849891",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9487_800x.jpg?v=1708001344",
        title: "100% Pure and...",
        content: 395,
        PreviousPrice: 595,
        save: 34,
    },
    {
        id: "acacia-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_02314507-5857-4219-a1b5-306c47a83dd1_800x.jpg?v=1708000860",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_58201a2c-cc05-4076-8ce1-c2ad03d1b0c4_800x.jpg?v=1708000855",
        title: "100% Pure &...",
        PreviousPrice: 459,
        content: 369,
        save: 16,
        hidden: "hidden",
    },
    {
        id: "tulsi-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_04c1d709-5e90-40b5-83fc-6ee87ba55563_800x.jpg?v=1708000860",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_52d72052-4078-4146-a5bb-7eb9c66b2070_800x.jpg?v=1703749282",
        title: "Vana Tulsi Flower",
        PreviousPrice: 459,
        content: 369,
        save: 16,
    },
    {
        id: "jamun-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_75cb66fc-8827-4469-b0a2-5456ada81da5_800x.jpg?v=1703849930",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_2fa5af93-b422-4d24-98f1-22ef85b3926c_800x.jpg?v=1703849928",
        title: "100% Pure Honey",
        PreviousPrice: 459,
        content: 369,
        save: 16,
    },
    {
        id: "jungle-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_3f8e2c55-7493-4cb5-9602-9b75acfe9ce7_800x.jpg?v=1708763010",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_78e4eb2a-d5c1-4523-b807-354c41bf870e_800x.jpg?v=1708763010",
        title: "100% Pure Raw,...",
        PreviousPrice: 459,
        content: 369,
        save: 16,
    },
    {
        id: "himalayan-shilajit-infused-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Banner1_800x.png?v=1711099109",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Shilaji_800x.png?v=1711014184",
        title: "Shilajit Honey |...",
        PreviousPrice: 879,
        content: 395,
        save: 55,
        hidden: "hidden",
    },
    {
        id: "clove-infused-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_127381a2-7f8d-46a8-88f5-39f52a20db09_800x.jpg?v=1708001084",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_4479e5c0-9319-497a-8e8f-a5b8a16622b8_800x.jpg?v=1708001080",
        title: "Clove Infused Honey...",
        PreviousPrice: 549,
        content: 399,
        save: 27,
        hidden: "hidden",
    },
    {
        id: "neem-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_b809fbd5-9755-4de8-9cd7-b81628928481_800x.jpg?v=1703749409",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_0287f5c9-3d50-4227-8f22-5f74fdbdf29d_800x.jpg?v=1708001027",
        title: "Neem Flora Honey",
        PreviousPrice: 459,
        content: 369,
        save: 20,
        hidden: "hidden",
    },
    {
        id: "berry-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_3fa0040a-f84f-4dce-80a7-6486dc348730_800x.jpg?v=1708000860",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_9fb1a6dd-b7a5-425f-a2ad-e7becfcf438f_800x.jpg?v=1708000856",
        title: "Wild Berry Flower...",
        PreviousPrice: 459,
        content: 369,
        save: 20,
        hidden: "hidden",
    },
    {
        id: "ashwagandha-infused-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_800x.jpg?v=1708001089",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_800x.jpg?v=1708001070",
        title: "Ashwagandha Infused honey",
        PreviousPrice: 549,
        content: 399,
        save: 27,
        hidden: "hidden",
    },
    {
        id: "litchi-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_980b14e4-1a71-421d-b869-36ac98fb3ae7_800x.jpg?v=1708000860",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_d4fe84a4-f1f1-4d1a-adf1-ddc608c14814_800x.jpg?v=1708000855",
        title: "Litchi Flower Wild...",
        PreviousPrice: 459,
        content: 369,
        save: 20,
        hidden: "hidden",
    },
    {
        id: "immunity-herbs-infused-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_3e381489-9f3b-4c91-a474-67a9a86b2ac0_800x.jpg?v=1703849909",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_a75e82f9-c754-43e8-b12a-419a9b0eddfa_800x.jpg?v=1703849907",
        title: "Immunity Herbs Infused",
        PreviousPrice: 539,
        content: 439,
        save: 19,
        hidden: "hidden",
    },
    {
        id: "turmeric-infused-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_319a4a90-daac-4d41-b4c8-b355b39719f6_800x.jpg?v=1708001078",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_3171cc9b-2acc-4d6a-b1bd-2d8d06abe74e_800x.jpg?v=1703748932",
        title: "Turmeric Infused Honey...",
        PreviousPrice: 549,
        content: 399,
        save: 27,
        hidden: "hidden",
    },
    {
        id: "cinnamon-infused-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_bff6cfee-eb5b-478b-8a44-95b3426944a7_800x.jpg?v=1708001032",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_d987ed37-23dd-46aa-93ab-f96258e38e16_800x.jpg?v=1708001030",
        title: "Raw, Natural, Unproce...",
        PreviousPrice: 549,
        content: 399,
        save: 16,
        hidden: "visible",
    },
    {
        id: "ginger-infused-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_eb73063c-67d2-4c43-a0a1-617fe56121c5_800x.jpg?v=1708001034",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_589f952b-21fa-4871-836b-0b4d1092b3c7_800x.jpg?v=1703849858",
        title: "Ginger Infused Honey...",
        PreviousPrice: 549,
        content: 399,
        save: 16,
        hidden: "hidden",
    },
    {
        id: "eucalyptus-flora-honey",
        catagory: "Honey",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/3_6ee2bc0d-8dc9-41f6-b200-22878503132c_800x.jpg?v=1703849660",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/2_57e75349-e4d7-45c7-8273-4f0a5f09887e_800x.jpg?v=1708001027",
        title: "Elyctapus Flora Honey",
        PreviousPrice: 459,
        content: 369,
        save: 16,
        hidden: "hidden",
    },
    {
        id: "wallnut-in-cinnamon",
        catagory: "nuts-in-honey",
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
        catagory: "nuts-in-honey",
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
        catagory: "nuts-in-honey",
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
        catagory: "nuts-in-honey",
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
        catagory: "nuts-in-honey",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Almond2_800x.jpg?v=1708001070",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/180gm1_800x.jpg?v=1708001086",
        title: "Almond in Cinnamon...",
        content: 479,
        PreviousPrice: 799,
        save: 18,
    },
    {
        id: "himalayan-shilajit-shilajeet-resin-bull-power-performance-booster-for-endurance-and-stamina-100-ayurvedic-silajit-for-man-woman",
        catagory: "shilajit",
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
        id: "himalayan-shilajit-infused-honey-300gm-help-improve-strength-stamina-for-men-women-shilajeet-gold-infused-honey",
        catagory: "shilajit",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Shilaji_800x.png?v=1711014184",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Banner1_800x.png?v=1711099109",
        title: "Shilajit Honey |...",
        content: 395,
        PreviousPrice: 879,
        save: 55,
    },
    {
        id: "stevia-sugar-replacement",
        catagory: "stevia",
        ImageUrl:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9475_800x.jpg?v=1708001356",
        PlaceHolder:
            "https://farmnaturelle.com/cdn/shop/files/Rectangle9471_800x.jpg?v=1703749243",
        title: "Stevia(Sugar Replacement)",
        content: 289,
        PreviousPrice: 369,
        save: 22,
    },
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
    },
    {
        id: "150x4-red-box-with-dipper",
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        catagory: "gift",
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
        id: "chocolate-tulip-box",
        catagory: "gift",
        ImageUrl: "https://farmnaturelle.com/cdn/shop/files/IMG_7444_800x.jpg?v=1703749908",
        PlaceHolder: "https://farmnaturelle.com/cdn/shop/files/File_009_800x.jpg?v=1703749910",
        title: "Chocolate Tulip Box",
        PreviousPrice: 1744,
        content: 1395,
        save: 20,
        hidden: "hidden"
    }
];

function All_Products() {
    return (
        <div>
            <Nav />
            <div className="w-full h-auto bg-[#FAF9F4]">
                <p className="px-24 py-5 p-1 text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;All Products</span>
                </p>
                <div className="w-full h-auto grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 px-20 py-8 gap-10 justify-items-center">
                    {products.map((product, index) => (
                        <Link
                            key={index}
                            to={`/collections/${product.catagory}/products/${product.id}`}
                        >
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

export default All_Products;