
export async function b1() {
    console.log("b1")
    const el = document.createElement("p"); 
    el.textContent="b1";      
    document.getElementById("content").append(el)


    const {c1,c2} = await import("./c.js")

         c1();
         c2();   
}

export async function b2() {
    console.log("b2")
    const el = document.createElement("p"); 
    el.textContent="b2";  
    const button = document.createElement('button');
    button.textContent="Click for more"; 

    const {c3,c4} = await import("./c.js")

    button.addEventListener("click", () => {
        c3();
        c4(); 
    })           
    document.getElementById("content").append(el)
    document.getElementById("content").append(button)
}

