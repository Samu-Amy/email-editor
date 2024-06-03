"use client"

import { Laptop, Smartphone, Tablet } from "lucide-react";
import { Button } from "./ui/button";

// TODO: implementa con lo stato

export const ResponsiveButtons = () => {
    return (
        <div className="w-fit m-4 bg-zinc-700 rounded-md">
            <Button variant="lighter"><Laptop /></Button>
            <Button variant="lighter"><Tablet className="rotate-90"/></Button>
            <Button variant="lighter"><Smartphone /></Button>
        </div>
    );
}