
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C23} from "./C23.jsx"

        export function  C22() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C22

                <C23/>
            </div>
        }
        