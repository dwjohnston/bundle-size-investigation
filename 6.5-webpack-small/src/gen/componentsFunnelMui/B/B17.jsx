
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B18} from "./B18.jsx"

        export function  B17() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B17

                <B18/>
            </div>
        }
        