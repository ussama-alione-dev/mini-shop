"use client";

import { ShoppingCart, Store, Hamburger, X } from "lucide-react";
import Link from "next/link";
import { useCartContext } from "@/context/cartContext";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const { cartItems } = useCartContext();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-card fixed top-0 right-0 left-0 z-50 border-b border-border w-full text-foreground">
            <div className="flex items-center justify-between px-8 py-4">
                <Link
                    href="/"
                    className="flex outline outline-border outline-offset-4 p-2 rounded-lg bg-accent  items-center gap-2 text-lg font-bold"
                >
                    <Store className="text-primary stroke-primary" size={16} />
                    Mini Shop
                </Link>

                {/* Desktop links */}
                <nav className="hidden  sm:flex gap-4 text-sm">
                    <Link
                        className={`hover:text-primary transition-colors ${pathname === "/" ? "text-primary" : ""}`}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`hover:text-primary transition-colors ${pathname === "/products" ? "text-primary" : ""}`}
                        href="/products"
                    >
                        Products
                    </Link>
                </nav>

                <Link
                    href="/cart"
                    className="hidden sm:flex bg-secondary p-2 rounded-lg hover:bg-muted duration-300 transition-colors items-center gap-2 text-sm"
                >
                    Cart ({cartItems.length})
                    <ShoppingCart size={16} />
                </Link>

                <button
                    className="sm:hidden p-1"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X cursor="pointer" size={24} />
                    ) : (
                        <Hamburger cursor="pointer" size={24} />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`sm:hidden  overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? "max-h-52 border-t border-border" : "max-h-0"
                }`}
            >
                <nav className="flex flex-col py-2 text-sm">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className={`px-8 py-3 hover:bg-muted hover:text-primary transition-colors ${
                            pathname === "/" ? "text-primary" : ""
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        onClick={() => setMenuOpen(false)}
                        className={`px-8 py-3 hover:bg-muted hover:text-primary transition-colors ${
                            pathname === "/products" ? "text-primary" : ""
                        }`}
                    >
                        Products
                    </Link>

                    <Link
                        href="/cart"
                        onClick={() => setMenuOpen(false)}
                        className="mx-8 mt-2 mb-3 flex items-center gap-2 bg-secondary p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                        Cart ({cartItems.length})
                        <ShoppingCart size={16} />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
