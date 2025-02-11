
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D8} from "./D8.jsx"

        export function  D7() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D7

                <D8/>
            </div>
        }
        