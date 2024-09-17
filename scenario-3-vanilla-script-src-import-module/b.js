import {c1,c2,c3,c4} from "./c.js";

export function b1() {
    console.log("b1")
    const el = document.createElement("p"); 
    el.textContent="b1";      

    document.getElementById("content").append(el)
         c1();
         c2();   
}

export function b2() {
    console.log("b2")
    const el = document.createElement("p"); 
    el.textContent="b2";  
    const button = document.createElement('button');
    button.textContent="Click for more"; 
    button.addEventListener("click", () => {
        c3();
        c4(); 
    })           
    document.getElementById("content").append(el)
    document.getElementById("content").append(button)
}

