/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import ScrollToTop from "./components/ScrolltoTop.jsx";

import Collection from "../pages/Collection.jsx";
import Honey from "../pages/Honey.jsx";
import CookingOils from "../pages/CookingOils.jsx";
import Ghee from "../pages/Ghee.jsx";
import HerbalJuice from "../pages/HerbalJuice.jsx";
import AppleCider from "../pages/AppleCider.jsx";
import HillTurmeric from "../pages/HillTurmeric.jsx";
import JaggeryAmla from "../pages/JaggeryAmla.jsx";
import WellnessOil from "../pages/WellnessOil.jsx";
import ChawanPrash from "../pages/ChawanPrash.jsx";
import HoneyNuts from "../pages/HoneyNuts.jsx";
import Stevia from "../pages/Stevia.jsx";
import Hing from "../pages/Hing.jsx";
import Shilajit from "../pages/Shilajit.jsx";
import Saffron from "../pages/Saffron.jsx";
import MouthFresh from "../pages/MouthFresh.jsx";
import Condiments from "../pages/Condiments.jsx";

import Private from "../pages/Private.jsx";
import BulkOrders from "../pages/BulkOrders.jsx";
import Dealership from "../pages/Dealership.jsx";
import Contact from "../pages/Contact.jsx";
import Consult from "../pages/Consult.jsx";
import OurFarm from "../pages/OurFarm.jsx";
import Gift from "../pages/Gift.jsx";
import Login from "../pages/LoginPage.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import PrivacyPolicy from "../pages/Privacy.jsx";
import All_Products from "../pages/allProducts.jsx";
import PilesVanish from "../pages/products/PilesVanish.jsx";
import HealthyLiver from "../pages/products/HealthyLiver.jsx";
import MagicmanBooster from "../pages/products/MagicmanBooster.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";
import DigestiveFitness from "../pages/products/DigestiveFitness.jsx";
import EasingDiabetes from "../pages/products/EasingDiabetes.jsx";
import Hangover from "../pages/products/Hangover.jsx";
import Kidney from "../pages/products/Kidney.jsx";
import WomanGlow from "../pages/products/WomanGlow.jsx";
import StressBuster from "../pages/products/StressBuster.jsx";
import PainRelief from "../pages/products/PainRelief.jsx";
import HoneyPages from "../pages/products/product_data/HoneyProducts.jsx";
import {
    AlciasHoney,
    AshwagandhaHoney,
    CloveInfusedHoney,
    EcalyptusHoney,
    GingerInfused,
    HimalayanHoney,
    ImmunityHerbs,
    JamunFlora,
    JungleFlora,
    LitchiFLower,
    NeemFloraHoney,
    rawNatural,
    TurmericInfused,
    VanaTulsi,
    WildBerryFlora,
} from "../pages/products/product_data/honey_images/honey_data.js";
import CookingPages from "../pages/products/product_data/cooking_data/CookingProducts.jsx";
import {
    BlackMustard,
    blackSesame,
    CoconutOil,
    GroundNuts,
    sunflowerOil,
    whiteSesame,
    yellowMustard,
} from "../pages/products/product_data/cooking_data/oil_data.js";
import GheePages from "../pages/products/product_data/Ghee_data/GheeProducts.jsx";
import {
    a2SahiwaliGhee,
    cowGhee,
} from "../pages/products/product_data/Ghee_data/Ghee_data.js";
import ApplePages from "../pages/products/product_data/Apple_data/GheeProducts.jsx";
import { CinnamonHoney } from "../pages/products/product_data/Apple_data/Apple_data.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ToastContainer />
            <Provider store={store}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/collections" element={<Collection />} />
                    <Route path="/Products" element={<Collection />} />
                    <Route path="/collections/gift" element={<Gift />} />
                    <Route path="/collections/Honey" element={<Honey />} />
                    <Route
                        path="/collections/best-seller-cooking-oil"
                        element={<CookingOils />}
                    />
                    <Route path="/collections/ghee" element={<Ghee />} />
                    <Route
                        path="/collections/herbal-juice"
                        element={<HerbalJuice />}
                    />
                    <Route
                        path="/collections/apple-cider-vinegar"
                        element={<AppleCider />}
                    />
                    <Route
                        path="/collections/turmeric"
                        element={<HillTurmeric />}
                    />
                    <Route
                        path="/collections/jaggery-amla-candy"
                        element={<JaggeryAmla />}
                    />
                    <Route
                        path="/collections/wellness-oil"
                        element={<WellnessOil />}
                    />
                    <Route
                        path="/collections/chawanprash"
                        element={<ChawanPrash />}
                    />
                    <Route
                        path="/collections/nuts-in-honey"
                        element={<HoneyNuts />}
                    />
                    <Route path="/collections/stevia" element={<Stevia />} />
                    <Route path="/collections/hing" element={<Hing />} />
                    <Route
                        path="/collections/shilajit"
                        element={<Shilajit />}
                    />
                    <Route path="/collections/saffron" element={<Saffron />} />
                    <Route
                        path="/collections/mouth-freshners"
                        element={<MouthFresh />}
                    />
                    <Route
                        path="/collections/condiments"
                        element={<Condiments />}
                    />
                    <Route
                        path="/pages/private-labelling"
                        element={<Private />}
                    />
                    <Route path="/pages/our-farm" element={<OurFarm />} />
                    <Route path="/pages/bulk-orders" element={<BulkOrders />} />
                    <Route
                        path="/pages/dealership-enquiry"
                        element={<Dealership />}
                    />
                    <Route path="/pages/contact" element={<Contact />} />
                    <Route
                        path="/pages/consult-an-acharya"
                        element={<Consult />}
                    />
                    <Route path="/account/login" element={<Login />} />
                    <Route path="/pages/about-us" element={<AboutUs />} />
                    <Route
                        path="/pages/privacy-policy"
                        element={<PrivacyPolicy />}
                    />
                    <Route
                        path="/collections/products/piles-vanish"
                        element={<PilesVanish />}
                    />
                    <Route
                        path="/products/smiling-liver"
                        element={<HealthyLiver />}
                    />
                    <Route
                        path="/products/magical-man-booster"
                        element={<MagicmanBooster />}
                    />
                    <Route
                        path="/products/digestive-fitness"
                        element={<DigestiveFitness />}
                    />
                    <Route
                        path="/products/easing-diabetes"
                        element={<EasingDiabetes />}
                    />
                    <Route
                        path="/products/anti-hangover-ready-to-drink-shot"
                        element={<Hangover />}
                    />
                    <Route
                        path="/products/kidney-stone-crusher-juice"
                        element={<Kidney />}
                    />
                    <Route
                        path="/products/women-glow"
                        element={<WomanGlow />}
                    />
                    <Route
                        path="/products/stress-buster"
                        element={<StressBuster />}
                    />
                    <Route
                        path="/products/joints-and-body-pain-relief"
                        element={<PainRelief />}
                    />
                    <Route
                        path="/collections/all-products"
                        element={<All_Products />}
                    />
                    <Route
                        path="collections/honey/products/acacia-flora-honey"
                        element={
                            <HoneyPages
                                name={
                                    "100% Pure & Organic Kashmiri Acacia Honey"
                                }
                                Name={"Acacia Flora Honey"}
                                price={369}
                                previousPrice={459}
                                save="20%"
                                price1={429}
                                previousPrice1={559}
                                save1="23%"
                                price2={659}
                                previousPrice2={899}
                                save2="27%"
                                price3={799}
                                previousPrice3={1099}
                                save3="27%"
                                price4={849}
                                previousPrice4={1249}
                                save4="32%"
                                price5={1029}
                                previousPrice5={1569}
                                save5="34%"
                                price6={1669}
                                previousPrice6={2849}
                                save6="41%"
                                h4_1={"Nature's Defense for Well-being"}
                                p_1={
                                    "Discover the natural shield of our pure, natural honey"
                                }
                                h4_2={"Purity in Every Drop"}
                                p_2={
                                    "no meddling, no antibiotics, and no impurities"
                                }
                                h4_3={"Nurturing Wellness"}
                                p_3={
                                    "Rediscover vitality with our exquisite pure honey"
                                }
                                h4_4={"Embrace Health"}
                                p_4={
                                    "Enjoy the goodness of nature through our delightful honey range"
                                }
                                info1={"Nature's Gift from Acacia Blossoms"}
                                info2={"Nature's Sweetness for Balanced Health"}
                                info3={"Sunshine Hue"}
                                images={AlciasHoney}
                                Tab1={
                                    "Delight your taste buds and body with the pure essence of nature with our Raw Acacia Honey. Bursting with vitality, it boasts an array of nutrients: Vitamin C, B2, B3, B5, B6, Iron, Calcium, Magnesium, Zinc, and Potassium, amino acids, & antioxidants. A treasure trove for vibrant skin, weight management, and cholesterol balance, this honey holds Ayurvedic prowess for cough, digestion, and weight. With heightened fructose, it's a wise choice for diabetics."
                                }
                                T1Text={"Nature's Gift from Acacia Blossoms:"}
                                T1SubText={
                                    "Experience the essence of nature captured in every drop of our honey. Crafted from the sweet nectar of Kikar and Babool Acacia flowers, our honey brings the pure vitality of these blossoms to your table. A gift from the heart of the wild, this golden goodness is a tribute to your well-being, naturally gathered and undeniably pure."
                                }
                                T2Text={
                                    "Nature's Sweetness for Balanced Health:"
                                }
                                T2SubText={
                                    "Discover the natural goodness of our pure honey collection, a gift from nature to nurture your well-being. With a low glycemic index, our honey gracefully maintains steady blood sugar levels, a friend even to those managing diabetes. Enjoy the sweetness of life without worries, as our honey cares for your health the way Mother Nature intended."
                                }
                                T3Text={"Sunshine Hue:"}
                                T3SubText={
                                    "Pure Honey Delight: Experience the allure of our honey range, suffused with the brilliance of sunlight. Revel in its mild aroma and relish its gentle, tempting flavor."
                                }
                                Tab3={"Acacia Flora Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/acacia.png?v=1697713488"
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856946.png?v=1701948155"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856948.png?v=1701948155"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856947.png?v=1701948155"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/tulsi-flora-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Vana Tulsi Flower Wild Forest Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Tulsi Flora Honey"}
                                price={369}
                                previousPrice={459}
                                save="20%"
                                price1={429}
                                previousPrice1={559}
                                save1="23%"
                                price2={659}
                                previousPrice2={899}
                                save2="27%"
                                price3={799}
                                previousPrice3={1099}
                                save3="27%"
                                price4={849}
                                previousPrice4={1249}
                                save4="32%"
                                price5={1029}
                                previousPrice5={1569}
                                save5="34%"
                                price6={1669}
                                previousPrice6={2849}
                                save6="41%"
                                images={VanaTulsi}
                                info1={"Nature’s Nectar of Wellness"}
                                info2={"Your Go-to Remedy"}
                                info3={"Heavenly Taste"}
                                Tab1={
                                    "Experience the wonders of Farm Naturelle Jungle Flora Honey sourced from Jungle flowers near Jim Corbett Tiger National Park. May help boost immunity, enhance skin glow, aid in weight management, and lower cholesterol. Trusted by doctors, an Ayurvedic remedy for health issues."
                                }
                                T1Text={"Nature’s Nectar of Wellness:"}
                                T1SubText={
                                    "Experience the healing power of Vana Tulsi (Holy Basil) in every drop of our therapeutic Tulsi Flora Honey. Pure, natural, and brimming with goodness!"
                                }
                                T2Text={"Your Go-to Remedy"}
                                T2SubText={
                                    "Discover the power of Tulsi Flora Honey - your all-natural ally for weight management, soothing coughs, and promoting a happy tummy!"
                                }
                                T3Text={"Heavenly Taste:"}
                                T3SubText={
                                    "Indulge in the delightful flavors and heavenly aroma of our Tulsi Flora Honey, while reaping its countless health benefits. A pure, natural treat that nourishes your body and soul."
                                }
                                Tab3={"Tulsi Flora Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Tulsi_Flora_Honey.png?v=1703058145"
                                }
                                h4_1={"Nature’s Nectar of Wellness"}
                                p_1={
                                    "Pure, natural, and brimming with goodness!"
                                }
                                h4_2={"Your Go-to Remedy"}
                                p_2={"Discover the power of Tulsi Flora Honey"}
                                h4_3={"Heavenly Taste"}
                                p_3={
                                    "A pure, natural treat that nourishes your body and soul."
                                }
                                h4_4={"Goodness Inside"}
                                p_4={
                                    "Packed with vital vitamins like Vitamin C, B2, B3, B5, and B6."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/tulsi3.png?v=1698841390"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/tulsi_fd209938-994e-41f7-a277-9958d06e1840.png?v=1698841390"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/tulsi2.png?v=1698841391"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/jamun-flora-honey"
                        element={
                            <HoneyPages
                                name={
                                    "100% Pure Honey & Jamun Flower Wild Forest Honey"
                                }
                                Name={"Jamun Flora Honey"}
                                images={JamunFlora}
                                price={369}
                                previousPrice={459}
                                save="20%"
                                price1={429}
                                previousPrice1={559}
                                save1="23%"
                                price2={659}
                                previousPrice2={899}
                                save2="27%"
                                price3={799}
                                previousPrice3={1099}
                                save3="27%"
                                price4={849}
                                previousPrice4={1249}
                                save4="32%"
                                price5={1029}
                                previousPrice5={1569}
                                save5="34%"
                                price6={1669}
                                previousPrice6={2849}
                                save6="41%"
                                info1={"Jamun Blossom’s Sweet Symphony"}
                                info2={"Sweet Delight for Balanced Health"}
                                info3={"Richness of True Honey Flavour"}
                                Tab1={
                                    "Dive into health through our Raw Jamun Honey, crafted by diligent bees from nature's finest. Packed with Vitamin-rich nectar, it ignites vitality with Vitamin C, B2, B3, B5, B6, and minerals like Iron, Calcium, Magnesium, Zinc, and Potassium. This golden elixir holds amino acids and antioxidants, fuelling fitness, radiant skin, fat loss, and cholesterol control. An Ayurvedic gem, aiding weight loss, cough, and digestion. Diabetes-friendly due to higher fructose, it's endorsed by doctors. Tackle viruses, fungi, and bacteria by relishing this miracle twice daily."
                                }
                                T1Text={"Jamun’s Sweet Symphony:"}
                                T1SubText={
                                    "Savor the flavors of nature's sweetness with our Jamun flower-infused honey. Each spoonful captures the rich essence of high fructose content, a gift from the pure heart of natural sources. Let your taste buds dance to the melodious flavors, as you indulge in the lusciousness of India's very own blooms, beautifully bottled in our honey range."
                                }
                                T2Text={"Sweet Delight for Balanced Health:"}
                                T2SubText={
                                    "Our pure and natural honey offers a low glycemic index that gently impacts on blood sugar levels, making it a smart choice for those with diabetes. Maintain balanced sugar levels without compromise, embracing the sweetness of nature's goodness."
                                }
                                T3Text={"Richness of True Honey Flavour:"}
                                T3SubText={
                                    "Experience the exquisite essence of authentic honey like never before. Immerse yourself in the pure delight of nature's nectar, untouched and unprocessed. Savor the true sweetness that only comes from the heart of the hive. With every spoonful, relish the genuine taste of superior honey that captures the essence of the wild. Discover nature's gift, thoughtfully presented just for you."
                                }
                                Tab3={"Raw Jamun Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Jamun_Flora_Honey.png?v=1703058145"
                                }
                                h4_1={
                                    "Your shield against viruses, fungi, & bacteria"
                                }
                                p_1={
                                    "Beyond its delightful taste, lies a natural shield that combats viruses, fungi, and bacteria."
                                }
                                h4_2={"Diabetic-friendly sweetness"}
                                p_2={
                                    "It is truly diabetic-friendly sweetness, a perfect choice for those managing diabetes"
                                }
                                h4_3={"Discover Nature’s Magic"}
                                p_3={
                                    "Nurture your health and guard against illnesses, while enhancing your body's defense"
                                }
                                h4_4={"Nurturing Wellness from the Hive"}
                                p_4={
                                    "Nurture your health and guard against illnesses, while enhancing your body's defense"
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/jamun3.png?v=1698840307"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/jamun2.png?v=1698840307"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/jamun_5858e2ed-44b3-4d81-a374-a846bbd3550d.png?v=1698840307"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/jungle-flora-honey"
                        element={
                            <HoneyPages
                                name={
                                    "100% Pure Raw, Natural and Unprocessed Forest Honey | Best Mutiflora honey"
                                }
                                Name={"Jungle Flora Honey"}
                                images={JungleFlora}
                                info1={"Sub Himalayan Delight"}
                                info2={"Loaded with health benefits"}
                                info3={"Pure, unheated & unprocessed"}
                                price={369}
                                previousPrice={459}
                                save="20%"
                                price1={429}
                                previousPrice1={559}
                                save1="23%"
                                price2={659}
                                previousPrice2={899}
                                save2="27%"
                                price3={799}
                                previousPrice3={1099}
                                save3="27%"
                                price4={849}
                                previousPrice4={1249}
                                save4="32%"
                                price5={1029}
                                previousPrice5={1569}
                                save5="34%"
                                price6={1669}
                                previousPrice6={2849}
                                save6="41%"
                                Tab1={
                                    "Experience the wonders of Farm Naturelle Jungle Flora Honey sourced from Jungle flowers near Jim Corbett Tiger National Park. May help boost immunity, enhance skin glow, aid in weight management, and lower cholesterol. Trusted by doctors, an Ayurvedic remedy for health issues."
                                }
                                T1Text={"Sub Himalayan Delight :"}
                                T1SubText={
                                    "This raw honey is made from the nectar of multiple forest flowers in the Sub Himalayan Nainital region, making it a delicious treat."
                                }
                                T2Text={"Loaded with health benefits:"}
                                T2SubText={
                                    "Discover the ultimate all-purpose, antibiotic-free honey! Packed with vitamins and untouched by heat or processing, it's raw and pure, keeping its natural goodness intact. Unlock a world of health benefits!"
                                }
                                T3Text={"Pure, unheated & unprocessed:"}
                                T3SubText={
                                    "That’s our honey! It comes straight from the Jungles near Jim Corbett Tiger National Park."
                                }
                                Tab3={"Jungle Flora Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Jungle_Flora_Honey.png?v=1703058145"
                                }
                                h4_1={"Powerhouse of health"}
                                p_1={
                                    "With its antiviral, anti-fungal, and anti-bacterial properties"
                                }
                                h4_2={"Unlock your weight loss journey"}
                                p_2={
                                    "this golden elixir work its magic, igniting your metabolism"
                                }
                                h4_3={"Flavorful & Aromatic"}
                                p_3={"Taste the deliciousness, savor the aroma"}
                                h4_4={"Naturally Sourced"}
                                p_4={
                                    "Taste the magic of our honey, sourced from jungle flowers"
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856910.png?v=1698840667"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856909.png?v=1698840667"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856908.png?v=1698840667"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/Himalayan-Shilajit-Infused-Honey"
                        element={
                            <HoneyPages
                                name={
                                    "Shilajit Honey | Help Improve Strength & stamina for men & women | Natural Shilaji Flora Honey"
                                }
                                Name={"Himalayan Shilajit Infused Honey"}
                                images={HimalayanHoney}
                                info1={"Increases Stamina and Strength"}
                                info2={"Promotes Overall Health"}
                                info3={"Enhances Performance"}
                                price={369}
                                previousPrice={459}
                                save="20%"
                                price1={429}
                                previousPrice1={559}
                                save1="23%"
                                price2={659}
                                previousPrice2={899}
                                save2="27%"
                                price3={799}
                                previousPrice3={1099}
                                save3="27%"
                                price4={849}
                                previousPrice4={1249}
                                save4="32%"
                                price5={1029}
                                previousPrice5={1569}
                                save5="34%"
                                price6={1669}
                                previousPrice6={2849}
                                save6="41%"
                                Tab1={
                                    "Experience the potent blend of nature's goodness with Farm Naturelle Pure Original Himalayan Shilajit Infused Honey. Enhance strength and stamina for both men and women. Enriched with the goodness of Shilajit Gold, this natural and Ayurvedic fusion helps improve overall holistic wellness."
                                }
                                Tab3={"Shilajit, Cinnamon, Multiflora honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/SJ_Template.png?v=1711020554"
                                }
                                h4_1={"Increases Stamina and Strength"}
                                p_1={
                                    "Natural compounds present in this elixir contribute to increased stamina and strength, making it an ideal choice for athletes and fitness enthusiasts."
                                }
                                h4_2={"Promotes Overall Health"}
                                p_2={
                                    "Packed with essential minerals, vitamins, and antioxidants, this elixir promotes overall health by supporting immune function, aiding digestion, and improving metabolic processes."
                                }
                                h4_3={"Improves Joint Health"}
                                p_3={
                                    "Regular consumption can reduce inflammation, alleviate joint pain, and enhance joint flexibility, making it beneficial for individuals with joint issues or those seeking joint support."
                                }
                                h4_4={"Enhances Performance"}
                                p_4={
                                    "Known for its performance-enhancing properties, this elixir improves cognitive function, mental alertness, and focus. It boosts energy levels, leading to better physical performance during workouts and mental performance in tasks requiring concentration."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1.png?v=1711175810"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/2.png?v=1711175811"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/3.png?v=1711175810"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/clove-infused-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Clove Infused Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Clove Infused Honey"}
                                images={CloveInfusedHoney}
                                info1={"Raw Honey and Clove Elixir"}
                                info2={"Nature's Soothing Blend"}
                                info3={"Nature's Healing Honey"}
                                price={399}
                                previousPrice={549}
                                save={28 + "%"}
                                price1={469}
                                previousPrice1={669}
                                save1={30 + "%"}
                                price2={729}
                                previousPrice2={1079}
                                save2={32 + "%"}
                                price3={879}
                                previousPrice3={1319}
                                save3={33 + "%"}
                                price4={939}
                                previousPrice4={1499}
                                save4={37 + "%"}
                                price5={1129}
                                previousPrice5={1889}
                                save5={40 + "%"}
                                Tab1={
                                    "Indulge in the potent blend of Raw Honey and Cloves, inspired by Ayurveda. This harmonious fusion kindles digestion, bolsters immunity, and amps up metabolism to aid in fat burning, promoting your vitality. Crafted from 100% Pure Raw Honey, our unpasteurized, unprocessed, and unheated elixir boasts no artificial flavors, sugars, additives, or colors. Elevate your health journey with this incredible mixture, thoughtfully designed for your holistic well-being."
                                }
                                Tab3={"Clove,Honey"}
                                T1Text={"Raw Honey and Clove Elixir:"}
                                T1SubText={
                                    "Experience the boundless healing wonders of Raw Honey and Clove with our pure and natural honey range. Embrace the countless natural benefits they bring, revitalizing your well-being the way nature intended. Indulge in a spoonful of goodness that nourishes both body and soul, effortlessly."
                                }
                                T2Text={"Nature's Soothing Blend:"}
                                T2SubText={
                                    "Discover the perfect blend of Raw Honey and Clove, a natural elixir thoughtfully crafted to ease everyday troubles. From sore throats to indigestion, and even unwelcome bouts of cough & cold. Say goodbye to queasy feelings and dull skin, as this age-old remedy brings you the goodness of nature in a single spoonful. Experience the comfort and care of traditional ingredients, harmonized in a bottle of wellness."
                                }
                                T3Text={"Nature's Healing Honey:"}
                                T3SubText={
                                    "A natural shield against harmful bacteria and soothing inflammation. This golden elixir doesn't just sweeten; it's a powerful defender, fighting off bacteria while calming inflammation. Mother Nature's remedy, bottled just for you."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Clove_Infused_Honey.png?v=1703058144"
                                }
                                h4_1={"Nature's Blessing"}
                                p_1={
                                    "Infused Clove Jungle Honey: Savour the goodness of our Sub-Himalayan Jungle Honey, enriched with the potent essence of clove. This exquisite infusion not only enhances the delectable flavor but also brings abundant medicinal benefits. Every drop of this 100% pure and natural honey is a tribute to your well-being, a flavorful journey to cherish."
                                }
                                h4_2={"Delightful Taste & Wellness"}
                                p_2={
                                    "Indulge in the exquisite flavors of our pure and natural honey range. Experience the perfect blend of deliciousness and subtle aroma, promoting a mild yet delightful essence. Elevate your well-being with this healthful nectar, thoughtfully crafted to benefit your vitality. Enjoy the incredible taste while nurturing your health – a truly irresistible combination."
                                }
                                h4_3={"Nature's Harmony in Honey and Clove"}
                                p_3={
                                    "Consume the age-old magic of Ayurveda with our honey range. Experience soothing pain relief and enhanced digestion, just as tradition intended. Embrace the holistic goodness of this timeless blend, crafted to bring vitality and comfort to your life."
                                }
                                h4_4={
                                    "Elevate Immunity for a Healthier, Fitter You"
                                }
                                p_4={
                                    "Boost your body's defenses and turbocharge metabolism naturally, aiding fat burning and promoting vibrant health."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856920.png?v=1701938510"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856921.png?v=1701938510"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856922.png?v=1701938510"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/neem-flora-honey"
                        element={
                            <HoneyPages
                                images={NeemFloraHoney}
                                name={"Neem Flora Honey"}
                                Name={"Neem Flora Honey"}
                                price={369}
                                previousPrice={459}
                                save="20%"
                                price1={429}
                                previousPrice1={559}
                                save1="23%"
                                price2={659}
                                previousPrice2={899}
                                save2="27%"
                                price3={799}
                                previousPrice3={1099}
                                save3="27%"
                                price4={849}
                                previousPrice4={1249}
                                save4="32%"
                                price5={1029}
                                previousPrice5={1569}
                                save5="34%"
                                price6={1669}
                                previousPrice6={2849}
                                save6="41%"
                                info1={"Goodness of Neem Flower Honey"}
                                info2={"Nature's Balanced Sweetness"}
                                info3={"Low Glycemic Index"}
                                Tab1={`Immerse in Neem Honey, the "King of all honey," its therapeutic might hails from bees gathering Neem flower nectar, imparting a mild bitterness. Fused with raw honey benefits, it wields wonders against diabetes, high blood pressure, skin issues, and allergies. A potent antiviral and antiseptic, it purifies blood, revs metabolism, aiding weight management. Born solely from Neem blooms, our Apis Mellifera bees toil beneath its canopy, crafting this mono-flower gem. Elevate well-being with nature's own.`}
                                T1Text={"Goodness of Neem Flower Honey:"}
                                T1SubText={
                                    "Experience the bountiful benefits of Neem Flower Honey, a treasure trove of natural medicine. Revered as the supreme honey, it brims with medicinal marvels. Unlock the power of purity with every golden drop – your royal path to well-being."
                                }
                                T2Text={"Nature's Balanced Sweetness:"}
                                T2SubText={
                                    "Farm Naturelle Neem Flora Honey bears a subtle touch of bitterness, a testament to the bees' collection of nectar from the gentle Neem flowers. This nuanced blend captures the essence of nature's own balance, offering you a unique and pure taste that reflects the untouched beauty of our natural landscapes."
                                }
                                T3Text={"Low Glycemic Index:"}
                                T3SubText={
                                    "Experience the natural sweetness of our honey range, crafted to support your well-being. With a low glycemic index, our honey keeps your blood sugar levels steady, making it an excellent choice even for those managing diabetes. Savor the pure taste of nature while taking care of your health effortlessly."
                                }
                                Tab3={"Neem Flora Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Neem_Flora_Honey.png?v=1703058144"
                                }
                                h4_1={"Your Health Guardian"}
                                p_1={
                                    "Pure and natural Farm Naturelle Neem Flora Honey isn't just delicious"
                                }
                                h4_2={"Experience the Power of Purity"}
                                p_2={
                                    "Our exquisite honey range is more than a treat for your taste buds."
                                }
                                h4_3={"Bolstering Immunity Naturally"}
                                p_3={
                                    "Discover the secret to vibrant health with our pure and natural honey."
                                }
                                h4_4={"Nurturing Health Naturally"}
                                p_4={
                                    "Farm Naturelle Neem Flora Honey works like magic to boost your immunity,"
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/neem1.png?v=1698841172"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/neem.png?v=1698841173"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/neem2.png?v=1698841173"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/berry-flora-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Wild Berry Flower Wild Forest Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Wild Berry Honey"}
                                price={369}
                                previousPrice={459}
                                save="20%"
                                price1={429}
                                previousPrice1={559}
                                save1="23%"
                                price2={659}
                                previousPrice2={899}
                                save2="27%"
                                price3={799}
                                previousPrice3={1099}
                                save3="27%"
                                price4={849}
                                previousPrice4={1249}
                                save4="32%"
                                price5={1029}
                                previousPrice5={1569}
                                save5="34%"
                                price6={1669}
                                previousPrice6={2849}
                                save6="41%"
                                images={WildBerryFlora}
                                info1={"Sourced from Sidr Trees’ Flowers"}
                                info2={"Purest Form of Nature"}
                                info3={"Your Health-buddy"}
                                Tab1={
                                    "Crafted by hardworking bees from Wild Berry flowers, our Raw Sidr Honey enriches well-being; sourced ethically from Sidr nectar of Mulberry Trees, Farm Naturelle Berry Flora Honey offers unparalleled health benefits and exquisite taste, coveted as the rarest globally."
                                }
                                T1Text={"Sourced from Sidr Trees’ Flowers:"}
                                T1SubText={
                                    "Taste our exquisite Honey of Paradise Blossoms, crafted from the nectar of Sidr trees' delicate flowers—an enchanting creation with a taste that transports you to a paradise of flavors."
                                }
                                T2Text={"Purest Form of Nature:"}
                                T2SubText={
                                    "Farm Naturelle Berry Flora honey comes straight from the hives. It is raw, untouched, and unstrained"
                                }
                                T3Text={"Your Health-buddy:"}
                                T3SubText={
                                    "Experience the natural might of antioxidants and antibacterial properties in our pure honey. Safeguard your well-being the way nature intended, with every spoonful bursting with protective goodness."
                                }
                                Tab3={"Berry Flora Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Wild_Berry_Flora_Honey.png?v=1703058145"
                                }
                                h4_1={"Nurturing Wellness"}
                                p_1={
                                    "Embrace the richness of 100% pure, natural, and natural honey"
                                }
                                h4_2={"Revitalize Your Vitality"}
                                p_2={
                                    "It’s nature's gift to invigorate your body and uplift your spirit."
                                }
                                h4_3={"Boost your Immunity Naturally"}
                                p_3={
                                    "Farm Naturelle Honey works harmoniously with your body, fortifying its natural defenses"
                                }
                                h4_4={
                                    "Elevate Immunity for a Healthier, Fitter You"
                                }
                                p_4={
                                    "Boost your body's defenses and turbocharge metabolism naturally, aiding fat burning and promoting vibrant health."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856953.png?v=1701949656"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856954.png?v=1701949656"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856952.png?v=1701949655"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/ashwagandha-infused-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Ashwagandha Infused Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Ashwagandha Honey"}
                                info1={"Your Immunity Dream Team"}
                                info2={"Your Immunity Dream Team"}
                                info3={"Vigor-enhancing Honey"}
                                images={AshwagandhaHoney}
                                price={399}
                                previousPrice={549}
                                save={28 + "%"}
                                price1={469}
                                previousPrice1={669}
                                save1={30 + "%"}
                                price2={729}
                                previousPrice2={1079}
                                save2={32 + "%"}
                                price3={879}
                                previousPrice3={1319}
                                save3={33 + "%"}
                                price4={939}
                                previousPrice4={1499}
                                save4={37 + "%"}
                                price5={1129}
                                previousPrice5={1889}
                                save5={40 + "%"}
                                Tab1={
                                    "Farm Naturelle Ashwagandha 100% Pure Honey is a treasure untouched by industrial processes. Straight from the Nainital Jungles, it's the harmony of nature and health. No additives, just the real Ashwagandha infusion, slowly mingled with Sub-Himalayan Wild Forest honey. Every drop carries the richness of the Himalayas, unpasteurized, unprocessed – preserving its true vitality. A gift from nature, brimming with nourishment and a touch of the wild."
                                }
                                T1Text={"Your Immunity Dream Team: "}
                                T1SubText={
                                    "Unveil the remarkable world of immune-boosting benefits as you indulge in the blend of Raw Honey and Ashwagandha. Strengthen your body's defenses with the pure goodness of these natural ingredients. Your path to a healthier life is made sweeter and stronger with this powerful combination, embracing nature's true essence for your well-being."
                                }
                                T2Text={"Review your energy: "}
                                T2SubText={
                                    "Feel alive and full of energy with our Ashwagandha-infused Forest Honey. This special honey is like a natural power boost that brings back your strength and energy. We've combined the goodness of nature with Ashwagandha to make you feel stronger and more alive than ever. Try it today and feel the difference in your vitality!"
                                }
                                T3Text={"Vigor-enhancing Honey: "}
                                T3SubText={
                                    "Vigor-enhancing Honey: Experience the blend of nature's goodness with our Ashwagandha-infused Forest Honey. Indulge in the delectable taste of pure honey while embracing the revitalizing power of Ashwagandha. Each spoonful is a journey to invigorate your spirit and refresh your senses. Made by bees and enhanced by the earth, this delicious and vigor-enhancing honey is a delightful way to embrace holistic wellness."
                                }
                                Tab3={"Berry Flora Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Ashwagandha_Infused_Honey.png?v=1703058144"
                                }
                                h4_1={"Elevate Immunity & Vitality Naturally"}
                                p_1={
                                    "Nurture your body's defenses and sustain vibrant energy levels effortlessly"
                                }
                                h4_2={"Naturally Delicious & Health-Boosting"}
                                p_2={
                                    "Indulge in the delightful world of our pure, natural, and natural honey range."
                                }
                                h4_3={"Nurturing Joyful Well-being"}
                                p_3={
                                    "Experience the goodness of nature with our Ashwagandha-infused Forest Honey."
                                }
                                h4_4={"Embrace Health"}
                                p_4={"Vigor-enhancing Honey"}
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856915.png?v=1701846109"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856915.png?v=1701846109"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856916.png?v=1701846108"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/litchi-flora-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Litchi Flower Wild Forest Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Litchi Flora Honey"}
                                images={LitchiFLower}
                                info1={"Paradise Nectar Delights"}
                                info2={"Premium Unfiltered Honey"}
                                info3={"Antioxidant & Antibacterial Powerhouse"}
                                price={369}
                                previousPrice={499}
                                save={30 + "%"}
                                price1={469}
                                previousPrice1={669}
                                save1={30 + "%"}
                                price2={729}
                                previousPrice2={1079}
                                save2={32 + "%"}
                                price3={879}
                                previousPrice3={1319}
                                save3={33 + "%"}
                                price4={939}
                                previousPrice4={1499}
                                save4={37 + "%"}
                                price5={1129}
                                previousPrice5={1889}
                                save5={40 + "%"}
                                price6={1679}
                                previousPrice6={2879}
                                save6={41 + "%"}
                                Tab1={
                                    "Discover the marvels of Litchi Flora Honey, harvested from Litchi Orchards near Jim Corbett Tiger National Park. This elixir may enhance immunity, skin glow, aid weight management, and combat other health issues. Embrace well-being and vitality through its natural benefits!"
                                }
                                Tab3={"Litchi Flora Honey"}
                                T1Text={"Paradise Nectar Delights:"}
                                T1SubText={
                                    "Taste the essence of paradise with our exquisite honey, meticulously crafted from the delicate nectar of Sidr tree flowers. Nature's sweet gift, pure and unadulterated."
                                }
                                T2Text={"Premium Unfiltered Honey:"}
                                T2SubText={
                                    "Our Premium Honey is a masterpiece of nature, untouched by heat or processing. Unfiltered to preserve its natural goodness, it's a pure and authentic delight straight from the hive to your table"
                                }
                                T3Text={
                                    "Antioxidant & Antibacterial Powerhouse:"
                                }
                                T3SubText={
                                    "Farm Naturelle Berry Flora Honey is a natural shield packed with powerful antioxidants and antibacterial properties. Enjoy the protective benefits as it bolsters your well-being and keeps you fortified against harmful elements."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Litchi_Flora_Honey.png?v=1703058144"
                                }
                                h4_1={"Nature’s Potent Elixir"}
                                p_1={
                                    "Boosts stamina, aids weight management, soothes coughs, and supports digestive health"
                                }
                                h4_2={"Fuel Your Energy & Passion"}
                                p_2={
                                    "Awaken your energy and boost your sexual wellness with our Berry Flora Honey"
                                }
                                h4_3={"Your weight loss Buddy"}
                                p_3={
                                    "Achieve a healthier weight and enhance your well-being with our honey"
                                }
                                h4_4={"Loaded with health benefits"}
                                p_4={
                                    "Boost your immunity, combat colds, coughs, and digestion issues"
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/litchi.png?v=1698840955"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/litchi2.png?v=1698840955"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/litchi3.png?v=1698840955"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/immunity-herbs-infused-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Immunity Herbs Infused Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Immunity Herbs Infused Honey"}
                                info1={"Nature's Defense with Herbal Honey"}
                                info2={"Nature's gift to calm your being"}
                                info3={"Soothes sore throat"}
                                price={439}
                                previousPrice={539}
                                save={19 + "%"}
                                price1={519}
                                previousPrice1={669}
                                save1={22 + "%"}
                                price2={799}
                                previousPrice2={1219}
                                save2={34 + "%"}
                                price3={969}
                                previousPrice3={1499}
                                save3={35 + "%"}
                                price5={1239}
                                previousPrice5={1999}
                                save5={38 + "%"}
                                images={ImmunityHerbs}
                                Tab1={
                                    "Delight your senses with the marvel of nature as honeybees gather flower nectar, crafting a golden elixir brimming with vitamins, minerals, and antioxidants. Our raw honey is a sanctuary of wellness, devoid of cane sugar, corn syrup, or additives. Untouched by refinement, Farm Naturelle Honey is your passport to unadulterated goodness. Ayurveda-inspired, it nurtures immunity. With no artificial inclusions, our unpasteurized, unprocessed honey offers a treasure trove of A, C, D, E, K vitamins, B complex, minerals, and enzymes. Revel in nature's purity."
                                }
                                T1Text={"Nature's Defense with Herbal Honey:"}
                                T1SubText={
                                    "Elevate your immunity naturally! Our exquisite blend of pure honey and potent herbs empowers your body's shield against infections. Experience the magic as your immune system is fortified, ready to take on the world. Embrace the power of nature's goodness for a healthier you."
                                }
                                T2Text={"Nature's gift to calm your being:"}
                                T2SubText={
                                    "Our exquisite honey blends feature herbs brimming with natural anti-inflammatory goodness. Experience the gentle power of these infusions as they gracefully ease inflammation within your body, fostering a profound sense of well-being."
                                }
                                T3Text={"Soothes sore throat:"}
                                T3SubText={
                                    "Honey is known for its soothing properties, and when combined with immune-boosting herbs, it can be especially effective in treating sore throats."
                                }
                                Tab3={"Immunity Herbs Infused Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Immunity_Herbs_Infused_Honey.png?v=1703058144"
                                }
                                h4_1={"Recharge your vitality"}
                                p_1={
                                    "Experience the innate power of honey as it fuels your energy levels naturally. Enriched with handpicked herbs, our honey not only revitalizes but also boosts stamina, amplifying your overall endurance. Elevate your energy the natural way, with every spoonful of our delicious honey blends. Your path to invigorated living begins here."
                                }
                                h4_2={"Gently Eases Digestion"}
                                p_2={
                                    "Our carefully crafted honey blend, enriched with natural herbs, becomes a friendly ally for your stomach. Experience relief from discomforts like bloating and indigestion as you savor the delicious taste. Let the goodness of nature soothe your tummy, making every meal a joyful journey."
                                }
                                h4_3={"Packed with Goodness"}
                                p_3={
                                    "Our infused honey is a treasure trove of antioxidants, powerful shields that guard your cells and lower the chance of long-lasting health troubles. These natural wonders not only shield you but also lend a helping hand in preventing chronic illnesses. Dive into a world of pure, natural delight that takes care of you from within."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856926.png?v=1701941055"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/cinnamon-min_9.png?v=1701941053"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856925.png?v=1701941054"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/turmeric-infused-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Turmeric Infused Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Turmeric Honey"}
                                info1={
                                    "Your Gateway to Countless Wellness Rewards"
                                }
                                info2={"Your Antidote for Inflammation"}
                                info3={
                                    "Antibacterial and Anti-Inflammatory Honey"
                                }
                                images={TurmericInfused}
                                price={399}
                                previousPrice={549}
                                save={28 + "%"}
                                price1={469}
                                previousPrice1={669}
                                save1={30 + "%"}
                                price2={729}
                                previousPrice2={1079}
                                save2={32 + "%"}
                                price3={879}
                                previousPrice3={1319}
                                save3={33 + "%"}
                                price4={939}
                                previousPrice4={1499}
                                save4={37 + "%"}
                                price5={1129}
                                previousPrice5={1889}
                                save5={40 + "%"}
                                Tab1={
                                    "Step into the world of Farm Naturelle's Turmeric-infused Forest Honey, where purity reigns. Our 100% Pure Raw Honey is a testament to untouched goodness, free from processing, heating, and artificial extras. Enriched with the power of turmeric, this unpasteurized elixir fuels your immune system, battles inflammation, and revitalizes. No added sugars, no artificial flavors – just nature's finest, welcoming you to a healthier, more vibrant life, one spoonful at a time."
                                }
                                T1Text={"Your Gateway to Countless Rewards:"}
                                T1SubText={
                                    "Unleash the incredible power of Raw Honey and Hill Turmeric, offering you a treasure trove of natural goodness. Experience the abundant therapeutic advantages they bring, straight from nature's embrace. Elevate your well-being the pure, natural way."
                                }
                                T2Text={"Your Antidote for Inflammation:"}
                                T2SubText={
                                    "This golden blend holds the magic of nature's synergy with our Turmeric-infused honey. A dynamic duo that multiplies each other's strength – honey, soothing and pure, meets turmeric, a vibrant antioxidant. Together, they form an alliance against inflammation that's more potent than ever. Embrace the golden blend for a healthier you, one spoonful at a time."
                                }
                                T3Text={
                                    "Antibacterial and Anti-Inflammatory Honey:"
                                }
                                T3SubText={
                                    "Farm Naturelle Turmeric Infused Honey isn't just honey – it's a natural shield against bacteria and inflammation. Crafted by the bees and untouched by anything artificial, this golden elixir brings you the best of nature's defense. Soothe and protect your body the way it deserves, with our pure and natural honey range. Your health, our promise."
                                }
                                Tab3={"Turmeric Infused Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Turmeric_Infused_Honey.png?v=1703058144"
                                }
                                h4_1={"Nature's Healing Treasure"}
                                p_1={
                                    "Tempt your taste buds with the magic of nature with our Sub-Himalayan Jungle Honey infused with golden turmeric."
                                }
                                h4_2={"Delightfully Delicious & Nourishing"}
                                p_2={
                                    "Indulge in the exquisite flavor of our honey, where delightful taste meets the gentle allure of natural aromas"
                                }
                                h4_3={"Nature's Golden Duo"}
                                p_3={
                                    "Honey and Turmeric: Revered in Ayurveda, the blend of Honey and Turmeric unfolds a world of wellness"
                                }
                                h4_4={"Revitalize Your Health"}
                                p_4={
                                    "Achieve lasting fitness and vibrant health with every spoonful."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856927.png?v=1701941513"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856928.png?v=1701941513"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856929.png?v=1701941513"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/cinnamon-infused-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Raw, Natural, Unprocessed & Unheated Cinnamon Insfused Honey | 100% Pure Honey"
                                }
                                Name={"Cinnamon Infused Honey"}
                                images={rawNatural}
                                info1={"Cinnamon in Raw Honey"}
                                info2={"Cinnamon Bliss in our Raw Honey"}
                                info3={"Age-Defying Delight"}
                                price={399}
                                previousPrice={549}
                                save={28 + "%"}
                                price1={469}
                                previousPrice1={669}
                                save1={30 + "%"}
                                price2={729}
                                previousPrice2={1079}
                                save2={32 + "%"}
                                price3={879}
                                previousPrice3={1319}
                                save3={33 + "%"}
                                price4={939}
                                previousPrice4={1499}
                                save4={37 + "%"}
                                price5={1129}
                                previousPrice5={1889}
                                save5={40 + "%"}
                                Tab1={
                                    "Taste the timeless synergy of raw honey and cinnamon, cherished across cultures for centuries. Embrace joint vitality, heart wellness, and robust immunity. Relish a clear stomach, relief from indigestion, and winter's chill. Elevate your holistic journey with nature's bounty: longevity, radiant skin, and balanced weight. Our 100% Pure Raw Honey remains untouched by processing, artificial additives, or sugars. Unveil a healthier you, one golden spoonful at a time."
                                }
                                T1Text={"Cinnamon in Raw Honey:"}
                                T1SubText={
                                    " Delight in the boundless healing treasures of our Raw Honey and Cinnamon fusion. Embrace the countless natural remedies these ingredients offer, bestowed by the untouched purity of nature. Unlock wellness the way it's meant to be – 100% pure, natural, and straight from the hive. Elevate your health journey effortlessly, one golden spoonful at a time."
                                }
                                T2Text={"Cinnamon Bliss in our Raw Honey!:"}
                                T2SubText={
                                    " Experience the magic of nature with our Wild Forest Raw Honey infused with the delightful essence of Cinnamon (Dalchini). Savor the deliciousness and embrace the therapeutic goodness of this enchanting blend. It's a harmonious symphony of pure indulgence and holistic wellness in every spoonful. Discover the essence of wild forests and the comfort of cinnamon, all in one jar of goodness."
                                }
                                T3Text={"Age-Defying Delight:"}
                                T3SubText={
                                    "Enjoy Timeless Wellness with Cinnamon Honey! Regular consumption works like a shield against the effects of time, keeping the beauty of youth alive. Feel the essence of nature's embrace as you make the journey to ageless living."
                                }
                                Tab3={"Cinnamon Infused Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Cinnamon_Infused_Honey.png?v=1703058145"
                                }
                                h4_1={"Your Partner for Healthy Weight Goals"}
                                p_1={
                                    "Incorporate the natural goodness of our honey into your journey towards a balanced weight"
                                }
                                h4_2={"Wellness Wrapped in Every Drop"}
                                p_2={
                                    "Embrace the harmony of taste and vitality in every spoonful, as nature intended."
                                }
                                h4_3={"Honey & Cinnamon's Digestive Magic"}
                                p_3={
                                    "Unlock the treasure of natural wellness with this time-honored combination, crafted for your holistic health."
                                }
                                h4_4={"Nurture Immunity the Natural Way"}
                                p_4={
                                    "Unlock the treasure of natural wellness with this time-honored combination, crafted for your holistic health."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Cinemon_Infused_honey-_Lemon_JUice_bb144ee3-8001-446d-a19e-5bf8af0139d4.png?v=1701937728"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856918.png?v=1701937729"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856919.png?v=1701937729"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/ginger-infused-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Ginger Infused Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Ginger Infused Honey"}
                                images={GingerInfused}
                                price={399}
                                previousPrice={549}
                                save={28 + "%"}
                                price1={469}
                                previousPrice1={669}
                                save1={30 + "%"}
                                price2={729}
                                previousPrice2={1079}
                                save2={32 + "%"}
                                price3={879}
                                previousPrice3={1319}
                                save3={33 + "%"}
                                price4={939}
                                previousPrice4={1499}
                                save4={37 + "%"}
                                price5={1129}
                                previousPrice5={1889}
                                save5={40 + "%"}
                                info1={"Revitalize with Honey & Ginger"}
                                info2={"Revitalize with Honey & Ginger"}
                                info3={"Ayurvedic Remedy for Digestion"}
                                Tab1={
                                    "Taste the magic of Honey and Ginger blend—a daily dose of goodness. Bye-bye to sore throat, indigestion, and cough & cold. Reveal radiant skin and embrace wellness. Just 2 spoons a day shield you! For added allure, it's your secret for glowing skin, beauty, and weight balance. 100% Pure Honey has no artificial colors, flavors, or sugars. Embrace pure nature."
                                }
                                T1Text={"Revitalize with Honey & Ginger:"}
                                T1SubText={
                                    "Experience the boundless healing power of Raw Honey and invigorating Ginger. Unlock a treasure trove of natural wellness that soothes and revitalizes. Embrace the perfect blend of purity and nature, offering you a journey to innumerable therapeutic benefits. Indulge in a harmonious fusion of flavors, crafted to restore and refresh. Elevate your well-being the way nature intended."
                                }
                                T2Text={"Nature's Cure-All:"}
                                T2SubText={
                                    "A natural remedy for everyday troubles. Soothe a scratchy throat, ease indigestion, calm queasy feelings, and bid adieu to bothersome coughs and colds. Unveil your skin's natural radiance too. Embrace the power of pure, organic ingredients for a healthier you!"
                                }
                                T3Text={"Ayurvedic Remedy for Digestion:"}
                                T3SubText={
                                    "With our organic honey range, steeped in the wisdom of Ayurveda. Experience the gentle power of this time-honored blend,awakening your digestive fire naturally. Elevate your well-being as centuries of tradition harmonize with your modern lifestyle, for a healthier you."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ginger-min.png?v=1697720376"
                                }
                                h4_1={"Immunity Booster"}
                                p_1={
                                    "Experience the goodness of nature as you enhance your health effortlessly."
                                }
                                h4_2={"Ayurveda’s Digestive Duo"}
                                p_2={
                                    "organic honey infused with the goodness of ginger"
                                }
                                h4_3={"Pure Honey Packed with Goodness"}
                                p_3={
                                    "Indulge in the rich taste and top-notch quality of our organic honey collection"
                                }
                                h4_4={"Safeguarding You"}
                                p_4={
                                    "Experience the gift of allergy prevention as you savor the goodness of our organic honey range."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/cinnamon-min_7.png?v=1701938835"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856923.png?v=1701939079"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856924.png?v=1701939078"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/honey/products/eucalyptus-flora-honey"
                        element={
                            <HoneyPages
                                name={
                                    "Eucalyptus Flower Wild Forest Honey | 100% Pure Honey | Wooden Spoon| Raw, Natural, Unprocessed & Unheated Honey | Lab Tested Honey in Glass Bottle."
                                }
                                Name={"Eucalyptus Flora Honey"}
                                images={EcalyptusHoney}
                                info1={"Discover Nature’s Magic"}
                                info2={"Sub-Himalayan Uttarakhand Honey"}
                                info3={"Stronger Joints"}
                                price={369}
                                previousPrice={499}
                                save={30 + "%"}
                                price1={469}
                                previousPrice1={669}
                                save1={30 + "%"}
                                price2={729}
                                previousPrice2={1079}
                                save2={32 + "%"}
                                price3={879}
                                previousPrice3={1319}
                                save3={33 + "%"}
                                price4={939}
                                previousPrice4={1499}
                                save4={37 + "%"}
                                price5={1129}
                                previousPrice5={1889}
                                save5={40 + "%"}
                                price6={1669}
                                previousPrice6={2849}
                                save6={41 + "%"}
                                Tab1={
                                    "Elevate well-being; relish the ambrosia of health, naturally with Farm Naturelle’s Eucalyptus Flora Honey. Crafted by diligent bees from Eucalyptus flowers near Jim Corbett Tiger National Park, Uttarakhand, it's enriched with Vitamin C, B vitamins, minerals, and antioxidants. Nurturing skin, aiding weight management, and supporting heart health, this golden elixir embraces Ayurvedic tradition. From cough relief to enhanced digestion, it's your holistic partner."
                                }
                                T1Text={"Discover Nature’s Magic:"}
                                T2Text={"Sub-Himalayan Uttarakhand Honey:"}
                                T3Text={"Stronger Joints:"}
                                T1SubText={
                                    "Our Therapeutic Mono Flora Raw Honey is a gift from Eucalyptus flowers. Crafted purely by nature, this golden elixir captures the essence of these blossoms. Each spoonful embodies the soothing touch of the eucalyptus groves, bringing you a taste that's as pure as the breeze that whispers through the trees. Immerse yourself in the goodness of this natural wonder, straight from the heart of nature to your table."
                                }
                                T2SubText={
                                    "Harvested from the serene landscapes of Sub-Himalayan Uttarakhand, our honey embodies the untouched beauty of nature. Delight in the golden nectar from this pristine region, as we bring you the goodness of the mountains, unaltered and natural. Taste the pureness that only the untouched wilderness can provide, straight from the heart of Uttarakhand's embrace"
                                }
                                T3SubText={
                                    "Experience the goodness of our therapeutic and aromatic honey, thoughtfully crafted to enhance your joint health. Immerse yourself in the natural essence and unlock the power of nature's remedies. Your joints will thank you for this nourishing journey toward wellness."
                                }
                                Tab3={"Eucalyptus Flora Honey"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Eucalyptus_Flora_Honey.png?v=1703058144"
                                }
                                h4_1={"Nature's Triple Shield"}
                                p_1={
                                    "Experience the power of pure honey with a trio of natural defenses."
                                }
                                h4_2={
                                    "Experience the power of pure honey with a trio of natural defenses."
                                }
                                p_2={
                                    "100% untamed and unprocessed, our honey is a testament to nature's purest gifts"
                                }
                                h4_3={"Your Health Guardian"}
                                p_3={
                                    "Elevate your immunity and enjoy a healthier life, shielded from illnesses."
                                }
                                h4_4={"Antibiotic-free Lifestyle"}
                                p_4={"Savor the richness of unprocessed honey"}
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856956.png?v=1701950640"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856957.png?v=1701950640"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856955.png?v=1701950641"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/best-seller-cooking-oil/products/yellow-mustard-oil-classic"
                        element={
                            <CookingPages
                                Name={"Classic Yellow Mustard Oil"}
                                name={
                                    "100 % Pure Cold Pressed Yellow Mustard Oil | Best Mustard Oil For Cooking"
                                }
                                images={yellowMustard}
                                price={275}
                                previousPrice={329}
                                save={"17% off"}
                                price1={389}
                                previousPrice1={489}
                                save1={"20% off"}
                                price2={769}
                                previousPrice2={975}
                                save2={"21% off"}
                                price3={1885}
                                previousPrice3={2435}
                                save3={"23% off"}
                                price4={350}
                                previousPrice4={395}
                                save4={"11% off"}
                                price5={530}
                                previousPrice5={695}
                                save5={"24% off"}
                                Tab1={
                                    "Elevate your Indian dishes with Yellow Mustard Oil’s high smoke point, making them crispy and delightful. This versatile oil lowers bad cholesterol, safeguards your heart, and boosts immunity. External use fights fungus, while internal use combats bacterial infections, aiding digestion. Rich in Vitamin E, it nurtures skin, enhances circulation, and curbs hair fall."
                                }
                                Tab3={"Mustard Oil"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Yellow_Mustard_Oil-min.png?v=1697790528"
                                }
                                h4_1={"Heart's Best Friend: "}
                                p_1={
                                    "Feel secure knowing that our oils stand guard, keeping coronary ailments at bay."
                                }
                                h4_2={`Externally Protective:`}
                                p_2={
                                    "Embrace its natural anti-fungal shield, enhancing skin's well-being. Your skin's best friend, organically."
                                }
                                h4_3={"Your Immuno Booster:"}
                                p_3={
                                    "Elevate your immunity effortlessly with our cold pressed, unrefined, and organic oil."
                                }
                                h4_4={
                                    "Get Glowing Skin with Vitamin-E Rich Oil:"
                                }
                                p_4={
                                    "Experience the allure of vibrant skin with our cold-pressed, unrefined organic oils."
                                }
                                info1={"Gently Cold-Pressed Goodness"}
                                info2={
                                    "Aromatic Mastery for Delicious Indian Delights"
                                }
                                info3={"Your Shield Against Bad Cholesterol"}
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Sesame_Oil_3b7ace8a-0947-4f14-9833-52391eda4e0e.png?v=1703069682"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Sesame_Oil-2_7fc7c530-bc81-44e2-8e7c-dea6f2f4f8e7.png?v=1703069681"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Sesame_Oil-1_f7e24f70-e585-4013-a926-298f76522079.png?v=1703069682"
                                }
                            />
                        }
                    />
                    <Route
                        path="collections/best-seller-cooking-oil/products/sunflower-oil"
                        ErrorBoundary={Error}
                        element={
                            <CookingPages
                                name={
                                    "100% Natural Cold Pressed & Wood Pressed Sunflower Oil | Finest Certified Organic Sunflower Oil"
                                }
                                Name={"Sunflower Oil"}
                                images={sunflowerOil}
                                info1={"Nourish with Nature’s Gift"}
                                info2={"Pure Delight"}
                                info3={"Abundance of Vitamin A & E"}
                                price={290}
                                previousPrice={339}
                                save={"15% off"}
                                price1={419}
                                previousPrice1={499}
                                save1={"16% off"}
                                price2={819}
                                previousPrice2={998}
                                save2={"18% off"}
                                price3={1995}
                                previousPrice3={2495}
                                save3={"20% off"}
                                price4={350}
                                previousPrice4={399}
                                save4={"12% off"}
                                Tab1={
                                    "Experience the goodness of our 100% natural, cold pressed, unrefined, and organic sunflower oil. With over 80% monounsaturated fats, it's a culinary gem for a healthy heart. Packed with Vitamin E and omega-6 fats, it supports heart vitality. Plus, it aids digestion and gently eases the digestive process."
                                }
                                T1Text={"Nourish with Nature’s Gift: "}
                                T1SubText={
                                    "Get the goodness of 100% pure, unrefined, and organic sunflower oil. Carefully cold pressed to retain its natural essence and virgin purity, our oil brings the richness of nature to your kitchen."
                                }
                                T2Text={"Pure Delight: "}
                                T2SubText={
                                    "Delight in the light hues and gentle flavors that come from 100% natural, cold pressed, unrefined, and organic sources. Low in harmful Saturated Fatty Acids, our oils embrace high cooking temperatures while retaining their goodness"
                                }
                                T3Text={"Abundance of Vitamin A & E: "}
                                T3SubText={
                                    "Here’s the natural treasure of our cold pressed, unrefined, and organic food oils, brimming with the goodness of Vitamin A and Vitamin E. These essential vitamins play a vital role in promoting your well-being."
                                }
                                Tab3={"Sunflower Oil"}
                                h4_1={"Soothes Your Stomach, Eases Digestion"}
                                p_1={
                                    "Our pure, cold pressed, and organic food oils are your digestive allies. Experience the goodness of nature as these oils gently support your stomach's well-being, making mealtimes a joy. Feel light, comfortable, and nourished after every meal, thanks to the natural power of these unrefined wonders."
                                }
                                h4_2={
                                    "Ideal Choice for All Your Culinary Adventures"
                                }
                                p_2={
                                    "Perfect for all your cooking and frying needs, our 100% natural, cold pressed, unrefined, and organic food oils bring out the best in your dishes. From sizzling stir-fries to hearty frying, our oils retain their pure goodness, enhancing flavors while preserving nutrients."
                                }
                                h4_3={"Glowing Skin Naturally"}
                                p_3={
                                    "Packed with Vitamin A and E, our cold pressed organic oils promote vibrant skin. Experience the magic of unrefined goodness, giving your skin the vitamins it craves for a healthy radiance."
                                }
                                h4_4={"Gentle Digestive Support"}
                                p_4={
                                    "Consuming sunflower oil eases digestive process, promotes gentle cleansing, and enhances gut comfort."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Sunflower_Oil.png?v=1703062547"
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Virgin_Coconut_Oil-1_8bf16ec3-c9ab-45f5-bcb5-64a6444007c4.png?v=1703063377"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Virgin_Coconut_Oil-2_0564a06e-c8e0-45d5-b691-d57e5a65ff07.png?v=1703063377"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Virgin_Coconut_Oil_e92bc613-8cb2-48b6-9807-4a2557cd4b34.png?v=1703063377"
                                }
                            />
                        }
                    />
                    <Route
                        path="collections/best-seller-cooking-oil/products/black-sesame-oil"
                        element={
                            <CookingPages
                                name={
                                    "Black Sesame Oil - Wooden Cold Pressed|Til/Gingelly Cooking Oil"
                                }
                                Name={"Black Sesame Oil"}
                                price={368}
                                previousPrice={449}
                                save={"19% off"}
                                price1={579}
                                previousPrice1={699}
                                save1={"17% off"}
                                price2={1139}
                                previousPrice2={1395}
                                save2={"18% off"}
                                price3={2765}
                                previousPrice3={3575}
                                save3={"23% off"}
                                price4={439}
                                previousPrice4={499}
                                save4={"12% off"}
                                price5={689}
                                previousPrice5={789}
                                save5={"13% off"}
                                info1={"Nature's Goodness in a Bottle"}
                                info2={"Nutrient-Packed Sesame Oil"}
                                info3={"Transformative Care for Hair and Skin"}
                                images={blackSesame}
                                Tab1={
                                    "Naturelle Black Sesame Oil’s bottle brings the goodness of 100% natural, cold-pressed, unrefined, and organic oil to you. Bursting with omega-6 fatty acids, antioxidants, vitamins, and dietary fiber, our oil seeds offer a wealth of health-promoting minerals. Sesame oil, enriched with Vitamin E and Vitamin B, nurtures skin, unveiling youthful radiance."
                                }
                                Tab3={"Black Sesame Oil"}
                                T1Text={"Nature's Goodness in a Bottle: "}
                                T1SubText={
                                    "Taste the purity with our Organic Black Sesame Seed Oil. Crafted from the heart of black sesame seeds, this oil encapsulates nature's goodness. Cold pressed and unrefined, it's a true embodiment of purity. Embrace the unadulterated richness of this oil, straight from the seeds to your table."
                                }
                                T2Text={"Nutrient-Packed Sesame Oil: "}
                                T2SubText={
                                    "A nourishing choice, it stands tall as a healthier substitute to conventional vegetable oils. With its pure, cold-pressed, and unrefined nature, this organic oil brings you a world of wellness."
                                }
                                T3Text={
                                    "Transformative Care for Hair and Skin: "
                                }
                                T3SubText={
                                    "Bringing you the gift of nature with our unadulterated, cold pressed, and organic food oils. Elevate hair and skin wellness effortlessly. Unlock the secret to lustrous hair and vibrant skin. Embrace the beauty of 100% natural nourishment."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Sesame_Oil.png?v=1703062546"
                                }
                                h4_1={"Find Mental Peace"}
                                p_1={
                                    "Farm Naturelle Black Sesame Oil is unrefined, cold pressed oils, derived from the heart of organic ingredients, offer a soothing touch to your well-being. Elevate mood, quell anxiety, and uplift spirits the natural way."
                                }
                                h4_2={"Top-notch Quality"}
                                p_2={
                                    "Experience the essence of pure nature with our 100% natural, cold-pressed, unrefined, and organic food oils. Crafted without additives, our oils are cold-pressed only, retaining their authentic aroma. Ideal for both culinary delights and soothing massages, they embody the goodness of nature."
                                }
                                h4_3={"Make the Healthier Choice"}
                                p_3={
                                    "Sesame Oil – your perfect switch from regular vegetable oils. Packed with natural benefits and untouched by refinement, our cold-pressed, unrefined Sesame Oil is a healthier alternative. Elevate your culinary journey with this 100% organic choice, supporting your well-being with every drop. Say yes to nourishment, yes to nature."
                                }
                                h4_4={"Care From Within"}
                                p_4={
                                    "Experience enhanced immunity and radiant dental health with our pure, cold pressed, unrefined organic oils. Elevate your body's defenses against diseases while giving your dental health a natural boost."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Sesame_Oil_b1090f62-ca08-4394-b125-952878fef4bd.png?v=1703069309"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Sesame_Oil-2.png?v=1703069309"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Sesame_Oil-1.png?v=1703069309"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/best-seller-cooking-oil/products/white-sesame-oil-classic"
                        element={
                            <CookingPages
                                name={
                                    "Buy 100% Pure Cold Pressed White Sesame Seed Cooking Oil"
                                }
                                Name={"White Sesame Oil"}
                                images={whiteSesame}
                                price={275}
                                save={"16%"}
                                previousPrice={329}
                                price1={429}
                                previousPrice1={489}
                                save1={"12%"}
                                price2={845}
                                previousPrice2={975}
                                save2={"13%"}
                                price3={2060}
                                previousPrice3={2435}
                                save3={"15%"}
                                price4={350}
                                previousPrice4={395}
                                save4={"11%"}
                                price5={530}
                                previousPrice5={695}
                                save5={"24%"}
                                info1={"Unrefined White Sesame Oil"}
                                info2={"Nourishing Power of Sesame Oil"}
                                info3={"Purity At Its Best"}
                                Tab1={
                                    "Enhance skin, hair, and heart health with Farm Naturelle White Sesame Oil. Nurture bones and little ones. Empower dental and digestive well-being. Tame inflammation, regulate BP, and more. Nature's goodness, cold-pressed, unrefined, and organic. Your healthiest companion for cooking and massaging, sans chemicals. A treasure trove of health, condensed into one remarkable oil."
                                }
                                T1Text={"Unrefined white sesame oil: "}
                                T1SubText={
                                    "This White Sesame Oil is crafted from 100% pure, natural, and virgin oil, extracted through cold pressing. Elevate your cooking with this organic treasure, carefully nurtured from white sesame seeds."
                                }
                                T2Text={"Nourishing Power of Sesame Oil: "}
                                T2SubText={
                                    "White Sesame Oil enhances your hair and skin, fortifies bones, and promotes a healthy heart. This pure, unrefined gift from nature stimulates lush hair and glowing skin, strengthens bones, and ensures a hearty heart."
                                }
                                T3Text={"Purity At Its Best: "}
                                T3SubText={
                                    "Taste the magic of our pure, cold pressed, unrefined organic oils. Elevate hair and skin wellness naturally. Rediscover your innate glow as these oils lavish your hair with strength and shine, and caress your skin with a velvety touch. Your journey to radiant beauty starts here—100% natural goodness, bottled with care."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/White_Sesame_Oil.png?v=1703062547"
                                }
                                h4_1={"Embrace Calmness"}
                                p_1={
                                    "Discover relief from anxiety and depression as you savor the essence of nature."
                                }
                                h4_2={"Promotes a Healthier Heart Rhythm"}
                                p_2={
                                    "Our pure, cold pressed, and organic food oils work in harmony with your body, gently supporting lower blood pressure levels."
                                }
                                h4_3={"Nourishment & Care in a Bottle"}
                                p_3={
                                    "Elevate your cooking and rejuvenate your senses with our 100% natural, unrefined, and organic oils—nature's gift to your well-being."
                                }
                                h4_4={"An Health All-Rounder"}
                                p_4={
                                    "Empower your body's defense against illnesses while nurturing your dental vitality."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/White_Sesame_Oil_23b663db-77d9-4158-94e8-26a773dff596.png?v=1703069541"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/White_Sesame_Oil-2.png?v=1703069541"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/White_Sesame_Oil-1.png?v=1703069541"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/best-seller-cooking-oil/products/black-mustard-oil"
                        element={
                            <CookingPages
                                name={
                                    "Organic Cold Pressed Black Mustard Oil for Cooking | Good for heart health | Pure Oil For Roasting, Frying, Baking All type of Cuisines"
                                }
                                Name={"Black Mustard Oil"}
                                images={BlackMustard}
                                price={290}
                                previousPrice={339}
                                save={"15%"}
                                price1={399}
                                previousPrice1={499}
                                save1={"20%"}
                                price2={789}
                                previousPrice2={998}
                                save2={"21%"}
                                price3={1945}
                                previousPrice3={2495}
                                save3={"22%"}
                                price4={350}
                                previousPrice4={399}
                                save4={"12%"}
                                price5={580}
                                previousPrice5={695}
                                save5={"17%"}
                                Tab1={
                                    "Farm Naturelle's Organic Mustard Oil is derived from handpicked Organic Black mustard seeds. With its deep yellow hue and mild tang, this cold-pressed wonder is brimming with heart-healthy unsaturated fats, Omega Alpha 3, Omega Alpha 6, Vitamin E, and antioxidants. Elevate your culinary creations effortlessly – its high smoke point makes it perfect for Indian dishes. Say yes to lower cholesterol, improved immunity, and skin radiance."
                                }
                                Tab3={"Mustard Oil"}
                                T1Text={"Pure Goodness from Nature: "}
                                T1SubText={
                                    "Our Organic Black Mustard Oil is meticulously extracted from the finest Organic Black mustard seeds. Unlock the power of cold pressing and unrefined goodness, as this oil preserves the true natural essence. Elevate your cooking with this unadulterated, cold pressed, and organic."
                                }
                                T2Text={"Vibrant & Flavorful: "}
                                T2SubText={
                                    "A rich, deep yellow hue coupled with a delightful hint of pungency makes this oil the best choice. Crafted through cold pressing, this unrefined oil encapsulates the essence of nature. Elevate your dishes with a touch of this exquisite, organic oil that adds both color and zest to your culinary journey."
                                }
                                T3Text={"Make Healthy Choice for Heart: "}
                                T3SubText={
                                    "Nurturing your heart naturally, our cold-pressed, unrefined organic food oils work to reduce harmful cholesterol. Embrace the goodness of nature as these oils contribute to a heart-healthy lifestyle, keeping your ticker happy and strong."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Balck_Mustard_Oil.png?v=1703062546"
                                }
                                h4_1={"Keep Coronary Issues at Bay:"}
                                p_1={
                                    "This oil is your guide to natural shield against heart ailments."
                                }
                                h4_2={"Banish Fungi Naturally:"}
                                p_2={
                                    "Farm Naturelle cold pressed, unrefined organic Black Mustard Oil not only elevate your dishes but also safeguard your skin."
                                }
                                h4_3={"Empower Your Immunity Naturally:"}
                                p_3={
                                    "Elevate your immunity and bolster your ability to combat illnesses."
                                }
                                h4_4={
                                    "Vitamin-E Enriched Oil for Timeless Glow:"
                                }
                                p_4={
                                    "Nourish your skin naturally, unveiling a youthful glow and diminishing wrinkles."
                                }
                                info1={"Pure Goodness from Nature"}
                                info2={"Vibrant & Flavorful"}
                                info3={"Make Healthy Choice for Heart"}
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Mustard_Oil.png?v=1703069772"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Mustard_Oil-2.png?v=1703069772"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Mustard_Oil-1.png?v=1703069772"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/best-seller-cooking-oil/products/groundnut-oil"
                        element={
                            <CookingPages
                                name={
                                    "100% Pure Organic Kachi Ghani Cold Pressed Virgin Groundnut/Peanut Oil | Best Groundnut Oil For Cooking"
                                }
                                Name={"Groundnut Oil"}
                                images={GroundNuts}
                                price={290}
                                previousPrice={339}
                                save={"14%"}
                                price1={439}
                                previousPrice1={499}
                                save1={"12%"}
                                price2={869}
                                previousPrice2={998}
                                save2={"13%"}
                                price3={2149}
                                previousPrice3={2495}
                                save3={"14%"}
                                price4={350}
                                previousPrice4={399}
                                save4={"12%"}
                                price5={580}
                                previousPrice5={695}
                                save5={"17%"}
                                info1={"Pure Goodness for Your Kitchen"}
                                info2={"Nutrient-Rich Peanut Oil"}
                                info3={"Enhances Healthy Blood Flow"}
                                Tab1={
                                    "Unveil goodness in every drop of Virgin Groundnut Oil. It supports heart health, sharpens the mind, strengthens immunity, and nurtures skin. Packed with beneficial acids like Oleic, Stearic, Palmitic, and Linoleic, it's your key to overall wellness."
                                }
                                Tab3={"Groundnut Oil"}
                                T1Text={"Pure Goodness for Your Kitchen:"}
                                T1SubText={
                                    " Carefully crafted from the finest organic groundnuts, this unrefined oil retains its natural goodness and nutrients. Elevate your culinary journey with this authentic oil, perfect for Indian dishes. Enjoy the richness of cold-pressed purity for a healthier, tastier, and more vibrant dining experience."
                                }
                                T2Text={"Nutrient-Rich Peanut Oil:"}
                                T2SubText={
                                    " Discover the wholesome goodness of peanut oil, enriched with a perfect blend of natural fatty acids. Elevate your well-being effortlessly as this nourishing oil supports your health in multiple ways."
                                }
                                T3Text={"Enhances Healthy Blood Flow:"}
                                T3SubText={
                                    " Improve blood circulation with our range of 100% natural, cold pressed, unrefined, and organic food oils. Nourish your body with oils that support optimal blood flow, promoting overall well-being."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Groundnut_Oil.png?v=1703062547"
                                }
                                h4_1={"Nurturing Hearts and Minds"}
                                p_1={
                                    "Farm Naturelle Groundnut Oil nourishes heart wellness, enhances brain power, and refines the nervous system."
                                }
                                h4_2={"Get a Wrinkle-Free Glow"}
                                p_2={
                                    "Discover the natural magic of Vitamin E as it helps keep your skin radiant, smooth, and free from wrinkles. Our cold-pressed, unrefined, and organic food oils are packed with this essential nutrient, giving your skin the care it deserves, the natural way."
                                }
                                h4_3={"Perfect Frying Partner"}
                                p_3={
                                    "Our 100% natural, cold pressed, unrefined, and organic food oil is your ideal companion for deep-frying. With its ability to handle high temperatures and a delightful nutty essence, it transforms your dishes into crispy perfection. Elevate your cooking adventures with this exceptional oil, ensuring every bite is a true delight."
                                }
                                h4_4={"Nourish Your Skin"}
                                p_4={
                                    "Experience radiant skin with our unadulterated, cold-pressed oils brimming with Vitamin-E. Unlock the secret to a glowing complexion and smoother skin. These oils, abundant in natural goodness, are your pathway to reducing wrinkles and enhancing skin's vitality."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Groundnut_Oil_dcd7848f-e28d-49db-8e88-6d83a13e5138.png?v=1703069419"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Groundnut_Oil-2.png?v=1703069419"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Groundnut_Oil-1.png?v=1703069419"
                                }
                            />
                        }
                    />
                    <Route
                        path="collections/best-seller-cooking-oil/products/organic-extra-virgin-coconut-oil"
                        element={
                            <CookingPages
                                name={
                                    "Organic Extra Virgin Cold Pressed Coconut Oil | 100% Pure Organic & Edible Cooking Oil"
                                }
                                Name={"Organic Extra Virgin Coconut Oil"}
                                images={CoconutOil}
                            />
                        }
                    />
                    <Route
                        path="collections/ghee/products/a2-sahiwali-ghee"
                        element={
                            <GheePages
                                name={
                                    "Farm Naturelle 100% Pure Desi Sahiwal Cow Ghee | A2 Desi Sahiwal Ghee"
                                }
                                Name={"A2 Desi Sahiwal Ghee"}
                                images={a2SahiwaliGhee}
                                price={519}
                                previousPrice={789}
                                save={"35%"}
                                price1={719}
                                previousPrice1={909}
                                save1={"21%"}
                                price2={999}
                                previousPrice2={1429}
                                save2={"30%"}
                                price3={1499}
                                previousPrice3={1919}
                                save3={"22%"}
                                price5={1749}
                                previousPrice5={2269}
                                save5={"23%"}
                                info1={"A2 Ghee, Crafted the Vedic Way"}
                                info2={"Nature's Energy Tonic for All"}
                                info3={"Boost Your Brainpower with A2 Ghee"}
                                Tab1={
                                    "Unveil the treasure trove of advantages with A2 Ghee. Experience enhanced cognitive function, bolstered heart health, and fortified bones. Revel in radiant skin, bid adieu to dark circles, and luxuriate in strong, lustrous hair. Ease digestion, manage weight, and sharpen your vision. Embrace graceful aging with this elixir of well-being, meticulously crafted from the pure A2 Gir Cow. Your path to vitality starts here."
                                }
                                Tab3={"A2 Desi Sahiwal Cow Ghee"}
                                T1Text={"A2 Ghee, Crafted the Vedic Way :"}
                                T1SubText={
                                    "Experience the richness of 100% pure A2 Sahiwal Cow Desi Ghee, lovingly prepared using the traditional Vedic Bilona method. Let the age-old technique infuse every drop with authenticity, bringing you a wholesome taste of tradition. Indulge in the purity of ghee that reflects our commitment to quality and heritage."
                                }
                                T2Text={"Nature's Energy Tonic for All :"}
                                T2SubText={
                                    "An exceptional source of natural vitality, perfect for both vegetarians and non-vegetarians. Elevate your energy levels and nourish your body with this nutritive delight. Whether you follow a plant-based diet or not, indulge in the goodness that supports your well-being effortlessly."
                                }
                                T3Text={"Boost Your Brainpower with A2 Ghee :"}
                                T3SubText={
                                    "Enhance your brain's performance and memory with A2 Ghee. Elevate cognitive function effortlessly as this golden elixir supports brain health. Experience sharper thinking and better recall. Elevate your every day with the natural goodness of A2 Ghee, a true friend to your mind."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Sahiwal_Ghee-min.png?v=1697789857"
                                }
                                h4_1={"Vitamin-Rich Advantage"}
                                p_1={
                                    "Discover the delicious path to nourishment, effortlessly enhancing your wellness with every spoonful."
                                }
                                h4_2={"Your Partner in Balanced Weight"}
                                p_2={
                                    "Elevate your wellness routine with the goodness of A2 Ghee, working hand in hand with your efforts for a balanced you."
                                }
                                h4_3={"Clarity for Your Eyes"}
                                p_3={
                                    "Packed with nutrients that support eye health, our ghee brings the beauty of life into focus."
                                }
                                h4_4={"Boost Your Brain"}
                                p_4={
                                    "Elevate your brain's performance naturally."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_41162844-16ee-462c-99b0-97ee16e332a7.png?v=1698925515"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1_402a0164-ef0d-49e1-91b9-dc557d7c6761.png?v=1698925515"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_80881b31-b386-4208-b4ea-54eeb36b33f3.png?v=1698925608"
                                }
                            />
                        }
                    />
                    <Route
                        path="collections/ghee/products/a2-desi-cow-ghee-from-grass-fed-gir-cows-vedic-bilona-method-curd-churned-golden-grainy-aromatic-keto-friendly-non-gmo-and-a-wooden-spoon"
                        element={
                            <GheePages
                                name={
                                    "Organic A2 Desi Cow Ghee | Vedic Bilona Method-Curd Churned-Golden | A2 Gir Cow Ghee"
                                }
                                Name={"A2 Desi Cow Ghee"}
                                images={cowGhee}
                                price1={818}
                                previousPrice1={1035}
                                save1={"21%"}
                                price2={1149}
                                previousPrice2={1625}
                                save2={"29%"}
                                price3={1719}
                                previousPrice3={2405}
                                save3={"29%"}
                                price5={1999}
                                previousPrice5={2865}
                                save5={"30%"}
                                info1={"A2 Ghee, Crafted the Vedic Way"}
                                info2={"Nature's Energy Tonic for All"}
                                info3={"Boost Your Brainpower with A2 Ghee"}
                                Tab1={
                                    "A2 Gir Cow ghee- a cherished Indian tradition. Elevate brain function, enhance memory, and fortify your heart. Foster robust bones and radiant skin, bidding adieu to dark circles. Strengthen hair, aid digestion, and manage weight effortlessly. Enhance vision, and gracefully slow the aging process."
                                }
                                Tab3={"A2 Gir Cow Ghee"}
                                T1Text={"A2 Ghee, Crafted the Vedic Way :"}
                                T1SubText={
                                    "Farm Naturelle A2 Gir Ghee, crafted from the revered Bilona Method, is a pure marvel. Delight in the richness of 100% Pure A2 Gir Cow Desi Ghee, lovingly prepared as per ancient Vedic tradition. Taste the heritage, embrace the nourishment – a cherished gift for your well-being."
                                }
                                T2Text={"Nature's Energy Tonic for All :"}
                                T2SubText={
                                    "Boost your vitality and stamina, whether you're a vegetarian or non-vegetarian. Farm Naturelle A2 Gir Ghee is your ideal source of energy, offering a delightful way to stay healthy and active."
                                }
                                T3Text={"Boost Your Brainpower with A2 Ghee :"}
                                T3SubText={
                                    "Elevate brain function effortlessly as this golden elixir nurtures cognitive abilities. Enhance memory retention for a sharper you. Experience the traditional touch that fuels your mental acumen and keeps your brain at its best. Your journey to a brighter mind starts with every spoonful of A2 Ghee."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Gir_Cow_Ghee-min.png?v=1697789840"
                                }
                                h4_1={"A2 Ghee's Vitamin-Rich Goodness"}
                                p_1={
                                    "Experience the embrace of good health as these nutrients work their magic, nurturing your body from within."
                                }
                                h4_2={"Healthy Weight Management Buddy"}
                                p_2={
                                    "Packed with essential nutrients, it helps boost metabolism and maintain a healthy digestive system."
                                }
                                h4_3={"Improve Your Vision"}
                                p_3={
                                    "Packed with vital nutrients, it's tailor-made to support the blossoming years."
                                }
                                h4_4={"Boost Your Brain Naturally"}
                                p_4={
                                    "Experience improved cognitive function as this wholesome ghee nurtures your brain cells."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_9a32e5b8-76db-41d7-a424-bebebe645f3a.png?v=1698925681"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1_7830569b-80c0-4a90-b16d-5a4c127d34c4.png?v=1698925681"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_acf6b68f-0ba1-4b1a-850e-270ce944fc7c.png?v=1698925681"
                                }
                            />
                        }
                    />

                    <Route
                        path="/collections/apple-cider-vinegar/products/acv-cinnamon-honey-fenugreek"
                        element={
                            <ApplePages
                                name={
                                    "Organic Apple Cider Vinegar with Mother and Infused Cinnamon & Fenugreek"
                                }
                                Name={"ACV Cinnamon Honey Fenugreek"}
                                images={CinnamonHoney}
                                info1={"ACV Infused with Cinnamon and Fenugreek"}
                                info2={"Discover Nature’s Magic"}
                                info3={"Nature's Secret for Shedding Extra Kilos"}
                            />
                        }
                    />
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
