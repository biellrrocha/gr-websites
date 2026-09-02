alert("Bem-vindo ao site da GR Websites!");
function mudarTexto() {
    document.getElementById("texto").innerHTML =
        "Desenvolvemos sites pensados para destacar seu negocio na internet.";
}
function mostrarContato() {
    let contato = document.getElementById("contato");
    let botao = document.getElementById("botaoContato");

    if (contato.style.display === "none") {
        contato.style.display = "block";
        botao.innerHTML = "Esconder contato";
    } else {
        contato.style.display = "none";
        botao.innerHTML = "Mostrar contato";
    }
}
function enviarFormulario() {
    let nome = document.getElementById("nome").value;
    let negocio = document.getElementById("negocio").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || negocio === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
document.getElementById("nome").value = "";
document.getElementById("negocio").value = "";
document.getElementById("mensagem").value = "";
window.open("https://www.instagram.com/grwebsites_/", "_blank");
}