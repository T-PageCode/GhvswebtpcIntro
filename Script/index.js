document.addEventListener("contextmenu",(NoCtm) => {
    NoCtm.preventDefault();
})
let BlackDiv1 = document.getElementById("BlackDiv1");
function BlackDiv1Show() {
    BlackDiv1.style.visibility = "visible";
    BlackDiv1.style.opacity = "1";
    setTimeout(() => {
        location.href="https://t-pagecode.github.io/Ghvswebtpc/WebSystem/InstAndGo.html"
    },1000)
}
document.querySelectorAll("*").forEach((e) => {
    e.draggable = false;
})