
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {B22} from "./B22.jsx"

        export function  B21() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                B21

                <B22/>
            </div>
        }
        