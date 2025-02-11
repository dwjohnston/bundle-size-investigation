
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A21} from "./A21.jsx"

        export function  A20() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A20

                <A21/>
            </div>
        }
        