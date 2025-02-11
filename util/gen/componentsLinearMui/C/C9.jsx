
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {C10} from "./C10.jsx"

        export function  C9() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                C9

                <C10/>
            </div>
        }
        