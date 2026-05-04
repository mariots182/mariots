// Datos de proyectos de ejemplo
const projects = [
  {
    id: 1,
    title: "Portfolio Web",
    description:
      "Sitio web profesional con diseño moderno y responsive. Incluye sección de proyectos, blog y formulario de contacto.",
    category: "web",
    icon: "🌐",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    stars: 24,
    forks: 5,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "App Móvil de Notas",
    description:
      "Aplicación móvil para gestionar notas con sincronización en la nube. Disponible en iOS y Android.",
    category: "mobile",
    icon: "📱",
    technologies: ["React Native", "Firebase", "Redux"],
    stars: 42,
    forks: 12,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "API REST E-commerce",
    description:
      "Backend escalable para plataforma de e-commerce con autenticación, pagos y gestión de inventario.",
    category: "backend",
    icon: "🛒",
    technologies: ["Node.js", "Express", "MongoDB"],
    stars: 156,
    forks: 38,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "CLI Tool - Task Manager",
    description:
      "Herramienta de línea de comandos para gestionar tareas y proyectos desde la terminal de forma eficiente.",
    category: "tools",
    icon: "⚙️",
    technologies: ["Python", "Click", "SQLite"],
    stars: 89,
    forks: 22,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description:
      "Dashboard interactivo para visualizar métricas en tiempo real con gráficos dinámicos y reportes personalizados.",
    category: "web",
    icon: "📊",
    technologies: ["Vue.js", "Chart.js", "Axios"],
    stars: 67,
    forks: 18,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Chatbot AI",
    description:
      "Chatbot inteligente impulsado por IA para soporte al cliente con procesamiento de lenguaje natural.",
    category: "backend",
    icon: "🤖",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    stars: 234,
    forks: 56,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 7,
    title: "Juego Web 2D",
    description:
      "Juego 2D interactivo construido con Canvas API. Incluye física, sonidos y diferentes niveles.",
    category: "web",
    icon: "🎮",
    technologies: ["JavaScript", "Canvas API", "HTML5"],
    stars: 78,
    forks: 19,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 8,
    title: "Sistema de Autenticación",
    description:
      "Módulo reutilizable de autenticación con JWT, OAuth 2.0 y 2FA para aplicaciones seguras.",
    category: "backend",
    icon: "🔐",
    technologies: ["Go", "PostgreSQL", "JWT"],
    stars: 145,
    forks: 41,
    github: "https://github.com",
    demo: "https://example.com",
  },
];

// Estado actual
let currentFilter = "all";

// Renderizar proyectos
function renderProjects(projectsToRender = projects) {
  const grid = document.querySelector(".projects-grid");
  grid.innerHTML = "";

  projectsToRender.forEach((project) => {
    const card = createProjectCard(project);
    grid.appendChild(card);
  });
}

// Crear elemento de card
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.setAttribute("data-category", project.category);

  const technologiesHTML = project.technologies
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  card.innerHTML = `
        <div class="project-header">
            <h2 class="project-title">${project.title}</h2>
            <span class="project-icon">${project.icon}</span>
        </div>
        
        <p class="project-description">${project.description}</p>
        
        <div class="technologies">
            ${technologiesHTML}
        </div>
        
        <div class="project-meta">
            <span class="project-category">${project.category}</span>
            <div class="project-stats">
                <span class="stat">⭐ <span class="stat-value">${project.stars}</span></span>
                <span class="stat">🔀 <span class="stat-value">${project.forks}</span></span>
            </div>
        </div>
        
        <div class="project-links">
            <a href="${project.github}" class="link-btn" target="_blank">
                <span>GitHub</span>
                <span>→</span>
            </a>
            <a href="${project.demo}" class="link-btn" target="_blank">
                <span>Demo</span>
                <span>→</span>
            </a>
        </div>
    `;

  return card;
}

// Filtrar proyectos
function filterProjects(category) {
  currentFilter = category;

  if (category === "all") {
    renderProjects(projects);
  } else {
    const filtered = projects.filter((p) => p.category === category);
    renderProjects(filtered);
  }

  // Actualizar estado de botones
  updateFilterButtons(category);
}

// Actualizar estado visual de filtros
function updateFilterButtons(activeCategory) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    const category = btn.getAttribute("data-filter");
    if (category === activeCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  // Agregar listeners a botones de filtro
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.target.getAttribute("data-filter");
      filterProjects(category);
    });
  });
});

// Función para agregar nuevos proyectos dinámicamente (opcional)
function addProject(newProject) {
  projects.push(newProject);
  filterProjects(currentFilter);
}

// Función para buscar proyectos (opcional)
function searchProjects(query) {
  const results = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase())),
  );
  renderProjects(results);
}
