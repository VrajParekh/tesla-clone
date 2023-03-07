document.addEventListener('contextmenu', event => event.preventDefault());

const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active'
    document.querySelector('aside').className = 'active'
}

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop'
    document.querySelector('aside').className = 'aside'
}


document.getElementById('menuBtn').onclick = e => {
    e.preventDefault()
    openMenu()
}

document.getElementById('close').onclick = e => {
    e.preventDefault()
    closeMenu()
}
document.querySelector('.backdrop').onclick = e => {
    closeMenu()
}
