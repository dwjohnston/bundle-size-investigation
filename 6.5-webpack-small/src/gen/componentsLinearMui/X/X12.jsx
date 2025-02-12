
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X13} from "./X13.jsx"

        export function  X12() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X12

                <X13/>
            </div>
        }
        