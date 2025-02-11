
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A11} from "./A11.jsx"

        export function  A10() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A10

                <A11/>
            </div>
        }
        