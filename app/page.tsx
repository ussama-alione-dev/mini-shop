import Image from "next/image";

import { productsForHomePage } from "@/data/products";
import Link from "next/link";
import { Telescope } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return (
        <section className="flex flex-col items-center enter min-h-screen py-2">
            <div className="flex flex-col items-center justify-center text-center mt-16">
                <h1 className="text-3xl font-bold ">
                    LUXE Boutique - Tech & Style
                </h1>
                <p className="text-lg text-foreground/60">
                    Discover our exclusive selection of high-end products.
                    Innovation meets minimalist design.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {productsForHomePage.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        id={product.id}
                        image={product.image}
                        slug={product.slug}
                    />
                ))}
            </div>
            <Link
                href="/products"
                className="mt-8 flex items-center group bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md"
            >
                Explore Products
                <Telescope
                    className="ml-2 group-hover:animate-pulse"
                    size={20}
                />
            </Link>
        </section>
    );
}
