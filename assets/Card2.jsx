import PropTypes from "prop-types";

const Card = ({ image }) => {
    return (
            <div className="w-[285px] h-[380] flex flex-col cursor-pointer">
                <img
                    className="h-full w-full object-cover"
                    src={image}
                    alt=""
                />
            </div>
        );
};

Card.propTypes = {
    image: PropTypes.string.isRequired
};

export default Card;
