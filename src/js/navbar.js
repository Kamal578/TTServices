// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.querySelector('.relative.inline-block .absolute');


// menuButton.addEventListener('click', () => {
//   //remove the hidden class from the dropdown menu
//     dropdownMenu.classList.remove('hidden');
// });

// if dropdown is open, toggle hidden class, otherwise, remove hidden class

menuButton.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.remove('hidden');
    }
    else{
        dropdownMenu.classList.toggle('hidden');
    }
});

// handle loader

const loader = document.querySelector('.loader');
const body = document.querySelector('body');
body.style.overflow = 'hidden';

window.addEventListener('load', function() {
    loader.style.display = 'none';
    body.style.overflow = 'auto';
});
