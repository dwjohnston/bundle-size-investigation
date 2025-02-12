
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C11} from "./C11.jsx"

        export function  C10() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C10

                <C11/>
            </div>
        }
        