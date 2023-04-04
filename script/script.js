const mediaQueryMatch = window.matchMedia("only screen and (min-width: 900px) and (max-width: 1375px").matches

const toggleBios = () => {
    const bios = document.querySelectorAll('.bio')
    document.querySelectorAll('.profile').forEach((profile, index) => profile.addEventListener('click', (e) => {
        const display = bios[index].style.display
        if (display === 'none' || !display){
            bios[index].style.display = 'initial'
        }
        else {
            bios[index].style.display = 'none'
        }
}))
}

if (mediaQueryMatch){
    toggleBios()
}
