
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B24} from "./B24.jsx"

        export function  B23() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B23

                <B24/>
            </div>
        }
        