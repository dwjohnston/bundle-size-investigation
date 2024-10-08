const fs = require("node:fs");


/**
 * Generate a string of numMegabytes MB of random dom elements as a string
 */
function generateLargeRandomDom(numMegabytes) {

    const tags = ['div', 'span', 'p', 'a', 'section', 'article', 'header', 'footer'];
    const lettersOfAlpha = 'abcdefghijklmnopqrstuvwxyz';
    const allLetters = (lettersOfAlpha + lettersOfAlpha.toUpperCase()).split('');

    let largeHtmlString = '';

    const size = numMegabytes * 1024 * 1024;
    while (largeHtmlString.length < size) {
            const tag = tags[Math.floor(Math.random() * tags.length)];
            const contentLength = Math.floor(Math.random() * 10) + 1; // Random content length between 1 and 10
            let content = '';
            for (let k = 0; k < contentLength; k++) {
                content += allLetters[Math.floor(Math.random() * allLetters.length)];
            }
            largeHtmlString += `<${tag}>${content}</${tag}>`;
    }

    return largeHtmlString;
}


const NUM_MB = 0.05; 

const fName = `./large_html_string_${NUM_MB}MB.txt`; 
fs.writeFile(fName, generateLargeRandomDom(NUM_MB), err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully

      console.log(`${fName} written successfully!`)

    }
  });