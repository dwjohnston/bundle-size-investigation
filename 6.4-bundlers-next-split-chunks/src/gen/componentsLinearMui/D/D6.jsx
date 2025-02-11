
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D7} from "./D7.jsx"

        export function  D6() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D6

                <D7/>
            </div>
        }
        