
const handleSideNavToggle = (event) => {
    const header = document.getElementById('header')
    const navbar = document.getElementById('sideHeader');
    return event.target.dataset['command'] === 'open' ? (() => {
        
        navbar.style.left = '0px';
        header.classList.add('removeBoxShadow')
        document.body.classList.add('bodyLooseFocus')
    })() :
        (() => { navbar.style.left = '-350px';
        header.classList.remove('removeBoxShadow')
        document.body.classList.remove('bodyLooseFocus')
    })()
}

module.exports = { handleSideNavToggle }