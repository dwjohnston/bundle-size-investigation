
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B43} from "./B43.jsx"

        export function  B42() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B42

                <B43/>
            </div>
        }
        