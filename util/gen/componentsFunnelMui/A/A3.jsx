
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A4} from "./A4.jsx"

        export function  A3() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A3

                <A4/>
            </div>
        }
        