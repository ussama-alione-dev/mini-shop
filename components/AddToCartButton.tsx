"use client";
import { useCartContext } from "@/context/cartContext";
import { Product } from "@/types/Product";

const AddToCartButton = ({ product }: { product: Product }) => {
    const { addToCart, productisInCart } = useCartContext();

    if (productisInCart(product.id.toString())) {
        return (
            <button
                disabled
                className="bg-muted cursor-not-allowed transition-colors duration-300 text-muted-foreground hover:bg-muted/80 py-2 px-4 rounded-md"
            >
                In Cart
            </button>
        );
    }

    return (
        <button
            onClick={() => addToCart(product)}
            className="bg-primary cursor-pointer transition-colors duration-300 text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
