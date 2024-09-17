"use client";

import { useEffect } from "react";
import { a1 } from "../services/a";

export type MyComponentProps = {

}

export function MyComponent(props: MyComponentProps) {


    useEffect(() => {
        a1();
    }, []);

    return <div> the component</div>
} 