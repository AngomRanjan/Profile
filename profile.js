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

const arrProjects = [
  { no: '1', name: 'Tonic', summary: ['Canopy', 'Back End', '2015'], details: "A daily selection of privately personalized reads; no accounts or sign-ups required."},
  { no: '2', name: 'Multi-Post Stories', summary: ['Facebook', 'Full Stack', '2016'], details: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends."},
  { no: '3', name: 'Facebook 360', summary: ['Canopy', 'Full Stack', '2017'], details: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."},
  { no: '4', name: 'Uber Navigation', summary: ['Canopy', 'Lead Role', '2018'], details: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'},
];

function compileCards(project) {
  const card = document.createElement('div');
  card.className = 'cards';
  if (project.no === '2' || project.no === '4') card.classList.add('reverse');  
  card.id = 'card' + project.no;
  card.innerHTML=`<div class="snapshoot-placeholders">
  <img class="snapshoot" src="images/SnapshootD` + project.no + `.jpg" alt="Snapshot of Project Uber Navigation">
</div>
<div class="projects">
  <h2 class="project-titles">` + project.name + `</h2>
  <ul class="inline-li project-summary">
    <li class="client">` + project.summary[0] + `</li>
    <li class="type">` + project.summary[1] + `</li>
    <li class="year">` + project.summary[2] + `</li>
  </ul>
  <p class="project-descriptions">
  ` + project.details + `</p>
  <ul class="inline-li">
    <li class="tags">html</li>
    <li class="tags">Ruby on rails</li>
    <li class="tags">css</li>
    <li class="tags">javascripts</li>
  </ul>
  <button class="btn btn-projects" type="button" id="` + project.no + `">See Project</button>
</div>`;
return card;
}

const works = document.createElement('section');
works.className = 'works';
works.id = 'works';

for ( var i = 0; i < arrProjects.length; i += 1) {
  works.appendChild(compileCards(arrProjects[i]));
}

const about = document.getElementById('about');
about.parentNode.insertBefore(works,about);

function compileModalCards(project) {
  const modalCard = document.createElement('div');
  modalCard.className = 'modal-card';
  modalCard.id = 'modal-card';
  modalCard.innerHTML=`<div class="mc-titlebar id="mc-titlebar">
  <h2 class="mc-title" id="mc-title">${project.name}</h2>
  <button type="button" class="mc-btn" id="mc-close"> &times;</button>
  </div>
  <ul class="inline-li project-summary">
  <li class="client" id="mc-client">${project.summary[0]}</li>
  <li class="type" id="mc-type">${project.summary[1]}</li>
  <li class="year" id="mc-year">${project.summary[2]}</li>
  </ul>
  <div class="mc-snap-place">
  <img class="mc-snapshoot" src="images/mcSnapshot.png" alt="Snapshot of Project" id="mc-img">
  </div>
  <div class="mc-l-block">
  <div class="detail mc-l-block-l" id='mc-details'>
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
  </div>
  </div>`;
  return modalCard;
}

function hideModal() {
  const modPopUp = document.getElementById('modal-ui-wrapper');
  modPopUp.classList.toggle('md-show');
  document.body.classList.toggle('no-scroll');
  document.body.removeChild(document.body.lastChild);
}

function showProjectDetails(proID) {
  // showing  Project Info
  const modalPopUp = document.createElement('div');//   
  modalPopUp.className = 'modal-ui';
  modalPopUp.id = 'modal-ui-wrapper';
  modalPopUp.appendChild(compileModalCards(arrProjects[proID-1]));
  document.body.appendChild(modalPopUp);
  document.getElementById('mc-close').addEventListener('click', hideModal);
  document.body.classList.toggle('no-scroll');
}

// | Add Click Event Listners to Project Buttons
const btns = Array.from(document.getElementsByClassName('btn-projects'));
btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showProjectDetails(btn.id);
    event.stopPropagation();
  });
});
// || =========== Pop-UP Ends ==============|| */