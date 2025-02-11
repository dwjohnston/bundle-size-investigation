import path from "node:path";
import { writeStructureLinear } from "./helpers/writeStructureLinear";
import { generateRandomString } from "./helpers/generateRandomString";
import { addRandomMuiImport } from "./helpers/addRandomMuiImport";

// Configuration
const depth = 50; 
const letters = ['A', 'B', 'C','D', 'X'];

// Create the structure
writeStructureLinear(path.join(".", "gen","componentsFunnelMui"), letters, depth, (letter, depth, isLeafNode) => {

    const thisFile = `${letter}${depth}`;
    const nextFile = `${letter}${depth+1}`;

    if(isLeafNode){

        if(letter === 'X') {
            return  `
            "use client";
    
            export function  ${thisFile}() {
                return <div>
    
                    ${generateRandomString(102400)}
                </div>
            }
            `;
        }

        return  `
        "use client";
        import {X1} from "../x/x1.jsx";
        export function  ${thisFile}() {
            return <div>
                <X1/>
                ${generateRandomString(102400)}
            </div>
        }
        `;
   
    }
    else {

        const muiImport = addRandomMuiImport();
        return `
        "use client"
        import {useEffect} from "react";
        ${muiImport.importBetter}
        import {${nextFile}} from "./${nextFile}.jsx"

        export function  ${thisFile}() {

            useEffect(() => {
                console.log(${muiImport.element});
            });

            return <div>
                ${thisFile}

                <${nextFile}/>
            </div>
        }
        `;;
    }
}, {
    fileExtension: "jsx"
});

console.log("File and folder structure created successfully.");

addRandomMuiImport();
