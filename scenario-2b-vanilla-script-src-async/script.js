function main() {
    console.log("main")
    const el = document.createElement("p"); 
    el.textContent="main";      

    document.getElementById("content").append(el)
    a(); 
}

function a() {
    console.log("a")
    const el = document.createElement("p"); 
    el.textContent="a";      

    document.getElementById("content").append(el)
    b1(); 
    b2();
}

function b1() {
    console.log("b1")
    const el = document.createElement("p"); 
    el.textContent="b1";      

    document.getElementById("content").append(el)
         c1();
         c2();   
}

function b2() {
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

function c1() {
    console.log("c1");
    const el = document.createElement("p"); 
    el.textContent="c1";      

    document.getElementById("content").append(el)
}

function c2(){
    console.log("c2")
    const el = document.createElement("p"); 
    el.textContent="c2";      

    document.getElementById("content").append(el)
}

function c3() {
    console.log("c3")
    const el = document.createElement("p"); 
    el.textContent="c3";      

    document.getElementById("content").append(el)
}

function c4() {
    console.log("c4")
    const el = document.createElement("p"); 
    el.textContent="c4";      

    document.getElementById("content").append(el)
}

document.addEventListener("DOMContentLoaded", () =>{
    main();
})