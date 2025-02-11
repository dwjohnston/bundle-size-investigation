
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C13} from "./C13.jsx"

        export function  C12() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C12

                <C13/>
            </div>
        }
        