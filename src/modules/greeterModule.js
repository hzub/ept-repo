function greet() {
  var name = document.querySelector('#greeter-name').value;
  var container = document.querySelector('#greeter-container');
  if (!name) {
    return;
  }
  container.innerHTML = name;
  container.style.opacity = 1;
  setTimeout(() => {
    container.style.opacity = 0;
  }, 1250);
}

document.querySelector('#greeter-button').addEventListener('click', greet);
