import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";

const CardComponent = ({
    ImageUrl,
    PlaceHolder,
    title,
    PreviousPrice,
    content,
    save,
}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        return setIsLiked(!isLiked);
    };

    const likeIcon = isLiked ? (
        <IoIosHeart size={28} onClick={handleLike} />
    ) : (
        <IoIosHeartEmpty size={28} onClick={handleLike} />
    );

    const priceClasses = "text-[18px] font-jost mx-2 flex items-center gap-3";
    const saveClasses =
        "bg-red-800 group-hover:bg-[#006944] h-[25px] w-20 rounded-lg text-[12px] flex justify-center items-center mx-2 font-semibold text-white";
    const buttonClasses =
        "bg-white border border-[#006944] group-hover:bg-[#006944] group-hover:text-white text-[#006944] h-[45px] w-[220px] rounded-md text-lg mb-9 mt-5 transition-colors ease-linear duration-100";

    return (
        <div className="h-[470px] w-[260px] rounded-3xl bg-white shadow-md hover:shadow-sm font-jost overflow-hidden group transition-all ease-linear duration-100 relative ml-2 mb-2">
            <div className="relative h-[55%] w-full cursor-pointer">
                <img
                    className="h-full w-full bg-center bg-contain"
                    src={ImageUrl}
                    alt=""
                />
                <div className="absolute top-3 left-3 h-full w-full z-10">
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
            <div className="h-1/2 w-full p-2">
                <h2 className="text-xl text-nowrap font-bold m-2">{title}</h2>
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
                    <button className={buttonClasses}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

CardComponent.propTypes = {
    ImageUrl: PropTypes.string.isRequired,
    PlaceHolder: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.number.isRequired,
    PreviousPrice: PropTypes.number.isRequired,
    save: PropTypes.number.isRequired,
};
export default CardComponent;
