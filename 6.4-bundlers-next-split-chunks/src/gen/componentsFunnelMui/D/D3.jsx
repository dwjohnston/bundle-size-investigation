
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D4} from "./D4.jsx"

        export function  D3() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D3

                <D4/>
            </div>
        }
        