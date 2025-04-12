const skills = [
  "Python", "Java", "C++", "JavaScript", "SQL", "HTML/CSS", "React", "Node.js",
  "Git", "Docker", "C", "Django", "Microsoft Excel"
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal website to showcase skills and projects.",
    link: "https://github.com/Azahar83/PYTHON-BASIC.git"
  },
  {
    title: "Task Manager App",
    description: "A full-stack app to manage tasks and track productivity.",
    link: "https://github.com/Azahar83/PYTHON-BASIC.git"
  }
];

// Load Skills
const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  li.style.padding = "0.5rem 0";
  li.style.transition = "all 0.3s ease";
  li.addEventListener("mouseover", () => li.style.color = "#4b6cb7");
  li.addEventListener("mouseout", () => li.style.color = "#333");
  skillsList.appendChild(li);
});

// Load Projects
const projectContainer = document.getElementById("project-container");
projects.forEach(project => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" style="color:#4b6cb7;">🔗 View Project</a>
  `;
  projectContainer.appendChild(div);
});

// Welcome Message
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("👋 Welcome to Azahar’s Interactive Portfolio!");
  }, 300);
});
