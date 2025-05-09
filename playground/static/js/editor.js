const playgroundDOM = document.querySelector("#playground");
const bytecodeDOM = document.querySelector("#bytecode");

function setupEditor() {
    const editor = ace.edit("playground");
    editor.setTheme("ace/theme/merbivore_soft");
    editor.session.setMode("ace/mode/rust");

    editor.setOption("fontFamily", "'Hermit'");
    editor.setOption("fontSize", 18);

    playgroundDOM.style.lineHeight = "26px";
    bytecodeDOM.style.lineHeight = "26px";

    window.aceContentDOM = document.querySelector(".ace_content");
    editor.getContent = () => aceContentDOM.innerText;
    return editor;
}

