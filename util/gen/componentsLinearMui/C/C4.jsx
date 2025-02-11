
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C5} from "./C5.jsx"

        export function  C4() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C4

                <C5/>
            </div>
        }
        