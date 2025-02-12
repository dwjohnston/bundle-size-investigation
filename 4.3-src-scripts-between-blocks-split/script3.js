function appendBlockCount3() {
    const div1 = document.createElement("div");
    const numBlocks = document.querySelectorAll(".dom-50kB").length;
    div1.textContent = `Script 3: Number of blocks: ${numBlocks}`;
    const body = document.querySelector("body");
    body.appendChild(div1);

}
appendBlockCount3();


const styleTag3a = document.createElement("style");
styleTag3a.textContent = `body {color: blue;}`
document.head.appendChild(styleTag3a)


