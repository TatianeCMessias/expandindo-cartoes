const panels = document.querySelectorAll('.painel')

panels.forEach(painel => {
    painel.addEventListener('click', () => {
        removeAtivoClasses()
        painel.classList.add('ativo')
    })
})

function removeAtivoClasses(){
    panels.forEach(painel => {
        painel.classList.remove('ativo')
    })
}