
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A5} from "./A5.jsx"

        export function  A4() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A4

                <A5/>
            </div>
        }
        