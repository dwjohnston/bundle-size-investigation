

async function main() {
    
    console.log("main")
    const el = document.createElement("p"); 
    el.textContent="main";      

    document.getElementById("content").append(el)

    const {a} = await import ("./a.js");
    a(); 
}



document.addEventListener("DOMContentLoaded", ()=> {

    main();
});