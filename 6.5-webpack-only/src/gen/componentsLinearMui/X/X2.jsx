
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X3} from "./X3.jsx"

        export function  X2() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X2

                <X3/>
            </div>
        }
        