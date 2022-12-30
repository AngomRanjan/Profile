const arrLang = [['images/js.png', 'JavaScripts'], ['images/html.png', 'HTML'], ['images/css.png', 'CSS'], ['images/css.png', 'Ruby']];
const arrFw = [['images/js.png', 'React'], ['images/html.png', 'Rails'], ['images/html.png', 'Tailwindcss']];
const arrSkl = [['images/js.png', 'name'], ['images/js.png', 'name2']];

const toggleAcCtrl = (acCtrl) => {
  acCtrl.name = acCtrl.name === 'close' ? 'open' : 'close';
  acCtrl.src = acCtrl.name === 'open' ? 'icons/drop.png' : 'icons/open.png';
};

const resetAc = () => {
  const acs = Array.from(document.querySelectorAll('.skills-dropdown > .icons > img'));
  acs.forEach((item) => { [item.name, item.src] = ['close', 'icons/open.png']; });
};

const removeAcc = (acNode) => {
  if (acNode) acNode.parentNode.removeChild(acNode);
};

const appendAcc = (curNode) => {
  const newUl = document.createElement('ul');
  [newUl.id, newUl.classList] = ['ta', 'language-ul'];
  const proj = curNode.parentNode.parentNode;
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
  proj.parentNode.insertBefore(newUl, proj.nextElementSibling);
};
const handleAcClick = (e) => {
  const curNode = e.target;
  removeAcc(document.getElementById('ta'));
  if (curNode.name === 'close') {
    resetAc();
    appendAcc(curNode);
  }
  toggleAcCtrl(curNode);
  e.stopPropagation();
};
const acc = Array.from(document.querySelectorAll('.skills-dropdown > .icons > img'));
acc.forEach((item) => item.addEventListener('click', handleAcClick));

document.getElementById('t').click();
