
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B8} from "./B8.jsx"

        export function  B7() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B7

                <B8/>
            </div>
        }
        