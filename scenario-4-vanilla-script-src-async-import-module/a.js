

export async function a() {
    console.log("a")
    const el = document.createElement("p"); 
    el.textContent="a";      

    document.getElementById("content").append(el)

    const {b1, b2} = await import ("./b.js")
    b1(); 
    b2();
}
