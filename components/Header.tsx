"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartContext } from "@/context/cartContext";
import { usePathname } from "next/navigation";

const Header = () => {
    const { cartItems } = useCartContext();

    const pathname = usePathname();

    return (
        <header className="bg-card fixed  top-0 right-0 left-0 z-50 border border-border  w-full text-foreground py-4 flex items-center justify-between px-8">
            <nav className="flex w-full gap-4 items-center justify-between text-sm">
                <p>logo</p>
                <div className="flex gap-4">
                    <Link
                        className={`hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`hover:text-primary ${pathname === "/products" ? "text-primary" : ""}`}
                        href="/products"
                    >
                        Products
                    </Link>
                </div>
                <Link
                    href="/cart"
                    className="flex bg-secondary p-2 rounded-lg hover:bg-muted duration-300 transition-colors items-center gap-2"
                >
                    Cart ({cartItems.length})
                    <ShoppingCart size={16} />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
