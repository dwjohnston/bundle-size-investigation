
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A16} from "./A16.jsx"

        export function  A15() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A15

                <A16/>
            </div>
        }
        