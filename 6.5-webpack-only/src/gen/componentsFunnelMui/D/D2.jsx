
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D3} from "./D3.jsx"

        export function  D2() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D2

                <D3/>
            </div>
        }
        