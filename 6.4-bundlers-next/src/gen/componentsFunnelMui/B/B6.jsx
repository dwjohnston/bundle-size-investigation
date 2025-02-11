
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B7} from "./B7.jsx"

        export function  B6() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B6

                <B7/>
            </div>
        }
        