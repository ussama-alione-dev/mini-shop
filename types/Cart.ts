import { Product } from "@/types/Product";

export interface CartItem extends Product {
    quantity: number;
}

export type CartcontextType = {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    productisInCart: (productId: string) => boolean;
};
