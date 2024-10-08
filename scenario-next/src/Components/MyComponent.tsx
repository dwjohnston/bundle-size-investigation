"use client";

import { useEffect } from "react";
// import { a1 } from "../services/a";

import {array} from "lodash";
export type MyComponentProps = {

}

export function MyComponent(props: MyComponentProps) {


    useEffect(() => {

        console.log(array)
    }, []);

    return <div> the component</div>
} 