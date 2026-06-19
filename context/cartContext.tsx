"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { Product } from "@/types/Product";
import { CartcontextType } from "@/types/Cart";

const CartContext = createContext<CartcontextType | undefined>(undefined);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartcontextType["cartItems"]>(
        [],
    );

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id,
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id.toString() !== productId),
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
        );
    };

    function productisInCart(productId: string) {
        return cartItems.some((item) => item.id.toString() === productId);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotalPrice,
                productisInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCartContext must be used within a CartContextProvider",
        );
    }

    return context;
};
