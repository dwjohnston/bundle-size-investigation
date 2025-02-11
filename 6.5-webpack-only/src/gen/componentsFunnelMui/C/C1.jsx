
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C2} from "./C2.jsx"

        export function  C1() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C1

                <C2/>
            </div>
        }
        