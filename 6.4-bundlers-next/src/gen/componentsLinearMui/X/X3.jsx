
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X4} from "./X4.jsx"

        export function  X3() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X3

                <X4/>
            </div>
        }
        