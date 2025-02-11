
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D10} from "./D10.jsx"

        export function  D9() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D9

                <D10/>
            </div>
        }
        