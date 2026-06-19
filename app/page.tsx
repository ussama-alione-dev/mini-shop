import { productsForHomePage } from "@/data/products";
import Link from "next/link";
import { Telescope } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Features from "@/components/Features";

export default function Home() {
    return (
        <section className="flex flex-col items-center enter min-h-screen py-2">
            <div className="relative flex rounded-lg  flex-col h-[60vh] w-full items-center  text-center mt-14 overflow-hidden">
                <div className="absolute  inset-0 bg-cover  bg-top bg-no-repeat bg-[url('https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg')]" />

                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-foreground/70" />

                <div className="relative z-10 mt-20">
                    <h1 className="text-3xl font-bold  text-primary sm:text-5xl md:text-6xl">
                        LUXE Boutique - Tech & Style
                    </h1>
                    <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl mt-4">
                        Discover our exclusive selection of high-end products.
                        Innovation meets minimalist design.
                    </p>
                </div>
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
                        description={product.description}
                    />
                ))}
            </div>
            <Link
                href="/products"
                className="mt-16 flex items-center group bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md"
            >
                Explore Products
                <Telescope
                    className="ml-2 group-hover:animate-pulse"
                    size={20}
                />
            </Link>
            <div className="w-full bg-card mt-20 p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8">
                <Features />
            </div>
        </section>
    );
}
