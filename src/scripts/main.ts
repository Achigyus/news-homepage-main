import '../sass/index.sass'

let menuBtn = document.getElementById('menu_btn') as HTMLButtonElement
let menuOpenState = false


function toggleMenu() {
    if (menuBtn) {
        console.log(
            'Menu button clicked. Current state: ' + menuOpenState + '. Toggling...'
        )
        let openImg = menuBtn.querySelector('img.open') as HTMLImageElement
        let closeImg = menuBtn.querySelector('img.close') as HTMLImageElement
        let menu = document.getElementById('nav_links_ul') as HTMLUListElement

        if (menuOpenState) {
            openImg.classList.add('hidden')
            closeImg.classList.remove('hidden')
            menu.classList.remove('hidden')
            menuOpenState = false
        } else {
            openImg.classList.remove('hidden')
            closeImg.classList.add('hidden')
            menu.classList.add('hidden')
            menuOpenState = true
        }
    }
}

menuBtn.addEventListener('click', toggleMenu)