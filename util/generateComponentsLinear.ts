import path from "node:path";
import { writeStructureLinear } from "./helpers/writeStructureLinear";
import { generateRandomString } from "./helpers/generateRandomString";

// Configuration
const depth = 50; 
const letters = ['A', 'B', 'C','D', 'X'];

// Create the structure
writeStructureLinear(path.join(".", "gen","componentsLinear"), letters, depth, (letter, depth, isLeafNode) => {

    const thisFile = `${letter}${depth}`;
    const nextFile = `${letter}${depth+1}`;

    if(isLeafNode){
        return  `
        "use client";
        export function  ${thisFile}() {
            return <div>
                ${generateRandomString(102400)}
            </div>
        }
        `;
    }
    else {
        return `
        "use client"
        import {useEffect} from "react";
        import {${nextFile}} from "./${nextFile}.jsx"

        export function  ${thisFile}() {

            useEffect(() => {
                console.log("${generateRandomString(102400)}");
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