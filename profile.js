/* ============================================================
   PROFILE UI COMPOSITION SCRIPT
   ------------------------------------------------------------
   Purpose:
   - Handles all dynamic UI generation for the profile site:
     -projects, tags, and social links.

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

/* ============================
   DOM CACHE
============================ */

const DOM = {
  about: document.getElementById("about"),
  socialBlocks: document.getElementsByClassName("social-media"),
  themeRadios: document.querySelectorAll('.theme-switch input[type="radio"]'),
};

/* ============================================================
   PROJECTS DATA SOURCE
============================================================ */

const arrProjects = [
  {
    no: "1",
    name: "FB-Clone",
    summaries: { client: "Self-Employed", role: "Solo", year: "2022" },
    details: `A Simple Clone of Facebook with google signin facility. User can post message and image
    . This app was built with React and Redux with backend support from firebase v9.`,
    skills: ["html", "css", "javascripts", "react", "redux", "firebase"],
    links: [
      "https://facebook-clone-993ad.web.app/",
      "https://github.com/AngomRanjan/fb-clone",
    ],
  },
  {
    no: "2",
    name: "Virtual Defense",
    summaries: { client: "Self-Employed", role: "Solo", year: "2022" },
    details: `In this Project I have created a site for 
    an Imaginary cyber security company, Virtual Defense based on the 
    design of creative commons global summit 2015 designed by Cindy Shin in Behance.`,
    skills: ["html", "css", "JavaScripts"],
    links: [
      "https://angomranjan.github.io/CapstoneCyberSecurity/",
      "https://github.com/AngomRanjan/CapstoneCyberSecurity",
    ],
  },
  {
    no: "3",
    name: "Bookstore",
    summaries: { client: "Self-Employed", role: "Solo", year: "2022" },
    details: `The Bookstore is a website similar to the "Awesome Books" website.`,
    skills: ["HTML", "CSS", "JavaScripts", "React", "React-Redux"],
    links: [
      "https://bookstore-angom.netlify.app/",
      "https://github.com/AngomRanjan/bookstore",
    ],
  },
  {
    no: "4",
    name: "Stay Tune",
    summaries: { client: "Self-Employed", role: "Solo", year: "2022" },
    details: `A Simple tv show sites, which gives information about Shows telecast on TV Maze.`,
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    links: [
      "https://stay-tune-angom.netlify.app/",
      "https://github.com/AngomRanjan/stay-tune",
    ],
  },
];

/* ============================================================
   SOCIAL MEDIA DATA SOURCE
============================================================ */

const arrSocialMedia = [
  {
    media: "twitter",
    link: "https://twitter.com/RanjanAngom",
    icon: "images/twitter.png",
  },
  {
    media: "linkedin",
    link: "https://linkedin.com/in/angom-chittaranjan",
    icon: "images/linkedin.png",
  },
  { media: "medium", link: "https://medium.com/", icon: "images/medium.png" },
  {
    media: "github",
    link: "https://github.com/AngomRanjan",
    icon: "images/github.png",
  },
  {
    media: "angellist",
    link: "https://angel.co/",
    icon: "images/angellist.png",
  },
];

/* ============================
   DOM FACTORY FUNCTIONS
   (pure, no side effects)
============================ */

const cardMedia = (projectNo) => {
  const image = document.createElement("img");
  image.src = `images/SnapshootD${projectNo}.${projectNo === "2" ? "png" : "jpg"}`;
  image.alt = "Project Looks";
  image.className = "card-media bg-accent";

  return image;
};

const projTitle = (pName) => {
  const title = document.createElement("h2");
  title.classList = `card-title`;
  title.textContent = pName;
  return title;
};

const projSummary = (summaries) => {
  const ulSummaries = document.createElement("ul");
  ulSummaries.className = "card-meta";

  Object.entries(summaries).forEach((summary) => {
    const li = document.createElement("li");
    li.textContent = summary[1];
    ulSummaries.appendChild(li);
  });

  return ulSummaries;
};

