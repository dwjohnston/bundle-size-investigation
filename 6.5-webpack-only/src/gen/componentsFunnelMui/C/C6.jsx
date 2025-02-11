
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C7} from "./C7.jsx"

        export function  C6() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C6

                <C7/>
            </div>
        }
        