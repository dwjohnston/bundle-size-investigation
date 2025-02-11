
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B2} from "./B2.jsx"

        export function  B1() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B1

                <B2/>
            </div>
        }
        