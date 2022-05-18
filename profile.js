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
  main.removeChild(mobMenu);
  document.body.classList.toggle('no-scroll');
}

document.getElementById('menu').addEventListener('click', () => {
  mobMenu.appendChild(addItem('div'));
  mobMenu.appendChild(addItem('a', 'link1', '#works', 'Portfolio'));
  mobMenu.appendChild(addItem('a', 'link2', '#about', 'About'));
  mobMenu.appendChild(addItem('a', 'link3', '#contacts', 'Contact'));
  main.appendChild(mobMenu);
  document.body.classList.toggle('no-scroll');
  document.getElementById('close').addEventListener('click', hideMobMenu);
  document.getElementById('link1').addEventListener('click', hideMobMenu);
  document.getElementById('link2').addEventListener('click', hideMobMenu);
  document.getElementById('link3').addEventListener('click', hideMobMenu);
});
// || =========== Pop-Up Modal ============ ||
const arrProjects = [];
function addProjects() {
  // for stores Project Infos in arrProject
  const colTitles = document.getElementsByClassName('project-titles');
  const colClient = document.getElementsByClassName('client');
  const colRole = document.getElementsByClassName('type');
  const colYear = document.getElementsByClassName('year');
  for (let i = 0; i < colTitles.length; i++) {
    const objProject = {};
    objProject.name = colTitles[i].textContent;
    objProject.client = colClient[i].textContent;
    objProject.role = colRole[i].textContent;
    objProject.year = colYear[i].textContent;
    objProject.tags = ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'];
    objProject.snapshot = `images/SnapshootD${i}.jpg`;
    arrProjects.push(objProject);
  }
}
addProjects();
console.table(arrProjects);
// || =========== Pop-UP Ends ==============||