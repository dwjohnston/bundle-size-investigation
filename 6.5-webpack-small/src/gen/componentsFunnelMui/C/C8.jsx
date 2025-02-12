
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C9} from "./C9.jsx"

        export function  C8() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C8

                <C9/>
            </div>
        }
        