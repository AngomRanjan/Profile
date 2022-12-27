const main = document.getElementById('body');
const mobMenu = document.createElement('div');
mobMenu.classList.add('overlay-container', 'grid');
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
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `A Simple Clone of Facebook with google signin facility. User can post message and image
    . This app was built with React and Redux with backend support from firebase v9.`,
    skills: ['html', 'css', 'javascripts', 'react', 'redux', 'firebase'],
    links: ['https://facebook-clone-993ad.web.app/', 'https://github.com/AngomRanjan/fb-clone'],
  },
  {
    no: '2',
    name: 'Virtual Defense',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `In this Project I have created a site for 
    an Imaginary cyber security company, Virtual Defense based on the 
    design of creative commons global summit 2015 designed by Cindy Shin in Behance. 
    Here I created only two pages Home page and About Page using HTML, CSS and Javascript.`,
    skills: ['html', 'css', 'JavaScripts'],
    links: ['https://angomranjan.github.io/CapstoneCyberSecurity/', 'https://github.com/AngomRanjan/CapstoneCyberSecurity'],
  },
  {
    no: '3',
    name: 'Bookstore',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `The Bookstore is a website similar to the "Awesome Books" website 
    built in the previous module. You will create an MVP version of it that allows you to:
    Display a list of books. Add a book. Remove a selected book.`,
    skills: ['HTML', 'CSS', 'JavaScripts', 'React', 'React-Redux'],
    links: ['https://bookstore-angom.netlify.app/', 'https://github.com/AngomRanjan/bookstore'],
  },
  {
    no: '4',
    name: 'Stay Tune',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `A Simple tv show sites, which gives information about Shows telecast on TV Maze. 
    I choose a dark color theme for this particular project. I have used a shade of black (#1b1b1b). 
    I would like to thank Nelson Sakwa on Behance for the original design idea. 
    This app was build using HTML, CSS, JavaScript, React and Redux.`,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    links: ['https://stay-tune-angom.netlify.app/', 'https://github.com/AngomRanjan/stay-tune'],
  },
];

const arrSocialMedia = [
  {
    media: 'twitter',
    link: 'https://twitter.com/RanjanAngom',
    icon: 'images/twitter.png',
  },
  {
    media: 'linkedin',
    link: 'https://linkedin.com/in/angom-chittaranjan',
    icon: 'images/linkedin.png',
  },
  {
    media: 'medium',
    link: 'https://medium.com/',
    icon: 'images/medium.png',
  },
  {
    media: 'github',
    link: 'https://github.com/AngomRanjan',
    icon: 'images/github.png',
  },
  {
    media: 'angellist',
    link: 'https://angel.co/',
    icon: 'images/angellist.png',
  },
];

function compileCards(project) {
  const card = document.createElement('article');
  card.classList.add('cards', 'grid', 'grid-responsive');
  if (project.no === '2' || project.no === '4') card.classList.add('reverse');
  card.id = `card${project.no}`;
  card.innerHTML = `<div class="snapshoot-placeholders">
  <img class="snapshoot" src="images/SnapshootD${project.no}.jpg" alt="">
</div>
<div class="projects">
  <h2 class="project-titles my-15">${project.name}</h2>
  <ul class="inline-li project-summary">
    ${(Object.entries(project.summaries).map((summary) => (
    `<li class='${summary[0]}'>${summary[1]}</li>`))).join(' ')}    
  </ul>
  <p class="project-descriptions my-15">
  ${project.details}</p>
  <ul class="tags">
  ${(project.skills.map((skill) => (`<li class='tag'>${skill}</li>`))).join(' ')}
  </ul>
  <button class="btn btn-projects" type="button" id="${project.no}">See Project</button>
</div>`;
  return card;
}

const works = document.createElement('section');
works.classList.add('works', 'grid');
works.id = 'works';

for (let i = 0; i < arrProjects.length; i += 1) {
  works.appendChild(compileCards(arrProjects[i]));
}

const about = document.getElementById('about');
about.parentNode.insertBefore(works, about);

function compileModalCards(project) {
  const modalCard = document.createElement('div');
  modalCard.className = 'modal-card grid';
  modalCard.id = 'modal-card';
  modalCard.innerHTML = `<div class="mc-titlebar id="mc-titlebar">
  <h2 class="mc-title" id="mc-title">${project.name}</h2>
  <button type="button" class="mc-btn" id="mc-close"> &times;</button>
  </div>
  <ul class="inline-li project-summary">
  ${(Object.entries(project.summaries).map((summary) => (
    `<li class='${summary[0]} id='mc-${summary[0]}'>${summary[1]}</li>`))).join(' ')}
  </ul>
  <div class="mc-snap-place">
  <img class="mc-snapshoot" src="images/SnapshootD${project.no}.jpg" alt="Snapshot of Project" id="mc-img">
  </div>
  <p class="project-descriptions" id="mc-desc">
    ${project.details}
  </p>
  <ul class="tags">
  ${(project.skills.map((skill) => (`<li class='tag  mc-tags'>${skill}</li>`))).join(' ')}
  </ul>
  <div class="modal-btn-area">
  ${(Object.entries(project.links).map((link, index) => (
    `<button class="btn btn-modal" type="button" id="mc-btn${index + 1}" onclick="location.href='${link[1]}'">
    ${(index === 0 ? 'See Live' : 'See Source')} <img src="icons/Icon.png" alt="" class="btn-icn"></button>`))).join(' ')}
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

function compileSocial(social, index) {
  social.innerHTML = `<h3 class="head3 my-15" id="social-${index}">LET’S CONNECT</h3>
  <ul class='inline-li'>
  ${(arrSocialMedia.map((soc) => `<li class='social-items'><a href='${soc.link}'><img class='icons' src='${soc.icon}' alt='${soc.media}'></a></li>`)).join('')}
  </ul>`;
}

const socialMedia = Array.from(document.getElementsByClassName('social-media'));
socialMedia.forEach((social, i) => compileSocial(social, i + 1));

// | Add Click Event Listners to Project Buttons
const btns = Array.from(document.getElementsByClassName('btn-projects'));
btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showProjectDetails(btn.id);
    event.stopPropagation();
  });
});

// || =========== Pop-UP Ends ==============|| */
