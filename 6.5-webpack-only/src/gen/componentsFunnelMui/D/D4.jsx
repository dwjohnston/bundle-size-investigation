
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D5} from "./D5.jsx"

        export function  D4() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D4

                <D5/>
            </div>
        }
        