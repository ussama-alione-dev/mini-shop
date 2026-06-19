"use client";

import { useCartContext } from "@/context/cartContext";
import CartItem from "@/components/CartItem";
import { RefreshCw } from "lucide-react";
import { CartItemType } from "@/types/Cart";
import EmptyCart from "@/components/EmptyCart";

const CartPage = () => {
    const { cartItems, getTotalPrice, clearCart } = useCartContext();

    if (cartItems.length === 0) return <EmptyCart />;

    return (
        <section className="max-w-7xl mt-16 mx-auto p-4 flex flex-col gap-4">
            <h1 className="text-2xl relative before:content-[''] before:absolute before:-left-2 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-6 before:bg-primary before:rounded-full  font-bold">
                Your cart
            </h1>

            <div className="flex items-center justify-between w-full ">
                <p className="bg-muted p-2 rounded">
                    Total:{" "}
                    <span className="font-bold">
                        ${getTotalPrice().toFixed(2)}
                    </span>
                </p>

                <button
                    onClick={clearCart}
                    className="flex items-center gap-2 text-sm text-primary-foreground bg-primary hover:bg-primary/80 cursor-pointer duration-300 p-2 rounded  transition-colors"
                >
                    Clear Cart <RefreshCw size={14} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cartItems.map((item: CartItemType) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default CartPage;
