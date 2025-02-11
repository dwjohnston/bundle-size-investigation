
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B9} from "./B9.jsx"

        export function  B8() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B8

                <B9/>
            </div>
        }
        