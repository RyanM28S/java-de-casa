let tarefas = []

function adicionarTarefa() {


    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    let mensagem = document.getElementById("mensagem")

    if (tarefa === "") {

        let mensagemErro = "Digite sua tarefa"
        mensagem.textContent = mensagemErro
        
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefa()

    }

    inputTarefa.value = ""



}

function renderizarTarefa() {
    let listaTarefa = document.getElementById("listaTarefa")
    listaTarefa.innerHTML = ""

    
    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button") 
        botaoRemover.className ="remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        

        let botaoEditar = document.createElement("button") 
        botaoEditar.className ="editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)          
        novaTarefa.appendChild(botaoEditar)        
        listaTarefa.appendChild(novaTarefa)

    }

}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefa()
    let mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Mensagem removida com sucesso"
}

function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() !== ""){
        tarefas[i] =tarefaEditada
    }
    let mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Mensagem editada com sucesso"
    renderizarTarefa()
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefa()
    let mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso"
}