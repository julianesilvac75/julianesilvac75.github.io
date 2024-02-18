let iconContainer = document.getElementsByClassName('icon-container')[0];

function changeNavIcon(option) {
    let closeIcon = document.getElementsByClassName('fa-xmark')[0];
    let burgerIcon = document.getElementsByClassName('fa-burger')[0];

    if(option === 'open') {
        burgerIcon.id = 'hide-nav-icon';
        closeIcon.id = 'nav-icon';
    } else {
        closeIcon.id = 'hide-nav-icon';
        burgerIcon.id = 'nav-icon';
    }
};

iconContainer.addEventListener('click', () => {
    let navContainer = document.getElementsByClassName('nav-container')[0];
    let navContainerDisplay = window.getComputedStyle(navContainer).getPropertyValue('display');

    if(navContainerDisplay === 'none') {
        changeNavIcon('open');
        navContainer.style.display = 'flex';
    } else {
        changeNavIcon('close');
        navContainer.style.display = 'none';
    }
});



// navContainer[0].style.display = 'none';

// let projectBox = document.getElementsByClassName('project-box');

// console.log(projectBox);

// for (let index = 0; index < projectBox.length; index += 1) {
//     projectBox[index].addEventListener('click', function() {
//         let content = document.getElementsByClassName('content')[index];
//         let mainDisplay = window.getComputedStyle(content).getPropertyValue('display')
        
//         if(mainDisplay === 'none') {
//             content.style.display = 'unset';
//         } else {
//             content.style.display = 'none';
//         }
//     })
// }