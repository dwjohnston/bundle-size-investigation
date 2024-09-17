
import {b1, b2} from "./b.js";

export function a() {
    console.log("a")
    const el = document.createElement("p"); 
    el.textContent="a";      

    document.getElementById("content").append(el)
    b1(); 
    b2();
}
