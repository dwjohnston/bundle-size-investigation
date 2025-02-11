
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {X42} from "./X42.jsx"

        export function  X41() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                X41

                <X42/>
            </div>
        }
        