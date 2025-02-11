
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C14} from "./C14.jsx"

        export function  C13() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C13

                <C14/>
            </div>
        }
        