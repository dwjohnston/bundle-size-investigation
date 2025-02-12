
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B23} from "./B23.jsx"

        export function  B22() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B22

                <B23/>
            </div>
        }
        