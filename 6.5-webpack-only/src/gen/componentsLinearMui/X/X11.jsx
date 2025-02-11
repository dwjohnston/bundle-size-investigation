
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X12} from "./X12.jsx"

        export function  X11() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X11

                <X12/>
            </div>
        }
        