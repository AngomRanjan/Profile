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
  // Stores Project Infos in arrProject
  const colTitles = document.getElementsByClassName('project-titles');
  const colClient = document.getElementsByClassName('client');
  const colRole = document.getElementsByClassName('type');
  const colYear = document.getElementsByClassName('year');
  for (let i = 0; i < colTitles.length; i++) {
    // | creating a new project object an pushing it to arrProject
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

function getProjectDetails(proID) {
  // Retrieving  Project Info
  return arrProjects[proID];
}

function showProjectDetails(proID) {
  // showing  Project Info
  const p=getProjectDetails(proID-1);
  let a = p.name +'\n'+p.client+" - "+p.year+' - ' +p.role
  alert(a);
}

addProjects();
console.table(getProjectDetails(2));
console.table(arrProjects);
// | Add Click Event Listners to Project Buttons
const btns = Array.from(document.getElementsByClassName('btn-projects'));
btns.forEach(btn => {
  btn.addEventListener('click',(event)=>{
    showProjectDetails(btn.id);
    event.stopPropagation;
  });
});
// || =========== Pop-UP Ends ==============||
