//const {ipcRenderer}  = require('electron')

document.addEventListener('DOMContentLoaded', () => {
    const $ = selector => document.querySelector(selector)

    const $count = $('#count')
    const $button = $('#button')

    $button.addEventListener('click', () => {
        const count = +$count.innerHTML
        $count.innerHTML = (count + 1).toString()
    })

    window.electronAPI.onUpdateTheme((event, theme) => {
        const root = document.documentElement
        root.style.setProperty('--scheme', theme)
    })

    // ipcRenderer.on('theme', (event, theme) => {
    //     console.log(event, theme)
    // })
})
