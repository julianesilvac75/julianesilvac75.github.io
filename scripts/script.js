let navIcon = document.getElementsByClassName('nav-icon');

navIcon[0].addEventListener('click', () => {
    let navContainer = document.getElementsByClassName('nav-container')[0];
    let navContainerDisplay = window.getComputedStyle(navContainer).getPropertyValue('display');

    if(navContainerDisplay === 'flex') {
        navContainer.style.display = 'none';
    } else {
        navContainer.style.display = 'flex';
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