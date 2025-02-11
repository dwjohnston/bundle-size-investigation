
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B5} from "./B5.jsx"

        export function  B4() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B4

                <B5/>
            </div>
        }
        