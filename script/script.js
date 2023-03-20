const mediaQueryMatch = window.matchMedia("only screen and (min-width: 900px) and (max-width: 1375px").matches

const toggleBios = () => {
    const bios = document.querySelectorAll('.bio')
    document.querySelectorAll('img').forEach((profile, index) => profile.addEventListener('click', (e) => {
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





// bios.forEach((bio) => bio.style.display = 'none')

// document.querySelector('#bell').addEventListener('click', () => console.log('yeehaw'))