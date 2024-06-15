/* eslint-disable react/prop-types */

import Backdrop from "../Backdrop/Backdrop";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    remove,
} from "../../store/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";

function Cart({ handleClose }) {
    const dispatch = useDispatch();
    // Initialize as an empty array
    const cartProducts = useSelector((state) => state?.cart?.cartItems);
    console.log(cartProducts);
    return (
        <>
            <Backdrop onClick={handleClose}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full h-full m-auto px-5 rounded-xl items-center py-10 cursor-default relative"
                >
                    {cartProducts?.length !== 0 && (
                        <button className="cursor-pointer absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#006944] text-white px-4 py-2 rounded w-3/4">
                            Checkout
                        </button>
                    )}
                    {cartProducts?.length !== 0 ? (
                        cartProducts?.map((cartProduct) => (
                            <div
                                key={cartProduct.id}
                                className="w-full h-auto flex flex-col items-center justify-center relative font-semibold"
                            >
                                <div className="w-full h-full flex">
                                    <div className="w-full h-full">
                                        <div className="w-full h-full flex items-start justify-start max-h-20">
                                            <img
                                                className="h-20"
                                                src={cartProduct.ImageUrl}
                                                alt={cartProduct.title}
                                            />
                                            <div>
                                                <p className="text-start px-1">
                                                    {cartProduct.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-20 flex items-end justify-center">
                                        <div className="w-full flex flex-col">
                                            <p className="text-center pl-5 text-xl">
                                                Rs.
                                                {cartProduct.content * cartProduct.quantity}
                                            </p>
                                            <div className="w-full flex justify-center items-center">
                                                <RiDeleteBin5Line
                                                    className="cursor-pointer"
                                                    size={20}
                                                    color="red"
                                                    onClick={() =>
                                                        dispatch(
                                                            remove(
                                                                cartProduct.id,
                                                            ),
                                                        )
                                                    }
                                                />
                                                <button
                                                    className="border px-3 size-10"
                                                    onClick={() => {
                                                        dispatch(
                                                            decreaseQuantity(
                                                                cartProduct.id,
                                                            ),
                                                        );
                                                    }}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <p className="px-3 border py-2 size-10 text-center">
                                                    {cartProduct.quantity}
                                                </p>
                                                <button
                                                    className="border px-3 size-10"
                                                    onClick={() => {
                                                        dispatch(
                                                            increaseQuantity(
                                                                cartProduct.id,
                                                            ),
                                                        );
                                                    }}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex-col text-center">
                            <div className="w-full h-full flex justify-center items-center">
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0362/6912/9860/t/6/assets/1659690328.png?v=1659690329"
                                    alt="hopping cart"
                                />
                            </div>
                            <p className="text-3xl">
                                Your shopping cart is empty
                            </p>
                            <Link to="/collections">
                                <button className="text-blue-500">
                                    continue shopping
                                </button>
                            </Link>
                        </div>
                    )}
                    <button
                        className="fixed top-2 right-2 text-gray-500"
                        onClick={handleClose}
                    >
                        X
                    </button>
                </div>
            </Backdrop>
        </>
    );
}

export default Cart;
