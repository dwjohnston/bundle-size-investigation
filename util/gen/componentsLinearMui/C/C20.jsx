
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C21} from "./C21.jsx"

        export function  C20() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C20

                <C21/>
            </div>
        }
        