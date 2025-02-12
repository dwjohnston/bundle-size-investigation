
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A18} from "./A18.jsx"

        export function  A17() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A17

                <A18/>
            </div>
        }
        