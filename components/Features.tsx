import React from "react";
import { features } from "@/data/features";

const Features = () => {
    return features.map((feature, index) => (
        <div
            key={index}
            className="flex flex-col  items-center text-center p-4"
        >
            <feature.icon size={48} className="mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
                {feature.description}
            </p>
        </div>
    ));
};

export default Features;
