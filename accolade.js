const arrLang = [['images/js.png', 'JavaScripts'], ['images/html.png', 'HTML'], ['images/css.png', 'CSS'], ['images/ruby.png', 'Ruby']];
const arrFw = [['images/react.png', 'React JS'], ['images/rails.png', 'Rails'], ['images/bootstrap.png', 'Bootstrap'], ['images/tailwind.png', 'Tailwindcss']];
const arrSkl = [['images/mentor.png', 'Mentoring'], ['images/leadership.png', 'Leadership'], ['images/pairpro.png', 'Remote Pair Programming'], ['images/team.png', 'Teamwork']];

const toggleAcCtrl = (acCtrl) => {
  acCtrl.name = acCtrl.name === 'close' ? 'open' : 'close';
  acCtrl.src = acCtrl.name === 'open' ? 'icons/drop.png' : 'icons/open.png';
};

const resetAc = () => {
  const acs = Array.from(document.querySelectorAll('.skills-dropdown > .icons > img'));
  acs.forEach((item) => { [item.name, item.src] = ['close', 'icons/open.png']; });
  const acSib = Array.from(document.querySelectorAll('.skills-dropdown'));
  acSib.forEach((item) => { item.classList = 'flex skills-dropdown border-b'; });
};

const removeAcc = (acNode) => {
  if (acNode) acNode.parentNode.removeChild(acNode);
};

const appendAcc = (curNode) => {
  const newUl = document.createElement('ul');
  [newUl.id, newUl.classList] = ['ta', 'language-ul border-b'];
  const proj = curNode.parentNode.parentNode;
  proj.classList.toggle('border-b');
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
  if (curNode.name === 'close') curNode.parentNode.parentNode.classList = 'flex skills-dropdown border-b';
  e.stopPropagation();
};
const acc = Array.from(document.querySelectorAll('.skills-dropdown > .icons > img'));
acc.forEach((item) => item.addEventListener('click', handleAcClick));

document.getElementById('t').click();
