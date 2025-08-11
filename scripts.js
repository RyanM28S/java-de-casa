function enviarNome() {
    let nome = document.getElementById("inputNome").value;
    localStorage.setItem("nomeUsuario", nome);
    if (nome) {
        document.getElementById("confirmacao").textContent = "Nome salvo com sucesso";
    }else {
        document.getElementById("confirmacao").textContent = "Nenhum nome enviada";
    }



    inputNome.value = "";

}
function enviarSenha() {
    let senha = document.getElementById("inputSenha").value;
    localStorage.setItem("senhaUsuario", senha);
    if (senha) {
        document.getElementById("confirmacoes").textContent = "Senha salvo com sucesso";
    }else {
        document.getElementById("confirmacoes").textContent = "Nenhuma senha enviada";
    }



    inputSenha.value = "";
}
function enviarEmail() {
    let email = document.getElementById("inputEmail").value;
    localStorage.setItem("emailUsuario", email);
    if (email) {
        document.getElementById("Confirmacao").textContent = "Email salvo com sucesso";
    }else {
        document.getElementById("Confirmacao").textContent = "Nenhum email enviada";
    }


    inputEmail.value = "";
}
function enviarData() {
    let data = document.getElementById("inputData").value;
    localStorage.setItem("dataUsuario", data);
    if (data) {
        document.getElementById("confi").textContent = "Data salvo com sucesso";
    }else {
        document.getElementById("confi").textContent = "Nenhuma data enviada";
    }
    

    inputData.value = "";
}
function mostrarConta() {
    window.location.href = "sua-conta.html";
}