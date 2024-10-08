const fs = require("node:fs");


/**
 * Generate a string of numMegabytes MB of random CSS as a string
 */
function generateLargeCssString(numMegabytes) {

  const properties = ['color', 'background-color'];
  const values = ['red', 'blue', 'green', 'yellow'];
  const selectors = ['.class1', '.class2', '#id1', '#id2', 'div', 'span', 'p'];

  let largeCssString = '';
  const size = numMegabytes * 1024 * 1024;
  while (largeCssString.length < size) {
      const selector = selectors[Math.floor(Math.random() * selectors.length)];
      const property = properties[Math.floor(Math.random() * properties.length)];
      const value = values[Math.floor(Math.random() * values.length)];
      largeCssString += `${selector} { ${property}: ${value}; }\n`;
  }

  return largeCssString;
}


const NUM_MB = 0.05; 

const fName = `./large_css_string_${NUM_MB}MB.txt`; 
fs.writeFile(fName, generateLargeCssString(NUM_MB), err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully

      console.log(`${fName} written successfully!`)

    }
  });