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

function toggleMenu() {
    let navContainer = document.getElementsByClassName('nav-container')[0];
    let navContainerDisplay = window.getComputedStyle(navContainer).getPropertyValue('display');
    let nameContainer = document.getElementsByClassName('name-container')[0];
    let arrowsDown = document.getElementById('arrows-down');

    if(navContainerDisplay === 'none') {
        changeNavIcon('open');
        navContainer.style.display = 'flex';
        nameContainer.style.display = 'none';
        arrowsDown.style.display = 'none';
    } else {
        changeNavIcon('close');
        navContainer.style.display = 'none';
        nameContainer.style.display = 'unset';
        arrowsDown.style.display = 'unset';
    }
}

iconContainer.addEventListener('click', toggleMenu);

var emojiV = document.getElementsByClassName('emoji-v')[0];

function displayEmoji(option) {
	emojiV.style.display = option;
}

function changingEmoji(displayEmoji) {
	setTimeout(() => displayEmoji('none'), 1200);
	setTimeout(() => displayEmoji('unset'), 1300);
	
	setTimeout(() => displayEmoji('none'), 3000);
	setTimeout(() => displayEmoji('unset'), 3200);
}

changingEmoji(displayEmoji);
let changingInterval = setInterval(() => changingEmoji(displayEmoji), 8000)

setTimeout(() => {
	clearInterval(changingInterval)
}, 1000*1000);
