
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C4} from "./C4.jsx"

        export function  C3() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C3

                <C4/>
            </div>
        }
        