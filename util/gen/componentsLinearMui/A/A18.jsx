
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A19} from "./A19.jsx"

        export function  A18() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A18

                <A19/>
            </div>
        }
        