const modal = document.querySelector('.modal')
const botaoAbrirModal = document.querySelector('.botao-chamada')

const botaoFecharModal = document.querySelector('.botao-fechar-modal')

botaoAbrirModal.addEventListener('click' , () => {
    modal.showModal(); 
})
botaoFecharModal.addEventListener('click' , () => {
    modal.close()
}) 