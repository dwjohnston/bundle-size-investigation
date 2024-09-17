"use client";
import { foo } from "@/services/largeFunction";
import { useEffect } from "react";

export function MyClientComponent() {
    useEffect(() => {
        foo();
    }, [])

    return <div></div>
}