let dTitle = document.getElementById("details-title");
let dIcon = document.getElementById("details-icon");
let active = false;

console.log("carregou...");

dTitle.addEventListener("click", (e) => {
    //dIcon.classList.toggle("active");
    dIcon.innerText = active ? "+" : "-";
    active = !active;
    console.log("clicou");
});