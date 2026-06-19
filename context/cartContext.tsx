"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { Product } from "@/types/Product";
import { CartContextType, CartItemType } from "@/types/Cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartContextType["cartItems"]>(
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
        setCartItems((prevItems: CartItemType[]) =>
            prevItems.filter(
                (item: CartItemType) => item.id.toString() !== productId,
            ),
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total: number, item: CartItemType) =>
                total + item.price * item.quantity,
            0,
        );
    };

    function productisInCart(productId: string) {
        return cartItems.some(
            (item: CartItemType) => item.id.toString() === productId,
        );
    }

    const updateQuantity = (productId: string, quantity: number) => {
        setCartItems((prevItems: CartItemType[]) =>
            prevItems
                .map((item: CartItemType) =>
                    item.id.toString() === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item,
                )
                .filter((item: CartItemType) => item.quantity > 0),
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotalPrice,
                productisInCart,
                updateQuantity,
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
