"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";


export const Highlight = ({
    children,
    className,
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block w-fit p-1 bg-gradient-to-r from-sky-400 to-blue-800 `,
                className
            )}
        >
            {children}
        </motion.span>
    );
};
