// Utilize os arquivos de base disponibilizados para realizar os exercícios
// propostos. Manipule os elementos HTML utilizando o querySelectorAll e o
// setAttribute, aplicando as alterações necessárias para que fique
// semelhante a imagem abaixo.

// 1. Capture, armazene e manipule todos os elementos de classe "card".
// Modifique os estilos necessários nesses elementos para que fique
// semelhante a imagem.

// 2. Capture, armazene e manipule todos os elementos de classe
// "titulo-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.

// 3. Modifique o texto dos títulos nos cards para "Meu card".

// 4. Capture, armazene e manipule todos os elementos de classe
// "descricao-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.

// 5. Modifique o texto das descrições nos cards para "Descrição
// modificada pelo JavaScript".

// 6. Capture, armazene e manipule todos os elementos de classe
// "botao-editar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

// 7. Capture, armazene e manipule todos os elementos de classe
// "botao-apagar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

// 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
// Essa função deve mostrar um alerta com a mensagem "Clicou em
// Editar!".

// 9. Adicione o atributo 'onclick' nos elementos de classe
// “botão-apagar”. Ao clicar nesses elementos deve chamar a função
// 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
// certeza da exclusão do card. Se o usuário confirmar a exclusão deve
// mostrar um alerta com a mensagem "Confirmado!", se não deve
// mostrar a mensagem "Cancelou!".

// Este exercício deverá ser postado na Class até o horário estipulado da
// tarefa na plataforma. Crie um arquivo compactado contendo os arquivos
// com a resolução da atividade e realize o upload no post da atividade no
// Class. Para que possamos construir uma base sólida de aprendizado é
// preciso praticar. Bora implementar tudo isso!

let atributosCard = document.querySelectorAll("div.card")
for(const elemento of atributosCard){
    elemento.setAttribute("style", "background-color:#E16E0E")
}

let atributosTituloCard = document.querySelectorAll(".titulo-card")
for(const elemento of atributosTituloCard){
    elemento.setAttribute("style", "color:#2b385b; margin:12px")
    elemento.innerText = "Meu card"
}

let atributosDescricaoCard = document.querySelectorAll(".descricao-card")
for(const elemento of atributosDescricaoCard){
    elemento.setAttribute("style", "color:#ffffff; margin: 20px 0px 20px 0px; font-size: 15px")
    elemento.innerText = "Descrição modificada pelo JavaScript"
}

let atributosBotaoEditar = document.querySelectorAll(".botao-editar")
for(const elemento of atributosBotaoEditar){
    elemento.setAttribute("style", "background-color:#008000;color:#ffffff; border:none; border-radius:7px; padding:7px; cursor: pointer;")
    elemento.setAttribute("onclick", "editarCard()")
}


let atributosBotaoApagar = document.querySelectorAll(".botao-apagar")
for(const elemento of atributosBotaoApagar){
    elemento.setAttribute("style", "background-color:#FF0000; color:#ffffff; border:none; border-radius:7px; padding:7px; cursor: pointer")
    elemento.setAttribute("onclick", "apagarCard()")
}

function editarCard(){
    alert("Clicou em Editar!")
}

function apagarCard(){
    alert("Cancelou!")
}