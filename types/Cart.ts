import { Product } from "@/types/Product";

export interface CartItemType extends Product {
    quantity: number;
}

export type CartContextType = {
    cartItems: CartItemType[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    productisInCart: (productId: string) => boolean;
};
