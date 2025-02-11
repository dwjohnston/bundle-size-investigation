
        "use client"
        import {useEffect} from "react";
        import Button from "@mui/material/Button";
        import {A22} from "./A22.jsx"

        export function  A21() {

            useEffect(() => {
                console.log(Button);
            });

            return <div>
                A21

                <A22/>
            </div>
        }
        