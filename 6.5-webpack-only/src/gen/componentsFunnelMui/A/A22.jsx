
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A23} from "./A23.jsx"

        export function  A22() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A22

                <A23/>
            </div>
        }
        