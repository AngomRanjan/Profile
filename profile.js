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
// || =========== Pop-Up Modal ============ ||*/
const arrProjects = [];

function addTitle(t) {
  const itemTitle = document.createElement('div');
  itemTitle.className = 'mc-titlebar';
  itemTitle.id = 'mc-titlebar';
  itemTitle.innerHTML = `<h2 class="mc-title" id="mc-title">${t}</h2>
  <button type="button" class="mc-btn" id="mc-close"> &times;</button>`;
  return itemTitle;
}

function addSummary(t) {
  const itemSummary = document.createElement('ul');
  itemSummary.classList.add('inline-li', 'project-summary');
  itemSummary.innerHTML = `<li class="client" id="mc-client">${t[0]}</li>
  <li class="type" id="mc-type">${t[1]}</li>
  <li class="year" id="mc-year">${t[2]}</li>`;
  return itemSummary;
}

function addSnapshot() {
  const itemSnapshot = document.createElement('div');
  itemSnapshot.className = 'mc-snap-place';
  itemSnapshot.innerHTML = `<img class="mc-snapshoot" src="images/mcSnapshot.png" alt="Snapshot of Project Tonic" id="mc-img">`;
  return itemSnapshot;
}

function addDetails() {
  const itemDetails = document.createElement('div');
  itemDetails.className = 'mc-l-block';
  itemDetails.innerHTML = `<div class="detail mc-l-block-l" id='mc-details'>
  <p class="project-descriptions" id="mc-desc">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a 
    type specimen book. It has survived not only five centuries, but also the leap 
    into electronic typesetting, remaining essent
  </p>
</div>
<div class="mc-l-block-r">
  <ul class="inline-li">
    <li class="tags mc-tags">html</li>
    <li class="tags mc-tags">css</li>
    <li class="tags mc-tags">javascripts</li>
    <li class="tags mc-tags">github</li>
    <li class="tags mc-tags">ruby</li>
  </ul>
  <div class="modal-btn-area">
    <button class="btn btn-modal" type="button" id="mc-btn1" onclick="location.href='https://angomranjan.github.io/Profile/'">See Live <img src="icons/Icon.png" alt="" class="btn-icn"></button>
    <button class="btn btn-modal" type="button" id="mc-btn2" onclick="location.href='https://github.com/AngomRanjan/Profile'">See Source <img src="icons/Vector.png" alt="" class="btn-icn"></button>
  </div>
</div>`;
  return itemDetails;
}

function addProjects() {
  // Stores Project Infos in arrProject
  const colTitles = ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber Navigation'];
  const colClient = ['Canopy', 'Facebook', 'Facebook', 'Uber'];
  const colRole = ['Back End', 'Full Stack', 'Full Stack', 'Lead Role'];
  const colYear = ['2015', '2015', '2015', '2018'];
  for (let i = 0; i < 4; i += 1) {
    // | creating a new project object an pushing it to arrProject
    const objProject = {};
    objProject.name = addTitle(colTitles[i]);
    objProject.summary = addSummary([colClient[i], colRole[i], colYear[i]]);
    objProject.snapshot = addSnapshot();
    objProject.details = addDetails();
    arrProjects.push(objProject);
  }
}
function hideModal() {
  const modPopUp = document.getElementById('modal-ui-wrapper');
  modPopUp.classList.toggle('md-show');
  document.body.classList.toggle('no-scroll');
  document.body.removeChild(document.body.lastChild);
}
function showProjectDetails(proID) {
  // showing  Project Info
  const modalPopUp = document.createElement('div');
  const modalCard = document.createElement('div');
  modalPopUp.className = 'modal-ui';
  modalPopUp.id = 'modal-ui-wrapper';
  modalCard.className = 'modal-card';
  modalCard.id = 'modal-card';
  modalCard.appendChild(arrProjects[proID - 1].name);
  modalCard.appendChild(arrProjects[proID - 1].summary);
  modalCard.appendChild(arrProjects[proID - 1].snapshot);
  modalCard.appendChild(arrProjects[proID - 1].details);
  modalPopUp.appendChild(modalCard);
  document.body.appendChild(modalPopUp);
  document.getElementById('mc-close').addEventListener('click', hideModal);
  document.body.classList.toggle('no-scroll');
}

// | Call Add Object function
addProjects();

// | Add Click Event Listners to Project Buttons
const btns = Array.from(document.getElementsByClassName('btn-projects'));
btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showProjectDetails(btn.id);
    event.stopPropagation();
  });
});

// || =========== Pop-UP Ends ==============|| */