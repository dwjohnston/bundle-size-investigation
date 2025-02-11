
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A13} from "./A13.jsx"

        export function  A12() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A12

                <A13/>
            </div>
        }
        