let projectBox = document.getElementsByClassName('project-box');

console.log(projectBox);

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