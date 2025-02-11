
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B13} from "./B13.jsx"

        export function  B12() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B12

                <B13/>
            </div>
        }
        