
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B42} from "./B42.jsx"

        export function  B41() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B41

                <B42/>
            </div>
        }
        