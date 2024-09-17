const fs = require("node:fs");


const NUM_MB = 2; 


const lettersOfAlpha = 'abcdefghijklmnopqrstuvwxyz';
const allLetters = (lettersOfAlpha + lettersOfAlpha.toUpperCase()).split('');

function generateLargeRandomString(numMegabytes = NUM_MB){

    let largeString = '';
    for (let i = 0; i < numMegabytes; i++){
        for (let j = 0; j < 1024 * 1024; j++){
            largeString += allLetters[Math.floor(Math.random() * allLetters.length)];
        }
    }

    return `export function foo() {
      console.log("${largeString}"); 
    };`;

}



const fName = `./large_string_${NUM_MB}MB.txt`; 
fs.writeFile(fName, generateLargeRandomString(), err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully

      console.log(`${fName} written successfully!`)

    }
  });