// Barra de navegação

const menuBars = document.getElementById('bars-menu');

menuBars.addEventListener('click', () => {
    const topNav = document.getElementById('nav-container');
    const navDisplay = window.getComputedStyle(topNav).getPropertyValue('display');

    (navDisplay === 'flex') ? topNav.style.display = 'none' : topNav.style.display = 'flex';
})

// Seção projetos

const projectBox = document.getElementsByClassName('project-box');

for (let index = 0; index < projectBox.length; index += 1) {
    projectBox[index].addEventListener('click', function() {
        let content = document.getElementsByClassName('content')[index];
        let mainDisplay = window.getComputedStyle(content).getPropertyValue('display')
        
        if(mainDisplay === 'none') {
            content.style.display = 'unset';
        } else {
            content.style.display = 'none';
        }
    })
}