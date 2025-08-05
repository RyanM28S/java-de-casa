function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso"
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value
    document.getElementById("mensagem").textContent = mensagem

    let listaTarefa = document.getElementById("listaTarefa")
    let novaTarefa = document.createElement("li")

    novaTarefa.textContent = tarefa

    listaTarefa.appendChild(novaTarefa)

    inputTarefa.value =""
}