
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D13} from "./D13.jsx"

        export function  D12() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D12

                <D13/>
            </div>
        }
        