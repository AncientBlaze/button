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
import store from "./store/store.js";
import { Provider } from "react-redux";
import HoneyPages from "../pages/products/product_data/honey_data/HoneyProducts.jsx";
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
} from "../pages/products/product_data/honey_data/honey_data.js";
import CookingPages from "../pages/products/product_data/cooking_data/CookingProducts.jsx";
import {
    BlackMustard,
    blackSesame,
    CoconutOil,
    CoconutOil2,
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
import ApplePages from "../pages/products/product_data/Apple_data/AppleProducts.jsx";
import {
    AppleCiderPic,
    CinnamonHoney,
    GingerGarlic,
    GingerTurmeric,
} from "../pages/products/product_data/Apple_data/Apple_data.js";
import HillPages from "../pages/products/product_data/Hill_data/HillPages.jsx";
import { blackPepperTurmeric, plainTurmeric, turmericMilkMasala } from "../pages/products/product_data/Hill_data/Hill_data.js";
import JaggeryPages from "../pages/products/product_data/Jaggery_amla_data/JaggeryPage.jsx";
import { Jaggery } from "../pages/products/product_data/Jaggery_amla_data/Jaggery_data.js";
import WellnessPages from "../pages/products/product_data/Wellness_data/WellnessPages.jsx";
import { avocadoOil, blackSeedOil, castorOil, flaxSeedOil } from "../pages/products/product_data/Wellness_data/wellness_data.js";
import { nanoid } from "@reduxjs/toolkit";
import { cashewHoney, cinnamonAlmondHoney, FigsHoney, mixHoney, wallNutHoney } from "../pages/products/product_data/nutHoney_data/nutHoney.js";
import NutHoneyPage from "../pages/products/product_data/nutHoney_data/NutHoneyPages.jsx";
import SteviaPages from "../pages/products/product_data/Stevia_data/SteviaPage.jsx";
import { stevia } from "../pages/products/product_data/Stevia_data/stevia.js";
import ShilajitPages from "../pages/products/product_data/Shilajit_data/ShilajitPage.jsx";
import { shilajit1, shilajit2 } from "../pages/products/product_data/Shilajit_data/shilajit_data.js";
import ShilajitHoneyPages from "../pages/products/product_data/Shilajit_data/ShilajitHoney.jsx";
import GiftingPages from "../pages/products/product_data/Gifting_data/GiftingPages.jsx";
import { Gift1, Gift10, Gift11, Gift12, Gift13, Gift14, Gift15, Gift16, Gift17, Gift18, Gift2, Gift3, Gift4, Gift5, Gift6, Gift7, Gift8, Gift9 } from "../pages/products/product_data/Gifting_data/Gifting_data.js";
import HingPages from "../pages/products/product_data/Hing_data/HingPages.jsx";
import { Hingimg } from "../pages/products/product_data/Hing_data/Hing_data.js";
import WellnessJuice from "../pages/WellnessJuices.jsx";
import HerbalPages from "../pages/products/product_data/Herbal_data/HerbalPages.jsx";
import { antiHangover, Detox, digestiveFitness, easingDiabetes, jointsPainCare, kidneyStoneCrusher, magicalMan, pilesVanish, smilingLiver, streesBuster, womenGlow } from "../pages/products/product_data/Herbal_data/Herbal_data.js";

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
                        path="/collections/herbal-juice/products/piles-vanish"
                        element={<HerbalPages
                            name={"Piles Vanish Juice |Supports Digestive Health | Reduces Inflammation"}
                            Name={"Piles Relief"}
                            price={949}
                            previousPrice={2056}
                            save={"54%"}
                            price1={1895}
                            previousPrice1={4355}
                            save1={"56%"}
                            price2={2845}
                            previousPrice2={6812}
                            save2={"58%"}
                            images={pilesVanish}
                            info1={"Healing Comfort for Piles"}
                            info2={"Gentle Relief for Peptic Ulcers & Piles"}
                            info3={"Nature's Soothing Care for Piles"}
                            Tab1={"Piles care Combo is beneficial in treating all kinds of piles and constipation. It also strengthens the digestive system. The formulation of the product is made from 17 unique herbs."}
                            T1SubText={" Seek relief with our Piles Care Combo, enriched with natural analgesic qualities. Ease discomfort, soothe pain, and support swift wound recovery."}
                            T2SubText={" This blend of herbal juices offers a potential solution to halt internal bleeding caused by peptic ulcers and internal piles. Discover the natural path to comfort and well-being, as you enjoy the benefits of our pure, organic, and gentle remedies."}
                            T3SubText={" Get the gentle touch of neem leaves, brimming with natural anti-inflammatory strength. Embrace relief as they aid in curbing harmful bacteria and toxins, guarding against discomfort."}
                            Tab3={"Neem leaves, Pipal, Priyangu, Nagkesar, Amla Dry, Nishot, Amalthas, Kutki, Suran, Ashwaganda, Barad, Saunf, Cirayta, Vidang, Bealgiri, Harad"}
                            h4_1={"Get Comfort with Our Piles Care Elixir"}
                            h4_2={"Gentle Relief for Piles"}
                            h4_3={"Find Relief the Herbal Way"}
                            h4_4={"Gentle Relief for Digestive Ease"}
                            p_1={"Revitalize with our Piles Care Elixir, thoughtfully crafted to naturally ease discomfort. Witness potential reduction in pile lumps, soothing of inflammation, relief from pain, and cessation of bleeding."}
                            p_2={"Harnessing the power of nature, this blend might assist in managing excessive bleeding caused by piles. Embrace the goodness of pure, organic ingredients, and take a step towards a more comfortable and natural solution."}
                            p_3={"Say goodbye to discomfort with our Piles Care Combo. Made from pure natural ingredients, this combo gently reduces swelling around the anus region, giving soothing relief for ongoing piles."}
                            p_4={"Crafted with nature's gentle touch. Embracing its natural laxative qualities, this blend aids in averting constipation and piles. By softening stools and promoting seamless movement through your body, it champions digestive well-being."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1_Piles_vanish.png?v=1703237213"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/2_Piles_vanish.png?v=1703237213"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/3_Piles_vanish.png?v=1703237213"}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/M_K07712.png?v=1703160000"}
                        />
                        } />
                    <Route
                        path="/collections/herbal-juice/products/smiling-liver"
                        element={<HerbalPages
                            name={"Smiling Liver Juice | Supports Liver Health | Detoxifies the Liver"}
                            Name={"Smiling Liver Juice"}
                            images={smilingLiver}
                            info1={"Your ultimate liver companion"}
                            info2={"Protecting your liver’s health"}
                            info3={"Reducing Liver Injuries"}
                            price={849}
                            previousPrice={1099}
                            save={"23%"}
                            price1={1695}
                            previousPrice1={1695}
                            save1={"0%"}
                            price2={2545}
                            previousPrice2={2545}
                            save2={"0%"}
                            Tab1={"Make your liver healthy the power of Aloe Vera! Our herbal capsules offer a natural path to a healthier liver. Packed with hydration and plant nutrients, they gently cleanse and rejuvenate your liver, promoting detoxification."}
                            Tab3={"Aloe Vera, Ginseng, Licorice, Garlic, Bhui Amla, Kalmegh, Kutki , Fresh Haldi"}
                            T1SubText={" Aloe Vera juice, a tropical treasure that nourishes your liver. Hydrating and packed with enriching phytonutrients. Detoxify and invigorate your liver's functions effortlessly."}
                            T2SubText={" With the power of ginseng, our herbal capsules gently shield your liver with its natural anti-inflammatory properties."}
                            T3SubText={" Bolster your liver's defense with potent antioxidants and soothing anti-inflammatory support. It can reduce liver injury."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/B_Smiling_Liver.png?v=1703237231"}
                            h4_1={"Cleanse your liver with Garlic"}
                            h4_2={"Reverse Unhealthy Liver"}
                            h4_3={"Gentle Care with Kalmegh"}
                            h4_4={"Guardian for Your Liver Health"}
                            p_1={"The ancient potency of garlic, a nature's gem that bestows your liver with its mineral magic. Embrace a revitalized you as garlic's cleansing touch gently detoxifies your liver."}
                            p_2={"Safeguarding your liver through potent antioxidants, antiviral might, and hepatoprotective prowess. Manage liver concerns with ease as they undo damage, making your liver stronger than ever. Embrace the goodness of 100% pure, organic ingredients."}
                            p_3={"Experience the goodness of Kalmegh, your natural companion for a healthy liver. Packed with natural wonders, Kalmegh gently nurtures your liver, aiding in managing fatty liver concerns. Its special elements work to naturally support healthy lipid levels, promoting overall wellness."}
                            p_4={"Our herbal capsules act as a safeguard, curbing substances that pose a threat to your liver's well-being."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1_Smiling_Liver.png?v=1703237213"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/2_Smiling_Liver.png?v=1703237213"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/3_Smiling_Liver.png?v=1703237213"}
                        />}
                    />
                    <Route
                        path="/collections/herbal-juice/products/magical-man-booster"
                        element={<HerbalPages
                            name={"Magical Man Booster"}
                            Name={"Magical Man Booster"}
                            images={magicalMan}
                            price={949}
                            previousPrice={2056}
                            save={"54%"}
                            price1={1895}
                            previousPrice1={4355}
                            save1={"56%"}
                            price2={2845}
                            previousPrice2={6812}
                            save2={"58%"}
                            info1={"Shatavari's Natural Power"}
                            info2={"Safed Musli to Improve Performance"}
                            info3={"Shilajit to Your Rescue"}
                            Tab1={"Experience holistic enhancements for your intimate well-being with our herbal capsules. Crafted from pure, organic ingredients, our capsules offer a natural path to invigorate your sexual health. Discover a natural way to elevate your vitality, fostering a deeper connection and enriched wellness."}
                            Tab3={"Satavari Dry, Shafed Musli, Shilajeet, Konch Seed, Watermelon Seed, Aloevera, Ashwagandha, Beetroot"}
                            T1SubText={"Relieve stress, soothe anxiety, and ignite passion effortlessly. Discover newfound vitality and endurance in men while enhancing libido in both genders."}
                            T2SubText={" Elevate your desire with increased libido while promoting healthier testosterone levels. Unleash your potential for enhanced sexual performance the pure, organic way."}
                            T3SubText={" This ancient treasure ignites testosterone production, enhancing your sexual prowess. Embrace the power of pure, organic herbal capsules to invigorate your intimate moments effortlessly."}
                            h4_1={"Improving Sexual Wellness with Kaunch Seeds"}
                            h4_2={"All-in-One Intimacy Solutions"}
                            h4_3={"Nurturing Wellness Inside Out"}
                            h4_4={"Elevate Intimate Moments with Ashwagandha"}
                            p_1={"Kaunch seeds are a natural aphrodisiac that ignites desire and enhances virility. Boosting both sperm count and motility, it elevates your intimate wellness. Elevate your confidence with increased semen production."}
                            p_2={"Rediscover your desires, nurture intimate moisture, and alleviate discomfort during intimacy."}
                            p_3={"Crafted from pure, natural ingredients, these capsules serve as a gentle tonic for your general health. Embrace the power of nature's goodness in every capsule, revitalizing your body and invigorating your spirit."}
                            p_4={"AshwagandhaEnhance your intimacy naturally and embrace a fulfilling connection. Ashwagandha, a time-honored herb, is renowned for kindling desire, heightening pleasure, and boosting performance."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1_Magical_Man_Booster.png?v=1703237213"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/2_Magical_Man_Booster.png?v=1703237213"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/3_Magical_Man_Booster.png?v=1703237213"}
                        />
                        } />
                    <Route
                        path="/collections/herbal-juice/products/digestive-fitness"
                        element={<HerbalPages
                            name={"DIGESTIVE FITNESS Juice"}
                            Name={"DIGESTIVE FITNESS Juice"}
                            images={digestiveFitness}
                            price={749}
                            previousPrice={1656}
                            save={"55%"}
                            price1={1495}
                            previousPrice1={3555}
                            save1={"58%"}
                            price2={2245}
                            previousPrice2={5612}
                            save2={"60%"}
                            Tab1={"Your Digestion's Defender is here! Elevate your immunity the natural way with Farm Naturelle Digestive Care Capsules. These capsules empower your digestion, building a strong defense against illnesses. Enjoy a healthier you, with a fortified immune system guarding against diseases."}
                            T1SubText={" Our herbal capsules gently encourage gastric glands to release essential juices. This aids in breaking down complex nutrients like proteins, fats, and sugars, promoting gut health. Bid farewell to indigestion, diarrhea, and nausea, and embrace a vibrant, discomfort-free life."}
                            T2SubText={" A Hidden Warrior: Farm Naturelle Herbal capsules lovingly enhance digestion, boosting the power of natural enzymes in your tummy and small gut. Feel the comfort as your belly dances with joy, making every meal a delight."}
                            T3SubText={" Ajwain's active enzymes naturally enhances stomach acid flow. Experience soothing relief from indigestion, bloating, and gas."}
                            Tab3={"Jeera, Hing, Ajwain, Dhaniya, Triphla, Garcinia, Digestive Enzyme"}
                            h4_1={"Healthy Tummy, Happy You"}
                            h4_2={"Age-old Secret for Your Tummy"}
                            h4_3={"Natural Enzymes in Capsules"}
                            h4_4={"Soothing Acid Reflux"}
                            p_1={"It is a natural blend packed with fibers that enhance digestion and promote healthy bowel movements. Embrace the power of anti-diabetic properties as it supports balanced insulin growth, fostering overall well-being."}
                            p_2={"Our herbal capsules bring you the power of nature's gentle touch to soothe digestion naturally."}
                            p_3={"Packed with the essence of beneficial pro-biotics and natural enzymes, these capsules work harmoniously to support your digestion."}
                            p_4={"Naturally crafted to calm acid reflux and ease pesky heartburn, these capsules work harmoniously to enhance digestion. Discover the soothing power of pure, organic ingredients, giving you a happier, healthier gut."}
                        />
                        }
                    />
                    <Route
                        path="/collections/herbal-juice/products/easing-diabetes"
                        element={<HerbalPages
                            name={"Easing Diabetes"}
                            Name={"Easing Diabetes"}
                            images={easingDiabetes}
                            price={949}
                            previousPrice={2056}
                            save={"54%"}
                            price1={1895}
                            previousPrice1={4355}
                            save1={"56%"}
                            price2={2845}
                            previousPrice2={6812}
                            save2={"58%"}
                            info1={"Energize Your Health Naturally"}
                            info2={"Balancing Blood Sugar, the Natural Way"}
                            info3={"Giloy- BFF in Diabetes"}
                            Tab1={"Farm Naturelle Diabetes Care Capsules aid in balancing blood sugar, igniting metabolism, and enhancing digestion. These capsules lovingly encourage insulin release, fostering overall well-being."}
                            Tab3={"Jamun seed, dry Karela, Dry Giloy tukdi, dry Tulshi, Panchtatva, Neem leaves, Fenugreek ( Methi), Gudmar, Vijaysar, Amla Dry"}
                            T1SubText={" Transforming starch into vital energy, our herbal capsules offer holistic support for diabetes management. Quenching thirst and reducing frequent urination, they address common symptoms, naturally."}
                            T2SubText={" Maintains healthy blood sugar for both type I and type II diabetes, harnessing the power of nature. Experience the goodness of our herbal capsules, working gently to support balanced glucose levels."}
                            T3SubText={" Giloy Supports Insulin Production and Manages Blood Sugar. Embrace the natural goodness of Giloy, which aids your body in making insulin. This incredible herb also works to tackle extra glucose, leading to healthier blood sugar levels."}
                            h4_1={"Tulsi- A Superfood"}
                            h4_2={"Your Natural Solution for Diabetes"}
                            h4_3={"Easy Absorption of Carbs & Sugar"}
                            h4_4={"Keeps Pancrease Healthy"}
                            p_1={"Farm Naturelle herbal capsules are a natural way to boost pancreatic health, enhancing insulin secretion and beta-cell function. Experience the goodness of organic Tulsi, working to maintain balanced blood sugar levels."}
                            p_2={"Packed with flavonoids, triterpenoids, anti-viral agents, and glycosides, our capsules offer an effective way to regulate blood sugar levels."}
                            p_3={"With nourishing fiber, our herbal capsules gently ease digestion, naturally steadying the uptake of carbs and sugars."}
                            p_4={"Safeguard your precious pancreatic cells, boost insulin production, and naturally lower blood sugar levels. Our organic formula embraces your well-being, providing a shield against damage while supporting healthy sugar balance."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/B_Diabetic_Care_Juice.png?v=1703237231"}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1_Diabetic_Care_Juice.png?v=1703237213"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/2_Diabetic_Care_Juice.png?v=1703237213"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/3_Diabetic_Care_Juice.png?v=1703237213"}
                        />
                        }
                    />
                    <Route
                        path="/collections/herbal-juice/products/anti-hangover-ready-to-drink-shot"
                        element={<HerbalPages
                            name={"Anti Hangover Juice | Refresh & Recover |"}
                            Name={"Anti Hangover Juice"}
                            images={antiHangover}
                            price={949}
                            previousPrice={2056}
                            save={"54%"}
                            price1={1895}
                            previousPrice1={4355}
                            save1={"56%"}
                            price2={2845}
                            previousPrice2={6812}
                            save2={"58%"}
                            info1={"Your Natural Hangover Solution"}
                            info2={"Your Instant Rescue from Hangovers"}
                            info3={"Revitalize Rapidly"}
                            Tab1={"Get relief from after celebrations like never before with our ready-to-drink anti-hangover shot. Alleviate nausea, dehydration, and discomfort effortlessly. This potent remedy, enriched with Moringa's vital nutrients, soothes hangover woes by replenishing lost vitamins. Its carb-rich content aids glucose metabolism, boosting energy levels. Hydrate & rejuvenate with our natural solution."}
                            Tab3={"Ginger, Sugar, Salt, Ginseng, Moringa"}
                            T1SubText={" Get relief from motion sickness and nausea with ReviveEase, a ready-to-drink anti-hangover shot. This powerful remedy harnesses the potency of natural spices, making it an ideal choice to alleviate hangover symptoms. Swiftly recover with this simple, effective home cure that's trusted across India."}
                            T2SubText={" Say goodbye to morning grogginess! After a night of fun, excessive alcohol can disrupt your glucose metabolism. Our solution? A delicious snack packed with carbs and honey's fructose. These ingredients shoot up your blood sugar, giving you an energy boost when you need it most."}
                            T3SubText={" Rehydrate swiftly and replenish lost sugars and vital salts with our ready-to-drink anti-hangover shot. Bounce back after a night out! Regain hydration, essential nutrients, and energy in one shot. Your go-to remedy, simplified for you. Say goodbye to hangovers the easy way."}
                            h4_1={"Say goodbye to morning-after misery"}
                            p_1={"Our ready-to-drink anti-hangover shot is your ultimate companion after a night of fun. Banish thirst, nausea, and dehydration in one go. Specially formulated for quick relief, it's your ticket to feeling fresh and energized. Embrace your mornings without the hangover blues."}
                            h4_2={"Your Ultimate Hangover Companion"}
                            p_2={"Experience rejuvenation with our Moringa-infused anti-hangover shot. Replenish vital vitamins and nutrients lost overnight. Combat hangovers the natural way, as Moringa soothes and restores."}
                        />
                        }
                    />
                    <Route
                        path="/collections/herbal-juice/products/kidney-stone-crusher-juice"
                        element={<HerbalPages
                            name={"Ayurvedic Kidney Stone Crusher Juice | Combination of Patharchatta and Gokhru Beej With No Side Effect"}
                            Name={"Ayurvedic Kidney Stone Crusher Juice"}
                            images={kidneyStoneCrusher}
                            price={999}
                            previousPrice={2156}
                            save={"54%"}
                            price1={1995}
                            previousPrice1={4555}
                            save1={"56%"}
                            price2={2995}
                            previousPrice2={7112}
                            save2={"58%"}
                            info1={"Breaks Stone Efficiently"}
                            info2={"Nature's Stone-Breaker"}
                            info3={"Cleanses Urinary Bladder"}
                            Tab1={"Farm Naturelle Kidney Stone Crusher Juice, a potent natural elixir designed to gently dissolve small kidney and gall bladder stones. Crafted from pure, organic ingredients, this herbal marvel maintains your urinary tract's crystal-clear purity, ensuring uninterrupted urine flow."}
                            Tab3={"pattharchatta, Gorju beej, punarnava bark, ajwain"}
                            T1SubText={" This herbal juice delicately aid in breaking down kidney Stone and gall bladder deposits into smaller fragments. Embrace the benefits of our pure and organic blends, promoting your well-being through nature's touch."}
                            T2SubText={" Kidney Stone Crusher Juices also known as pattharchatta or patharchatta in Hindi. The name draws from its remarkable power – 'pathar' signifies stone and 'chatta' implies breaking. Just as this name suggests, our juice aids in naturally maintaining your well-being, helping your body gently break down barriers to health."}
                            T3SubText={" This herbal juices gently purify and invigorate your urinary bladder and kidneys, promoting their well-being. Our thoughtfully crafted blends provide a nurturing cleanse, maintaining your urinary health. Experience the goodness of 100% pure, natural, and organic ingredients, handpicked to support your vitality."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stone_care_front-min.png?v=1697791504"}
                            h4_1={"No Nasties"}
                            h4_2={"Gently Flushes Kidneys"}
                            h4_3={"For Kidney & Gall Bladder Health"}
                            h4_4={"Helps Flush Out Particles"}
                            p_1={"Get purity of our herbal juices: no added sugar, colors, vitamins, or minerals. Experience the natural essence without worries of side effects."}
                            p_2={"Our herbal juices delicately aid in purging away particles and oxalates that could lead to stone formation. Embrace the power of nature's cleanse for your kidneys' lasting well-being."}
                            p_3={"A gentle and potent solution crafted to aid in breaking down small kidney and gall bladder stones. Embrace the benefits of 100% pure, natural, and organic ingredients."}
                            p_4={"Our unique formulation delicately fragments kidney and gall bladder deposits into tiny particles, effortlessly purifying your body. Embrace the feeling of vitality as these particles naturally wash away, leaving you refreshed and renewed."}
                        />}
                    />
                    <Route
                        path="/collections/herbal-juice/products/women-glow"
                        element={<HerbalPages
                            name={"Glowing Women"}
                            Name={"Glowing Women"}
                            images={womenGlow}
                            price={899}
                            previousPrice={1956}
                            save={"55%"}
                            price1={1795}
                            previousPrice1={4155}
                            save1={"57%"}
                            price2={2695}
                            previousPrice2={6512}
                            save2={"59%"}
                            info1={"Revitalize Your Skin"}
                            info2={"Biotin-rich Capsules"}
                            info3={"Pomegranate’s Goodness for You"}
                            Tab1={"Farm Naturelle herbal capsules gracefully diminish wrinkles and fine lines, and youthful skin. Plant-based collagen enhances skin's suppleness, while biotin fosters hydration, imparting a silky texture. Pomegranate, a potent antioxidant, invigorates skin, accelerating cell renewal for an age-defying allure."}
                            Tab3={"Veg Collagen, Biotin, Pomegranate, Shatavari, Mulethi"}
                            T1SubText={" Our herbal capsules work wonders in minimizing wrinkles and fine lines, leaving your face and neck looking youthful. Experience enhanced skin elasticity as our veg collagen formulation restores and rejuvenates, giving you firm and supple skin."}
                            T2SubText={"Revitalizing from within, our herbal capsules, rich in biotin, work wonders for your skin. Experience enhanced hydration, a silky-smooth texture, and a radiant appearance."}
                            T3SubText={" With its natural antioxidants, our herbal capsules turn back the clock on aging. Experience the marvel as it accelerates cell renewal, revealing your radiant essence. Embrace the power of nature for timeless beauty and rejuvenation."}
                            h4_1={"Age-Defying Magic of Shatavari"}
                            p_1={"Shatavari is a cherished natural gem known for its age-reversing prowess. Unveil nature's secret to graceful aging with our pure and organic herbal capsules. Shatavari, your ultimate ally for radiant skin, strong vitality, and a youthful spirit."}
                            h4_2={"Bring Out Your Skin's Inner Glow"}
                            p_2={"With the magic of nature with our herbal capsules, brimming with beneficial compounds and antioxidants. Revel in skin-soothing and brightening wonders that gently fade dark spots, creating an even, luminous skin tone."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stone_care_front-min.png?v=1697791504"}
                        />
                        }
                    />
                    <Route
                        path="/collections/herbal-juice/products/stress-buster"
                        element={<HerbalPages
                            name={"Stress Buster"}
                            Name={"Stress Buster"}
                            images={streesBuster}
                            price={799}
                            previousPrice={1756}
                            save={"54%"}
                            price1={1595}
                            previousPrice1={3755}
                            save1={"58%"}
                            price2={2395}
                            previousPrice2={5912}
                            save2={"59%"}
                            info1={"Ashwagandha"}
                            info2={"Brahmi"}
                            info3={"Find Peace with Jatamansi Herbal Juice"}
                            Tab1={"Thoughtfully crafted to create a soothing stress-relief regimen. Effortlessly unwind as these natural elixirs gently ease away the burdens of daily life, promoting a serene sense of calm. Experience the power of nature's embrace, as our juices assist in alleviating overall stress, allowing you to savor each moment fully."}
                            Tab3={"Ashwagandha, Brahmi, Jatamansi, Kava, tulsi, Shankhpushpi"}
                            T1SubText={" Experience tranquility with Ashwagandha, renowned for its remarkable stress-relief abilities. Embrace serenity as this ancient herb gently diminishes stress and anxiety, promoting a peaceful mind. Our herbal juices harness the power of Ashwagandha, providing you with a holistic way to soothe your senses and find balance in your daily life."}
                            T2SubText={" Your Stress-Relief BFF: It gently influences key enzymes linked to stress, curbing stress and anxiety. Your mood receives a blissful lift, while cortisol (stress hormone) levels diminish. Elevating serotonin levels, Brahmi becomes your ultimate stressbuster, paving the way for inner calm and harmony."}
                            T3SubText={" Discover the ancient wisdom of Ayurveda that identifies Vata as the orchestrator of body and nervous system harmony. Unveil serenity as Jatamansi, a soothing herb, alleviates anxiety by restoring Vata balance. Reclaim peace, as nature's essence flows through every drop of our herbal juice, supporting your journey to a tranquil mind and body."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stone_care_front-min.png?v=1697791504"}
                            h4_1={"Kava Kava to Your Rescue"}
                            h4_2={"The Magic of Shankh Pushpi"}
                            p_1={"Experience serenity with our Kava Kava herbal juice. Crafted from nature's embrace, it gently eases worries, like a soothing balm for the mind. Relish the calming magic, as tension melts away, leaving only peace. Indulge in nature's remedy for a serene soul"}
                            p_2={"This ancient herbal gem gently soothes the mind, melting away stress and anxiety. Feel the embrace of calmness while enhancing memory through its Medhya wonder—nourishing your intelligence. Elevate your wellness journey with our pure, natural, and organic herbal juices."}
                        />
                        } />
                    <Route
                        path="/collections/herbal-juice/products/joints-and-body-pain-relief"
                        element={<HerbalPages
                            name={"Joints and Body Pain Relief"}
                            Name={"Joints and Body Pain Relief"}
                            images={jointsPainCare}
                            price={949}
                            previousPrice={2056}
                            save={"54%"}
                            price1={1895}
                            previousPrice1={4355}
                            save1={"56%"}
                            price2={2845}
                            previousPrice2={6812}
                            save2={"58%"}
                            info1={"Natural Relief for Pain & Swelling"}
                            info2={"Soothe Your Throat and Breathe Freely"}
                            info3={"Joint Pain Relief"}
                            Tab1={"Get soothing relief from joint discomfort with Farm Naturelle Pain Relief herbal capsules. Crafted from pure, organic ingredients, our capsules offer a gentle remedy for joint pain. Embrace the power of nature to ease your movements and enhance your everyday life."}
                            T1SubText={" These herbal Capsules has natural analgesic properties work wonders to ease pain and reduce swelling. Discover the power of nature's remedy for a more comfortable you."}
                            T2SubText={" Experience relief as our herbal capsules harness nature's anti-inflammatory power to ease discomfort in your throat and respiratory passages. Our pure, natural, and organic formula gently reduces pain and calms inflammation, letting you enjoy a breath of fresh air without the irritation. Say goodbye to discomfort and hello to comfort, the way nature intended."}
                            T3SubText={" Benefit the power of pure, organic ingredients that gently ease joint discomfort and relieve arthritis-related woes. Embrace the joy of movement as you bid adieu to aches and pains, the natural way"}
                            h4_1={"Natural Companion for Comfortable Periods"}
                            h4_2={"Soothing Power of Boswellia"}
                            h4_3={"Nurturing Joint Comfort Naturally"}
                            h4_4={"Your Solution for Osteoarthritis Relief"}
                            p_1={"Embracing natural blood-thinning properties of hing in these capsules gently ease away menstrual discomfort. By promoting smoother flow and diminishing clots, we're here to make your periods more manageable and less painful."}
                            p_2={"Boswellia is nature's answer to inflammation. Feel the relief as it gently calms inflammation, eases discomfort, and supports joint health. Embrace the tradition of wellness with our herbal capsules that soothe without harsh chemicals."}
                            p_3={"Gently eases inflammation, supporting relief from conditions like arthritis. Our herbal capsules offer nature's touch to help soothe discomfort, the natural way."}
                            p_4={"Experience relief like never before with our herbal capsules. Embrace a life with reduced discomfort and enhanced mobility for those dealing with osteoarthritis. Our natural blend is carefully crafted to bring you the joy of pain-free movement. Say goodbye to stiffness and hello to joyful living with our organic approach to well-being."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stone_care_front-min.png?v=1697791504"}
                        />
                        } />
                    <Route
                        path="/collections/herbal-juice/products/detox-miracle-shots-ready-to-drink-shots"
                        element={<HerbalPages
                            name={"Detox-Miracle Shots-READY TO DRINK SHOTS"}
                            Name={"Detox-Miracle Shots"}
                            images={Detox}
                            price={899}
                            previousPrice={1798}
                            save={"50%"}
                            price1={1795}
                            previousPrice1={3596}
                            save1={"50%"}
                            price2={2695}
                            previousPrice2={5396}
                            save2={"50%"}
                            info1={"Bottles of wellness"}
                            info2={"Elevate Your Health"}
                            info3={"Revitalize Your Body with Aloe Vera"}
                            Tab1={"Experience the detoxifying power of our shots, promoting heart health, anti-aging effects, and immunity. Our blends, enriched with jaggery and aloe vera, balance doshas, soothe nerves, and purify your blood. Rediscover wellness today."}
                            Tab3={"AMLA, JAGGERY POWDER, ALOE VERA, ROSE PETALS POWDER, ASHOKA BARK, Phyllanthus emblica, Saccharum officinarum, Aloe barbadensis miller, Rosa, Saraca indica"}
                            T1SubText={" Boost your heart health, unlock the secrets of anti-aging, supercharge your immunity, and bid farewell to heartburn discomfort. It's all in one sip – your journey to a vibrant, healthier you starts here!"}
                            T2SubText={" Discover the power of immunity-boosting jaggery in every shot. Packed with selenium and zinc, our jaggery shots shield your body, preventing liver damage."}
                            T3SubText={" Packed with amino acids, these shots enhance your immunity, flush toxins from your blood, and promote better digestion and glowing skin."}
                            h4_1={"Rebalance Your Life with Ayurveda"}
                            h4_2={"Your Path to Health & Wellness"}
                            p_1={"Discover the magic of Harmony Shots, meticulously crafted to balance Vata and Pitta dosha. Our elixir calms your central nervous system, easing anxiety, while enhancing digestion and immunity. Experience Ayurveda's wisdom in a ready-to-drink form, making holistic well-being accessible to all."}
                            p_2={"Experience remarkable blood-purifying power of Farm Naturelle Detox-Miracle Ready-to-drink shots, offering respite from common women's health concerns and an effective solution for spasms."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stone_care_front-min.png?v=1697791504"}
                        />}
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
                                info2={"Golden Immunity Magic"}
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
                                T2Text={"Golden Immunity Magic:"}
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
                                h4_4={"Golden Immunity Magic"}
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
                                price={449}
                                previousPrice={499}
                                save={"12%"}
                                price1={629}
                                previousPrice1={699}
                                save1={"10%"}
                                price2={889}
                                previousPrice2={989}
                                save2={"10%"}
                                price3={1099}
                                previousPrice3={1195}
                                save3={"8%"}
                                price4={529}
                                previousPrice4={649}
                                save4={"18%"}
                                price5={1049}
                                previousPrice5={1099}
                                save5={"5%"}
                                price6={2069}
                                previousPrice6={2179}
                                save6={"5%"}
                                info1={"Pure Goodness in Every Drop"}
                                info2={"Our Unique Cold-Pressed Magic"}
                                info3={"Immunity-Boosting Cold Pressed Oils"}
                                Tab1={
                                    "Farm Naturelle Extra Virgin Organic Coconut Oil – a nurturing treasure from fresh, organically grown coconuts. Cold pressed, never refined, this creamy oil carries a delightful coconut aroma and light taste. Embrace its natural goodness, safe even for baby skin. Transfat-free, cholesterol-free, Gluten and Lactose-free, and Non-GMO, it's an antioxidant-rich elixir perfect for raw or light heat cooking."
                                }
                                Tab3={"Coconut Milk oil"}
                                T1Text={"Pure Goodness in Every Drop: "}
                                T1SubText={
                                    "The richness of our Organic Coconut Oil is extracted from Coconut Milk using gentle cold pressing. It's the essence of 100% natural goodness – unrefined and organic. Elevate your wellness journey with this nourishing gift from nature, seamlessly bringing the goodness of coconuts to your table."
                                }
                                T2Text={"Our Unique Cold-Pressed Magic: "}
                                T2SubText={
                                    "Crafted with Care: Our oils are born through a gentle touch, free from heat. This mindful process safeguards every precious nutrient, nurturing their goodness just for you. Experience the vitality of nature's bounty in every drop – pure, untouched, and ready to elevate your well-being."
                                }
                                T3Text={"Immunity-Boosting Cold Pressed Oils: "}
                                T3SubText={
                                    " This Extra Virgin coconut oils is your shield, packed with natural antioxidants and antiviral properties. Our unique process ensures that you're getting the best nature has to offer. Strengthen your immunity the natural way with our 100% organic, cold pressed, and unrefined food oils."
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Extra_Virgin_Coconut_Oil.png?v=1703062546"
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
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Extra_Virgin_Coconut_Oil-2.png?v=1703063128"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Extra_Virgin_Coconut_Oil-1.png?v=1703063128"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Extra_Virgin_Coconut_Oil.png?v=1703063128"
                                }
                            />
                        }
                    />
                    <Route
                        path="collections/best-seller-cooking-oil/products/organic-virgin-coconut-oil"
                        element={
                            <CookingPages
                                name={
                                    "100% Pure Coconut Oil | Organic Coconut Oil For Cooking"
                                }
                                Name={"Organic Virgin Coconut Oil"}
                                images={CoconutOil2}
                                price={449}
                                previousPrice={499}
                                save={"12%"}
                                price1={629}
                                previousPrice1={699}
                                save1={"10%"}
                                price2={889}
                                previousPrice2={989}
                                save2={"10%"}
                                price3={1099}
                                previousPrice3={1195}
                                save3={"8%"}
                                price4={529}
                                previousPrice4={649}
                                save4={"18%"}
                                price5={1049}
                                previousPrice5={1099}
                                save5={"5%"}
                                price6={2069}
                                previousPrice6={2179}
                                save6={"5%"}
                                info1={"Pure Goodness in Every Drop"}
                                info2={"Our Unique Cold-Pressed Magic"}
                                info3={"Immunity-Boosting Cold Pressed Oils"}
                                Tab1={
                                    "Farm Naturelle Extra Virgin Organic Coconut Oil – a nurturing treasure from fresh, organically grown coconuts. Cold pressed, never refined, this creamy oil carries a delightful coconut aroma and light taste. Embrace its natural goodness, safe even for baby skin. Transfat-free, cholesterol-free, Gluten and Lactose-free, and Non-GMO, it's an antioxidant-rich elixir perfect for raw or light heat cooking."
                                }
                                Tab3={"Coconut Milk oil"}
                                T1Text={"Pure Goodness in Every Drop: "}
                                T1SubText={
                                    "The richness of our Organic Coconut Oil is extracted from Coconut Milk using gentle cold pressing. It's the essence of 100% natural goodness – unrefined and organic. Elevate your wellness journey with this nourishing gift from nature, seamlessly bringing the goodness of coconuts to your table."
                                }
                                T2Text={"Our Unique Cold-Pressed Magic: "}
                                T2SubText={
                                    "Crafted with Care: Our oils are born through a gentle touch, free from heat. This mindful process safeguards every precious nutrient, nurturing their goodness just for you. Experience the vitality of nature's bounty in every drop – pure, untouched, and ready to elevate your well-being."
                                }
                                T3Text={"Immunity-Boosting Cold Pressed Oils: "}
                                T3SubText={
                                    " This Extra Virgin coconut oils is your shield, packed with natural antioxidants and antiviral properties. Our unique process ensures that you're getting the best nature has to offer. Strengthen your immunity the natural way with our 100% organic, cold pressed, and unrefined food oils."
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
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Virgin_Coconut_Oil-benefit.png?v=1703061837"
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Extra_Virgin_Coconut_Oil-2.png?v=1703063128"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Extra_Virgin_Coconut_Oil-1.png?v=1703063128"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Organic_Extra_Virgin_Coconut_Oil.png?v=1703063128"
                                }
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
                                info1={
                                    "ACV Infused with Cinnamon and Fenugreek"
                                }
                                info2={"Discover Nature’s Magic"}
                                info3={
                                    "Nature's Secret for Shedding Extra Kilos"
                                }
                                price={525}
                                previousPrice={675}
                                save={"23%"}
                                Tab1={
                                    "Unlock a Healthier You with Organic ACV and Mother. Shed pounds, manage blood sugar, pressure, and cholesterol. Glow with radiant skin and whiter teeth. Boost immunity, fight diseases, and soothe heartburn and constipation. Improve digestion, cell repair, and inflammation. Drizzle as salad dressing. Embrace a cleaner home too."
                                }
                                T1Text={"ACV Cinnamon Honey Fenugreek:"}
                                T1SubText={
                                    "Discover the essence of pure goodness! Our Apple Cider Vinegar (ACV) with Mother, enriched with the aromatic duo of Cinnamon (Dal Chini) and Fenugreek (Methi Dana), is an authentic 100% natural delight."
                                }
                                T2Text={"Discover Nature’s Magic:"}
                                T2SubText={
                                    "Apple Cider Vinegar is suitable for all. It is a blessing for diabeties patients. Not only this, but it is also great for your taste buds. You can zest up salads with ACV and spark up health at the same time."
                                }
                                T3Text={
                                    "Nature's Secret for Shedding Extra Kilos"
                                }
                                T3SubText={
                                    "Farm Naturelle Apple Cider Vinegar can be your best buddy on your weight loss journey. The 'Mother' in ACV contains enzymes that boost metabolism and control cravings."
                                }
                                Tab3={
                                    "organic apple juice, cinnamon & Fenugreek"
                                }
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Cinnamon_Fenugreek_ACV.png?v=1703070537"
                                }
                                h4_1={"Natural guardian for your well-being"}
                                p_1={
                                    "Embrace balance with this simple addition to your routine. Your health, your way."
                                }
                                h4_2={"Repairs Cell & Controls Cholesterol"}
                                p_2={
                                    "Apple Cider Vinegar is know for nurturing cells, lowering cholesterol and soothing inflammation."
                                }
                                h4_3={"A natural path to wellness"}
                                p_3={
                                    "Unlock the potential for weight management while maintaining healthy blood sugar, pressure, and cholesterol levels."
                                }
                                h4_4={"A Robust Shield Against Illnesses:"}
                                p_4={
                                    "Embrace a healthier you with improved digestion as this elixir naturally nurtures your body."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856911_4b634f74-099b-4fab-8f6f-25f9dd77ce47.png?v=1703070991"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856912_a1bd282f-85c5-4187-97f3-f1776282d26c.png?v=1703070991"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856913_a46a30b2-d71c-4cc5-b385-ec89d5064ad9.png?v=1703070991"
                                }
                            />
                        }
                    />

                    <Route
                        path="/collections/apple-cider-vinegar/products/acv-ginger-turmeric"
                        element={
                            <ApplePages
                                name={
                                    "Organic Apple Cider Vinegar with Mother and Apple Cider Infused Ginger and Turmeric"
                                }
                                Name={"ACV Ginger Turmeric"}
                                images={GingerTurmeric}
                                info1={"Nature's Blend"}
                                info2={"Natural Magic of Apple Cider Vinegar"}
                                info3={
                                    "Organic ACV with Mother Aids Weight Loss"
                                }
                                price={525}
                                previousPrice={675}
                                save={"23%"}
                                Tab1={
                                    "Taste the power of Organic ACV with Mother, your key to holistic well-being. This elixir aids weight loss, regulates blood sugar, pressure, and cholesterol. Reveal radiant skin and brighter smiles with its detoxifying teeth-whitening magic. Bolster your immunity, soothe heartburn, and enhance digestion. Rejuvenate cells, tame inflammation, and relish it as a zesty salad dressing. Embrace cleaner living, as ACV multitasks as your household's eco-friendly cleaner. Experience nature's goodness, bottled just for you."
                                }
                                T1Text={"Nature's Blend:"}
                                T1SubText={
                                    "Discover the essence of pure goodness! Our Apple Cider Vinegar (ACV) with Mother, enriched with the aromatic duo of Cinnamon (Dal Chini) and Fenugreek (Methi Dana), is an authentic 100% natural delight."
                                }
                                T2Text={"Natural Magic of Apple Cider Vinegar:"}
                                T2SubText={
                                    "Apple Cider Vinegar is suitable for all. It is a blessing for diabeties patients. Not only this, but it is also great for your taste buds. You can zest up salads with ACV and spark up health at the same time."
                                }
                                T3Text={
                                    "Organic ACV with Mother Aids Weight Loss"
                                }
                                T3SubText={
                                    "Farm Naturelle Apple Cider Vinegar can be your best buddy on your weight loss journey. The 'Mother' in ACV contains enzymes that boost metabolism and control cravings."
                                }
                                Tab3={"organic apple juice, Ginger & Turmeric"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Ginger_Turmeric_Infused_ACV.png?v=1703070537"
                                }
                                h4_1={"Get Sugar & Blood Pressure Benefits"}
                                p_1={
                                    "Experience the goodness of nature's remedy in a single sip!"
                                }
                                h4_2={"Apple Cider Vinegar's Double Action"}
                                p_2={
                                    "Embrace the goodness in a single sip and let your body celebrate the journey to better well-being!"
                                }
                                h4_3={"Nature's Balance for Wellness"}
                                p_3={
                                    "Embrace the goodness of Apple Cider Vinegar to support your well-being effortlessly."
                                }
                                h4_4={"A Robust Shield Against Illnesses:"}
                                p_4={
                                    "Embrace a healthier you with improved digestion as this elixir naturally nurtures your body."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1_f6397a36-5eb4-487a-bfd1-8921c7eba261.png?v=1698923987"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_e5d6e7fe-2cce-4a81-ad13-8cbc8ae906e3.png?v=1698923985"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_e687c6e8-4d5d-4e2c-a8bc-734f02bf1ae5.png?v=1698923986"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/apple-cider-vinegar/products/acv-ginger-garlic"
                        element={
                            <ApplePages
                                name={
                                    "Organic Apple Cider Vinegar with Mother and Infused Ginger & Garlic"
                                }
                                Name={"ACV Ginger Garlic"}
                                price={525}
                                previousPrice={675}
                                save={"22%"}
                                info1={"Infused with Ginger and Garlic"}
                                info2={"It’s Your Multi-Benefit Secret"}
                                info3={
                                    "Supporting Weight Loss with Organic ACV"
                                }
                                images={GingerGarlic}
                                Tab1={
                                    "Unveil a world of wellness with Organic ACV and Mother! Experience weight loss support, balanced blood sugar, pressure, and cholesterol levels. Glow with skin health. Enhance immunity for disease defense, soothe heartburn and constipation, and aid digestion. Sparkling smiles await with teeth whitening. Speed up cell repair, fight inflammation. Elevate dishes as a salad dressing. It's not just a condiment – it's your natural health companion. Join the ACV revolution!"
                                }
                                T1Text={"Infused with Ginger & Garlic:"}
                                T1SubText={
                                    "Experience the power of Apple Cider Vinegar (ACV) enriched with the goodness of Ginger (Adrakh) and Garlic (Lahsun). This natural elixir, known as the 'Mother,' brings you a dynamic fusion of health benefits. Elevate your well-being with this ancient concoction, thoughtfully crafted to invigorate your senses and nurture your body. Simply savor the essence of wellness in every sip!"
                                }
                                T2Text={"It's Your Multi-Benefit Secret:"}
                                T2SubText={
                                    "Unlocking more than a diabetic-friendly all-purpose marvel, Apple Cider Vinegar doubles as a zesty salad dressing. Embrace its power as a household cleaner too. One solution, endless advantages—naturally versatile for every Indian home."
                                }
                                T3Text={
                                    "Supporting Weight Loss with Organic ACV:"
                                }
                                T3SubText={
                                    "Discover the natural way to shed those extra kilos! Embrace Organic ACV with the Mother—a trusted companion on your weight loss journey. Packed with goodness, it gently supports your efforts. Its natural magic works in harmony with your body, giving you a helping hand towards a healthier you. Let Mother Nature's secret be your ally in achieving your goals."
                                }
                                Tab3={"organic apple juice, Ginger & Garlic"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Ginger_Garlic_ACCV.png?v=1703070537"
                                }
                                h4_1={"Natural guardian for your well-being"}
                                p_1={
                                    "Embrace balance with this simple addition to your routine. Your health, your way."
                                }
                                h4_2={"Repairs Cell & Controls Cholesterol"}
                                p_2={
                                    "Apple Cider Vinegar is know for nurturing cells, lowering cholesterol and soothing inflammation."
                                }
                                h4_3={"A natural path to wellness"}
                                p_3={
                                    "Unlock the potential for weight management while maintaining healthy blood sugar, pressure, and cholesterol levels."
                                }
                                h4_4={"A Robust Shield Against Illnesses:"}
                                p_4={
                                    "Embrace a healthier you with improved digestion as this elixir naturally nurtures your body."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1.png?v=1698923917"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_77ed805c-36b4-4a66-af5e-e9432863076a.png?v=1698923917"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_1b30bae8-8ae8-45aa-b9a2-cb05403e6ee3.png?v=1698923917"
                                }
                            />
                        }
                    />
                    <Route
                        path="/collections/apple-cider-vinegar/products/apple-cider-vinegar"
                        element={
                            <ApplePages
                                name={"Apple Cider Vinegar with Mother"}
                                Name={"ACV Apple Cider Vinegar"}
                                price={495}
                                previousPrice={625}
                                save={"21% off"}
                                info1={"Only Goodness Inside"}
                                info2={"Versatile All-Purpose ACV"}
                                info3={"Natural Weight Management"}
                                images={AppleCiderPic}
                                Tab1={
                                    "Experience natural weight management, blood sugar control, and healthier heart functions. Elevate your skin's radiance and unveil a brighter smile through detoxification and teeth whitening. Bolster your immunity, ease heartburn and constipation, and revitalize digestion. Renew cells and soothe inflammation. Elevate your meals with ACV as a delightful salad dressing. Embrace the power of ACV - a versatile wellness elixir even for household cleaning."
                                }
                                T1Text={"Only Goodness Inside:"}
                                T1SubText={
                                    "Taste the magic of unprocessed, pure Organic Apple Cider Vinegar (ACV) with Mother. Crafted from handpicked apples, our ACV is untouched by refining processes, ensuring 100% natural, raw, unfiltered, and unpasteurized goodness. Elevate your well-being with this authentic elixir, straight from nature's lap."
                                }
                                T2Text={"Versatile All-Purpose ACV:"}
                                T2SubText={
                                    "Elevate your salads with its natural, cold pressed goodness. Embrace its multi-faceted charm as it transforms into a household cleaner, adding sparkle to your spaces."
                                }
                                T3Text={"Natural Weight Management:"}
                                T3SubText={
                                    "With its natural goodness, your body is nourished for a healthy, healthy life. Embrace the power of ACV - a versatile wellness elixir even for household cleaning."
                                }
                                Tab3={"organic apple juice, Ginger & Turmeric"}
                                extraImage={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Apple_cidar_Vinegar.png?v=1703070537"
                                }
                                h4_1={"Natural guardian for your well-being"}
                                p_1={
                                    "Embrace balance with this simple addition to your routine. Your health, your way."
                                }
                                h4_2={"Repairs Cell & Controls Cholesterol"}
                                p_2={
                                    "Apple Cider Vinegar is know for nurturing cells, lowering cholesterol and soothing inflammation."
                                }
                                h4_3={"A natural path to wellness"}
                                p_3={
                                    "Unlock the potential for weight management while maintaining healthy blood sugar, pressure, and cholesterol levels."
                                }
                                h4_4={"A Robust Shield Against Illnesses:"}
                                p_4={
                                    "Embrace a healthier you with improved digestion as this elixir naturally nurtures your body."
                                }
                                BoxImg1={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2.png?v=1698923727"
                                }
                                BoxImg2={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_eb88c28a-358d-4c3d-902d-cebecc45cfc7.png?v=1698923837"
                                }
                                BoxImg3={
                                    "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame.png?v=1698923727"
                                }
                            />
                        }
                    />
                    <Route path="collections/turmeric/products/turmeric-with-black-pepper"
                        element={<HillPages
                            name={"Pure Himalayan Mountain Turmeric (Curcumin) with Black Pepper (Peperine) Powder"}
                            Name={"Turmeric With Black Pepper"}
                            price={310}
                            previousPrice={369}
                            save={"16% off"}
                            price1={420}
                            previousPrice1={499}
                            save1={"16%"}
                            price2={545}
                            previousPrice2={645}
                            save2={"16%"}
                            images={blackPepperTurmeric}
                            info1={"Optimize Your Health with This Duo"}
                            info2={"Golden Immunity Magic"}
                            info3={"Turmeric's Gift to Your Skin"}
                            T1Text={"Optimize Your Health with This Duo: "}
                            T1SubText={"Experience the power of a ready mix that supercharges turmeric's benefits. Unleash natural anti-inflammatory goodness, curbing pain effortlessly. Embrace a holistic path to wellness, easily unlocking turmeric's potential for your body."}
                            T2Text={"Golden Immunity Magic: "}
                            T2SubText={"Combined with a pinch of Black Pepper, this simple blend supercharges Curcumin absorption—your shield against oxidative stress, promotes speedy recovery post-surgery, and aids in detoxing from heavy metals."}
                            T3Text={"Turmeric's Gift to Your Skin: "}
                            T3SubText={"Adding a dash of black pepper to turmeric boosts Curcumin absorption by a whopping 2000%, supercharging digestion and gut health. Bye-bye acid reflux and hello to a happier tummy! This dynamic duo also aids in reducing pancreatic issues and irritable bowel discomfort."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Hill_Turmeric_Black_Pepper_Powder.png?v=1703074303"}
                            h4_1={"Makes Your Bones Stronger"}
                            p_1={"Revitalize your joints with the dynamic duo of Turmeric and Black Pepper."}
                            h4_2={"Nature's Harmony for Mind & Body"}
                            p_2={"Experience the synergy of Turmeric and Black Pepper—a perfect blend that supports bipolar and spleen health."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_ec5f14b1-4b45-490e-87a3-9364c38ff206.png?v=1698924577"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1_1a40a9b7-c494-4f72-ab08-8836fb0520d3.png?v=1698924577"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_f45e0b98-ab34-43ba-9220-de232667fe4a.png?v=1698924577"}
                            Tab1={"Experience the magic of curcumin, a powerful compound residing in Turmeric, sourced from the roots of Curcuma Longa Linn plant. With a rich history in Asian remedies, Turmeric offers ancient healing. Maximize curcumin's potential by adding piperine from Black Pepper for optimal absorption. Try our convenient blend for an effective wellness solution. Your journey to well-being starts here."}
                            Tab3={"Turmeric powder, black pepper"}
                        />}
                    />
                    <Route path="collections/turmeric/products/turmeric-milk-masala"
                        element={<HillPages
                            name={"Golden Milk Masala Himalayan Turmeric latte Powder with Natural & Immunizing Spice Blend Himalayan Turmeric, Almonds, Cinnamon, Ginger , Cloves , Ashwagandha & Ground Balck Pepper"}
                            Name={"Turmeric With Milk Masala"}
                            price={310}
                            previousPrice={369}
                            save={"16% off"}
                            price1={420}
                            previousPrice1={499}
                            save1={"16%"}
                            price2={545}
                            previousPrice2={645}
                            save2={"16%"}
                            images={turmericMilkMasala}
                            info1={"Enhance Every Indian Dish with Turmeric Magic"}
                            info2={"Golden Immunity Magic"}
                            info3={"Turmeric's Gift to Your Skin"}
                            T1Text={"Enhance Every Indian Dish with Turmeric Magic: "}
                            T1SubText={"Experience the power of turmeric – your go-to natural solution! Soothe inflammation, bid farewell to pain, and harness strong antioxidants. Whether you're recovering post-surgery or seeking everyday relief, turmeric supports your wellness journey. Let this golden treasure from nature enhance your vitality and speed up your recovery process. Discover the ancient secret to a healthier, happier you."}
                            T2Text={"Golden Immunity Magic: "}
                            T2SubText={"Turmeric aids in flushing out harmful metals, Almonds boost memory prowess, Cloves enrich dental vitality, and all come together to shield your precious blood cells."}
                            T3Text={"Turmeric's Gift to Your Skin: "}
                            T3SubText={"Together, they dance to enhance digestion, curb acid reflux, and nourish tummy wellness. Turmeric lends a hand in calming pancreatic woes and irritable bowel troubles. Experience the soothing rhythm of nature's spices, ensuring your stomach feels its happiest best."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Hill_Turmeric_Black_Pepper_Powder.png?v=1703074303"}
                            h4_1={"Supports Joints, Bones, & Mind"}
                            p_1={"Farm Naturelle Turmeric Milk Masala helps ease arthritis discomfort, shield against bone loss, and aid bone mending."}
                            h4_2={"A superhero for your body"}
                            p_2={"From maintaining healthy cholesterol levels to nurturing your heart, and even guarding against troublesome stomach ulcers, Turmeric does it all."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_9d28ea91-47a8-4a50-ab81-8eba20a6080c.png?v=1698924539"}
                            Tab1={"Get the magic of Himalayan Turmeric, Almonds, Cinnamon, Ginger, and Cloves in this convenient mix for milk. Just add before boiling, and watch the goodness unfold. Plus, a pinch of Ground Pepper supercharges Curcumin absorption by over 2000%, maximizing benefits for your body."}
                        />}
                    />
                    <Route path="collections/turmeric/products/plain-turmeric"
                        element={<HillPages
                            name={"Pure Himalayan Mountain Turmeric Curcumin (Haldi) Powder"}
                            Name={"Turmeric"}
                            price={299}
                            previousPrice={359}
                            save={"17% off"}
                            price1={399}
                            previousPrice1={469}
                            save1={"15%"}
                            price2={499}
                            previousPrice2={599}
                            save2={"17%"}
                            images={plainTurmeric}
                            info1={"Enhance Every Indian Dish with Turmeric Magic"}
                            info2={"Golden Immunity Magic"}
                            info3={"Turmeric's Gift to Your Skin"}
                            Tab1={"Curcumin, an active compound in Turmeric, sourced from the Himalayan heights of Uttarakhand. Farm Naturelle Turmeric thrives amidst nature's purity, devoid of chemicals. With an abundant Curcumin content, it offers unmatched health benefits. Blend it with a touch of Black Pepper for optimum absorption. Embrace centuries of Asian wisdom and elevate your vitality with our natural, high-altitude Mountain Turmeric (Haldi) Powder."}
                            T1Text={"Enhance Every Indian Dish with Turmeric Magic: "}
                            T1SubText={"Spice Up Your Cooking: Turmeric, the heart of Indian cuisine, adds a vibrant twist to your daily recipes. From fragrant curries to savory dishes, this golden treasure is your ultimate cooking companion. Elevate the flavor and health benefits of your favorite meals by effortlessly infusing them with the goodness of turmeric. Unleash the essence of India in every bite!"}
                            T2Text={"Golden Immunity Magic: "}
                            T2SubText={"Elevate your well-being with a daily ritual – a warm cup of milk infused with Turmeric and a pinch of black pepper. This dynamic duo not only boosts immunity and purifies your body but also promotes stomach wellness, smooth bowel movements, and a radiant complexion. Experience the swift restoration of cellular vitality. Embrace the golden goodness for a vibrant life."}
                            T3Text={"Turmeric's Gift to Your Skin: "}
                            T3SubText={"Its potent antibacterial elements work wonders. Embrace a radiant complexion by including it in your regular face pack routine. Experience the joy of soft, luminous skin as blemishes, dark circles, and acne fade away. Let turmeric redefine skincare simplicity for you."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Hill_Turmeric_Powder.png?v=1703074303"}
                            h4_1={"Potent Perfection from the Himalayas"}
                            p_1={"Harness the power of the mountains in just a small amount."}
                            h4_2={"Glowing Skin Secret"}
                            p_2={"Let the magic of Turmeric dissolve the stubborn sun, dust, and pollution-induced tan."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1_4d627ec2-9600-4493-81db-ad5e189fd08b.png?v=1698924411"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_e0faee3e-af96-4fee-b46a-f78ef3523ab5.png?v=1698924411"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_506f8095-b844-498e-8964-25ad27c202f9.png?v=1698924411"}
                        />}
                    />
                    <Route
                        path="collections/jaggery-amla-candy/products/chatpata-amla-candy"
                        element={<JaggeryPages
                            name={"Dried Dry Jaggery Chatpata Amla Candy (Indian Gooseberry)| Export Quality Amla | No Preservative | No Artificial Colour Used"}
                            Name={"CHATPATA AMLA CANDY"}
                            images={Jaggery}
                            price={359}
                            price1={479}
                            previousPrice={439}
                            previousPrice1={699}
                            save={"18% off"}
                            save2={"31%"}
                            info1={"Boost Your Immunity with Amla"}
                            info2={"Goodness of Vitamin C"}
                            info3={"A Delicious Boost for Your Digestive Fire"}
                            Tab1={"Farm Naturelle Chatpata Amla Candy, a tasty, nutritious treat loaded with antioxidants from amla. Boost your immune system, enhance metabolism, aid digestion, and satisfy cravings with its classic chatpata flavor."}
                            T1Text={"Boost Your Immunity with Amla: "}
                            T1SubText={" Find the secret to a stronger immune system with our delicious Dried Dry Jaggery Chatpata Amla Candy. Packed with the power of Amla, this tangy treat is your go-to for natural immunity support."}
                            T2Text={"Goodness of Vitamin C: "}
                            T2SubText={"Indulge in the goodness of our Chatpata Amla Candy enriched with Vitamin C and dietary fibers. Crafted with care, this tangy treat stimulates metabolism, enhances digestion, and is your perfect daily dose of natural vitality."}
                            T3Text={"A Delicious Boost for Your Digestive Fire: "}
                            T3SubText={" Indulge in the zesty delight of Chatpata Amla Candy, not only a treat for your taste buds but also a secret to improved appetite and a fired-up digestive system. Let your agni digestive fire thrive with every tangy bite, making your mealtimes a flavorful experience."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/amla_candy.png?v=1703075308"}
                            h4_1={"A Tasty Twist for Your Health"}
                            p_1={"Indulge in the delightful fusion of flavors and wellness with Farm Naturelle Amla Candy. This delicious snack not only satisfies your taste buds but also aids digestion. Perfect for post-meal cravings, it's a scrumptious way to boost your health."}
                            h4_2={"Satisfies taste buds"}
                            p_2={"Farm Naturelle Amla Candy offers a delightful fusion of flavors, making it a tasty treat to indulge in. It satisfies your taste buds, providing a satisfying snacking experience."}
                            h4_3={"Aids digestion"}
                            p_3={"Along with its delicious taste, Farm Naturelle Amla Candy also aids digestion. It contains amla, which is known for its digestive properties. Consuming this candy after meals can help improve digestion and alleviate digestive discomfort."}
                            BoxImg1={
                                "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_a2763bf7-9e28-40ce-93d8-a1721c13d0fe.png?v=1698925987"
                            }
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_385abb8d-b02d-41bb-8d21-4d6d9ca51da2.png?v=1698925987"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1_0871ed6c-0c7a-48ff-b6d4-674e1e3fb20a.png?v=1698925987"}
                            Tab3={"Amla Jaggery, Sea salt, Star anise, Vinegar, Cinnamon, Black salt, Bay leaf, Red Chilli, Cumin Powder, Ginger Powder, Citric Acid"}
                        />
                        }
                    />
                    <Route
                        path="collections/wellness-oils/products/castor-seed-oil"
                        element={<WellnessPages
                            name={"100% Pure Natural Organic Castor Seed Oil (Hindi-Arandi Oil)"}
                            Name={"Castor Seed Oil"}
                            images={castorOil}
                            info1={"Pure of Arandi Oil for Wellness"}
                            info2={"The Versatile Elixir of Castor Oil"}
                            info3={"Relieve Joint Discomfort Naturally"}
                            price={269}
                            previousPrice={320}
                            save={"16%"}
                            price1={349}
                            previousPrice1={460}
                            save1={"24%"}
                            price2={559}
                            previousPrice2={695}
                            save2={"20%"}
                            price3={849}
                            previousPrice3={1075}
                            save3={"21%"}
                            Tab1={"Nourish, Heal, and Shine with Castor Oil. Experience the wonders of 100% pure, natural, and organic cold pressed Castor Seed Oil, known as Arandi Oil in Hindi. Embrace its soothing touch on joint pain, rapid wound healing, and acne scar fading. This elixir hydrates your skin in creams and lotions. Reap the rewards of stronger, voluminous hair with reduced hair loss. With antioxidants and balance-restoring prowess, it's your path to vibrant hair and skin."}
                            Tab3={`Castor Seed Oil`}
                            T1Text={"Pure of Arandi Oil for Wellness"}
                            T2Text={"The Versatile Elixir of Castor Oil"}
                            T3Text={"Relieve Joint Discomfort Naturally"}
                            T1SubText={"Benefit yourself with the magic of 100% pure, natural, and organic cold-pressed Arandi Oil. Derived from castor seeds, this Virgin Castor Seed Oil is your pathway to unrefined goodness. Elevate your well-being with its innate properties, untouched by processing."}
                            T2SubText={"The Versatile Elixir of Castor Oil:This natural gem, with its gentle yet powerful properties, finds its place in both beauty regimes and healing practices. From enhancing your skin's glow to soothing medical concerns, this cold pressed, unrefined, and organic wonder is your trusted companion for holistic wellness."}
                            T3SubText={"Experience relief from joint discomfort with our pure, cold pressed, and organic wellness oils. Gently easing joint pain, our natural blend offers soothing comfort while promoting flexibility. Embrace the goodness of nature and bid farewell to aching joints."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Castor_Oil.png?v=1703144931"}
                            h4_1={"Accelerates Healing Naturally"}
                            h4_2={"Banish Acne Scars Naturally"}
                            h4_3={"Prevent Hair Loss Naturally"}
                            h4_4={"Revitalize Your Cells with Castor Oil"}
                            p_1={"Experience faster healing with our 100% natural, cold pressed, unrefined, and organic wellness oils."}
                            p_2={"Experience the magic of our 100% natural, cold pressed, unrefined, and organic wellness oils."}
                            p_3={"Embrace the power of nature for vibrant, resilient hair that shines with health."}
                            p_4={"Unlock the potential to restore balance within your cells."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Castor_Seed_Oil-_Massage_7dfcabdc-51f1-4a3e-8122-89bce5c1cdbb.png?v=1703147473"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Castor_Seed_Oil-_skin_care_6c797a09-9482-4bae-af49-a2c74a7661a7.png?v=1703147473"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Castor_Seed_Oil-_hair_care_4807a5d9-1751-4362-8047-fc2b35dac637.png?v=1703147473"}
                            key={nanoid()}
                        />}
                    />
                    <Route
                        path="collections/wellness-oils/products/black-seed-oil"
                        element={<WellnessPages
                            name={"100% Pure Black Seed Oil | Organic Black Seed Oil"}
                            Name={"Black Seed Oil"}
                            images={blackSeedOil}
                            info1={"Organic Cold-Pressed Black Seed Oil"}
                            info2={"Our Therapeutic Wellness Oils"}
                            info3={"Improve Your Memory"}
                            price={339}
                            previousPrice={430}
                            save={"22%"}
                            price1={569}
                            previousPrice1={765}
                            save1={"26%"}
                            price2={949}
                            previousPrice2={1339}
                            save2={"29%"}
                            price3={1685}
                            previousPrice3={2349}
                            save3={"28%"}
                            Tab1={"Experience the wonders of 100% pure, cold-pressed Virgin Black Seed Oil (Kalongi oil). Unlock therapeutic benefits that enhance memory and bone health. Revitalize kidneys, skin, and hair—say goodbye to wrinkles and hair loss. Boost immunity with daily consumption. Breathe easy as sinus issues melt away."}
                            Tab3={"Black Seed Oil"}
                            T1Text={"Organic Cold-Pressed Black Seed Oil"}
                            T2Text={"Our Therapeutic Wellness Oils"}
                            T3Text={"Improve Your Memory"}
                            T1SubText={"Embrace pure well-being with our Organic Cold-Pressed Black Seed Oil, lovingly crafted from Kalongi seeds. 100% natural and unrefined, it's a treasure trove of natural goodness. Experience the power of nature's touch in every drop, as we bring you the finest, untouched by chemicals."}
                            T2SubText={"Experience gentle yet potent remedies that rejuvenate your body and mind. Crafted through cold pressing, these unrefined elixirs retain their full potency and natural essence."}
                            T3SubText={"Crafted from nature's bounty, these unrefined elixirs offer a natural boost to your memory prowess. Embrace the goodness of unprocessed, organic ingredients, thoughtfully extracted to invigorate your cognitive abilities."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Blackseed_Oil.png?v=1703144931"}
                            h4_1={"Strengthens Your Bones Naturally"}
                            h4_2={"Nurturing Your Kidneys"}
                            h4_3={"Nourish, Hydrate, & Smooth Away Wrinkles"}
                            h4_4={"Revitalize Your Hair Naturally"}
                            p_1={"Experience the power of nature as it supports and fortifies your bones."}
                            p_2={"Experience the goodness of our 100% natural, cold-pressed, unrefined, and organic wellness oils that gently support and enhance your kidney health."}
                            p_3={"Achieve a radiant glow as our oils deeply moisturize, transforming dryness into supple softness."}
                            p_4={"Nourishing your hair from root to tip, our oils naturally fortify strands, preventing hair loss and promoting strength."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Seed_Oil-_cooking_37dc54ed-3bf8-4e13-9540-1d6791e3d311.png?v=1703147396"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Seed_Oil-_skin_care_063eacc7-df29-4a44-809e-95243bbb4a99.png?v=1703147397"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Black_Seed_Oil-_hair_care_6a80d756-4f33-4b12-8aa9-b681e4416146.png?v=1703147396"}
                        />} />
                    <Route
                        path="collections/wellness-oils/products/avocado-oil"
                        element={<WellnessPages
                            name={"100% Pure Extra Virgin Avocado Oil is Pressed from The Fleshy Pulp Surrounding The Avocado"}
                            Name={"Avocado Oil"}
                            images={avocadoOil}
                            price={569}
                            price1={1115}
                            price2={1995}
                            price3={3695}
                            previousPrice={690}
                            save={"18%"}
                            previousPrice1={1340}
                            save1={"17%"}
                            previousPrice2={2440}
                            save2={"18%"}
                            previousPrice3={4650}
                            save3={"21%"}
                            info1={"Loaded with Goodness of Avocado"}
                            info2={"Abundant Health from Earth's Bounty"}
                            info3={"All-in-One Wellness Oil"}
                            Tab1={"Pure Avocado Wellness: Nourish Inside Out with nature's treasure with our cold-pressed Avocado oil. Packed with vitamins, antioxidants, and minerals, it's a multi-purpose elixir for heart, beauty, and body. Elevate your cooking with its high-heat tolerance. Ethically curated, 100% organic, and bursting with Omega 3, 6, 9, Vitamin E, and more. Rejuvenate hair, improve texture, and banish dryness. Embrace healthy fats, embrace a vibrant you."}
                            T1Text={"Loaded with Goodness of Avocado:"}
                            T1SubText={"Gently extracted from the lush, creamy flesh that envelops the avocado seed, our oil captures the very best of nature's goodness. Unveil the secret of this cold-pressed, unrefined elixir that's 100% natural and organic"}
                            T2Text={"Abundant Health from Earth's Bounty:"}
                            T2SubText={"Farm Naturelle Avocado is a pure blend of nature's goodness, bursting with essential vitamins, minerals, and powerful antioxidants. Unlock your vitality with this organic elixir, carefully cold pressed to retain its unrefined potency."}
                            T3Text={"All-in-One Wellness Oil:"}
                            T3SubText={"This avocado oil is enriched with heart, beauty, and body benefits. This all-in-one natural elixir, cold pressed and unrefined, is your path to radiant skin, a healthy heart, and overall vitality. Crafted from the finest organic ingredients, it's your go-to solution for holistic well-being."}
                            Tab3={"Avocado Oil"}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Avocado_Oil.png?v=1703144931"}
                            h4_1={"Make Cooking Blissful"}
                            h4_2={"Our Thoughtfully Sourced Organic Avocado Oil"}
                            h4_3={"Abundant in Nature's Goodness"}
                            h4_4={"Naturally Revitalize Your Hair"}
                            p_1={"Fry, sauté, and bake with confidence, knowing you're infusing your dishes with 100% organic goodness."}
                            p_2={"Discover wellness in its truest form, as we bring you the essence of nourishment straight from the source."}
                            p_3={"Nourish yourself with a symphony of vital nutrients like Beta Sitosterol, Monounsaturated Fats, and Lutein."}
                            p_4={"Elevate your hair's texture and bid farewell to dryness. Unlock the secret to luscious locks with our enriching oil blend."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Avocado_Oil-_cooking_1bd3cb89-e1bf-44e3-bd81-74f8ddcd1dcf.png?v=1703147226"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Avocado_Oil-_skin_care_544431f9-cac5-471e-8400-1df4bbf6605c.png?v=1703147226"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Avocado_Oil-_hair_care_0179aafd-c367-454e-962e-470306029049.png?v=1703147226"}
                        />} />
                    <Route
                        path="collections/wellness-oils/products/flax-seed-oil"
                        element={<WellnessPages
                            name={"100% Pure Flax Seed Oil | Organic Flax Seed Oil"}
                            Name={"Flax Seed Oil"}
                            images={flaxSeedOil}
                            info1={"Nourish Naturally with Organic Flax Seed Oil"}
                            info2={"Culinary Delights with Our Flax Seed Oil"}
                            info3={"Nurtures Heart & Liver Vitality"}
                            price={269}
                            previousPrice={320}
                            save={"16%"}
                            price1={349}
                            previousPrice1={460}
                            save1={"24%"}
                            price2={559}
                            previousPrice2={695}
                            save2={"20%"}
                            price3={849}
                            previousPrice3={1075}
                            save3={"21%"}
                            Tab1={"The goodness of 100% natural, cold-pressed Organic Flax Seed Oil (Hindi-Alsi Oil). Its protein and fiber naturally curb appetite, aiding weight management. Ideal for cooking, it nurtures heart and liver health. Enjoy radiant skin and lustrous hair. Embrace a healthier lifestyle with its weight loss benefits. Support heart health by enhancing artery flexibility and lowering blood pressure. Reveal beautiful skin, fight wrinkles, and hydrate. Immerse in antioxidant-rich Flax Seed Oil for balanced wellness."}
                            Tab3={"Flax Seed Oil"}
                            T1Text={"Nourish Naturally with Organic Flax Seed Oil:"}
                            T1SubText={"Packed with protein and fiber, it's your natural partner for curbing cravings and managing weight. Savor the goodness of cold-pressed, unrefined wellness, as this oil assists in reducing appetite, making your journey towards balanced health and weight control a delightful one."}
                            T2Text={"Culinary Delights with Our Flax Seed Oil:"}
                            T2SubText={"Revitalize your meals with our 100% natural, cold pressed, unrefined oil – not just a culinary marvel, but a wellness elixir too! Elevate your cooking with the goodness of organic ingredients, making every bite a healthful delight."}
                            T3Text={"Nurtures Heart & Liver Vitality"}
                            T3SubText={"Elevate your heart and liver well-being effortlessly. Our natural elixirs support the health of these vital organs, ensuring your wellness journey is backed by nature's finest."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Flaxseed_Oil.png?v=1703144931"}
                            h4_1={"Skin and Hair Wellness"}
                            h4_2={"Healthy Weight Management"}
                            h4_3={"Heart's Best Friend"}
                            h4_4={"Naturally Radiant Skin"}
                            p_1={"Elevate your skin's glow and hair's strength naturally."}
                            p_2={"Empowering your weight management efforts, these oils offer nature's touch in every drop."}
                            p_3={"Feel the difference in your cardiovascular well-being as you embrace the benefits of this organic elixir, straight from nature's lap to your wellness journey."}
                            p_4={"Effortlessly combats wrinkles, restoring a youthful glow."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Flax_Seed_Oil-_cooking_dd9b199f-e58d-4cc3-a775-b38208ccc392.png?v=1703147316"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Flax_Seed_Oil-_skin_care_79943bd8-70eb-441e-9100-b72a752e6f27.png?v=1703147316"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Flax_Seed_Oil-_hair_care_1887e72a-fcb9-499a-90d2-26dfc92a233a.png?v=1703147316"}
                        />} />
                    <Route
                        path="collections/nuts-in-honey/products/wallnut-in-cinnamon"
                        element={<NutHoneyPage
                            name={"Walnut in Cinnamon Honey"}
                            Name={"Walnut Cinnamon Honey"}
                            images={wallNutHoney}
                            price={479}
                            previousPrice={799}
                            save={"41%"}
                            price1={559}
                            previousPrice1={999}
                            save1={"44%"}
                            info1={"Naturally Sweetened Goodness"}
                            info2={"Flavourful Adventure"}
                            info3={"Boost Your Immune Defense"}
                            Tab1={"Capture nature's essence in a beautifully adorned glass jar. Our honey, sourced from the Himalayan foothills and pristine Uttaranchal orchards, is a 100% pure, raw, and natural marvel. No pasteurization, no high-pressure filtration, and absolutely no additives. The result? Honey that gleams with enzymes, trace vitamins, minerals, antioxidants, and antibacterial goodness. A gift that conveys nature's best, perfect for both corporate connections and cherished loved ones. Call our customer care for delightful gifting solutions"}
                            Tab3={"Honey, Cinnamon, Walnut"}
                            T1Text={"Naturally Sweetened Goodness:"}
                            T1SubText={" Indulge in the rich harmony of handpicked walnuts and the warmth of natural cinnamon, gently infused in our pure, raw honey. Experience the perfect blend of big, delicious walnuts and the best quality honey, straight from nature's lap. Savor the taste of 100% pure, raw, and natural ingredients, crafted with care for your well-being."}
                            T2Text={"Flavourful Adventure:"}
                            T2SubText={"Savor the magic of our Cinnamon Walnut Infused Honey, where nature's bounty takes center stage. Let the delightful combination of earthy walnuts and the gentle touch of cinnamon dance on your palate. This is more than a taste; it's a sensory journey into the heart of authenticity. Immerse yourself in the wonder of handpicked, natural ingredients, blended for an experience that's as wholesome as it is flavorful."}
                            T3Text={"Boost Your Immune Defense:"}
                            T3SubText={"Revitalize your immune system the natural way! Our pure and natural honey range provides a nurturing shield for your health. Elevate your well-being with every spoonful, as our honey's rich nutrients and antioxidants join forces to fortify your body's defenses. Enjoy the sweetness of good health while savoring the taste of pure authenticity."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Walnut_in_Cinnamon_Honey.png?v=1703059320"}
                            h4_1={"Nature's Bounty Packed in Every Drop"}
                            h4_2={"Tasty & healthy fusion"}
                            h4_3={"Honey that Warms Every Heart"}
                            h4_4={"Nature's Detoxifying Elixir"}
                            p_1={"Filled with the goodness of essential vitamins, minerals, and powerful antioxidants, our pure and natural honey is a treasure trove of natural nourishment."}
                            p_2={"Savor the rich sweetness of raw honey, the comforting warmth of cinnamon, and the satisfying crunch of walnuts"}
                            p_3={"Spread joy and smiles with every spoonful, making moments sweeter for each and every soul. Indulge in nature's nectar that transcends age and brings happiness to every face it touches."}
                            p_4={"Embrace the goodness of 100% natural honey, your partner in achieving a revitalized body and a vibrant, radiant you."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856943.png?v=1701944168"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856943.png?v=1701944168"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856945.png?v=1701944168"}
                        />} />
                    <Route
                        path="collections/nuts-in-honey/products/figs-in-cinnamon-honey"
                        element={<NutHoneyPage
                            name={"Figs in Cinnamon Honey"}
                            Name={"Figs in Cinnamon Honey"}
                            info1={"Fig's Delight Wrapped in Raw Honey and Cinnamon"}
                            info2={"A Delightful Fusion"}
                            info3={"Empower your immunity the natural way"}
                            price={599}
                            previousPrice={799}
                            save={"26%"}
                            price1={659}
                            previousPrice1={999}
                            save1={"34%"}
                            Tab1={"Gift nature's essence in a jar. Crafted from the Himalayan foothills and immaculate orchards of Uttaranchal, our honey radiates authenticity. This glass-jar treasure is equally suited for corporate gifting or expressing affection to friends and family. It stands untouched by pasteurization, high-pressure filtration, added sugars, or preservatives, preserving enzymes, vitamins, minerals, antioxidants, and the natural symphony of taste and aroma. Reach out for thoughtful gifting options."}
                            Tab3={"Honey, Cinnamon, Figs"}
                            T1Text={"Fig's Delight Wrapped in Raw Honey and Cinnamon:"}
                            T1SubText={" Delight in nature's gift with our fig-infused raw honey. Plucked from the orchards of purity, our honey captures the essence of figs and the warmth of natural cinnamon, delivering a taste that's as comforting as a hug from the earth itself."}
                            T2Text={"A Delightful Fusion:"}
                            T2SubText={" Get ready to relish a wonderful flavor adventure with our Fig and Cinnamon Infused Honey. We've combined juicy figs with the cozy charm of cinnamon to craft a taste that's pure magic. This delightful blend not only tantalizes your taste buds but also fills the air with a cozy, inviting aroma."}
                            T3Text={"Empower your immunity the natural way:"}
                            T3SubText={" Elevate your wellness journey with honey that's more than a treat – it's a partner in supporting your immune system. Handpicked from nature's bounty, our honey range is a simple, delicious choice for your health."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Figs_in_Cinnamon_Honey.png?v=1703059320"}
                            h4_1={"Wholesome Dose of Nutrients"}
                            h4_2={"Delicious Duo"}
                            h4_3={"Honey that Delights All"}
                            h4_4={"Give your immune system a natural lift"}
                            p_1={"Brimming with essential vitamins, minerals, and powerful antioxidants, our pure and natural honey nurtures your well-being naturally. Experience the goodness in every taste, as you embrace health the way it was meant to be – simple, pure, and full of vitality."}
                            p_2={"Treat yourself with cinnamon and the delicate sweetness of figs. Our raw honey and cinnamon with figs blend brings you the untouched goodness of nature, brimming with vital nutrients and natural energy. Indulge in a delightful balance of flavors that not only tantalize your taste buds but also offer a nourishing journey with every spoonful."}
                            p_3={"Goodness of our pure, natural, and natural honey – a treat that knows no bounds. Perfect for every palate, it spreads joy far and wide, leaving smiles on every face. From young to old, our honey is a simple pleasure meant for all to relish."}
                            p_4={"Embrace the Power of Nature: Including honey and cinnamon in your routine can. This dynamic duo, rich in purity and goodness, helps fortify your body's defenses. Experience the beauty of an enhanced immune system as you savor the harmony of 100% pure, natural, and natural honey goodness combined with the warmth of cinnamon."}
                            images={FigsHoney}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856933.png?v=1701942818"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856933.png?v=1701942818"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856931.png?v=1701942818"}
                        />}
                    />
                    <Route
                        path="collections/nuts-in-honey/products/cashew-in-cinnamon-honey"
                        element={<NutHoneyPage
                            name={"Cashew in Cinnamon Honey"}
                            Name={"Cashew in Cinnamon Honey"}
                            info1={"Cashew-Infused Cinnamon Honey"}
                            info2={"Elevate your taste journey"}
                            info3={"Supports your Immune System"}
                            price={539}
                            previousPrice={799}
                            save={"33%"}
                            price1={619}
                            previousPrice1={999}
                            save1={"38%"}
                            Tab1={"Elevate your gifting game with our exquisite Glass jar adorned with natural charm. A thoughtful choice for corporate gestures or sharing warmth with loved ones. Indulge in 100% Pure Raw Bee Honey sourced from Himalayan heights and pristine Uttaranchal orchards. Free from Pasteurization, High-Pressure Filtration, added Sugar, or artificial touch – it's a treasure trove of Enzymes, Vitamins, Minerals, Antioxidants, and timeless Taste. Call our caring team for perfect gifting solutions."}
                            Tab3={"Honey, Cinnamon, Cashew"}
                            T1Text={"Cashew-Infused Cinnamon Honey:"}
                            T2Text={"Elevate your taste journey:"}
                            T3Text={"Supports your Immune System:"}
                            T1SubText={" Experience the delight of our finest Cashews embraced by the warmth of 100% Pure Raw Cinnamon Honey. Savor the goodness of nature's purest gifts, where each Cashew is a crunchy masterpiece, lovingly immersed in the sweet richness of untouched, natural honey. Elevate your taste journey with this exquisite blend, where every spoonful tells a story of authenticity and flavor."}
                            T2SubText={" Unveil the magic of our pure, natural, and utterly delectable Cashew & Cinnamon Infused Honey. A symphony of flavors that crafts a scrumptious experience. Embrace the nutty essence of cashews harmonizing with the cozy touch of cinnamon."}
                            T3SubText={" Our pure, natural, and natural honey is a secret weapon for a strong immune system. Packed with the goodness of nature, it fortifies your body's defenses, helping you stay vibrant and energetic. Let the power of nature's sweetness support your wellness journey effortlessly."}
                            images={cashewHoney}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Cashews_in_Cinnamon_Honey.png?v=1703059320"}
                            h4_1={"Wholesome Goodness in Every Drop"}
                            h4_2={"Carefully crafted for your health"}
                            h4_3={"A treat that delights every palate"}
                            h4_4={"Our Promise of Pure Raw Honey"}
                            p_1={"Experience the wholesome goodness of our pure, natural, and natural honey range. Packed with a bounty of essential vitamins, vital minerals, and powerful antioxidants, our honey nourishes you from within. Feel the richness of nature's goodness as you savor every drop, providing your body with the nutrients it craves. Embrace health in its purest form with our honey – a true gift from the heart of the hive."}
                            p_2={"Discover the perfect blend of raw honey's purity, warm cinnamon's touch, and the rich embrace of cashew. Savor the goodness of nature's trio, an authentic indulgence that soothes and nourishes. Elevate your senses with our revitalizing fusion, carefully crafted for your well-being. Experience the symphony of flavors, straight from the heart of nature to your table."}
                            p_3={"Indulge in the goodness of our pure, natural, and natural honey. From the young to the wise, our honey is a joy for all. Its heartwarming sweetness brings smiles to faces across India. Enjoy a taste that unites everyone in happiness."}
                            p_4={"Experience the essence of pure raw honey with our range - no added sugar, no artificial color. Taste the untouched beauty of nature's sweetness, just as the bees intended. Straight from the hive to your table, our honey is a golden gift of goodness, completely unaltered. Savor the authenticity, embrace the natural."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856938.png?v=1701943327"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856937.png?v=1701943326"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856939.png?v=1701942818"}
                        />}
                    />
                    <Route
                        path="/collections/nuts-in-honey/products/mix-nut-in-cinnamon-honey"
                        element={<NutHoneyPage
                            name={"Mix Nut in Cinnamon Honey"}
                            Name={"Mix Nut in Cinnamon Honey"}
                            price={539}
                            previousPrice={799}
                            save={"33%"}
                            price1={619}
                            previousPrice1={999}
                            save1={"38%"}
                            info1={"Nature's Sweet Nutty Delight"}
                            info2={"Irresistible Mix Nuts with Cinnamon"}
                            info3={"Boosts Your Body's Defenses"}
                            Tab1={"Treat yourself with the essence of untouched nature with our 100% raw, natural Bee Honey. Nestled in a decorative glass jar, it's a natural delight, rich in enzymes, vitamins, minerals, and antioxidants. Ideal for corporate and personal gifting."}
                            Tab3={"Honey, Cinnamon, Almond, Walnut, Cashew, Figs"}
                            T1Text={"Nature's Sweet Nutty Delight:"}
                            T2Text={"Irresistible Mix Nuts with Cinnamon:"}
                            T3Text={"Boosts Your Body's Defenses:"}
                            T1SubText={" Experience the symphony of nature's finest flavors with our delightful blend of Big Delicious Best Quality Mixed Nuts, embraced in the warm embrace of 100% Pure Raw Natural Cinnamon Honey. Savor the rich goodness of pure and natural ingredients that dance together in perfect harmony, creating a taste that's both wholesome and heavenly."}
                            T2SubText={" A blend of wholesome mixed nuts harmoniously paired with the alluring essence of cinnamon-infused honey. Relish the rich symphony of flavors that will transport your senses to a world of pure indulgence. Unlock the true essence of natural goodness in every bite, and savor the aromatic magic that only comes from 100% pure, natural ingredients. A taste like no other, crafted for your pleasure."}
                            T3SubText={" Our pure and natural honey is a delicious way to strengthen your immune system. Packed with natural goodness, it empowers your body to fight off everyday challenges. Elevate your well-being with every spoonful of this golden elixir – a simple step towards a healthier you."}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Mix_Nuts_in_Cinnamon_Honey.png?v=1703059320"}
                            images={mixHoney}
                            h4_1={"Our Enriching Honey Delight"}
                            h4_2={"Nourishing Nutty Treasure"}
                            h4_3={"Nature's Sweet Delight for All"}
                            h4_4={"Nourish, Cleanse, and Radiate"}
                            p_1={"Brimming with essential vitamins, minerals, and powerful antioxidants, our pure honey is a natural treasure trove. Each spoonful offers a nourishing blend of nutrients that your body will love. Embrace the richness of nature's gifts with every delectable drop of our natural honey range."}
                            p_2={"Experience nature's goodness in our blend of pure, unprocessed honey, aromatic cinnamon, and a medley of assorted nuts. This harmonious fusion not only tantalizes your taste buds but also offers a wealth of health. Savor the bountiful energy and wholesome nutrients, straight from the hive to your table."}
                            p_3={"Experience nature's goodness in our blend of pure, unprocessed honey, aromatic cinnamon, and a medley of assorted nuts. This harmonious fusion not only tantalizes your taste buds but also offers a wealth of health. Savor the bountiful energy and wholesome nutrients, straight from the hive to your table."}
                            p_4={"Experience the natural magic of our pure honey range. Embrace the goodness that detoxifies your body, sweeping away harmful free radicals lurking in your immune system. Unveil your skin's true radiance as you indulge in the purity of nature. Let our honey be your secret to a revitalized you, effortlessly."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856940.png?v=1701943665"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856941.png?v=1701943665"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856942.png?v=1701943665"}
                        />} />
                    <Route
                        path="collections/nuts-in-honey/products/almond-in-cinnamon-honey"
                        element={<NutHoneyPage
                            name={"Almond in Cinnamon Honey"}
                            Name={"Almond in Cinnamon Honey"}
                            price={479}
                            previousPrice={799}
                            save={"41%"}
                            price1={559}
                            previousPrice1={999}
                            save1={"44%"}
                            info1={"Taste pure delight"}
                            info2={"Nourishing Blend of Almond & Cinnamon"}
                            info3={"Nurtures Your Immunity Naturally"}
                            T1Text={"Taste pure delight:"}
                            T2Text={"Nourishing Blend of Almond & Cinnamon:"}
                            T3Text={"Nurtures Your Immunity Naturally:"}
                            T1SubText={" Enjoy Farm Naturelle’s delectable blend of premium almonds and the warm embrace of natural cinnamon-infused raw honey. Each spoonful is a journey into indulgence, where the finest quality almonds meet the goodness of untouched, raw honey. Savor the essence of nature's sweetness in every drop, as our 100% pure and natural creation weaves a symphony of flavors that's simply unforgettable."}
                            T2SubText={" Taste the perfect blend of nature's goodness with our Almond-Infused Raw Honey. Crafted by infusing premium blanched almonds into pure, natural honey, this exquisite fusion offers a wealth of vitamins and minerals. Elevate your wellness journey with each delectable spoonful."}
                            T3SubText={" Taste the perfect blend of nature's goodness with our Almond-Infused Raw Honey. Crafted by infusing premium blanched almonds into pure, natural honey, this exquisite fusion offers a wealth of vitamins and minerals. Elevate your wellness journey with each delectable spoonful."}
                            Tab3={"Almond Infused Honey"}
                            images={cinnamonAlmondHoney}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Immunity_Herbs_Infused_Honey_1b2bd937-3215-492b-8e16-4ab6a7a172e8.png?v=1703059320"}
                            h4_1={"Nature's Nutrient Treasure"}
                            h4_2={"Fusion of Almonds, Cinnamon & Honey"}
                            h4_3={"Nature's Sweet Delight for All"}
                            h4_4={"Nourish Inside, Radiate Outside"}
                            p_1={"Packed with essential vitamins, minerals, and powerful antioxidants, our honey is a pure gift from nature. Every drop of our honey is a natural source of valuable nutrients that your body will love. From vitamins to minerals that support your well-being, to antioxidants that help your body thrive, our honey is a delicious way to embrace a healthier you."}
                            p_2={"Treats your cravings with our heavenly blend of almonds and honey – a match made in nature's paradise. Elevate your dessert game with this all-natural treat that's sure to win your heart. Each bite is a journey into the rich, nutty crunch of almonds embraced by the golden sweetness of pure honey. Let your taste buds dance and your soul rejoice in this delectable, healthy indulgence."}
                            p_3={"Indulge in the goodness of our pure, natural, and natural honey – a treat that's meant for every palate. From young to old, our honey spreads joy with each delightful drop. It's a taste that unites and brings smiles to all faces. Share the sweetness, share the happiness – it's a gift from nature that everyone can relish!"}
                            p_4={"Revitalize Your Body and Skin Naturally as the power of pure honey gently purifies your body, sweeping away harmful free radicals that can linger in your immune system. Unveil radiant skin that glows with health, reflecting the beauty that starts from within."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856935.png?v=1701943083"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856936.png?v=1701943083"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_14856934.png?v=1701943083"}
                        />} />
                    <Route path="collections/stevia/products/stevia-sugar-replacement"
                        element={<SteviaPages
                            name={"Stevia (Sugar Replacement) Concentrated Stevia Extract Liquid for Weight Loss and for Diabetic People"}
                            Name={"Stevia"}
                            price={289}
                            previousPrice={369}
                            save={"22%"}
                            info1={"Stevia: Nature's Delight"}
                            info2={"Your Sweet Solution for Wellness"}
                            info3={"Pure Sweetness, Zero Worries"}
                            T1Text={"Stevia: Nature's Delight:"}
                            T2Text={"Your Sweet Solution for Wellness:"}
                            T3Text={"Pure Sweetness, Zero Worries:"}
                            images={stevia}
                            Tab1={"Experience the magic of Stevia, a natural, zero-calorie sugar replacement. Perfect for weight-conscious individuals and diabetics, Stevia Extract Liquid is 100% natural with no side effects. It's a blood sugar champion, lowering levels in diabetes. Safe for all, even if you're allergic to other sweeteners."}
                            Tab3={"Stevia extract, glycerin, purified water"}
                            T1SubText={"Stevia is the natural magic for your convenient, and zero-calorie sugar replacement. Say goodbye to guilt and sugar spikes. Experience the sweetness of nature, right from your kitchen. It's the healthy choice, made easy!"}
                            T2SubText={"Stevia: your secret weapon for weight loss and diabetes management. Say goodbye to sugar's harmful effects. This zero-calorie, plant-based sweetener not only helps shed those extra kilos but also supports healthy blood sugar levels."}
                            T3SubText={"Our Stevia is 100% natural, delivering guilt-free sweetness with zero side effects. Say goodbye to artificial sweeteners and savor the pure, healthy sweetness of Stevia. Your taste buds will thank you, naturally!"}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stevia.png?v=1703076878"}
                            h4_1={"Sweet Relief for Diabetics"}
                            h4_2={"Natural Choice for All"}
                            h4_3={"Your All-Natural Sweetening Solution"}
                            p_1={"It is the natural sweetener, offers hope to those with diabetes."}
                            p_2={"It's safe for everyone, even those with sweetener allergies."}
                            p_3={"Elevate your recipes with guilt-free sweetness! Perfect for baking, cooking, and elevating beverages, it's your go-to sugar substitute."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stevia-2.png?v=1703077312"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stevia-1.png?v=1703077312"}
                            BoxImg3={'https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Stevia_9bcf9453-fa74-41ce-a619-0cb9c239def9.png?v=1703077312'}
                        />
                        } />
                    <Route
                        path="collections/shilajit/products/himalayan-shilajit-shilajeet-resin-bull-power-performance-booster-for-endurance-and-stamina-100-ayurvedic-silajit-for-man-woman"
                        element={<ShilajitPages
                            name={"himalayan-shilajit-shilajeet-resin-bull-power-performance-booster-for-endurance-and-stamina-100-ayurvedic-silajit-for-man-woman"}
                            Name={"Himalayan Shilajit Infused Honey"}
                            price={429}
                            previousPrice={579}
                            save={"26%"}
                            price1={879}
                            previousPrice1={1399}
                            save1={"37%"}
                            price2={1399}
                            previousPrice2={2699}
                            save2={"48%"}
                            info1={"Elevate your Stamina"}
                            info2={"Enhancing Cognitive Abilities Naturally"}
                            info3={"Boost Your Body's Defenses Naturall"}
                            info4={"Natural Anti-Aging Benefits"}
                            images={shilajit1}
                            Tab1={"Experience a natural boost in stamina with our Shilajit Resin, packed with an impressive 60% fulvic acid content. Elevate brain function, fortify your immune system, embrace anti-aging benefits, and foster healthy digestion. Discover the power of Shilajit, simplified for your wellness journey."}
                            Tab3={"Shilajit"}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Shilaji_Below.png?v=1711029351"}
                            h4_1={"Boost Your Body's Defenses Naturally"}
                            h4_2={"Natural Anti-Aging Benefits"}
                            h4_3={"Nourish Your Gut with Shilajit Resin"}
                            h4_4={"Elevate Your Stamina"}
                            p_1={"Shilajit resin, a gift from the Himalayas, enhances your immune system effortlessly. Elevate your body's natural defenses with this ancient wonder, handcrafted for you."}
                            p_2={"Our premium resin promotes natural anti-aging effects, revitalizing your body and mind. Embrace the power of Shilajit, trusted for generations in India, to rejuvenate your life. Say goodbye to signs of aging and hello to a brighter, more vibrant you."}
                            p_3={"Discover a centuries-old remedy that revitalizes your gut, promoting smooth digestion. Elevate your well-being with this ancient treasure, now within your reach. Say goodbye to digestive woes and embrace a life of vitality, all thanks to Shilajit Resin."}
                            p_4={"Farm Naturelle Shilajit Resin is packed with an incredible 60% fulvic acid content, specially formulated to supercharge your stamina levels. Say goodbye to fatigue and hello to sustained energy, all in a single, easy-to-use resin."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Water.png?v=1711107563"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Milk.png?v=1711107563"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Juice.png?v=1711107563"}
                        />}
                    />
                    <Route
                        path="collections/shilajit/products/himalayan-shilajit-infused-honey-300gm-help-improve-strength-stamina-for-men-women-shilajeet-gold-infused-honey"
                        element={<ShilajitHoneyPages
                            name={"Shilajit Honey | Help Improve Strength & stamina for men & women | Natural Shilajit Honey"}
                            Name={"Himalayan Shilajit Infused Honey"}
                            images={shilajit2}
                            info1={"Increases Stamina and Strength"}
                            info2={"Promotes Overall Health"}
                            info3={"Enhances Performance"}
                            info4={"Improves Joint Health"}
                            price={395}
                            previousPrice={879}
                            save={"55%"}
                            price1={620}
                            previousPrice1={1379}
                            save1={"55%"}
                            price2={1450}
                            previousPrice2={3219}
                            save2={"55%"}
                            price3={1775}
                            previousPrice3={3929}
                            save3={"55%"}
                            price4={2023}
                            previousPrice4={4279}
                            save4={"53%"}
                            price5={2320}
                            previousPrice5={5129}
                            save5={"55%"}
                            Tab1={"Experience the potent blend of nature's goodness with Farm Naturelle Pure Original Himalayan Shilajit Infused Honey. Enhance strength and stamina for both men and women. Enriched with the goodness of Shilajit Gold, this natural and Ayurvedic fusion helps improve overall holistic wellness."}
                            Tab3={"Shilajit, Cinnamon, Multiflora honey"}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/SJ_Template.png?v=1711020554"}
                            h4_1={"Increases Stamina and Strength"}
                            h4_2={"Promotes Overall Health"}
                            h4_3={"Improves Joint Health"}
                            h4_4={"Enhances Performance"}
                            p_1={"Natural compounds present in this elixir contribute to increased stamina and strength, making it an ideal choice for athletes and fitness enthusiasts."}
                            p_2={"Packed with essential minerals, vitamins, and antioxidants, this elixir promotes overall health by supporting immune function, aiding digestion, and improving metabolic processes"}
                            p_3={"Regular consumption can reduce inflammation, alleviate joint pain, and enhance joint flexibility, making it beneficial for individuals with joint issues or those seeking joint support."}
                            p_4={"Known for its performance-enhancing properties, this elixir improves cognitive function, mental alertness, and focus. It boosts energy levels, leading to better physical performance during workouts and mental performance in tasks requiring concentration."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/1.png?v=1711175810"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/2.png?v=1711175811"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/3.png?v=1711175810"}
                        />}
                    />
                    <Route
                        path="collections/gift/products/150x4-red-box-with-dipper"
                        element={<GiftingPages
                            name={"150x4 red box with dipper"}
                            Name={"150x4 Red Box with Dipper"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            images={Gift1}
                            price={1195}
                            previousPrice={1494}
                            save={"21%"}
                            value={"All plain Honey"}
                            price1={1250}
                            previousPrice1={1563}
                            save1={"20%"}
                            value1={"Infused Honey & Plain Honey"}
                            price2={1250}
                            previousPrice2={1563}
                            save2={"20%"}
                            value2={"1 Plain + 1 infused + 2 tea"}
                            price3={1395}
                            previousPrice3={1744}
                            save3={"20%"}
                            value3={"2 Nuts in cinnamon Honey + 2 (any honey)"}
                            T1Text={"Festivals & Holidays:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Corporate gifting:"}
                            T1SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul. Choose teas and honey that energize and uplift, marking their journey with a touch of sweetness."}
                            T3SubText={" Show sincere appreciation to your clients & employees with unique teas & honeys. Go beyond the ordinary with personalized gift boxes featuring branding, leaving a lasting impression. Surprise your loved ones: Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            key={"gift"}
                        />
                        } />
                    <Route
                        path="collections/gift/products/blue-foliage-box-with-dipper-spoon-and-pepper-bag"
                        element={<GiftingPages
                            name={"Blue Foliage Box with Dipper/ Spoon and pepper bag"}
                            Name={"Blue Foliage Box with Dipper/ Spoon and pepper bag"}
                            images={Gift2}
                            price={1650}
                            previousPrice={2063}
                            save={"21%"}
                            value={"180x6 Honey"}
                            price1={1650}
                            previousPrice1={2063}
                            save1={"21%"}
                            value1={"3 Honey + 3 Green tea"}
                            price2={1650}
                            previousPrice2={2063}
                            save2={"21%"}
                            value2={"All 6 green teas"}
                            price3={1650}
                            previousPrice3={2063}
                            save3={"21%"}
                            value3={"180g x 3 Honey + 3 Green tea"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                        />
                        }
                    />
                    <Route
                        path="collections/gift/products/red-foliage-box-with-dipper-spoon-and-pepper-bag"
                        element={<GiftingPages
                            name={"Red Foliage Box with Dipper/ Spoon and pepper bag"}
                            Name={"Red Foliage Box with Dipper/ Spoon and pepper bag"}
                            images={Gift3}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            price={1750}
                            previousPrice={2188}
                            save={"20%"}
                            value={"300g x 2 Honey + 3 Green teas"}
                            price1={1750}
                            previousPrice1={2188}
                            save1={"20%"}
                            value1={"2 Big Green teas + 180g x 3 honey"}
                            price2={1895}
                            previousPrice2={2369}
                            save2={"20%"}
                            value2={"300g x 2 Nuts Infused Honey + 3 small honey/tea"}
                            price3={1550}
                            previousPrice3={1938}
                            save3={"20%"}
                            value3={"2 Mugs + 3 Raw Honey with Dipper"}
                            price4={1550}
                            previousPrice4={1938}
                            save4={"20%"}
                            value4={"2 Mugs + 3 Green teas + Spoon"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />
                        }
                    />
                    <Route
                        path="collections/gift/products/775g x 1 Kraft Wooden Box with Dipper Plain Or Infused Honey Or Nuts in cinnamon honey"
                        element={<GiftingPages
                            name={"775g x 1 Kraft Wooden Box with Dipper Plain Or Infused Honey Or Nuts in cinnamon honey"}
                            Name={"775g x 1 Kraft Wooden Box with Dipper Plain Or Infused Honey Or Nuts in cinnamon honey"}
                            price={959}
                            previousPrice={1199}
                            save={"21%"}
                            value={"plain Honey"}
                            price1={1059}
                            previousPrice1={1324}
                            save1={"20%"}
                            value1={"Infused Honey"}
                            price2={1359}
                            previousPrice2={1699}
                            save2={"20%"}
                            value2={"Nuts in Infused Honey"}
                            images={Gift4}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/400g-x-1-in-kraft-wooden-box-with-dipper-plain-honey"
                        element={<GiftingPages
                            name={"400g x 1 in kraft Wooden Box with Dipper (Plain honey)"}
                            Name={"400g x 1 in kraft Wooden Box with Dipper (Plain honey)"}
                            price={795}
                            previousPrice={994}
                            save={"21%"}
                            value={"400g x 1 raw honey in kraft Wooden Box"}
                            price1={799}
                            previousPrice1={999}
                            save1={"20%"}
                            value1={"400g x 1 infused honey in kraft Wooden Box"}
                            images={Gift5}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/55g-x-7-all-infused-honey-spoon-a-different-flavor-for-each-day-of-the-week"
                        element={<GiftingPages
                            name={"55g x 7 (All infused honey) + Spoon A different flavor for each day of the week"}
                            Name={"55g x 7 (All infused honey) + Spoon A different flavor for each day of the week"}
                            price={795}
                            previousPrice={994}
                            save={"21%"}
                            images={Gift6}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/750gx2-in-jute-bag-with-dipper"
                        element={<GiftingPages
                            name={"750gx2 in jute bag with dipper"}
                            Name={"750gx2 in jute bag with dipper"}
                            price={1475}
                            previousPrice={1844}
                            save={"21%"}
                            price1={1595}
                            previousPrice1={1994}
                            save1={"20%"}
                            price2={1550}
                            previousPrice2={1938}
                            save2={"20%"}
                            value={"Plain Honey"}
                            value1={"Infused Honey"}
                            value2={"Nuts in Infused Honey"}
                            images={Gift7}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/300gx1-in-jute-bag-with-dipper"
                        element={<GiftingPages
                            name={"300gx1 in jute bag with dipper"}
                            Name={"300gx1 in jute bag with dipper"}
                            price={615}
                            previousPrice={769}
                            save={"21%"}
                            price1={665}
                            previousPrice1={831}
                            save1={"20%"}
                            price2={715}
                            previousPrice2={894}
                            save2={"20%"}
                            value={"Plain Honey"}
                            value1={"Infused Honey"}
                            value2={"Nuts in Infused Honey"}
                            images={Gift8}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/350g-x-3-in-jute-bag-with-dipper"
                        element={<GiftingPages
                            name={"350g x 3 in jute bag with dipper"}
                            Name={"350g x 3 in jute bag with dipper"}
                            images={Gift9}
                            price={1375}
                            previousPrice={1719}
                            save={"21%"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/300g-x-2-in-jute-bag-with-dipper"
                        element={<GiftingPages
                            name={"300gx2 in jute bag with dipper"}
                            Name={"300gx2 in jute bag with dipper"}
                            price={965}
                            previousPrice={1206}
                            save={"20%"}
                            price1={1065}
                            previousPrice1={1331}
                            save1={"20%"}
                            price2={1170}
                            previousPrice2={1463}
                            save2={"20%"}
                            value={"300gx2 raw honey in jute bag with dipper"}
                            value1={"300gx2 Infused honey in jute bag with dipper"}
                            value2={"300gx2 Nut in Infused honey in jute bag with dipper"}
                            images={Gift10}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/775g-x-1-with-dipper-in-embroidered-jute-potli"
                        element={<GiftingPages
                            name={"775g x 1 with dipper in embroidered jute potli"}
                            Name={"775g x 1 with dipper in embroidered jute potli"}
                            price={889}
                            previousPrice={1111}
                            save={"20%"}
                            images={Gift11}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/400g-x-1-with-dipper-in-embroidered-jute-potli"
                        element={<GiftingPages
                            name={"400g x 1 with dipper in embroidered jute potli"}
                            Name={"400g x 1 with dipper in embroidered jute potli"}
                            price={600}
                            previousPrice={750}
                            save={"20%"}
                            images={Gift12}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/350-g-x-3-red-box-with-dipper-infuser"
                        element={<GiftingPages
                            name={"350 g x 3 red box with dipper/infuser"}
                            Name={"350 g x 3 red box with dipper/infuser"}
                            images={Gift13}
                            price={1350}
                            previousPrice={1688}
                            save={"21%"}
                            price1={1550}
                            previousPrice1={1938}
                            save1={"20%"}
                            price2={1790}
                            previousPrice2={2238}
                            save2={"20%"}
                            price3={1790}
                            previousPrice3={2238}
                            save3={"20%"}
                            value={"Any 3 types of Honey + Dipper"}
                            value1={"Any 2 Honey + Tea + Dipper + Infuser"}
                            value2={"All 3 nuts in infused honey + Dipper"}
                            value3={"1 Honey + 1 Nuts in honey + 1 Tea + 1 Dipper"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/250gx2-blue-box-with-dipper"
                        element={<GiftingPages
                            name={"250gx2 blue box with dipper"}
                            Name={"250gx2 blue box with dipper"}
                            images={Gift14}
                            price={995}
                            previousPrice={1244}
                            save={"21%"}
                            price1={1195}
                            previousPrice1={1494}
                            save1={"20%"}
                            price2={1195}
                            previousPrice2={1494}
                            save2={"20%"}
                            price3={1290}
                            previousPrice3={1613}
                            save3={"20%"}
                            value={"Any 2 type of honey + dipper"}
                            value1={"1 Honey + 1 Tea + Dipper + infuser"}
                            value2={"1 Honey + 1 Nuts in infused honey + 1 dipper"}
                            value3={"Both Nuts in infused honey + Dipper"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/40g-x-10-honey"
                        element={<GiftingPages
                            name={"40g x 10 honey"}
                            Name={"40g x 10 honey"}
                            images={Gift15}
                            price={850}
                            previousPrice={1063}
                            save={"21%"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/gift-the-finest-honeys-9-bottles"
                        element={<GiftingPages
                            name={"55g x9 Any combination of plain & infused honey"}
                            Name={"55g x9 Any combination of plain & infused honey"}
                            images={Gift16}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/red-tulip-box-1"
                        element={<GiftingPages
                            name={"red-tulip-box-1"}
                            Name={"red-tulip-box-1"}
                            images={Gift17}
                            price={1595}
                            previousPrice={1994}
                            save={"21%"}
                            price1={1695}
                            previousPrice1={2119}
                            save1={"20%"}
                            price2={1795}
                            previousPrice2={2244}
                            save2={"20%"}
                            price3={1650}
                            previousPrice3={2063}
                            save3={"20%"}
                            price4={2190}
                            previousPrice4={2738}
                            save4={"20%"}
                            value={"All plain honey"}
                            value1={"Infused honey or tea + 2 Plain honey"}
                            value2={"2 Plain honey or tea + 1 nuts in infused honey"}
                            value3={"1 plain + 1 infused + 1 tea"}
                            value4={"All 3 nuts in infused honey"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/gift/products/chocolate-tulip-box"
                        element={<GiftingPages
                            name={"Chocolate Tulip Box with Dipper and pepper bag"}
                            Name={"Chocolate Tulip Box with Dipper and pepper bag"}
                            images={Gift18}
                            price={1395}
                            previousPrice={1744}
                            save={"21%"}
                            price1={1395}
                            previousPrice1={1744}
                            save1={"21%"}
                            price2={1595}
                            previousPrice2={1994}
                            save2={"20%"}
                            price3={1395}
                            previousPrice3={1744}
                            save3={"20%"}
                            price4={1395}
                            previousPrice4={1744}
                            save4={"20%"}
                            price5={1790}
                            previousPrice5={2238}
                            save5={"20%"}
                            value={"Both plain Honey"}
                            value1={"1 infused honey/tea + 1 plain honey"}
                            value2={"1 plain + 1 Nuts in infused honey"}
                            value3={"Both infused honey"}
                            value4={"1 infused + 1 tea"}
                            value5={"Both with nuts in infused honey"}
                            info1={"Festivals & Holidays"}
                            info2={"Special Occasions"}
                            info3={"Corporate gifting"}
                            info4={"Surprise your loved ones"}
                            T1Text={"Surprise your loved ones:"}
                            T2Text={"Special Occasions:"}
                            T3Text={"Festivals & Holidays:"}
                            T1SubText={" Express your care and appreciation with a thoughtful gesture, no occasion needed. Show you're thinking of them with a gift that promotes relaxation and self-care."}
                            T2SubText={" Celebrate milestones such as Birthdays & anniversaries, achievements such as graduation with a gift that nourishes both body and soul."}
                            T3SubText={" Ignite the festive spirit or ring in the holidays with vibrant tea blends, Masala Chai, and flavorful honeys. Spread joy and warmth with a thoughtful gift that embodies the spirit of giving."}
                        />}
                    />
                    <Route
                        path="collections/hing/products/hing"
                        element={<HingPages
                            images={Hingimg}
                            name={"100% Pure and Natural Heeng | Best Hing (Asafoetida from Kazakhthan)"}
                            Name={"Hing"}
                            info1={"Experience the Finest Hing"}
                            info2={"Boosts Your Immunity & Breath of Life"}
                            info3={"Gentle on Tummies, Strong on Digestion"}
                            price={395}
                            previousPrice={595}
                            save={"34% off"}
                            price1={649}
                            previousPrice1={1095}
                            save1={"41%"}
                            Tab1={"Experience the Finest Hing for Your Well-being- hand-pounded, natural, and expertly packed in dual layers to preserve its rich flavor over time. Enhance your immune and respiratory systems while aiding digestion. Indulge in the captivating aroma and robust taste."}
                            T1Text={"Experience the Finest Hing:"}
                            T2Text={"Boosts Your Immunity & Breath of Life:"}
                            T3Text={"Gentle on Tummies, Strong on Digestion:"}
                            T1SubText={"Crafted meticulously by hand, Farm Naturelle Hing embraces its natural essence. Double-layered packaging ensures enduring flavor and lasting taste. Your culinary creations deserve nothing less than the world's finest Hing, cherished for its authenticity and robustness."}
                            T2SubText={"Give your health a natural edge with Hing. This remarkable spice empowers your body's defense and enriches your respiratory well-being. Enjoy the power of improved immunity and easier breathing, all thanks to the goodness of Hing. Discover a simpler path to a healthier you!"}
                            T3SubText={"Hing, our culinary ally, eases tummy woes by aiding digestion. Like a caring friend, it helps break down food, curbing discomfort. Experience the joy of seamless mealtimes as Hing takes the edge off digestion, so you can relish every bite without worry."}
                            Tab3={"Hing"}
                            extraImage={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Hing.png?v=1703077544"}
                            h4_3={"Introducing the Aromatic Essence of Hing:"}
                            p_3={"Let the magic of Hing transform your dishes effortlessly."}
                            BoxImg1={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame_7104dc86-9760-460a-9f9b-9bc17e87e985.png?v=1703077617"}
                            BoxImg2={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-1_6e197100-560f-4f81-915a-abb5ed288305.png?v=1703077618"}
                            BoxImg3={"https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Frame-2_e86bcc6a-da91-4351-bb35-1cbb716a8b8c.png?v=1703077616"}
                            key={"Hing"}
                        />}
                    />
                    <Route
                        path="collections/wellness-juice"
                        element={<WellnessJuice />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
