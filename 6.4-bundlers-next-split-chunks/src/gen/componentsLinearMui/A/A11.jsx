
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A12} from "./A12.jsx"

        export function  A11() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A11

                <A12/>
            </div>
        }
        