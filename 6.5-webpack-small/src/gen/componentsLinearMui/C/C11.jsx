
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C12} from "./C12.jsx"

        export function  C11() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C11

                <C12/>
            </div>
        }
        