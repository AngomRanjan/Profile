/* ============================================================
   PROFILE UI COMPOSITION SCRIPT
   ------------------------------------------------------------
   Purpose:
   - Handles all dynamic UI generation for the profile site:
     mobile menu, projects, modals, tags, and social links.

   Architecture Principles:
   - JS creates STRUCTURE and BEHAVIOR only
   - CSS owns layout, spacing, and visuals
   - No inline styles
   - No layout logic in JS

   Refactor Context:
   - This file participates in an incremental CSS
     design-system migration.
   - Documentation added to clarify responsibility
     boundaries during refactor.

============================================================ */


/* ============================================================
   MOBILE OVERLAY MENU SYSTEM
   ------------------------------------------------------------
   Responsibility:
   - Creates and manages the mobile navigation overlay
   - Toggles body scroll lock

   Notes:
   - Structure-only generation
   - Visual appearance controlled entirely by CSS
============================================================ */

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
  const arr = [
    ['div'],
    ['a', 'link1', '#works', 'Portfolio'],
    ['a', 'link2', '#about', 'About'],
    ['a', 'link3', '#contacts', 'Contact'],
  ];

  arr.forEach((item) => mobMenu.appendChild(addItem(...item)));
  main.appendChild(mobMenu);
  document.body.classList.toggle('no-scroll');

  const popChildren = Array.from(mobMenu.children);
  popChildren.forEach((child) => child.addEventListener('click', hideMobMenu));
});

// || =========== Pop-Up Menu Ends============ ||*/


