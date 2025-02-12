
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D2} from "./D2.jsx"

        export function  D1() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D1

                <D2/>
            </div>
        }
        