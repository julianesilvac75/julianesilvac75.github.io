let navIcon = document.getElementsByClassName('nav-icon');

navIcon[0].addEventListener('click', () => {
    let navContainer = document.getElementsByClassName('nav-container')[0];
    let navIcon = document.getElementsByClassName('nav-icon')[0];
    let navContainerDisplay = window.getComputedStyle(navContainer).getPropertyValue('display');

    if(navContainerDisplay === 'none') {
        navContainer.style.display = 'flex';
        navIcon.style.color = 'rgb(238, 229, 233)';
    } else {
        navContainer.style.display = 'none';
        navIcon.style.color = 'rgb(124, 124, 124)';
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