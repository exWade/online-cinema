const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play__wrap');
const iframe = document.getElementById('iframe-modal');
const headerFind = document.querySelector('.header__find');

let findInput = headerFind.querySelector('input');
let iframeSource = iframe.src;

buttonsModal.forEach((item, i) => {
  item.addEventListener('click', () => {
    modalWindow.classList.add('active');
    iframe.src = iframeSource;
  });
});

findInput.addEventListener('input', (e) => {
  
  if (e.target.value) {
    findInput.style.backgroundImage = "url(/img/eraseInput.svg)";
  }
  else {
    findInput.style.backgroundImage = "url(/img/Combined-Shape.svg)";
  }
});

modalWindow.addEventListener('click', () => {
  modalWindow.classList.remove('active');
  iframe.src = '';
})