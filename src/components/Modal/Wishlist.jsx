/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import BackdropHeart from "../Backdrop/BackdropHeart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { add } from "../../store/cartSlice";
import { remove } from "../../store/wishSlice";


const IndexHeart = (({ handleclose }) => {
    const dispatch = useDispatch();
    const { wishlistItems } = useSelector((state) => state?.wishlists);
    const [searchInput, setSearchInput] = useState("");

    const addToCart = useCallback(
        (product) => {
            dispatch(add({ ...product, quantity: 1 }));
        },
        [dispatch],
    );

    const handleRemove = useCallback(
        (id) => {
            dispatch(remove(id));
            localStorage.removeItem(`liked-${id}`);
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
                                        PreviousPrice,
                                        content,
                                        save
                                    }) => (
                                        <div key={id} className="w-full">
                                            <div className="w-60 flex justify-center items-center flex-col relative border">
                                                <img
                                                    className="h-60"
                                                    src={ImageUrl}
                                                    alt={title}
                                                />
                                                <div>
                                                    <h3 className="text-2xl font-bold">
                                                        {title}
                                                    </h3>
                                                    <div className="py-2 font-semibold flex space-x-2">
                                                        <p className="line-through text-red-700">Rs. {PreviousPrice}</p>
                                                        <p>Rs. {content}</p>
                                                        <p className="hidden">{save}</p>
                                                    </div>
                                                    <center>
                                                        <div
                                                            className="py-2"
                                                            onClick={() =>
                                                                setTimeout(() => {
                                                                    handleRemove(id);
                                                                    window.location.reload();
                                                                }, 2000)
                                                            }
                                                        >

                                                            <button
                                                                onClick={() =>
                                                                    addToCart({
                                                                        id: id,
                                                                        title: title,
                                                                        ImageUrl: ImageUrl,
                                                                        PreviousPrice: PreviousPrice,
                                                                        content: content,
                                                                        quantity: 1,
                                                                        save: save
                                                                    })
                                                                }
                                                                className="bg-[#333333] text-white px-3 py-2 rounded">Move to cart</button>
                                                        </div
                                                        >
                                                    </center>
                                                    <p
                                                        className="absolute top-0 right-0 text-2xl cursor-pointer"
                                                        onClick={() => {
                                                            if (localStorage.getItem(`liked-${id}`)) {
                                                                handleRemove(id)
                                                                window.location.reload()
                                                            }
                                                        }
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