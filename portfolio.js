const skills = [
    "Python", "Java", "C++", "JavaScript", "SQL", "HTML/CSS", "React", "Node.js", "Git", "Docker","C","Django","Microsoft Excel"
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
    skillsList.appendChild(li);
  });
  
  // Load Projects
  const projectContainer = document.getElementById("project-container");
  projects.forEach(project => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    div.style.marginBottom = "1.5rem";
    projectContainer.appendChild(div);
  });
  