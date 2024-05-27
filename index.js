window.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('note')
    const savenote = localStorage.getItem('note')
    
    if (savenote) {
        textarea.value = savenote
    }

    textarea.addEventListener('input', () => {
        localStorage.setItem('note', textarea.value)
    })
})