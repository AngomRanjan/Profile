// || =========== Pop-Up menu ============ ||*/
const main = document.getElementById('body');
const mobMenu = document.createElement('div');
mobMenu.classList.add('overlay-container', 'grid');
mobMenu.id = 'mobMenu';

function addItem(item, ...arg) {
  const pop = document.createElement(item);
  if (item === 'div') {
    [pop.textContent, pop.id] = ['\u2715', 'close'];
  } else {
    [pop.id, pop.href, pop.textContent, pop.className] = [...arg, 'overlay'];
  }
  return pop;
}

function hideMobMenu() {
  mobMenu.innerHTML = '';
  main.removeChild(mobMenu);
  document.body.classList.toggle('no-scroll');
}

document.getElementById('menu').addEventListener('click', () => {
  const arr = [['div'], ['a', 'link1', '#works', 'Portfolio'], ['a', 'link2', '#about', 'About'], ['a', 'link3', '#contacts', 'Contact']];
  arr.forEach((item) => mobMenu.appendChild(addItem(...item)));
  main.appendChild(mobMenu);
  document.body.classList.toggle('no-scroll');
  const popChildren = Array.from(mobMenu.children);
  popChildren.forEach((child) => child.addEventListener('click', hideMobMenu));
});

// || =========== Pop-Up Menu Ends============ ||*/

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
// ref
const projSnapshoot = (pImage, addClass = '') => {
  const snapshoot = document.createElement('div');
  snapshoot.className = 'snapshoot-placeholders';
  const image = document.createElement('img');
  image.className = (addClass === '' ? 'snapshoot' : 'mc-snapshoot');
  image.src = pImage;
  snapshoot.appendChild(image);
  return snapshoot;
};

const projTitle = (pName, addClass = 'project-titles my-15') => {
  const title = document.createElement('h2');
  title.classList = addClass;
  if (addClass === 'mc-title') title.id = 'mc-title';
  title.textContent = pName;
  return title;
};

const mcTbar = (pName) => {
  const titleBar = document.createElement('div');
  [titleBar.classList, titleBar.id] = ['mc-titlebar', 'mc-titlebar'];
  titleBar.appendChild(projTitle(pName, 'mc-title'));
  const mcBtn = document.createElement('button');
  [mcBtn.type, mcBtn.className, mcBtn.id, mcBtn.textContent] = ['button', 'mc-btn', 'mc-close', '\u2715'];
  titleBar.appendChild(mcBtn);
  return titleBar;
};

const projSummary = (summaries) => {
  const ulSummaries = document.createElement('ul');
  ulSummaries.classList.add('inline-li', 'project-summary');
  const liSummaries = Object.entries(summaries).map((summary) => {
    const liSum = document.createElement('li');
    [liSum.className, liSum.id] = summary;
    liSum.textContent = liSum.id;
    return liSum;
  });
  liSummaries.forEach((summary) => ulSummaries.appendChild(summary));
  return ulSummaries;
};

const pDetails = (details, pid = null) => {
  const pDescription = document.createElement('p');
  pDescription.className = 'project-descriptions';
  if (pid !== null) pDescription.id = pid;
  pDescription.textContent = details;
  return pDescription;
};

const pSkills = (skills, adClass = 'tag') => {
  const ulSkills = document.createElement('ul');
  ulSkills.className = 'tags';
  const liSkills = skills.map((skill) => {
    const liSkill = document.createElement('li');
    [liSkill.classList, liSkill.textContent] = [adClass, skill];
    return liSkill;
  });
  liSkills.forEach((skill) => ulSkills.appendChild(skill));
  return ulSkills;
};

const cardBtn = (cid) => {
  const btn = document.createElement('button');
  [btn.classList, btn.type, btn.id, btn.textContent] = ['btn btn-projects', 'button', cid, 'See Project'];
  return btn;
};

const modalBtnArea = (pLinks) => {
  const divBtn = document.createElement('div');
  divBtn.className = 'modal-btn-area';
  const mlink = pLinks.map((link, index) => {
    const imgIcon = document.createElement('img');
    [imgIcon.src, imgIcon.className] = ['icons/Icon.png', 'btn-icn'];
    const aLink = document.createElement('a');
    [aLink.classList, aLink.href, aLink.id] = ['btn btn-modal', link, `mc-btn${index + 1}`];
    aLink.textContent = (index === 0 ? 'See Live' : 'See Source');
    aLink.appendChild(imgIcon);
    return aLink;
  });

  mlink.forEach((link) => divBtn.appendChild(link));
  return divBtn;
};

// ref end
function compileCards(project) {
  const card = document.createElement('article');
  card.classList = 'cards grid grid-responsive';
  if (project.no % 2 === 0) card.classList.add('reverse');
  card.id = `card${project.no}`;
  card.appendChild(projSnapshoot(`images/SnapshootD${project.no}.jpg`));
  const divPro = document.createElement('div');
  divPro.className = 'projects';
  const arrFunc = [projTitle, projSummary, pDetails, pSkills, cardBtn];
  const arr = [project.name, project.summaries, project.details, project.skills, project.no];
  arrFunc.forEach((func, index) => divPro.appendChild(func(arr[index])));
  card.appendChild(divPro);
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
  const arrFunc = [mcTbar, projSummary, projSnapshoot, pDetails, pSkills, modalBtnArea];
  const arr = [[project.name], [project.summaries], [`images/SnapshootD${project.no}.jpg`, 'mc-snapshoot'], [project.details, 'mc-desc'], [project.skills, 'tag mc-tags'], [project.links]];
  arrFunc.forEach((func, index) => modalCard.appendChild(func(...arr[index])));
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
