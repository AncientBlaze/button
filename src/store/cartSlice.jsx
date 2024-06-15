import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (itemIndex >= 0) {
                // If the item is already in the cart, increase the quantity
                state.cartItems[itemIndex].quantity += 1;
                toast.info(`${action.payload.title} increased quantity`, {
                    position: "bottom-left",
                    bodyStyle: { color: "black" },
                });
                state.cartTotalAmount += action.payload.content; // Update total amount
            } else {
                // If the item is not in the cart, add it to the cart
                const newProduct = {
                    ...action.payload,
                    quantity: 1,
                };
                state.cartItems.push(newProduct);
                toast.success(`${action.payload.title} added to cart`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        remove: (state, action) => {
            const newCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload,
            );
            state.cartItems = newCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        increaseQuantity: (state, action) => {
            // Find the index of the item to decrease quantity
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload,
            );

            if (itemIndex >= 0) {
                // Check if the quantity is greater than 1
                if (state.cartItems[itemIndex].quantity ) {
                    const updatedCartItems = [...state.cartItems]; // Create a copy of cartItems
                    updatedCartItems[itemIndex].quantity += 1; // Update quantity of specific item
                    state.cartItems = updatedCartItems; // Update state with the new cartItems
                    toast(
                        `${state.cartItems[itemIndex].title} quantity increased`,
                        {
                            position: "bottom-left",
                        },
                    );
                } else {
                    // Inform about minimum quantity (optional)
                    toast.warn("Minimum quantity reached", {
                        position: "bottom-left",
                        bodyStyle: { color: "black" },
                    });
                }
            } else {
                toast.warn("are you brain dead?"),
                    {
                        position: "bottom-left",
                        bodyStyle: { color: "black" },
                    };
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseQuantity: (state, action) => {
            // Find the index of the item to decrease quantity
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload,
            );

            if (itemIndex >= 0) {
                // Check if the quantity is greater than 1
                if (state.cartItems[itemIndex].quantity > 1) {
                    const updatedCartItems = [...state.cartItems]; // Create a copy of cartItems
                    updatedCartItems[itemIndex].quantity -= 1; // Update quantity of specific item
                    state.cartItems = updatedCartItems; // Update state with the new cartItems
                    toast.info(
                        `${state.cartItems[itemIndex].title} quantity decreased`,
                        {
                            position: "bottom-left",
                            bodyStyle: { color: "black" },
                        },
                    );
                } else {
                    // Inform about minimum quantity (optional)
                    toast.warn("Minimum quantity reached", {
                        position: "bottom-left",
                        bodyStyle: { color: "black" },
                    });
                }
            } else {
                toast.warn("are you brain dead?"),
                    {
                        position: "bottom-left",
                        bodyStyle: { color: "black" },
                    };
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
});

export const { add, remove, increaseQuantity, decreaseQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
