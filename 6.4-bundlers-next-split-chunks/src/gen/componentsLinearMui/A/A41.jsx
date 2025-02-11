
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A42} from "./A42.jsx"

        export function  A41() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A41

                <A42/>
            </div>
        }
        