
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B4} from "./B4.jsx"

        export function  B3() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B3

                <B4/>
            </div>
        }
        