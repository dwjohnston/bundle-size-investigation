
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B14} from "./B14.jsx"

        export function  B13() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B13

                <B14/>
            </div>
        }
        