import '../sass/index.sass'

let menuBtn = document.getElementById('menu_btn') as HTMLButtonElement
let overlay = document.getElementById('overlay') as HTMLDivElement
let menuOpenState = false
let menuLinks = document.querySelectorAll('#nav_links_ul li a') as NodeListOf<HTMLAnchorElement>


function toggleMenu() {
    if (menuBtn) {
        console.log(
            'Menu button clicked. Current state: ' + menuOpenState + '. Toggling...'
        )
        let openImg = menuBtn.querySelector('img.open') as HTMLImageElement
        let closeImg = menuBtn.querySelector('img.close') as HTMLImageElement
        let menu = document.getElementById('nav_links_ul') as HTMLUListElement
        if (!openImg || !closeImg || !menu) {
            console.error('Menu button or images not found')
            return
        }
        updateDOM(openImg, closeImg, menu, overlay, !menuOpenState)
    }
}

function updateDOM(open: HTMLImageElement, close: HTMLImageElement, menu: HTMLUListElement, overlay: HTMLDivElement, state: boolean) {
    open.classList.toggle('hidden', state)
    close.classList.toggle('hidden', !state)
    menu.classList.toggle('active', state)
    overlay.classList.toggle('active', state)
    menuOpenState = state
    menuBtn.setAttribute('aria-expanded', `${state}`)

}

menuBtn.addEventListener('click', toggleMenu)
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (menuOpenState) {
            let openImg = menuBtn.querySelector('img.open') as HTMLImageElement
            let closeImg = menuBtn.querySelector('img.close') as HTMLImageElement
            let menu = document.getElementById('nav_links_ul') as HTMLUListElement
            updateDOM(openImg, closeImg, menu, overlay, false)
        }
    })
})