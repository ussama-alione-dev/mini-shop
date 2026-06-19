"use client";
import { useCartContext } from "@/context/cartContext";
import { Trash } from "lucide-react";

const RemoveFromCartButton = ({ productId }: { productId: string }) => {
    const { removeFromCart } = useCartContext();

    return (
        <button
            className="bg-destructive/70  flex items-center gap-2 text-destructive-foreground text-xs cursor-pointer hover:bg-destructive/80 p-2 rounded-md"
            onClick={() => removeFromCart(productId)}
        >
            Remove from Cart <Trash size={13} />
        </button>
    );
};

export default RemoveFromCartButton;
