
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X2} from "./X2.jsx"

        export function  X1() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X1

                <X2/>
            </div>
        }
        