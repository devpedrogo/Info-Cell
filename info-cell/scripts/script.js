let menuBtn = document.getElementById('menu-btn')
let menu = document.getElementById('menu')
let menuIcone = document.getElementById('menu-icone')

menuBtn.addEventListener('click', ()=> {
    if(menu.style.display === 'none' && menuIcone.classList.contains('fa-bars')){
        menu.style.display = 'flex'
        menuIcone.classList.remove('fa-bars')
        menuIcone.classList.add('fa-times')
    }
    else{
        menu.style.display = 'none'
        menuIcone.classList.remove('fa-times')
        menuIcone.classList.add('fa-bars')
    }
})