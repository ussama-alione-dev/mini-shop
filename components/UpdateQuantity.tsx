"use client";

import { useCartContext } from "@/context/cartContext";

const UpdateQuantity = ({
    quantity,
    productId,
}: {
    quantity: number;
    productId: string;
}) => {
    const { updateQuantity } = useCartContext();

    return (
        <div className="flex w-full items-center gap-4 mt-4">
            <button
                onClick={() => {
                    updateQuantity(productId, 1);
                    console.log("Quantity updated for product ID:", productId);
                }}
                className="bg-primary text-white p-2 size-8 flex items-center justify-center cursor-pointer  rounded-full"
            >
                +
            </button>

            {quantity}
            <button
                onClick={() => updateQuantity(productId, -1)}
                className="bg-primary text-white p-2 size-8 flex items-center justify-center cursor-pointer  rounded-full"
            >
                -
            </button>
        </div>
    );
};

export default UpdateQuantity;
