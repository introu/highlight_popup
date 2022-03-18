const text = document.querySelector('#highlight')

const wordBase = [
    {
        word: 'paliwo',
        description: `«substancja palna używana do zasilania maszyn»`
    },
    {
        word: 'samochód',
        description: 'To jest samochód'
    },
    {
        word: 'napęd',
        description: 'To jest napęd'
    },
    {
        word: 'silnik',
        description: 'To jest silnik'
    },
    {
        word: 'kilometr',
        description: 'To jest kilometr'
    },
    {
        word: 'koszt',
        description: 'To jest koszt'
    },
    {
        word: 'olej',
        description: 'To jest olej'
    },
    {
        word: 'Honda',
        description: 'To jest Honda'
    },
    {
        word: 'benzyna',
        description: 'To jest benzyna'
    },
]


for (let i = 0; i < wordBase.length; i++) {
    let regex = new RegExp(`${wordBase[i].word}`, "gi");
    text.innerHTML = text.innerHTML.replace(regex, `<span class="choose">${wordBase[i].word}<span class="popup">
    ${wordBase[i].description}</span></span>`);
}
