
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X5} from "./X5.jsx"

        export function  X4() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X4

                <X5/>
            </div>
        }
        