
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C3} from "./C3.jsx"

        export function  C2() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C2

                <C3/>
            </div>
        }
        