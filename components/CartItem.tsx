import { CartItemType } from "@/types/Cart";
import Image from "next/image";

const CartItem = ({ item }: { item: CartItemType }) => {
    return (
        <div className="p-8 bg-card flex flex-col md:flex-row rounded-lg h-full">
            <div className="relative w-full md:w-1/4 h-36">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                />
            </div>

            <div className="flex flex-col gap-2 md:ml-4 flex-1">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <p>{item.category}</p>

                <p className="text-xl  font-semibold">
                    ${item.price.toFixed(2)}
                    <span className="text-primary ml-2 text-sm">
                        x {item.quantity}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default CartItem;
