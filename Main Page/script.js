const cabecalho = document.getElementsByTagName("header")[0]
const topoNav = cabecalho.offsetTop; //Calcula a distância de px do top deste elemento pro elemento Pai


onscroll=function fixarMenuNoTopo() {
    if (window.pageYOffset >= topoNav) {
        cabecalho.classList.add("FixoNoTopo");
    } else cabecalho.classList.remove("FixoNoTopo")
}