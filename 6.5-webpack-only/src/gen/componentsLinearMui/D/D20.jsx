
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D21} from "./D21.jsx"

        export function  D20() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D20

                <D21/>
            </div>
        }
        