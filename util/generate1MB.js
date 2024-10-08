const fs = require("node:fs");


const NUM_MB = 0.1; 


const lettersOfAlpha = 'abcdefghijklmnopqrstuvwxyz';
const allLetters = (lettersOfAlpha + lettersOfAlpha.toUpperCase()).split('');

function generateLargeRandomString(numMegabytes = NUM_MB){

    let largeString = '';
    const size = numMegabytes * 1024 * 1024;
    while(largeString.length < size){
       largeString += allLetters[Math.floor(Math.random() * allLetters.length)];
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