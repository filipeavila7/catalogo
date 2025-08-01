//botao de voltar ao topo
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn-topo");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    btn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});




// abrir e fechar modal

function abrirModal(id){
    // exibe o modal com o id selecionado

    document.getElementById(id).style.display = "block";
}


function fecharModal(id){
    // exibe o modal com o id selecionado

    document.getElementById(id).style.display = "none";
}


// fehcar o modal se clicar fora dele

window.addEventListener("click" , function(event){
    const login = document.getElementById("loginModal")
    const cadastro = document.getElementById("cadastroModal")
    if (event.target === login) login.style.display = "none"
    if (event.target === cadastro) cadastro.style.display = "none"
})