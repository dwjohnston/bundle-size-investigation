const fs = require('fs');
const path = require('path');

// Configuration
const numFiles = {
    a: 50,
    b: 50,
    c: 50, 
    d: 50, 
    e: 50, 
    f: 50,
    g: 50,
    h: 50, 
    i: 50,
};
const letters = Object.keys(numFiles);

// Function to generate a random string of specified size
function generateRandomString(size) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < size; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to create files and directories
function createStructure(numFiles, letters) {
    letters.forEach(letter => {
        const dirPath = path.join('.', "src", "services", letter);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        for (let i = 1; i <= numFiles[letter]; i++) {
            const filePath = path.join(dirPath, `${letter}${i}.js`);


            const thisIndex = letters.findIndex((v) => v ===letter); 
            if(thisIndex <0){
                throw new Error(`"${letter}" not found in the array`);
            }
            const nextIndex = thisIndex + 1;
            const importFrom = letters[nextIndex];

            let fileContent; 
            if(!importFrom){
                fileContent = `
                export function ${letter}${i}() {
                    console.info("${letter}${i}")
                    console.warn("${generateRandomString(10240)}")
                }
                `;
            }
            else {
                 fileContent = `import {${importFrom}1,${importFrom}2} from "../${importFrom}"

                export function ${letter}${i}() {
                
                    ${importFrom}1(); 
                    ${importFrom}2(); 
                    console.warn("${generateRandomString(10240)}")
                }
                `;
            }


            fs.writeFileSync(filePath, fileContent);
        }

        // Create index.js
        const indexPath = path.join(dirPath, 'index.js');

        // generate a barrel file here
        const barrelContent = new Array(numFiles[letter]).fill(true).map((v,i) => `export * from './${letter}${i+1}';`).join('\n');
        fs.writeFileSync(indexPath, barrelContent);
    });

    // Create main.js
    fs.writeFileSync('main.js', '');
}

// Create the structure
createStructure(numFiles, letters);

console.log("File and folder structure created successfully.");