
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B16} from "./B16.jsx"

        export function  B15() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B15

                <B16/>
            </div>
        }
        