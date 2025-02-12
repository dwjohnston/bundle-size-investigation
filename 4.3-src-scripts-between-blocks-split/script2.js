function appendBlockCount2() {
    const div1 = document.createElement("div");
    const numBlocks = document.querySelectorAll(".dom-50kB").length;
    div1.textContent = `Script 2: Number of blocks: ${numBlocks}`;
    const body = document.querySelector("body");
    body.appendChild(div1);

}
appendBlockCount2();


const styleTag2a = document.createElement("style");
styleTag2a.textContent = `body {color: green;}`
document.head.appendChild(styleTag2a)
