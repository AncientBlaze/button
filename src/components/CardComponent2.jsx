import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";
import { add } from "../store/cartSlice";
import { addToWishlist, remove } from "../store/wishSlice";
import { useDispatch } from "react-redux";

const CardComponent2 = ({
    id,
    ImageUrl,
    PlaceHolder,
    title,
    PreviousPrice,
    content,
    save,
    hidden,
}) => {
    const dispatch = useDispatch();

    const [isLiked, setIsLiked] = useState(
        () => localStorage.getItem(`liked-${id}`) === "true",
    );

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToWishlist({ id, title, ImageUrl, content }));
        setIsLiked(true);
        localStorage.setItem(`liked-${id}`, "true");
    };

    const handleUnlike = (e) => {
        e.preventDefault();
        dispatch(remove(id));
        setIsLiked(false);
        if (localStorage.getItem(`liked-${id}`)) {
            localStorage.removeItem(`liked-${id}`);
            setIsLiked(false);
        }
    };

    // Improved likeIcon rendering with direct onClick handlers
    const likeIcon = isLiked ? (
        <IoIosHeart color="black" size={28} onClick={handleUnlike} />
    ) : (
        <IoIosHeartEmpty size={28} onClick={handleLike} />
    );

    const priceClasses =
        "text-[18px] font-jost mx-2 flex items-center gap-3 py-2";
    const saveClasses =
        "group-hover:bg-[#006944] group-hover:text-white h-[30px] w-32 text-[16px] flex justify-center items-center mx-auto font-semibold text-[#006944] uppercase my-auto border border-[#006944]";
    const buttonClasses =
        "bg-white border border-[#006944] group-hover:bg-[#006944] group-hover:text-white text-[#006944] h-[45px] w-[220px] rounded-xl text-lg mb-9 mt-5 transition-colors ease-linear duration-100 font-semibold";

    return (
        <div className="h-[470px] w-[260px] rounded-3xl bg-gray-100 shadow-md hover:shadow-sm font-jost overflow-hidden group transition-all ease-linear duration-100 relative ml-2 mb-2">
            <div className="relative h-[55%] w-full cursor-pointer">
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

                <img
                    className={`h-full w-full bg-center bg-contain absolute top-0 left-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out`}
                    src={PlaceHolder}
                    alt=""
                />
            </div>
            <div className="h-full w-full px-5">
                <h2 className="text-lg text-gray-600 m-2 text-nowrap">{title}</h2>
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
                        onClick={(e) => {
                            e.preventDefault(),
                                // eslint-disable-next-line no-undef
                                dispatch(add({ id, title, content, ImageUrl }));
                        }}
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
    PlaceHolder: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired,
    PreviousPrice: PropTypes.number.isRequired,
    save: PropTypes.number.isRequired,
    hidden: PropTypes.string,
};
export default CardComponent2;
