import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-card fixed top-0 right-0 left-0 z-50 border border-border  w-full text-foreground py-4 flex items-center justify-between px-8">
            <p>logo</p>

            <nav className="flex gap-4 text-sm">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
            </nav>
        </header>
    );
};

export default Header;
