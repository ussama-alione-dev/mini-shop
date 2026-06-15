import React from "react";
import { futures } from "@/data/futures";

const Futures = () => {
    return futures.map((future, index) => (
        <div
            key={index}
            className="flex flex-col  items-center text-center p-4"
        >
            <future.icon size={48} className="mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">{future.title}</h3>
            <p className="text-sm text-muted-foreground">
                {future.description}
            </p>
        </div>
    ));
};

export default Futures;
