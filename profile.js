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

const cardMedia = (projectNo) => {
  const mediaContainer = document.createElement('div');
  mediaContainer.className = 'card-media';

  const image = document.createElement('img');
  image.src = `images/SnapshootD${projectNo}.jpg`;
  image.alt = 'Project Looks'
  
  mediaContainer.appendChild(image);
  return mediaContainer;
};

const projTitle = (pName) => {
  const title = document.createElement('h2');
  title.classList = `card-title`;
  title.textContent = pName;
  return title;
};

const projSummary = (summaries) => {
  const ulSummaries = document.createElement('ul');
  ulSummaries.className = 'card-meta';

  Object.entries(summaries).forEach((summary) => {
    const li = document.createElement('li');
    li.textContent = summary[1];
    ulSummaries.appendChild(li);
  });

  return ulSummaries;
};

const pDetails = (details, pid = null) => {
  const p = document.createElement('p');
  p.className = 'card-description';
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
   CARD BUTTON FACTORIES
============================================================ */

const cardActions = (links) => {
  const div = document.createElement('div');
  div.className = 'card-actions';

  links.forEach((link, index) => {
    const a = document.createElement('a');
    a.className = 'btn';
    a.href = link;
    a.target = '_blank'
    a.textContent = index === 0 ? 'Go Live' : 'View Source';

    const icon = document.createElement('span');
    icon.className = 'icon icon--sm';
    icon.dataset.icon = index === 0 ? 'live-project' : 'source-code';

    a.prepend(icon);
    div.appendChild(a);
  });

  return div;
};

const cardBody = (project) => {
  const panel = document.createElement('div');
  panel.className = 'card-body';

  panel.append(
    projTitle(project.name),
    projSummary(project.summaries),
    pDetails(project.details),
    pSkills(project.skills),
    cardActions(project.links)
  );

  return panel
}


/* ============================================================
   PROJECT CARD COMPILATION
============================================================ */

function compileCards(project) {
  const card = document.createElement('article');
  card.classList = 'card bg-surface';
  if (project.no % 2 === 0) card.classList.add('card--reverse');
  card.id = `card${project.no}`;

  card.appendChild(cardMedia(project.no));
  card.appendChild(cardBody(project));
  return card;
}


/* ============================================================
   PROJECTS SECTION RENDER
============================================================ */

const works = document.createElement('section');
works.classList.add('works', 'grid');
works.id = 'works';

const container = document.createElement('div');
container.className = 'container container--narrow';

arrProjects.forEach((project) => {
  container.appendChild(compileCards(project));
});

works.appendChild(container);

const about = document.getElementById('about');
about.parentNode.insertBefore(works, about);

/* ============================================================
   SOCIAL LINKS RENDERING
============================================================ */

function compileSocial(social, index) {
  social.innerHTML = `
    <h3 class="fs-md fw-medium text-accent" id="social-${index}">LET’S CONNECT</h3>
    <ul class="inline-li">
      ${arrSocialMedia.map(
        (s) => `<li><a href="${s.link}" target="_blank">
          <span class="icon" data-icon="${s.media}" aria-hidden="true"></span>
        </a></li>`
      ).join('')}
    </ul>`;
}

Array.from(document.getElementsByClassName('social-media'))
  .forEach((social, i) => compileSocial(social, i + 1));

/* ============================================================
   THEME PERSISTENCE 
============================================================ */

const themeRadios = document.querySelectorAll('.theme-switch input[type="radio"]');

// Save on change
themeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    localStorage.setItem('theme', radio.id);
  });
});

// Restore on load
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  const input = document.getElementById(savedTheme);
  if (input) input.checked = true;
}
