
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {D12} from "./D12.jsx"

        export function  D11() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                D11

                <D12/>
            </div>
        }
        