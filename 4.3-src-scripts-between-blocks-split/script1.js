function appendBlockCount1() {
    const div1 = document.createElement("div");
    const numBlocks = document.querySelectorAll(".dom-50kB").length;
    div1.textContent = `Script 1: Number of blocks: ${numBlocks}`;
    const body = document.querySelector("body");
    body.appendChild(div1);

}
appendBlockCount1();

const styleTag1a = document.createElement("style");
styleTag1a.textContent = `body {color: red;}`
document.head.appendChild(styleTag1a)




