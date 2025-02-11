
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C6} from "./C6.jsx"

        export function  C5() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C5

                <C6/>
            </div>
        }
        