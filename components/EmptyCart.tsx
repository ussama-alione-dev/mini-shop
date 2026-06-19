import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
    return (
        <div className=" mt-[20%] text-center flex flex-col items-center justify-center gap-4">
            <p className="text-lg text-muted-foreground">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">
                Looks like you haven't added any products to your cart yet.
            </p>
            <Link
                href="/products"
                className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 duration-300 transition-colors"
            >
                Start Shopping
                <ShoppingBag size={16} className="ml-2 inline-block" />
            </Link>
        </div>
    );
};

export default EmptyCart;
