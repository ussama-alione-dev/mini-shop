import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const page = () => {
    return (
        <section className="mt-16">
            <h1 className="text-2xl relative before:content-[''] before:absolute before:-left-2 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-6 before:bg-primary before:rounded-full  font-bold">
                All Products
            </h1>
            <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        category={product.category}
                        price={product.price}
                        slug={product.slug}
                        description={product.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default page;