/* ============================================================
   PROJECTS DATA SOURCE
   ------------------------------------------------------------
   Responsibility:
   - Acts as the single source of truth for project data
   - Consumed by card and modal generators

   Notes:
   - Data-only
   - No UI or layout logic
============================================================ */

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
    design of creative commons global summit 2015 designed by Cindy Shin in Behance.`,
    skills: ['html', 'css', 'JavaScripts'],
    links: ['https://angomranjan.github.io/CapstoneCyberSecurity/', 'https://github.com/AngomRanjan/CapstoneCyberSecurity'],
  },
  {
    no: '3',
    name: 'Bookstore',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `The Bookstore is a website similar to the "Awesome Books" website.`,
    skills: ['HTML', 'CSS', 'JavaScripts', 'React', 'React-Redux'],
    links: ['https://bookstore-angom.netlify.app/', 'https://github.com/AngomRanjan/bookstore'],
  },
  {
    no: '4',
    name: 'Stay Tune',
    summaries: { client: 'Self-Employed', role: 'Solo', year: '2022' },
    details: `A Simple tv show sites, which gives information about Shows telecast on TV Maze.`,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    links: ['https://stay-tune-angom.netlify.app/', 'https://github.com/AngomRanjan/stay-tune'],
  },
];


/* ============================================================
   SOCIAL MEDIA DATA SOURCE
============================================================ */

const arrSocialMedia = [
  { media: 'twitter', link: 'https://twitter.com/RanjanAngom', icon: 'images/twitter.png' },
  { media: 'linkedin', link: 'https://linkedin.com/in/angom-chittaranjan', icon: 'images/linkedin.png' },
  { media: 'medium', link: 'https://medium.com/', icon: 'images/medium.png' },
  { media: 'github', link: 'https://github.com/AngomRanjan', icon: 'images/github.png' },
  { media: 'angellist', link: 'https://angel.co/', icon: 'images/angellist.png' },
];


/* ============================================================
   UI FACTORY FUNCTIONS (STRUCTURE ONLY)
============================================================ */

const projSnapshoot = (pImage, addClass = '') => {
  const snapshoot = document.createElement('div');
  snapshoot.className = 'card-media snapshoot-placeholders';

  const image = document.createElement('img');
  image.className = (`card-image ${addClass === '' ? 'snapshoot' : 'mc-snapshoot'}`);
  image.src = pImage;

  snapshoot.appendChild(image);
  return snapshoot;
};

const projTitle = (pName, addClass = 'project-titles my-15') => {
  const title = document.createElement('h2');
  title.classList = `card-title ${addClass}`;
  if (addClass === 'mc-title') title.id = 'mc-title';
  title.textContent = pName;
  return title;
};

const mcTbar = (pName) => {
  const titleBar = document.createElement('div');
  [titleBar.classList, titleBar.id] = ['mc-titlebar', 'mc-titlebar'];

  titleBar.appendChild(projTitle(pName, 'mc-title'));

  const mcBtn = document.createElement('button');
  [mcBtn.type, mcBtn.className, mcBtn.id, mcBtn.textContent] =
    ['button', 'mc-btn', 'mc-close', '\u2715'];

  titleBar.appendChild(mcBtn);
  return titleBar;
};

const projSummary = (summaries) => {
  const ulSummaries = document.createElement('ul');
  ulSummaries.classList.add('card-meta','inline-li', 'project-summary');

  Object.entries(summaries).forEach((summary) => {
    const li = document.createElement('li');
    li.textContent = summary[0];
    ulSummaries.appendChild(li);
  });

  return ulSummaries;
};

const pDetails = (details, pid = null) => {
  const p = document.createElement('p');
  p.className = 'card-description project-descriptions';
  if (pid) p.id = pid;
  p.textContent = details;
  return p;
};


/* ============================================================
   TAGS SYSTEM — NORMALIZED CONTAINER
   ------------------------------------------------------------
   - `.tags-group` → structural container (future CQ hook)
   - `.tags`       → semantic list
   - `.tag`        → atomic pill component
============================================================ */

const pSkills = (skills, adClass = 'tag') => {
  const group = document.createElement('div');
  group.className = 'tags-group';

  const ul = document.createElement('ul');
  ul.className = 'tags';

  skills.forEach((skill) => {
    const li = document.createElement('li');
    li.className = adClass;
    li.textContent = skill;
    ul.appendChild(li);
  });

  group.appendChild(ul);
  return group;
};


/* ============================================================
   CARD + MODAL BUTTON FACTORIES
============================================================ */

const cardBtn = (cid) => {
  const btn = document.createElement('button');
  [btn.classList, btn.type, btn.id, btn.textContent] =
    ['btn btn-projects', 'button', cid, 'See Project'];
  return btn;
};

const modalBtnArea = (links) => {
  const div = document.createElement('div');
  div.className = 'modal-btn-area';

  links.forEach((link, index) => {
    const a = document.createElement('a');
    a.className = 'btn btn-modal';
    a.href = link;
    a.textContent = index === 0 ? 'See Live' : 'See Source';

    const img = document.createElement('img');
    img.src = 'icons/Icon.png';
    img.className = 'btn-icn';

    a.appendChild(img);
    div.appendChild(a);
  });

  return div;
};


/* ============================================================
   PROJECT CARD COMPILATION
============================================================ */

function compileCards(project) {
  const card = document.createElement('article');
  card.classList = 'card cards grid grid-responsive';
  if (project.no % 2 === 0) card.classList.add('reverse');
  card.id = `card${project.no}`;

  card.appendChild(projSnapshoot(`images/SnapshootD${project.no}.jpg`));

  const panel = document.createElement('div');
  panel.className = 'card-body panel panel--projects panel-spacing';

  const actions = document.createElement('div');
actions.className = 'card-actions';
actions.appendChild(cardBtn(project.no));

  panel.append(
    projTitle(project.name),
    projSummary(project.summaries),
    pDetails(project.details),
    pSkills(project.skills),
    actions,
  );

  card.appendChild(panel);
  return card;
}


/* ============================================================
   PROJECTS SECTION RENDER
============================================================ */

const works = document.createElement('section');
works.classList.add('works', 'grid');
works.id = 'works';

arrProjects.forEach((project) => works.appendChild(compileCards(project)));

const about = document.getElementById('about');
about.parentNode.insertBefore(works, about);


/* ============================================================
   MODAL SYSTEM (UNCHANGED BEHAVIOR)
============================================================ */

function compileModalCards(project) {
  const modalCard = document.createElement('div');
  modalCard.className = 'modal-card grid';
  modalCard.id = 'modal-card';

  const parts = [
    mcTbar(project.name),
    projSummary(project.summaries),
    projSnapshoot(`images/SnapshootD${project.no}.jpg`, 'mc-snapshoot'),
    pDetails(project.details, 'mc-desc'),
    pSkills(project.skills, 'tag mc-tags'),
    modalBtnArea(project.links),
  ];

  parts.forEach((p) => modalCard.appendChild(p));
  return modalCard;
}

function hideModal() {
  const modal = document.getElementById('modal-ui-wrapper');
  modal.classList.toggle('md-show');
  document.body.classList.toggle('no-scroll');
  document.body.removeChild(document.body.lastChild);
}

function showProjectDetails(proID) {
  const modal = document.createElement('div');
  modal.className = 'modal-ui';
  modal.id = 'modal-ui-wrapper';

  modal.appendChild(compileModalCards(arrProjects[proID - 1]));
  document.body.appendChild(modal);

  document.getElementById('mc-close')
    .addEventListener('click', hideModal);

  document.body.classList.toggle('no-scroll');
}


/* ============================================================
   SOCIAL LINKS RENDERING
============================================================ */

function compileSocial(social, index) {
  social.innerHTML = `
    <h3 class="head3 my-15" id="social-${index}">LET’S CONNECT</h3>
    <ul class="inline-li">
      ${arrSocialMedia.map(
        (s) => `<li><a href="${s.link}">
          <img class="icons" src="${s.icon}" alt="${s.media}">
        </a></li>`
      ).join('')}
    </ul>`;
}

Array.from(document.getElementsByClassName('social-media'))
  .forEach((social, i) => compileSocial(social, i + 1));


/* ============================================================
   EVENT WIRING — PROJECT MODALS
============================================================ */

Array.from(document.getElementsByClassName('btn-projects'))
  .forEach((btn) => {
    btn.addEventListener('click', (e) => {
      showProjectDetails(btn.id);
      e.stopPropagation();
    });
  });

// || =========== Pop-UP Ends ==============|| */
