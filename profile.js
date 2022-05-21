const main = document.getElementById('body');
const mobMenu = document.createElement('div');
mobMenu.className = 'overlay-container';
mobMenu.id = 'mobMenu';

function addItem(item, itemId, iTarget, iText) {
  if (item === 'div') {
    item = document.createElement('div');
    item.textContent = '\u2715';
    item.id = 'close';
  } else {
    item = document.createElement('a');
    item.id = itemId;
    item.href = iTarget;
    item.textContent = iText;
    item.className = 'overlay';
  }
  return item;
}

function hideMobMenu() {
  mobMenu.innerHTML = '';
  document.body.removeChild(mobMenu);
  document.body.classList.toggle('no-scroll');
}

document.getElementById('menu').addEventListener('click', () => {
  mobMenu.appendChild(addItem('div'));
  mobMenu.appendChild(addItem('a', 'link1', '#works', 'Portfolio'));
  mobMenu.appendChild(addItem('a', 'link2', '#about', 'About'));
  mobMenu.appendChild(addItem('a', 'link3', '#contacts', 'Contact'));
  main.appendChild(mobMenu);
  document.body.classList.toggle('no-scroll');
  document.getElementById('close').addEventListener('click', hideMobMenu());
  document.getElementById('link1').addEventListener('click', hideMobMenu());
  document.getElementById('link2').addEventListener('click', hideMobMenu());
  document.getElementById('link3').addEventListener('click', hideMobMenu());
});

// || ================ Email Validation ============= ||

document.getElementById('contact-form').addEventListener('submit', (e) => {
  const errorMsg = document.getElementById('error-message');
  const arrEmail = document.getElementById('email').value;
  errorMsg.innerText = '';
  if (arrEmail !== arrEmail.toLowerCase() || arrEmail.match(/@[0-9a-z][\D\w]*?\./g) === null) {
    e.preventDefault();
    errorMsg.innerText = 'Invalid Email : Please Email should be in lowercase and contain a @ and . in it';
    errorMsg.style.color = 'red';
  }
});
// || ================ Email Validation ============= ||
