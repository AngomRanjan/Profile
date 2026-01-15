const arrLang = [['images/js.png', 'JavaScripts'], ['images/html.png', 'HTML'], ['images/css.png', 'CSS'], ['images/ruby.png', 'Ruby']];
const arrFw = [['images/react.png', 'React JS'], ['images/rails.png', 'Rails'], ['images/bootstrap.png', 'Bootstrap'], ['images/tailwind.png', 'Tailwindcss']];
const arrSkl = [['images/mentor.png', 'Mentoring'], ['images/leadership.png', 'Leadership'], ['images/pairpro.png', 'Remote Pair Programming'], ['images/team.png', 'Teamwork']];

const toggleAcCtrl = (acCtrl) => {
  acCtrl.name = acCtrl.name === 'close' ? 'open' : 'close';
  acCtrl.src = acCtrl.name === 'open' ? 'icons/drop.png' : 'icons/open.png';
};

const resetAc = () => {
  document
    .querySelectorAll('.accordion-header')
    .forEach(h => h.dataset.state = 'closed');

  removeAcc(document.getElementById('ta'));
};

const removeAcc = (acNode) => {
  if (acNode) acNode.parentNode.removeChild(acNode);
};

const appendAcc = (curNode) => {
  const newUl = document.createElement('ul');
  [newUl.id, newUl.classList] = ['ta', 'language-ul border-b'];
  const proj = curNode;
  
  let arr = [];
  if (proj.textContent.trim(' ') === 'Skills') {
    arr = arrSkl;
  } else if (proj.textContent.trim(' ') === 'Frameworks') {
    arr = arrFw;
  } else {
    arr = arrLang;
  }
  const newLi = arr.map((item) => {
    const myLi = document.createElement('li');
    const imgSrc = document.createElement('img');
    [imgSrc.src, myLi.textContent] = item;
    myLi.insertBefore(imgSrc, myLi.firstChild);
    return myLi;
  });
  newLi.map((i) => newUl.appendChild(i));
  proj.insertAdjacentElement('afterend', newUl);
};

const handleAcClick = (e) => {
  const header = e.currentTarget;
  const isOpen = header.dataset.state === 'open';

  resetAc();

  if (!isOpen) {
    header.dataset.state = 'open';
    appendAcc(header);
  } else {
    header.dataset.state = 'closed';
  }
};

const acc = Array.from(
  document.querySelectorAll('.accordion-header')
);
acc.forEach((item) => item.addEventListener('click', handleAcClick));

document
  .querySelector('.accordion-header')
  ?.dispatchEvent(new Event('click'));
