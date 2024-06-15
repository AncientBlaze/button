import propTypes from "prop-types";

function ReviewSlides({ imageUrl, name, text }) {
    return (
        <div className="!w-96 bg-white px-10 h-[430px]">
            <div className="flex items-center py-5">
                <img src={imageUrl} alt="image" />
                <p className="px-3 font-semibold font-jost text-lg">{name}</p>
            </div>
            <div className="w-full bg-gray-200 h-[1px]"></div>
            <div className="w-full">
                <div className="w-full">
                    <div className="flex py-3">
                        <span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="gold"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </span>
                        <span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="gold"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </span>
                        <span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="gold"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </span>
                        <span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="gold"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </span>
                        <span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="gold"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="w-full py-3 font-jost text-lg font-semibold">
                    {text}
                </div>
            </div>
        </div>
    );
}

ReviewSlides.propTypes = {
    imageUrl: propTypes.string,
    name: propTypes.string,
    text: propTypes.string,
};
export default ReviewSlides;
