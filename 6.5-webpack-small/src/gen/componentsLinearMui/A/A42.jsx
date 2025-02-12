
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A43} from "./A43.jsx"

        export function  A42() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A42

                <A43/>
            </div>
        }
        