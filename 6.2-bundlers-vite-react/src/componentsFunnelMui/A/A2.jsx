
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A3} from "./A3.jsx"

        export function  A2() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A2

                <A3/>
            </div>
        }
        