
import Nav from "./components/header/Nav.jsx";
import Sticky from "react-stickynode";
import Carousel from "./components/Carousel.jsx";
import Carouself from "./components/Carousel_footer.jsx";
import List from "./components/ListOfItems.jsx";
import DivComp from "./components/NextDiv.jsx";
import ShopByProducts from "./components/ShopByProducts.jsx";
import Footer from "./components/footer/Footer.jsx";
import CarouselComponent from "./components/Slider.jsx";
import CarouselComponent2 from "./components/Slider2.jsx";
import CarouselComponent3 from "./components/Slider3.jsx";
import CarouselComponent4 from "./components/Slider4.jsx";
import Organic from "./components/Organic.jsx";
import GiftComponent from "./components/Gift.jsx";
import Review from "./components/Review.jsx";
import Video from "./components/Video.jsx";
import ScrollToTop from "../assets/ScrolltoTop.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <Provider store={store}>
            <div className="w-full h-auto bg-[#F2F7E3]">
                <nav>
                    <Sticky top={0} innerZ={20}>
                        <Nav />
                    </Sticky>
                </nav>
                <main>
                    <ToastContainer />
                    <Carousel />
                    <Carouself />
                    <List />
                    <DivComp />
                    <ShopByProducts />
                    <CarouselComponent />
                    <CarouselComponent2 />
                    <CarouselComponent3 />
                    <Organic />
                    <CarouselComponent4 />
                    <GiftComponent />
                    <Video />
                    <Review />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
            <ScrollToTop />
        </Provider>
    );
};

export default App;
