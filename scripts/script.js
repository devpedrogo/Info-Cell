let menuBtn = document.getElementById('menu-btn')
let menu = document.getElementById('menu')
let menuIcone = document.getElementById('menu-icone')

menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'none' && menuIcone.classList.contains('fa-bars')) {
        menu.style.display = 'flex'
        menuIcone.classList.remove('fa-bars')
        menuIcone.classList.add('fa-times')
    }
    else {
        menu.style.display = 'none'
        menuIcone.classList.remove('fa-times')
        menuIcone.classList.add('fa-bars')
    }
})

const elementos = document.querySelectorAll('.hidden')


const links = document.querySelectorAll('.links')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    let current = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (window.scrollY >= sectionTop - sectionHeight / 5) {
            current = section.getAttribute('id')
        }
    })

    links.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active')
        }
    })
})

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

elementos.forEach((elemento) => myObserver.observe(elemento))



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - document.querySelector('header').offsetHeight, behavior: 'smooth'
        });
    });
});