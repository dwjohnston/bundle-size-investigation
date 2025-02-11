import path from "node:path";
import fs from "node:fs";


type Options = {
    fileExtension? : string; 
}

const defaultOptions = {
    fileExtension: "js"
}

// Function to create files and directories
export function writeStructureLinear(
    basePath: string,
    letters : Array<string>,
    depth: number,
    writeNode: (letter: string, depth: number, isLeafNode: boolean) => string, 
    options: Options = defaultOptions) {

    const adjustedOptions= {
        ...defaultOptions, 
        ...options
    }

    letters.forEach(letter => {
        const dirPath = path.join(basePath, letter);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }


   

        for (let i = 1; i <= depth; i++) {
            const filePath = path.join(dirPath, `${letter}${i}.${adjustedOptions.fileExtension}`);  
            const fileContent = writeNode(letter, i, i ===depth);
            fs.writeFileSync(filePath, fileContent);
        }
    });

}

