import { products } from "@/data/products";
import React from "react";
import { Product } from "@/types/Product";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};
const page = async ({ params }: Props) => {
    const { slug } = await params;
    const product = products.find((p: Product) => p.slug === slug);

    if (!product) {
        return notFound();
    }

    return (
        <section className="mt-16">
            <Link className="hover:text-primary " href="/products">
                &larr; Back to products
            </Link>
            <div className="mx-auto mt-8 p-8 bg-card flex  rounded-lg">
                <div className="relative w-1/3 bg-background   mb-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="flex  flex-col gap-2 ml-4">
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className="text-foreground">{product.category}</p>
                    <p className="text-foreground/60 mb-4">
                        {product.description}
                    </p>
                    <p className="text-xl font-semibold">
                        ${product.price.toFixed(2)}
                    </p>

                    <div>
                        <button className="bg-primary cursor-pointer transition-colors duration-300 text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
