const workerTab = document.getElementById("tab1");
const researchTab = document.getElementById("tab2");

function WorkerTabSelect() {
workerTab.style.display = "inline-block"
researchTab.style.display = "none"
}

function ResearchTabSelect() {
workerTab.style.display = "none"
researchTab.style.display = "inline-block"
}