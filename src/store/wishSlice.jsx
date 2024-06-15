import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    wishlistItems: localStorage.getItem("wishlistItems")
        ? JSON.parse(localStorage.getItem("wishlistItems"))
        : [],
};

const wishSlice = createSlice({
    name: "wish",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            let existsItemIndex = state.wishlistItems?.findIndex(
                (item) => item.id === action.payload?.id,
            );

            if (existsItemIndex >= 0) {
                state.wishlistItems[existsItemIndex] = action.payload;
            } else {
                let buildWishlistItem = {
                    ...action.payload,
                };

                toast.success("added to wishlist", {
                    position: "top-left",
                    bodyStyle: { color: "black" },
                });
                console.log(action.payload);

                state.wishlistItems?.push(buildWishlistItem);
                localStorage.setItem(
                    "wishlistItems",
                    JSON.stringify(state.wishlistItems),
                );
            }
        },
        remove: (state, action) => {
            const newWishlistItems = state.wishlistItems.filter(
                (item) => item.id !== action.payload,
            );
            toast.error("Removed from wishlist", {
                position: "top-left",
            });
            state.wishlistItems = newWishlistItems;
            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        },
    },
});

export const { addToWishlist, remove } = wishSlice.actions;
export default wishSlice.reducer;
