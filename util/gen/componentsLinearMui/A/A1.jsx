
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A2} from "./A2.jsx"

        export function  A1() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A1

                <A2/>
            </div>
        }
        