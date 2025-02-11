
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B21} from "./B21.jsx"

        export function  B20() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B20

                <B21/>
            </div>
        }
        