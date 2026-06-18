import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-card fixed  top-0 right-0 left-0 z-50 border border-border  w-full text-foreground py-4 flex items-center justify-between px-8">
            <nav className="flex w-full gap-4 items-center justify-between text-sm">
                <p>logo</p>
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                </div>
                <Link
                    href="/cart"
                    className="flex bg-secondary p-2 rounded-lg hover:bg-muted duration-300 transition-colors items-center gap-2"
                >
                    Cart
                    <ShoppingCart size={16} />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
