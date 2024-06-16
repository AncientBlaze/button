/* eslint-disable react/prop-types */
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../src/store/cartSlice";
import { addToWishlist, remove } from "../src/store/wishSlice";

const CardComponent2 = ({
    id,
    ImageUrl,
    PlaceHolder,
    title,
    PreviousPrice,
    content,
    save,
    hidden = "",
}) => {
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

    const handleLike = (e) => {
        if (isLiked) {
            e.preventDefault();
            e.stopPropagation();
            removeFromWish(id);
            setIsLiked((prev) => !prev);
        } else {
            e.preventDefault();
            e.stopPropagation();
            addToWish({ id, title, ImageUrl, content });
            setIsLiked((prev) => !prev);
        }
    };

    const likeIcon = isLiked ? (
        <IoIosHeart color="black" size={28} onClick={handleLike} />
    ) : (
        <IoIosHeartEmpty size={28} onClick={handleLike} />
    );

    const buttonClasses =
        "bg-white border border-[#006944] group-hover:bg-[#006944] group-hover:text-white text-[#006944] h-[45px] w-[220px] rounded-xl text-lg mb-9 mt-5 transition-colors ease-linear duration-100 font-semibold";

    return (
        <div className="h-auto rounded-3xl bg-white shadow-lg hover:shadow-md font-jost overflow-hidden group transition-all ease-linear duration-100 relative mx-2">
            <div className="relative h-[50%] w-full cursor-pointer">
                <img
                    className="h-full w-full object-cover"
                    src={ImageUrl}
                    alt=""
                />
                <div
                    className={`absolute top-0 -translate-x-1/2 left-10 h-full w-full z-10 ${hidden}`}
                >
                    <span className="text-sm bg-[#DF6857] p-1 rounded-full text-white font-jost font-light px-2">
                        Bestseller
                    </span>
                </div>
                <div className="absolute top-3 right-3 z-10">{likeIcon}</div>
                <img
                    className={`h-full w-full bg-center bg-contain absolute top-0 left-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out`}
                    src={PlaceHolder}
                    alt=""
                />
            </div>
            <div className="h-[50%] w-full px-1">
                <h2 className="text-lg text-wrap text-left font-bold text-black py-2">
                    {title}
                </h2>
                <div className="flex text-sm justify-start gap-2 items-center py-1">
                    <div className="line-through text-[#B0B0B0]">
                        Rs.{PreviousPrice}.00
                    </div>
                    <div className="font-semibold text-sm">Rs.{content}.00</div>
                    <div className="text-xs h-auto px-2 py-1 border border-transparent rounded-md text-white font-semibold text-[16px] bg-red-600 group-hover:border group-hover:border-[#006944]">
                        Save {save}%
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className={buttonClasses}
                        onClick={() =>
                            addToCart({ id, title, ImageUrl, content })
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

CardComponent2.propTypes = {
    ImageUrl: PropTypes.string.isRequired,
    PlaceHolder: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired,
    PreviousPrice: PropTypes.number.isRequired,
    save: PropTypes.number.isRequired,
    hidden: PropTypes.string,
};
export default CardComponent2;
