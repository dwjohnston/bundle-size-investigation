
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B10} from "./B10.jsx"

        export function  B9() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B9

                <B10/>
            </div>
        }
        