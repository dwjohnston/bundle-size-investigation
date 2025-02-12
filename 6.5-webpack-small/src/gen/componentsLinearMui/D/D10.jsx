
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D11} from "./D11.jsx"

        export function  D10() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D10

                <D11/>
            </div>
        }
        