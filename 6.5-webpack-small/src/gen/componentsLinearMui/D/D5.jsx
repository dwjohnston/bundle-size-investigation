
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D6} from "./D6.jsx"

        export function  D5() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D5

                <D6/>
            </div>
        }
        