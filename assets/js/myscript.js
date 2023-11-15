document.getElementById('menu_icon').addEventListener('click', () => {
    document.getElementById('menu_items').classList.toggle('active')
    document.getElementById('bgl-1').classList.toggle('rotate')
    document.getElementById('bgl-2').classList.toggle('hidden')
    document.getElementById('bgl-3').classList.toggle('rotate')
})