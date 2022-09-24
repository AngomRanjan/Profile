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
  {
    no: '1',
    name: 'FB-Clone',
    summary: ['Self-Employed', 'Solo', '2022'],
    details: `A Simple Clone of Facebook with google signin facility. User can post message and image
    . This app was built with React and Redux with backend support from firebase v9.`,
    skills: ['javascripts', 'react-redux', 'firebase'],
    links: ['https://fb-clone-angom.netlify.app/', 'https://github.com/AngomRanjan/fb-clone'],
  },
  {
    no: '2',
    name: 'FB-Clone',
    summary: ['Self', 'Sole Developer', '2022'],
    details: `A Simple Clone of Facebook with google signin facility. User can post message and image
    . This app was built with React and Redux with backend support from firebase v9.`,
    skills: ['javascripts', 'react', 'redux', 'firebase'],
    links: ['https://fb-clone-angom.netlify.app/', 'https://github.com/AngomRanjan/fb-clone'],
  },
  {
    no: '3',
    name: 'FB-Clone',
    summary: ['Self', 'Sole Developer', '2022'],
    details: `A Simple Clone of Facebook with google signin facility. User can post message and image
    . This app was built with React and Redux with backend support from firebase v9.`,
    skills: ['javascripts', 'react', 'redux', 'firebase'],
    links: ['https://fb-clone-angom.netlify.app/', 'https://github.com/AngomRanjan/fb-clone'],
  },
  {
    no: '4',
    name: 'FB-Clone',
    summary: ['Self-Employed', 'Solo', '2022'],
    details: `A Simple Clone of Facebook with google signin facility. User can post message and image
    . This app was built with React and Redux with backend support from firebase v9.`,
    skills: ['javascripts', 'react', 'redux', 'firebase'],
    links: ['https://fb-clone-angom.netlify.app/', 'https://github.com/AngomRanjan/fb-clone'],
  },
];

function compileCards(project) {
  const card = document.createElement('div');
  card.className = 'cards';
  if (project.no === '2' || project.no === '4') card.classList.add('reverse');
  card.id = `card${project.no}`;
  card.innerHTML = `<div class="snapshoot-placeholders">
  <img class="snapshoot" src="images/SnapshootD${project.no}.jpg" alt="Snapshot of Project Uber Navigation">
</div>
<div class="projects">
  <h2 class="project-titles">${project.name}</h2>
  <ul class="inline-li project-summary">
    <li class="client">${project.summary[0]}</li>
    <li class="type">${project.summary[1]}</li>
    <li class="year">${project.summary[2]}</li>
  </ul>
  <p class="project-descriptions">
  ${project.details}</p>
  <ul class="inline-li">
  ${(project.skills.map((skill) => ("<li class='tags'>" + skill + "</li>"))).join(" ")}
  </ul>
  <button class="btn btn-projects" type="button" id="${project.no}">See Project</button>
</div>`;
  return card;
}

const works = document.createElement('section');
works.className = 'works';
works.id = 'works';

for (let i = 0; i < arrProjects.length; i += 1) {
  works.appendChild(compileCards(arrProjects[i]));
}

const about = document.getElementById('about');
about.parentNode.insertBefore(works, about);

function compileModalCards(project) {
  const modalCard = document.createElement('div');
  modalCard.className = 'modal-card';
  modalCard.id = 'modal-card';
  modalCard.innerHTML = `<div class="mc-titlebar id="mc-titlebar">
  <h2 class="mc-title" id="mc-title">${project.name}</h2>
  <button type="button" class="mc-btn" id="mc-close"> &times;</button>
  </div>
  <ul class="inline-li project-summary">
  <li class="client" id="mc-client">${project.summary[0]}</li>
  <li class="type" id="mc-type">${project.summary[1]}</li>
  <li class="year" id="mc-year">${project.summary[2]}</li>
  </ul>
  <div class="mc-snap-place">
  <img class="mc-snapshoot" src="images/SnapshootD${project.no}.jpg" alt="Snapshot of Project" id="mc-img">
  </div>
  <div class="mc-l-block">
  <div class="detail mc-l-block-l" id='mc-details'>
  <p class="project-descriptions" id="mc-desc">
    ${project.details}
  </p>
  </div>
  <div class="mc-l-block-r">
  <ul class="inline-li">
  ${(project.skills.map((skill) => ("<li class='tags  mc-tags'>" + skill + "</li>"))).join(" ")}
  </ul>
  <div class="modal-btn-area">
    <button class="btn btn-modal" type="button" id="mc-btn1" onclick="location.href='${project.links[0]}'">See Live <img src="icons/Icon.png" alt="" class="btn-icn"></button>
    <button class="btn btn-modal" type="button" id="mc-btn2" onclick="location.href='${project.links[1]}'">See Source <img src="icons/Vector.png" alt="" class="btn-icn"></button>
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
  modalPopUp.appendChild(compileModalCards(arrProjects[proID - 1]));
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