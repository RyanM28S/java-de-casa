let nomeSalvo = localStorage.getItem("nomeUsuario");
let nomeElement = document.getElementById("nomeExibido");
if (nomeSalvo) {
    nomeElement.textContent = nomeSalvo;
} else {
    nomeElement.textContent = "visitante";
}

let senhaSalvo = localStorage.getItem("senhaUsuario");
let senhaElement = document.getElementById("senhaExibido");
if (senhaSalvo) {
    senhaElement.textContent = senhaSalvo;
} else {
    senhaElement.textContent = "visitante";
}

let emailSalvo = localStorage.getItem("emailUsuario");
let emailElement = document.getElementById("emailExibido");
if (emailSalvo) {
    emailElement.textContent = emailSalvo;
} else
    emailElement.textContent = "visitante";

let dataSalvo = localStorage.getItem("dataUsuario");
let dataElement = document.getElementById("dataExibido");
if (dataSalvo) {
    dataElement.textContent = dataSalvo;
} else {
    dataElement.textContent = "visitante";
}
function voltar() {
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("senhaUsuario");
    localStorage.removeItem("emailUsuario");
    localStorage.removeItem("dataUsuario");
    window.location.href = "index.html";
}


let imagemSalva = localStorage.getItem("imagemUsuario");
let imagemElement = document.getElementById("imagem");
if (imagemSalva) {
    imagemElement.src = imagemSalva;
}

document.getElementById("inputImagem").addEventListener("change", function (event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            imagemElement.src = e.target.result;
            localStorage.setItem("imagemUsuario", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

imagemElement.addEventListener("click", function() {
    document.getElementById("inputImagem").click();
});

window.addEventListener("beforeunload", function() {
    localStorage.removeItem("imagemUsuario");
});


function abrirModal() {
    document.getElementById("meuModal").style.display = "flex";
}
function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}