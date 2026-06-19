import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
    id: number;
    price: number;
    name: string;
    image: string;
    category: string;
    description: string;
    slug: string;
}

const ProductCard = ({
    id,
    name,
    image,
    category,
    price,
    slug,
    description,
}: ProductCardProps) => {
    return (
        <div className="p-4 bg-card flex flex-col rounded-lg h-full">
            <div className="relative w-full h-48 mb-4">
                <Image src={image} alt={name} fill className="object-contain" />
            </div>
            <h2 className="text-lg text-foreground/40">{category}</h2>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-lg text-foreground/60">${price.toFixed(2)}</p>

            <div className="flex items-center justify-between w-full mt-auto pt-4">
                <Link className="hover:text-primary" href={`/products/${slug}`}>
                    view details
                </Link>
                <AddToCartButton
                    product={{
                        id,
                        name,
                        image,
                        category,
                        price,
                        slug,
                        description,
                    }}
                />
            </div>
        </div>
    );
};

export default ProductCard;