const pDetails = (details, pid = null) => {
  const p = document.createElement("p");
  p.className = "card-description";
  if (pid) p.id = pid;
  p.textContent = details;
  return p;
};

/* ============================================================
   TAGS SYSTEM
============================================================ */

const pSkills = (skills) => {
  const ul = document.createElement("ul");
  ul.className = "tags";

  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.className = "tag";
    li.textContent = skill;
    ul.appendChild(li);
  });

  return ul;
};

/* card-content */

const cardDetails = (details, summaries, skills) => {
  const div = document.createElement("div");
  div.className = "card-details";
  div.appendChild(projSummary(summaries));
  div.appendChild(pDetails(details));
  div.appendChild(pSkills(skills));
  return div;
};

/* ============================================================
   CARD BUTTON FACTORIES
============================================================ */

const cardActions = (links) => {
  const div = document.createElement("div");
  div.className = "card-actions";

  links.forEach((link, index) => {
    const a = document.createElement("a");
    a.className = "btn u-interactive u-hover-accent u-focus-inset";   
    a.href = link;
    a.target = "_blank";
    a.textContent = index === 0 ? "Go Live" : "View Source";

    const icon = document.createElement("span");
    icon.className = "icon icon--sm";
    icon.dataset.icon = index === 0 ? "live-project" : "source-code";

    a.prepend(icon);
    div.appendChild(a);
  });

  return div;
};

const cardBody = (project) => {
  const panel = document.createElement("div");
  panel.className = "card-body";
  const { name, details, summaries, skills, links } = project;

  panel.append(
    projTitle(name),
    cardDetails(details, summaries, skills),
    cardActions(links),
  );

  return panel;
};

/* ============================================================
   PROJECT CARD COMPILATION
============================================================ */

function compileCards(project) {
  const card = document.createElement("article");
  card.classList = "card bg-surface";
  if (project.no % 2 === 0) card.classList.add("card--reverse");
  card.id = `card${project.no}`;

  card.appendChild(cardMedia(project.no));
  card.appendChild(cardBody(project));
  return card;
}

/* ============================
   PAGE ASSEMBLY
   (DOM insertion & ordering)
============================ */
/* ============================================================
   PROJECTS SECTION RENDER
============================================================ */

const works = document.createElement("section");
works.className = "container works";
works.id = "works";

const container = document.createElement("ul");
container.className = "card-grid";

arrProjects.forEach((project) => {
  const li = document.createElement("li");
  li.className = "card-item";
  li.appendChild(compileCards(project));
  container.appendChild(li);
});

works.appendChild(container);

if (DOM.about && DOM.about.parentNode) {
  DOM.about.parentNode.insertBefore(works, DOM.about);
}

/* ============================================================
   SOCIAL LINKS RENDERING
============================================================ */

function compileSocial(social, index) {
  social.innerHTML = `
    <h3 class="fs-md fw-medium text-accent" id="social-${index}">LET’S CONNECT</h3>
    <ul class="inline-li">
      ${arrSocialMedia
        .map(
          (s) => `<li><a href="${s.link}" aria-label="${s.media}" target="_blank">
          <span class="icon u-interactive u-hover-muted u-focus-inset" data-icon="${s.media}" aria-hidden="true"></span>
        </a></li>`,
        )
        .join("")}
    </ul>`;
}

Array.from(DOM.socialBlocks).forEach((social, i) =>
  compileSocial(social, i + 1),
);

/* ============================================================
   THEME PERSISTENCE (state only)
============================================================ */

if (DOM.themeRadios.length) {
  DOM.themeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      localStorage.setItem("theme", radio.id);
    });
  });
}

// Restore on load
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  const input = document.getElementById(savedTheme);
  if (input && input.type === "radio") {
    input.checked = true;
  }
}
