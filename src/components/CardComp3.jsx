import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { addToWishlist, remove } from "../store/wishSlice";

const CardComponent2 = ({ id, ImageUrl, title, PreviousPrice, content, save, hidden }) => {
    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch(add(product));
    };
    const addToWish = (product) => {
        dispatch(addToWishlist(product));
    };
    const removeFromWish = (id) => {
        dispatch(remove(id));
    };
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = (e) => {
        if (isLiked) {
            e.stopPropagation();
            removeFromWish(id);
            setIsLiked((prev) => !prev);

        } else {
            e.stopPropagation();
            addToWish({ id, title, ImageUrl, content });
            setIsLiked((prev) => !prev);
        }
    };
    const likeIcon = isLiked ? (
        <IoIosHeart size={28} onClick={handleClick} />
    ) : (
        <IoIosHeartEmpty size={28} onClick={handleClick} />
    );

    const priceClasses =
        "text-[18px] font-jost mx-2 flex items-center gap-3 py-2";
    const saveClasses =
        "group-hover:bg-[#006944] group-hover:text-white h-[30px] w-32 text-[16px] flex justify-center items-center mx-auto font-semibold text-[#006944] uppercase my-auto border border-[#006944]";
    const buttonClasses =
        "bg-white border border-[#006944] group-hover:bg-[#006944] group-hover:text-white text-[#006944] h-[45px] w-[220px] rounded-xl text-lg mb-9 mt-5 transition-colors ease-linear duration-100 font-semibold";

    return (
        <div className="h-[470px] w-[260px] rounded-3xl bg-gray-100 shadow-md hover:shadow-sm font-jost overflow-hidden group transition-all ease-linear duration-100 relative ml-2 mb-2">
            <div className="relative h-[55%] w-full  cursor-pointer">
                <img
                    className="h-full w-full object-cover"
                    src={ImageUrl}
                    alt=""
                />
                <div
                    className={`absolute top-3 left-3 h-full w-full z-10 ${hidden}`}
                >
                    <span className="text-sm bg-[#DF6857] p-1 rounded-full text-white font-jost font-light px-2">
                        Bestseller
                    </span>
                </div>
                <div className="absolute top-3 right-3 z-10">{likeIcon}</div>
            </div>
            <div className="h-full w-full px-5">
                <h2 className="text-lg text-wrap text-gray-600 m-2">{title}</h2>
                <div className="h-[1px] w-full bg-[#B0B0B0] my-2"></div>
                <p className={priceClasses}>
                    <span className="line-through text-[#B0B0B0]">
                        Rs.{PreviousPrice}.00
                    </span>
                    <span className="font-semibold text-sm">
                        Rs.{content}.00
                    </span>
                </p>
                <div className={saveClasses}>Save {save}%</div>
                <div className="flex justify-center items-center">
                    <button
                        className={buttonClasses}
                        onClick={() => addToCart({id, title, ImageUrl, content, PreviousPrice, save })}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

CardComponent2.propTypes = {
    id: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired,
    PreviousPrice: PropTypes.number.isRequired,
    save: PropTypes.number.isRequired,
    hidden: PropTypes.string,
};
export default CardComponent2;

