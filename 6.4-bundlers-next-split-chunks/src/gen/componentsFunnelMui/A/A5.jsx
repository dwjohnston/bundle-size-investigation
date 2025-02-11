
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A6} from "./A6.jsx"

        export function  A5() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A5

                <A6/>
            </div>
        }
        