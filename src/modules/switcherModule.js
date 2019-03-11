var activeButton = 1;

function changeButton() {
  activeButton = activeButton ? 0 : 1;
  document.querySelector('.switcher-button-1').disabled = !activeButton;
  document.querySelector('.switcher-button-2').disabled = activeButton;
}

Array.from(document.querySelectorAll('.switcher-button')).forEach(button => button.addEventListener('click', changeButton));

changeButton();