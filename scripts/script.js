document.body.classList.add('js-ready')

const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const menuIcone = document.getElementById('menu-icone')
const links = document.querySelectorAll('.links')
const sections = document.querySelectorAll('main section[id]')
const elementos = document.querySelectorAll('.hidden')

function setMenuOpen(isOpen) {
    menu.classList.toggle('menu-open', isOpen)
    menuBtn.setAttribute('aria-expanded', String(isOpen))
    menuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu')
    menuIcone.classList.toggle('fa-bars', !isOpen)
    menuIcone.classList.toggle('fa-xmark', isOpen)
}

menuBtn.addEventListener('click', () => {
    setMenuOpen(menuBtn.getAttribute('aria-expanded') !== 'true')
})

links.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false))
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuOpen(false)
    }
})

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.12 })

    elementos.forEach((elemento) => revealObserver.observe(elemento))
} else {
    elementos.forEach((elemento) => elemento.classList.add('show'))
}

function updateActiveLink() {
    const currentSection = [...sections].reverse().find((section) => {
        return section.getBoundingClientRect().top <= 140
    })

    links.forEach((link) => {
        const isActive = currentSection && link.getAttribute('href') === `#${currentSection.id}`
        link.classList.toggle('active', Boolean(isActive))
    })
}

window.addEventListener('scroll', updateActiveLink, { passive: true })
window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 700px)').matches) {
        setMenuOpen(false)
    }
})
updateActiveLink()
