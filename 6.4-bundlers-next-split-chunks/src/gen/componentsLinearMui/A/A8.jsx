
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A9} from "./A9.jsx"

        export function  A8() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A8

                <A9/>
            </div>
        }
        