import {a1} from "./src/services/a"


function main() {
    console.log("main")
    const el = document.createElement("p"); 
    el.textContent="main";      

    document.getElementById("content").append(el)
    a1(); 
}



document.addEventListener("DOMContentLoaded", ()=> {

    main();
});