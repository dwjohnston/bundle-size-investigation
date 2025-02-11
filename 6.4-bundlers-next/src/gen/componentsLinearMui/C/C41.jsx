
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C42} from "./C42.jsx"

        export function  C41() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C41

                <C42/>
            </div>
        }
        