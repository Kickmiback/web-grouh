let loginButton = document.querySelector('.login-button');
let logtnPopup = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();
    logtnPopup.classList.toggle('show-popup');

}