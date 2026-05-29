// ==========================================
// 📂 PORTFOLIO DATA MATRIX (Editable Area)
// ==========================================
const portfolioData = {
  profile: {
    name: "Gaurav Gehlot",
    role: "Mobile Application Developer",
    location: "Gandhinagar, India",
    phone: "+918849590807",
    email: "gauravgehlot1922@gmail.com",
    linkedin: "https://linkedin.com/in/gaurav-gehlot-8816b2212",
    github: "https://github.com/gaurav-gehlot-collab"
  },
  about: [
    "I’m a passionate Mobile Application Developer with nearly 3 years of experience in developing scalable applications using Flutter and native iOS (Swift). My focus lies in building user-centric mobile apps with robust backend integration and clean UI/UX.",
    "I enjoy solving real-world problems through technology and have a growing interest in DevOps and backend services using Node.js. I constantly strive to expand my skill set by exploring new frameworks and tools in mobile development and cloud infrastructure."
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Charotar University of Science and Technology, Anand",
      period: "2019–2022",
      metrics: "CGPA: 7.85"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Jamnagar",
      period: "2016–2019",
      metrics: "CGPA: 7.29"
    }
  ],
  experience: [
    {
      role: "Senior Flutter Developer",
      company: "Prudent Corporate Advisory Services Ltd.",
      location: "Ahmedabad",
      period: "Oct 2025 – Present",
      bullets: [
        "Developing scalable mobile applications using Flutter and Swift.",
        "Integrating third-party services like Google Maps, Stripe, Google Console and Firebase.",
        "Participating in Agile development cycles and code reviews."
      ]
    },
    {
      role: "Mobile Application Developer",
      company: "Prismetric Pvt. Ltd.",
      location: "Gandhinagar",
      period: "Aug 2022 – Sep 2025",
      bullets: [
        "Developing scalable mobile applications using Flutter and Swift.",
        "Integrating third-party services like Google Maps, Stripe, Google Console and Firebase.",
        "Contributing to REST API integration and backend logic in NodeJS, Python.",
        "Contributing with frontend using ReactJS, HTML, Bootstrap, CSS.",
        "Participating in Agile development cycles and code reviews."
      ]
    },
    {
      role: "iOS Developer Intern",
      company: "DRC Systems India Pvt. Ltd.",
      location: "Gandhinagar",
      period: "Dec 2021 – Jul 2022",
      bullets: [
        "Worked with Swift and UIKit to build clean and reusable components.",
        "Gained exposure to RESTful APIs, JSON handling, and MVC pattern.",
        "Assisted in UI improvements, bug fixing, and performance testing."
      ]
    }
  ],
  projects: [
    {
      title: "Elev8tion",
      platform: "iOS Native",
      tags: ["Swift", "Firebase", "Maps"],
      desc: "Worked as the dedicated iOS developer from execution to App Store deployment. Implemented real-time chat, Firebase push notifications, deep linking, and unit testing."
    },
    {
      title: "Jillii",
      platform: "iOS Native",
      tags: ["Swift", "UIKit", "Firebase"],
      desc: "Contributed end-to-end chat channels, Firebase infrastructure, Google Maps proximity search, and a custom native image editing canvas module."
    },
    {
      title: "vTeach Student / Teacher",
      platform: "Flutter App",
      tags: ["Flutter", "Dart", "VoIP"],
      desc: "A cross-platform dual application layout. Built scalable interface modules, synchronous REST API ingestion frameworks, and cross-platform WebRTC/VoIP video calls."
    },
    {
      title: "Foodiv",
      platform: "Flutter SaaS",
      tags: ["Flutter", "Hardware Integration", "SaaS"],
      desc: "Multi-tenant layout mapping vendors, delivery nodes, and clients. Engineered low-level ESC/POS Bluetooth thermal printing support and automated transaction invoice distribution."
    }
  ],
  skills: {
    "Languages": ["Swift", "Dart", "JavaScript", "Python", "SQL"],
    "Frameworks & Core Tools": ["Flutter", "React.js", "Node.js", "FastAPI", "Firebase", "REST APIs"],
    "Engineering Practices": ["MVVM/MVC", "App Store Deployment", "CI/CD (GitHub Actions)", "Agile Mechanics"]
  }
};

// ==========================================
// 🚀 SAFE DYNAMIC INJECTION ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  try {
    renderAbout();
    renderEducation();
    renderExperience();
    renderProjects();
    renderSkills();
  } catch (error) {
    console.error("Rendering failed somewhere:", error);
  }
});

function renderAbout() {
  const container = document.getElementById("about-content");
  if (container) {
    container.innerHTML = portfolioData.about.map(p => `<p class="about-para" style="margin-bottom: 1rem; color: var(--text-muted);">${p}</p>`).join("");
  }
}

function renderEducation() {
  const container = document.getElementById("education-list");
  if (container) {
    container.innerHTML = portfolioData.education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3 style="font-size: 1.15rem; font-weight: 600;">${edu.degree}</h3>
          <p class="timeline-sub">${edu.institution} | <span>${edu.period}</span></p>
          <span class="metric-badge">${edu.metrics}</span>
        </div>
      </div>
    `).join("");
  }
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (container) {
    container.innerHTML = portfolioData.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3 style="font-size: 1.15rem; font-weight: 600;">${exp.role}</h3>
          <p class="timeline-sub">${exp.company} — <em>${exp.location}</em> | <span>${exp.period}</span></p>
          <ul class="experience-bullets">
            ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>
    `).join("");
  }
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (container) {
    container.innerHTML = portfolioData.projects.map(proj => `
      <div class="interactive-project-card">
        <div class="project-header">
          <span class="platform-indicator">${proj.platform}</span>
          <h3 style="font-size: 1.2rem; margin-top: 0.2rem;">${proj.title}</h3>
        </div>
        <p style="font-size: 0.9rem; margin: 0.5rem 0 1rem 0;">${proj.desc}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (container) {
    let html = "";
    for (const [category, list] of Object.entries(portfolioData.skills)) {
      html += `
        <div class="skill-category-group" style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.95rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">${category}</h4>
          <div class="badge-cloud" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${list.map(s => `<span class="skill-badge">${s}</span>`).join("")}
          </div>
        </div>
      `;
    }
    container.innerHTML = html;
  }
}

// ==========================================
// 🌗 INTERACTION & THEME ENGINE
// ==========================================
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

function updateIcon(theme) {
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
}

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });
}

const menuBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => navMenu.classList.toggle('show'));
  navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('show')));
}
