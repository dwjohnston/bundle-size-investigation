import {a} from "./a.js";
import {foo} from"./largeFunction.js";

function main() {
    console.log("main")
    const el = document.createElement("p"); 
    el.textContent="main";      

    document.getElementById("content").append(el)
    a(); 
}



document.addEventListener("DOMContentLoaded", ()=> {

    main();
    foo();
    
});