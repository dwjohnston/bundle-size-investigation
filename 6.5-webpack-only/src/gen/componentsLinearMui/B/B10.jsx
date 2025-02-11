
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B11} from "./B11.jsx"

        export function  B10() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B10

                <B11/>
            </div>
        }
        