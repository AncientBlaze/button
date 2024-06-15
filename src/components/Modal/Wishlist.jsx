/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import BackdropHeart from "../Backdrop/BackdropHeart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback,useState } from "react";
import { remove } from "../../store/wishSlice";


const IndexHeart = (({ handleclose }) => {
    const dispatch = useDispatch();
    const { wishlistItems } = useSelector((state) => state?.wishlists);
    const [searchInput, setSearchInput] = useState("");

    const handleRemove = useCallback(
        (id) => {
            dispatch(remove(id));
            localStorage.removeItem(`liked-${id}`);
            window.location.reload();
        },
        [dispatch],
    );

    const handleSearchInputChange = useCallback((e) => {
        setSearchInput(e.target.value.toLowerCase());
    }, []);

    const filteredWishlistItems = wishlistItems.filter((item) =>
        item.title.toLowerCase().includes(searchInput),
    );

    return (
        <BackdropHeart onClick={(e) => e.preventDefault()}>
            <motion.div className="w-full h-full m-auto flex cursor-default bg-opacity-50 bg-black px-40 py-10 overflow-y-auto">
                <div className="w-full h-full bg-white overflow-auto">
                    <div className="text-sm p-1 px-2 w-full h-auto bg-[#333333] flex gap-2 justify-end items-start text-white font-DM_sans">
                        <Link to="/account/login">
                            <button>Login</button>
                        </Link>
                        <div>
                            <button id="but" onClick={handleclose}>
                                X
                            </button>
                        </div>
                    </div>
                    <div className="text-3xl font-medium px-3 py-5">
                        <p>My wishlist</p>
                    </div>
                    <div className="w-full px-4">
                        <div className="w-full px-4 flex justify-center items-center border">
                            <div className="w-4 cursor-pointer">
                                <svg
                                    width="15"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    aria-hidden="true"
                                >
                                    <g fill="none" fillRule="evenodd">
                                        <g
                                            transform="translate(1 1)"
                                            stroke="currentColor"
                                        >
                                            <circle
                                                cx="10.364"
                                                cy="10.364"
                                                r="10.364"
                                            ></circle>
                                            <path
                                                strokeLinecap="square"
                                                d="m18 18 5.777 5.788"
                                            ></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <input
                                className="w-full h-10 px-3 py-5 outline-none placeholder:text-sm text-sm"
                                placeholder="Search item"
                                value={searchInput}
                                onChange={handleSearchInputChange}
                            />
                        </div>
                        <div className="w-full h-[1px] bg-[#333333] my-2 opacity-20"></div>

                        {filteredWishlistItems.length ? (
                            <div className="grid grid-cols-3 gap-8">
                                {filteredWishlistItems.map(
                                    ({
                                        id,
                                        title,
                                        ImageUrl,
                                        previousPrice,
                                        content,
                                    }) => (
                                        <div key={id} className="my-2 mx-2">
                                            <div className="w-full flex justify-center items-center flex-col py-2 relative">
                                                <img
                                                    className="h-60"
                                                    src={ImageUrl}
                                                    alt={title}
                                                />
                                                <div>
                                                    <h3 className="text-2xl font-bold">
                                                        {title}
                                                    </h3>
                                                    <p>Rs. {previousPrice}</p>
                                                    <p className="py-2">
                                                        Rs. {content}
                                                    </p>
                                                    <p
                                                        className="absolute top-1 right-8 text-2xl cursor-pointer"
                                                        onClick={() =>
                                                            handleRemove(id)
                                                        }
                                                    >
                                                        X
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-10 h-auto">
                                No Products!
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </BackdropHeart>
    );
});

export default IndexHeart;
