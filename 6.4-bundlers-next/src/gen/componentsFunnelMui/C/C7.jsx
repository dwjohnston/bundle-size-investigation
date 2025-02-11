
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C8} from "./C8.jsx"

        export function  C7() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C7

                <C8/>
            </div>
        }
        