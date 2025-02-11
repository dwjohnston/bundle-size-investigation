
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B6} from "./B6.jsx"

        export function  B5() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B5

                <B6/>
            </div>
        }
        