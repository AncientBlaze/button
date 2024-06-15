import PropTypes from "prop-types";

const Card = ({ image, text, items }) => {
    return (
            <div className="w-auto h-auto flex flex-col cursor-pointer">
                <img
                    className="h-full w-full object-cover"
                    src={image}
                    alt=""
                />
                <p className="text-center text-[18px] font-semibold">{text}</p>
                <p className="text-center text-gray-500 font-light pt-5">
                    {items} items
                </p>
            </div>
        );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
};

export default Card;
