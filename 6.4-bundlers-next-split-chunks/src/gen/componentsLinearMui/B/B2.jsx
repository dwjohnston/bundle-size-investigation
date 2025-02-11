
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B3} from "./B3.jsx"

        export function  B2() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B2

                <B3/>
            </div>
        }
        