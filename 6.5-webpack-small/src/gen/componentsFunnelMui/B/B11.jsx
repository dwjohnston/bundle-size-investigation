
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B12} from "./B12.jsx"

        export function  B11() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B11

                <B12/>
            </div>
        }
        