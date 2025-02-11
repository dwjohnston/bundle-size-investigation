
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C22} from "./C22.jsx"

        export function  C21() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C21

                <C22/>
            </div>
        }
        