import path from "node:path";
import fs from "node:fs";
import { writeStructureLinear } from "./helpers/writeStructureLinear";
import { generateRandomString } from "./helpers/generateRandomString";

// Configuration
const depth = 50;
const letters = ['a', 'b', 'c', 'd', 'e', 'x'];

// Create the structure
writeStructureLinear(path.join(".", "gen", "servicesLinearAsync"), letters, depth, (letter, depth, isLeafNode) => {

    const thisFile = `${letter}${depth}`;
    const nextFile = `${letter}${depth + 1}`;

    if (isLeafNode) {
        return `
        export function  ${thisFile}() {
            console.warn("${generateRandomString(10240)}")
        }
        `;
    }
    else {
        return `
        export async function ${thisFile} () {
            const { ${nextFile}} = await import("./${nextFile}.js");
            ${nextFile} ();

        console.warn("${generateRandomString(10240)}")
    }
    `;
    }
});

console.log("File and folder structure created successfully.");