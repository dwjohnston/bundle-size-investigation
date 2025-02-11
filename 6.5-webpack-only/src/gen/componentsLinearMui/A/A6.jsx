
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A7} from "./A7.jsx"

        export function  A6() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A6

                <A7/>
            </div>
        }
        