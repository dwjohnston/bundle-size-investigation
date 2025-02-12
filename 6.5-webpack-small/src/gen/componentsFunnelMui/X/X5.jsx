
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X6} from "./X6.jsx"

        export function  X5() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X5

                <X6/>
            </div>
        }
        