/* script.js: Lógica premium para el portafolio interactivo (Deskfolio) de Ari */

const FALLBACK_DATA = {
  "projects": [
    {
      "title": "Magical Flavour",
      "year": "2022 - 2025",
      "thumbnail": "assets/projects/magical-flavour.png",
      "tools": "Blender • Unity • Photoshop",
      "description_en": "Multiplayer magic potion cooking game set in a whimsical world. Invited to Game Conference MX 2025.",
      "description_es": "Videojuego de cocinar pociones en un mundo mágico con multijugador. Invitados a Game Conference MX 2025.",
      "role_en": "Mechanics, UI, Rigging, Animation, 3D Modeling, Texturing, Conceptualization",
      "role_es": "Mecánicas, UI, Rigeo, Animación, Modelado 3D, Texturizado, Conceptualización",
      "link": "https://gonyame.itch.io",
      "gallery": ["assets/projects/mf-01.png","assets/projects/mf-02.png"]
    },
    {
      "title": "Feather Thieve",
      "year": "2022 - 2025",
      "thumbnail": "assets/projects/feather-thieve.png",
      "tools": "Maya • Photoshop",
      "description_en": "Horror game featuring 'Pistacho' the parrot; focused on animal trafficking awareness.",
      "description_es": "Juego de terror protagonizado por 'Pistacho' el perico; enfoque en concientización sobre trata de animales.",
      "role_en": "Mechanics design, UI, Rigging, Animation, Modeling",
      "role_es": "Diseño de mecánicas, UI, Rigeo, Animación, Modelado",
      "link": "https://gonyame.itch.io",
      "gallery": []
    },
    {
      "title": "PlushOut",
      "year": "2024 - En desarrollo",
      "thumbnail": "assets/projects/plushout.png",
      "tools": "ClipStudio • Photoshop",
      "description_en": "Project partially funded via Kickstarter. Design and development in progress.",
      "description_es": "Proyecto financiado parcialmente via Kickstarter. Diseño y desarrollo en progreso.",
      "role_en": "Design, Documentation, Animation, Modeling",
      "role_es": "Diseño, Documentación, Animación, Modelado",
      "link": "https://gonyame.itch.io",
      "gallery": []
    },
    {
      "title": "SeedHero (Steam)",
      "year": "2023",
      "thumbnail": "assets/projects/seedhero.png",
      "tools": "ClipStudio • Unity",
      "description_en": "Rhythm and gardening game published on Steam. Features charming character art.",
      "description_es": "Juego de ritmo y jardinería publicado en Steam. Estética y arte de personajes entrañables.",
      "role_en": "Character design, animation, 2D illustration.",
      "role_es": "Diseño de personajes, animación, ilustración 2D.",
      "link": "https://store.steampowered.com/app/3171560/SeedHero/",
      "gallery": []
    }
  ]
};

const galleryData = {
  'Dio': ['assets/gallery/Dio-01.png', 'assets/gallery/Dio-02.png', 'assets/gallery/Dio-03.png'],
  'Concept': ['assets/gallery/Concept-01.png', 'assets/gallery/Concept-02.png', 'assets/gallery/Concept-03.png', 'assets/gallery/Concept-04.png', 'assets/gallery/Concept-05.png'],
  'Modelado': ['assets/gallery/Modelado-01.png', 'assets/gallery/Modelado-02.png', 'assets/gallery/Modelado-03.png']
};

// DICCIONARIO DE TRADUCCIONES
const TRANSLATIONS = {
  en: {
    toggle_desk: "Interactive Desk",
    toggle_classic: "Classic View",
    widget_3d_title: "Interactive 3D Viewer",
    console_prompt: "INSERT A CARTRIDGE!",
    console_view_btn: "VIEW GAME",
    tab_cover: "Cover",
    tab_about: "About me",
    tab_skills: "Skills",
    tab_games: "Games",
    tab_gallery_3d: "3D Gallery",
    tab_gallery_concept: "Concept Art",
    tab_contact: "Contact",
    cover_left_title: "Ari's<br>Creative Space",
    cover_brand: "SKETCHBOOK & PORTFOLIO",
    cover_subtitle: "3D Artist • Concept Art • Game Developer",
    cover_open_btn: "Open Sketchbook 📖",
    nb_about_title: "About me",
    nb_about_p: "I am an artist, designer, and game developer. Since I was a child I loved inventing worlds and creatures in my notebooks; today I transform them into digital 3D universes and detailed concept art.",
    about_edu: "Education",
    nb_about_edu_val: "<strong>B.S. in Game Design and Development</strong><br>Cuauhtemoc University (2022 - 2026)<br>GPA of Excellence: <strong>9.63</strong>",
    nb_about_phil: "My Philosophy",
    nb_about_phil_p: "I focus on telling stories through objects, characters, and colors. I enjoy 3D modeling, bringing characters to life with rigging and animation, and giving them the final texturing touch to create memorable experiences.",
    nb_about_polaroid: "Creating universes! ✨",
    nb_page_1_of_6: "Page 1/6",
    nb_page_2_of_6: "Page 2/6",
    nb_page_3_of_6: "Page 3/6",
    nb_page_4_of_6: "Page 4/6",
    nb_page_5_of_6: "Page 5/6",
    nb_page_6_of_6: "Page 6/6",
    nb_skills_title: "Skills",
    nb_skills_mod: "3D Modeling / Sculpting",
    nb_skills_concept: "Concept Art / Illustration",
    nb_skills_color: "Coloring / Texturing",
    nb_skills_rig: "Rigging & Animation",
    nb_skills_ui: "UI / UX for Games",
    nb_skills_soft: "Tools / Software",
    nb_games_title: "Video Games",
    nb_games_prompt: "Select a game to view details:",
    nb_games_placeholder: "👈 Select a game or drag a cartridge into the console to see development details.",
    nb_gallery_dio: "3D Dioramas",
    nb_gallery_mod: "3D Modeling",
    nb_gallery_props: "Assets & Props",
    nb_gallery_concept: "Concept Art",
    nb_gallery_2d: "2D Design",
    nb_gallery_color: "Coloring & Art",
    nb_gallery_color_p: "Designing creatures, defining color palettes, and bringing magical atmospheres to every scene. Color is the key to guide the player's emotions.",
    nb_gallery_atm: "Atmospheres",
    contact_loc: "Location: San Luis Potosi, Mexico",
    contact_cv: "Download CV",
    nb_contact_cv_btn: "CV in PDF 📥",
    nb_contact_thanks: "Thank you for visiting my creative space!",
    nb_contact_end: "End",
    nb_nav_prev: "◀ Prev",
    nb_nav_next: "Next ▶",
    nav_about: "About me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    hero_hola: "Hello",
    hero_soy: "I am",
    hero_lead: "Artist, designer, and game developer. I transform ideas into digital worlds that inspire curiosity and emotion.",
    hero_cta_proj: "View projects",
    hero_cta_contact: "Contact",
    hero_info_uni: "University:",
    hero_info_uni_val: "Cuauhtemoc University (GPA: 9.63)",
    hero_info_areas: "Areas:",
    about_title: "About me",
    about_p: "I am an artist, designer, and game developer. Since I was a child I loved inventing worlds and creatures in my notebooks; today I transform them into digital universes.",
    about_edu_val: "B.S. in Game Design and Development — Cuauhtemoc University (2022 - 2026)",
    about_soft: "Software",
    skills_title: "Skills",
    skills_art_title: "Digital Art",
    skills_art_desc: "Concept art, illustration, color palettes, and composition.",
    skills_mod_title: "3D Modeling",
    skills_mod_desc: "Modeling, retopology, texturing, and game engine optimization.",
    skills_anim_title: "Animation & Rig",
    skills_anim_desc: "Rigging, character animation, and export to game engines.",
    skills_des_title: "Game Design",
    skills_des_desc: "Mechanics design, UI/UX, and game design documentation.",
    projects_title: "Featured Projects",
    gallery_title: "Models & Illustrations",
    gallery_cat_dio: "Diorama",
    gallery_cat_concept: "Concept Art",
    gallery_cat_3d: "3D Modeling",
    contact_cv_btn: "Download PDF",
    copyright: "Ariadna. Game Design & Development."
  },
  es: {
    toggle_desk: "Escritorio Interactivo",
    toggle_classic: "Vista Tradicional",
    widget_3d_title: "Visor 3D Interactivo",
    console_prompt: "¡INSERTA UN CARTUCHO!",
    console_view_btn: "VER JUEGO",
    tab_cover: "Portada",
    tab_about: "Sobre mí",
    tab_skills: "Habilidades",
    tab_games: "Juegos",
    tab_gallery_3d: "Galería 3D",
    tab_gallery_concept: "Concept Art",
    tab_contact: "Contacto",
    cover_left_title: "El Espacio<br>Creativo de Ari",
    cover_brand: "BITÁCORA Y PORTAFOLIO",
    cover_subtitle: "Artista 3D • Concept Art • Diseñadora",
    cover_open_btn: "Abrir Bitácora 📖",
    nb_about_title: "Sobre mí",
    nb_about_p: "Soy una artista, diseñadora y desarrolladora de videojuegos. Desde niña me encantaba inventar mundos y criaturas en mis libretas; hoy los transformo en universos digitales en 3D y concept art detallado.",
    about_edu: "Educación",
    nb_about_edu_val: "<strong>Lic. en Diseño y Desarrollo de Videojuegos</strong><br>Universidad Cuauhtémoc (2022 - 2026)<br>PGA de Excelencia: <strong>9.63</strong>",
    nb_about_phil: "Mi Filosofía",
    nb_about_phil_p: "Me enfoco en contar historias a través de los objetos, personajes y colores. Disfruto de modelar en 3D, dar vida con rigging y animación, y dar el acabado de texturizado definitivo para crear experiencias memorables.",
    nb_about_polaroid: "¡Creando universos! ✨",
    nb_page_1_of_6: "Pág 1/6",
    nb_page_2_of_6: "Pág 2/6",
    nb_page_3_of_6: "Pág 3/6",
    nb_page_4_of_6: "Pág 4/6",
    nb_page_5_of_6: "Pág 5/6",
    nb_page_6_of_6: "Pág 6/6",
    nb_skills_title: "Habilidades",
    nb_skills_mod: "Modelado 3D / Escultura",
    nb_skills_concept: "Concept Art / Ilustración",
    nb_skills_color: "Colorización / Texturizado",
    nb_skills_rig: "Rigging y Animación",
    nb_skills_ui: "UI / UX para Juegos",
    nb_skills_soft: "Herramientas / Software",
    nb_games_title: "Videojuegos",
    nb_games_prompt: "Selecciona un juego para ver detalles:",
    nb_games_placeholder: "👈 Selecciona un juego o arrastra un cartucho a la consola para ver los detalles del desarrollo.",
    nb_gallery_dio: "Dioramas 3D",
    nb_gallery_mod: "Modelado 3D",
    nb_gallery_props: "Assets & Props",
    nb_gallery_concept: "Concept Art",
    nb_gallery_2d: "Diseño 2D",
    nb_gallery_color: "Colorización & Arte",
    nb_gallery_color_p: "Diseñar criaturas, definir paletas cromáticas y dotar de atmósferas mágicas a cada escenario. El color es la clave para guiar las emociones del jugador.",
    nb_gallery_atm: "Atmósferas",
    contact_loc: "Ubicación: San Luis Potosí, México",
    contact_cv: "Descargar CV",
    nb_contact_cv_btn: "CV en PDF 📥",
    nb_contact_thanks: "¡Gracias por visitar mi espacio creativo!",
    nb_contact_end: "Fin",
    nb_nav_prev: "◀ Anterior",
    nb_nav_next: "Siguiente ▶",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    hero_hola: "Hola",
    hero_soy: "Soy",
    hero_lead: "Artista, diseñadora y desarrolladora de videojuegos. Transformo ideas en mundos digitales que inspiran curiosidad y emoción.",
    hero_cta_proj: "Ver proyectos",
    hero_cta_contact: "Contacto",
    hero_info_uni: "Universidad:",
    hero_info_uni_val: "Universidad Cuauhtémoc (PGA: 9.63)",
    hero_info_areas: "Áreas:",
    about_title: "Sobre mí",
    about_p: "Soy una artista, diseñadora y desarrolladora de videojuegos. Desde niña me encantaba inventar mundos y criaturas en mi libreta; hoy los transformo en universos digitales.",
    about_edu_val: "Lic. en Diseño y Desarrollo de Videojuegos — Universidad Cuauhtémoc (2022 - 2026)",
    about_soft: "Software",
    skills_title: "Habilidades",
    skills_art_title: "Arte Digital",
    skills_art_desc: "Concept art, ilustración, paletas y composición.",
    skills_mod_title: "Modelado 3D",
    skills_mod_desc: "Modelado, retopología, texturizado y optimización para motores.",
    skills_anim_title: "Animación & Rig",
    skills_anim_desc: "Rigeo, animación de personajes y exportación a motores.",
    skills_des_title: "Diseño de Videojuegos",
    skills_des_desc: "Diseño de mecánicas, UI/UX y documentación.",
    projects_title: "Proyectos destacados",
    gallery_title: "Modelos & Ilustraciones",
    gallery_cat_dio: "Diorama",
    gallery_cat_concept: "Concept Art",
    gallery_cat_3d: "Modelado 3D",
    contact_cv_btn: "Descargar PDF",
    copyright: "Ariadna. Diseño & Desarrollo de Videojuegos."
  }
};

let activeProjects = FALLBACK_DATA.projects;
let activeLang = 'en'; // Predeterminado en inglés

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // 1. Cargar proyectos (CORS local/itch.io fallback)
  fetch('data.json')
    .then(r => r.json())
    .then(data => {
      activeProjects = data.projects;
      initPortfolio();
    })
    .catch(err => {
      console.warn('Cargando base de datos local (Fallback de seguridad)', err);
      initPortfolio();
    });

  // 2. Control de Vistas (Escritorio vs Tradicional)
  initViewToggler();

  // 3. Menu móvil (Vista clásica)
  const menuBtn = document.getElementById('menuBtn');
  menuBtn?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('open');
  });

  // 4. Animaciones de scroll clásicas
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
});

let isInitialized = false;

/* Inicializa el portafolio */
function initPortfolio() {
  if (isInitialized) return;
  isInitialized = true;

  // Render Clásico
  renderProjectsClassic(activeProjects);
  initClassicCarousels();

  // Render Escritorio
  initNotebook();
  renderProjectsNotebook(activeProjects);
  initNotebookCarousels();
  
  // Widgets y pegatinas
  initThreeViewer();
  setupTabletCanvas();
  initConsoleWidget();
  setupStickerDragging();
  initCoffeeMugTheme();
  
  // Idioma inicial
  initLanguage();
}

/* ================================================================= */
/* IDIOMAS (INGLES POR DEFECTO, ESPAÑOL ADICIONAL) */
/* ================================================================= */
function initLanguage() {
  const storedLang = localStorage.getItem('activeLang');
  if (storedLang && (storedLang === 'en' || storedLang === 'es')) {
    activeLang = storedLang;
  } else {
    activeLang = 'en';
  }
  
  const langToggleBtn = document.getElementById('langToggleBtn');
  langToggleBtn?.addEventListener('click', () => {
    activeLang = activeLang === 'en' ? 'es' : 'en';
    localStorage.setItem('activeLang', activeLang);
    applyLanguage(activeLang);
  });
  
  applyLanguage(activeLang);
}

function applyLanguage(lang) {
  // 1. Textos estáticos con data-t
  const elements = document.querySelectorAll('[data-t]');
  elements.forEach(el => {
    const key = el.getAttribute('data-t');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
  
  // 2. Botón de idioma
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'en' ? '🌐 EN' : '🌐 ES';
  }
  
  // 3. Volver a renderizar proyectos en base a idioma
  renderProjectsClassic(activeProjects);
  renderProjectsNotebook(activeProjects);
  
  // 4. Actualizar selección de juego activa en libreta
  const activeRow = document.querySelector('.nb-project-row.active');
  if (activeRow) {
    const idx = parseInt(activeRow.getAttribute('data-idx'));
    selectNotebookProject(idx);
  } else {
    selectNotebookProject(0);
  }
  
  // 5. Cambiar título de página
  document.title = lang === 'en' ? 'Ariadna — Portfolio' : 'Ariadna — Portafolio';
}

/* ================================================================= */
/* CONTROL DE VISTAS */
/* ================================================================= */
function initViewToggler() {
  const toggleDeskBtn = document.getElementById('toggleDeskBtn');
  const toggleClassicBtn = document.getElementById('toggleClassicBtn');
  
  toggleDeskBtn?.addEventListener('click', () => {
    setView('desk');
  });
  
  toggleClassicBtn?.addEventListener('click', () => {
    setView('classic');
  });
  
  // Establecer vista inicial según el ancho de pantalla al cargar
  if (window.innerWidth >= 1024) {
    setView('desk');
  } else {
    setView('classic');
  }
}

function setView(viewName) {
  const toggleDeskBtn = document.getElementById('toggleDeskBtn');
  const toggleClassicBtn = document.getElementById('toggleClassicBtn');
  
  if (viewName === 'desk') {
    document.body.classList.remove('classic-mode');
    document.body.classList.add('desk-mode');
    toggleDeskBtn?.classList.add('active');
    toggleClassicBtn?.classList.remove('active');
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  } else {
    document.body.classList.remove('desk-mode');
    document.body.classList.add('classic-mode');
    toggleDeskBtn?.classList.remove('active');
    toggleClassicBtn?.classList.add('active');
  }
}

/* ================================================================= */
/* RENDERIZADO VISTA CLÁSICA */
/* ================================================================= */
function renderProjectsClassic(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  
  projects.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-idx', idx);

    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'project-thumb';
    const img = document.createElement('img');
    img.src = p.thumbnail || 'assets/projects/default.png';
    img.alt = p.title;
    thumbWrap.appendChild(img);

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = p.title;

    const meta = document.createElement('div');
    meta.className = 'project-meta';
    meta.textContent = p.year + ' — ' + (p.tools || '');

    card.appendChild(thumbWrap);
    card.appendChild(title);
    card.appendChild(meta);

    card.addEventListener('click', () => openGlobalModal(p));
    grid.appendChild(card);
  });
}

function initClassicCarousels() {
  const categories = ['carousel-dio', 'carousel-concept', 'carousel-modelado'];
  categories.forEach(id => {
    const carousel = document.getElementById(id);
    if (!carousel) return;
    const category = carousel.getAttribute('data-category');
    const images = galleryData[category] || [];
    setupCarouselElements(carousel, images);
  });
}

function setupCarouselElements(carousel, images) {
  const dotsContainer = carousel.nextElementSibling;
  if (!images.length || !dotsContainer) return;
  
  carousel.innerHTML = '';
  dotsContainer.innerHTML = '';
  
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${src}`;
    if (index === 0) img.classList.add('active');
    
    img.addEventListener('click', () => {
      openImageLightbox(images, index);
    });
    
    carousel.appendChild(img);
    
    const dot = document.createElement('span');
    dot.className = 'carousel-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(carousel, index);
    });
    dotsContainer.appendChild(dot);
  });
  
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    goToSlide(carousel, currentIndex);
  }, 8000);
}

function goToSlide(carousel, index) {
  const images = carousel.querySelectorAll('img');
  const dots = carousel.nextElementSibling?.querySelectorAll('.carousel-dot');
  
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  
  dots?.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

/* ================================================================= */
/* RENDERIZADO Y CONTROL DE LA LIBRETA (SKETCHBOOK) */
/* ================================================================= */
let currentNotebookPageIndex = 0;
const totalNotebookPages = 7;

function initNotebook() {
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  const openBtn = document.getElementById('openNotebookBtn');
  
  btnPrev?.addEventListener('click', () => {
    if (currentNotebookPageIndex > 0) {
      goToNotebookPage(currentNotebookPageIndex - 1);
    }
  });
  
  btnNext?.addEventListener('click', () => {
    if (currentNotebookPageIndex < totalNotebookPages - 1) {
      goToNotebookPage(currentNotebookPageIndex + 1);
    }
  });
  
  openBtn?.addEventListener('click', () => {
    goToNotebookPage(1);
  });
  
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pageIndex = parseInt(btn.getAttribute('data-page'));
      goToNotebookPage(pageIndex);
    });
  });
  
  updateNotebookNavButtons();
}

function goToNotebookPage(index) {
  const pages = document.querySelectorAll('.notebook-page');
  const tabs = document.querySelectorAll('.tab-btn');
  
  currentNotebookPageIndex = index;
  
  pages.forEach(p => {
    const pIdx = parseInt(p.getAttribute('data-page-index'));
    p.classList.toggle('active', pIdx === index);
  });
  
  tabs.forEach(t => {
    const tIdx = parseInt(t.getAttribute('data-page'));
    t.classList.toggle('active', tIdx === index);
  });
  
  updateNotebookNavButtons();
}

function updateNotebookNavButtons() {
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  
  if (btnPrev) btnPrev.disabled = currentNotebookPageIndex === 0;
  if (btnNext) btnNext.disabled = currentNotebookPageIndex === totalNotebookPages - 1;
}

function renderProjectsNotebook(projects) {
  const list = document.getElementById('notebookProjectList');
  if (!list) return;
  list.innerHTML = '';
  
  projects.forEach((p, idx) => {
    const row = document.createElement('div');
    row.className = 'nb-project-row';
    row.setAttribute('data-idx', idx);
    row.innerHTML = `
      <img src="${p.thumbnail || 'assets/projects/default.png'}" alt="">
      <span>${p.title}</span>
    `;
    
    row.addEventListener('click', () => {
      selectNotebookProject(idx);
    });
    list.appendChild(row);
  });
}

function selectNotebookProject(index) {
  const rows = document.querySelectorAll('.nb-project-row');
  rows.forEach(r => {
    const rIdx = parseInt(r.getAttribute('data-idx'));
    r.classList.toggle('active', rIdx === index);
  });
  
  const project = activeProjects[index];
  const detailContainer = document.getElementById('notebookProjectDetail');
  if (!detailContainer || !project) return;
  
  const desc = activeLang === 'en' ? (project.description_en || project.description) : (project.description_es || project.description);
  const role = activeLang === 'en' ? (project.role_en || project.role) : (project.role_es || project.role);
  
  detailContainer.innerHTML = `
    <div class="nb-proj-detail">
      <h3>${project.title}</h3>
      <span class="meta">${project.year} • ${project.tools || ''}</span>
      <img src="${project.thumbnail}" alt="${project.title}">
      <p>${desc || ''}</p>
      <span class="role"><strong>${activeLang === 'en' ? 'Role' : 'Rol'}:</strong> ${role || '—'}</span>
      ${project.link ? `<a href="${project.link}" target="_blank" class="btn" style="padding: 6px 12px; font-size: 0.75rem; text-align: center; margin-top: 5px;">${activeLang === 'en' ? 'Visit Link' : 'Visitar Enlace'}</a>` : ''}
    </div>
    <div class="page-footer-nav">${activeLang === 'en' ? `Page 6/6` : `Pág 6/6`}</div>
  `;
}

function initNotebookCarousels() {
  const categories = ['carousel-dio-nb', 'carousel-concept-nb', 'carousel-modelado-nb'];
  categories.forEach(id => {
    const carousel = document.getElementById(id);
    if (!carousel) return;
    const category = carousel.getAttribute('data-category');
    const images = galleryData[category] || [];
    setupCarouselElements(carousel, images);
  });
}

/* ================================================================= */
/* VISOR 3D (THREE.JS PROCEDURAL) */
/* ================================================================= */
let threeScene, threeCamera, threeRenderer, modelGroup;
let currentModelIdx = 0;
let threeModels = [];
let isDraggingModel = false;
let prevMousePos = { x: 0, y: 0 };
let potionBubbles = [];

const threeModelNames = [
  { name: "Poción Mágica 🧪" },
  { name: "Cristal Místico 💎" },
  { name: "Paleta de Color 🎨" }
];

function initThreeViewer() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;
  
  if (typeof THREE === 'undefined') {
    canvas.parentElement.innerHTML = `
      <div style="color: #a0aec0; text-align: center; padding: 40px 10px; font-size: 0.85rem; font-family: monospace;">
        Three.js no pudo cargarse.<br>Comprueba tu conexión de red para ver el visor 3D interactivo.
      </div>
    `;
    return;
  }
  
  const width = canvas.clientWidth || 300;
  const height = canvas.clientHeight || 200;
  
  threeScene = new THREE.Scene();
  let initialBgColor = 0x0f0f13;
  if (activeThemeIdx === 2) initialBgColor = 0x1e1e24;
  else if (activeThemeIdx === 1) initialBgColor = 0xd8cde6;
  threeScene.background = new THREE.Color(initialBgColor);
  
  threeCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  threeCamera.position.z = 7.5;
  
  threeRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  threeRenderer.setSize(width, height);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  const ambient = new THREE.AmbientLight(0xffffff, 0.55);
  threeScene.add(ambient);
  
  const dir1 = new THREE.DirectionalLight(0xffffff, 0.85);
  dir1.position.set(5, 5, 5);
  threeScene.add(dir1);
  
  const point = new THREE.PointLight(0x6371f4, 1.2, 10);
  point.position.set(0, 0, 2);
  threeScene.add(point);
  
  modelGroup = new THREE.Group();
  threeScene.add(modelGroup);
  
  buildProceduralModels();
  showThreeModel(0);
  
  canvas.addEventListener('mousedown', (e) => {
    isDraggingModel = true;
    prevMousePos = { x: e.offsetX, y: e.offsetY };
  });
  
  canvas.addEventListener('mousemove', (e) => {
    if (!isDraggingModel) return;
    const deltaX = e.offsetX - prevMousePos.x;
    const deltaY = e.offsetY - prevMousePos.y;
    
    rotateModel(deltaX, deltaY);
    prevMousePos = { x: e.offsetX, y: e.offsetY };
  });
  
  window.addEventListener('mouseup', () => {
    isDraggingModel = false;
  });
  
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDraggingModel = true;
      const rect = canvas.getBoundingClientRect();
      prevMousePos = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
  }, { passive: true });
  
  canvas.addEventListener('touchmove', (e) => {
    if (!isDraggingModel || e.touches.length !== 1) return;
    const rect = canvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const touchY = e.touches[0].clientY - rect.top;
    
    const deltaX = touchX - prevMousePos.x;
    const deltaY = touchY - prevMousePos.y;
    
    rotateModel(deltaX, deltaY);
    prevMousePos = { x: touchX, y: touchY };
  }, { passive: true });
  
  canvas.addEventListener('touchend', () => {
    isDraggingModel = false;
  });
  
  const btnPrev = document.getElementById('btnModelPrev');
  const btnNext = document.getElementById('btnModelNext');
  
  btnPrev?.addEventListener('click', () => {
    let prevIdx = currentModelIdx - 1;
    if (prevIdx < 0) prevIdx = threeModels.length - 1;
    showThreeModel(prevIdx);
  });
  
  btnNext?.addEventListener('click', () => {
    let nextIdx = (currentModelIdx + 1) % threeModels.length;
    showThreeModel(nextIdx);
  });
  
  window.addEventListener('resize', () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w && h) {
      threeCamera.aspect = w / h;
      threeCamera.updateProjectionMatrix();
      threeRenderer.setSize(w, h);
    }
  });
  
  function tick() {
    requestAnimationFrame(tick);
    
    // Auto-rotación horizontal sutil (muy lenta y elegante)
    if (!isDraggingModel && modelGroup) {
      modelGroup.rotation.y += 0.0015;
    }
    
    if (currentModelIdx === 0) {
      potionBubbles.forEach(b => {
        b.mesh.position.y += b.speedY;
        if (b.mesh.position.y > b.maxY) {
          b.mesh.position.y = b.minY;
          b.mesh.position.x = (Math.random() - 0.5) * 1.4;
          b.mesh.position.z = (Math.random() - 0.5) * 1.4;
        }
      });
    }
    
    threeRenderer.render(threeScene, threeCamera);
  }
  tick();
}

/* Modificada rotación: limita la rotación vertical para no voltear los objetos de cabeza y reduce sensibilidad */
function rotateModel(dx, dy) {
  if (!modelGroup) return;
  const sensitivity = 0.003;
  modelGroup.rotation.y += dx * sensitivity;
  
  // Limitar rotación vertical (clamped vertical rotation)
  modelGroup.rotation.x += dy * sensitivity;
  modelGroup.rotation.x = Math.max(-0.6, Math.min(0.6, modelGroup.rotation.x));
}

function buildProceduralModels() {
  // MODELO 0: POCIÓN MÁGICA
  const potion = new THREE.Group();
  
  const glassGeo = new THREE.CylinderGeometry(1.2, 1.2, 2.2, 16);
  const glassMat = new THREE.MeshPhongMaterial({
    color: 0x6371f4,
    transparent: true,
    opacity: 0.45,
    shininess: 100,
    side: THREE.DoubleSide
  });
  const glassMesh = new THREE.Mesh(glassGeo, glassMat);
  potion.add(glassMesh);
  
  const neckGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.6, 16);
  const neckMesh = new THREE.Mesh(neckGeo, glassMat);
  neckMesh.position.y = 1.4;
  potion.add(neckMesh);
  
  const corkGeo = new THREE.CylinderGeometry(0.45, 0.4, 0.4, 12);
  const corkMat = new THREE.MeshPhongMaterial({ color: 0xa0522d });
  const corkMesh = new THREE.Mesh(corkGeo, corkMat);
  corkMesh.position.y = 1.8;
  potion.add(corkMesh);
  
  const liquidGeo = new THREE.CylinderGeometry(1.15, 1.15, 1.3, 16);
  const liquidMat = new THREE.MeshPhongMaterial({
    color: 0xff7b90,
    transparent: true,
    opacity: 0.85,
    shininess: 70
  });
  const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
  liquidMesh.position.y = -0.4;
  potion.add(liquidMesh);
  
  for (let i = 0; i < 6; i++) {
    const bubGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const bubMat = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
    const bubMesh = new THREE.Mesh(bubGeo, bubMat);
    bubMesh.position.set(
      (Math.random() - 0.5) * 1.3,
      -0.8 + Math.random() * 1.4,
      (Math.random() - 0.5) * 1.3
    );
    potion.add(bubMesh);
    potionBubbles.push({
      mesh: bubMesh,
      speedY: 0.008 + Math.random() * 0.012,
      minY: -0.9,
      maxY: 0.2
    });
  }
  threeModels.push(potion);

  // MODELO 1: CRISTAL MÍSTICO
  const crystal = new THREE.Group();
  
  const cryGeo = new THREE.OctahedronGeometry(1.5, 0);
  const cryMat = new THREE.MeshPhongMaterial({
    color: 0x00f5d4,
    shininess: 120,
    flatShading: true,
    transparent: true,
    opacity: 0.9
  });
  const cryMesh = new THREE.Mesh(cryGeo, cryMat);
  crystal.add(cryMesh);
  
  for (let i = 0; i < 4; i++) {
    const crySmallGeo = new THREE.OctahedronGeometry(0.5, 0);
    const crySmallMat = new THREE.MeshPhongMaterial({
      color: 0x7b2cbf,
      shininess: 90,
      flatShading: true
    });
    const smMesh = new THREE.Mesh(crySmallGeo, crySmallMat);
    const angle = (i / 4) * Math.PI * 2;
    smMesh.position.set(Math.cos(angle) * 1.1, -0.9, Math.sin(angle) * 1.1);
    smMesh.rotation.set(Math.random(), Math.random(), Math.random());
    crystal.add(smMesh);
  }
  
  const rockGeo = new THREE.DodecahedronGeometry(1.4, 0);
  const rockMat = new THREE.MeshPhongMaterial({ color: 0x4a5568, flatShading: true });
  const rockMesh = new THREE.Mesh(rockGeo, rockMat);
  rockMesh.position.y = -1.4;
  rockMesh.scale.set(1.4, 0.4, 1.4);
  crystal.add(rockMesh);
  threeModels.push(crystal);

  // MODELO 2: PALETA DE ARTISTA
  const palette = new THREE.Group();
  
  const palGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.15, 24);
  const palMat = new THREE.MeshPhongMaterial({ color: 0xdeb887, shininess: 15 });
  const palMesh = new THREE.Mesh(palGeo, palMat);
  palMesh.rotation.x = Math.PI / 6;
  palette.add(palMesh);
  
  const colorsList = [0xff2a2a, 0x22ff22, 0x2222ff, 0xffff22, 0xff22ff];
  colorsList.forEach((col, idx) => {
    const paintGeo = new THREE.SphereGeometry(0.22, 8, 8);
    const paintMat = new THREE.MeshPhongMaterial({ color: col, shininess: 50 });
    const paintMesh = new THREE.Mesh(paintGeo, paintMat);
    const angle = (idx / colorsList.length) * Math.PI * 2;
    paintMesh.position.set(Math.cos(angle) * 1.05, 0.1, Math.sin(angle) * 1.05);
    paintMesh.scale.y = 0.25;
    paintMesh.rotation.x = Math.PI / 6;
    palette.add(paintMesh);
  });
  
  const handleGeo = new THREE.CylinderGeometry(0.07, 0.07, 2.8, 8);
  const handleMat = new THREE.MeshPhongMaterial({ color: 0x8b5a2b });
  const handle = new THREE.Mesh(handleGeo, handleMat);
  handle.position.set(0.2, 0.4, 0.2);
  handle.rotation.set(0.8, 0, 0.8);
  palette.add(handle);
  
  const tipGeo = new THREE.ConeGeometry(0.12, 0.35, 8);
  const tipMat = new THREE.MeshPhongMaterial({ color: 0x111111 });
  const tip = new THREE.Mesh(tipGeo, tipMat);
  tip.position.set(1.2, 1.4, 1.2);
  tip.rotation.set(0.8, 0, 0.8);
  palette.add(tip);
  threeModels.push(palette);
}

function showThreeModel(index) {
  if (!modelGroup) return;
  while (modelGroup.children.length > 0) {
    modelGroup.remove(modelGroup.children[0]);
  }
  
  currentModelIdx = index;
  const newModel = threeModels[index];
  if (newModel) {
    newModel.rotation.set(0, 0, 0);
    modelGroup.add(newModel);
    
    const label = document.getElementById('modelName');
    if (label) label.textContent = threeModelNames[index].name;
  }
}

/* ================================================================= */
/* TABLETA DE DIBUJO */
/* ================================================================= */
function setupTabletCanvas() {
  const canvas = document.getElementById('scribble-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  function resize() {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    
    ctx.fillStyle = '#2d3748';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    const step = 15;
    for (let x = 0; x < canvas.width; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
  }
  
  resize();
  window.addEventListener('resize', resize);
  
  let isDrawing = false;
  let currentColor = '#6371f4';
  
  const colors = document.querySelectorAll('.tab-tool-color');
  colors.forEach(btn => {
    btn.addEventListener('click', () => {
      colors.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentColor = btn.getAttribute('data-color');
    });
  });
  
  const clr = document.getElementById('btnClrTablet');
  clr?.addEventListener('click', () => {
    resize();
  });
  
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }
  
  function startDraw(e) {
    isDrawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }
  
  function draw(e) {
    if (!isDrawing) return;
    const pos = getPos(e);
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }
  
  function stopDraw() {
    isDrawing = false;
  }
  
  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);
  
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDraw(e);
  }, { passive: false });
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e);
  }, { passive: false });
  canvas.addEventListener('touchend', stopDraw);
}

/* ================================================================= */
/* CONSOLA RETRO (Sincronización INMEDIATA con libreta) */
/* ================================================================= */
function initConsoleWidget() {
  const cartridges = document.querySelectorAll('.cartridge');
  const consoleBoot = document.getElementById('consoleBoot');
  const consoleGameMenu = document.getElementById('consoleGameMenu');
  const consoleGamePlay = document.getElementById('consoleGamePlay');
  const consoleGameTitle = document.getElementById('consoleGameTitle');
  const consoleGameLink = document.getElementById('consoleGameLink');
  
  cartridges.forEach(cart => {
    cart.addEventListener('click', () => {
      const idx = parseInt(cart.getAttribute('data-game'));
      insertCartridge(idx);
    });
    
    cart.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', cart.getAttribute('data-game'));
      cart.style.opacity = '0.5';
    });
    
    cart.addEventListener('dragend', () => {
      cart.style.opacity = '1';
    });
  });
  
  const consoleBody = document.getElementById('desk-console');
  if (consoleBody) {
    consoleBody.addEventListener('dragover', (e) => {
      e.preventDefault();
      consoleBody.style.transform = 'scale(1.02)';
    });
    
    consoleBody.addEventListener('dragleave', () => {
      consoleBody.style.transform = 'scale(1)';
    });
    
    consoleBody.addEventListener('drop', (e) => {
      e.preventDefault();
      consoleBody.style.transform = 'scale(1)';
      const gameIdx = parseInt(e.dataTransfer.getData('text/plain'));
      if (!isNaN(gameIdx)) {
        insertCartridge(gameIdx);
      }
    });
  }
  
  function insertCartridge(idx) {
    const game = activeProjects[idx];
    if (!game) return;
    
    // 1. SINCRONIZACIÓN INMEDIATA (Elimina el delay del cuaderno)
    goToNotebookPage(3);
    selectNotebookProject(idx);
    
    // 2. Efecto de encendido secundario en pantalla de consola
    consoleGameMenu.classList.add('hidden');
    consoleGamePlay.classList.remove('active');
    consoleBoot.classList.add('active');
    
    playRetroBeep();
    
    setTimeout(() => {
      consoleBoot.classList.remove('active');
      
      consoleGameTitle.textContent = game.title.toUpperCase();
      consoleGameLink.href = game.link || '#';
      consoleGamePlay.classList.add('active');
    }, 1200);
  }
}

function playRetroBeep() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch (e) {
    // Silenciar si no está activado por interacción previa
  }
}

function playStickerSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    if (type === 'drag') {
      // Sonido de despegado rápido
      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.06);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } else if (type === 'drop') {
      // Sonido "tac" magnético al soltar
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    }
  } catch (e) {
    // Evitar que falle sin interacción previa
  }
}

/* ================================================================= */
/* PEGATINAS ARRASTRABLES */
/* ================================================================= */
function setupStickerDragging() {
  const stickers = document.querySelectorAll('.sticker');
  
  stickers.forEach(st => {
    let startX = 0, startY = 0;
    let initialX = 0, initialY = 0;
    
    const stored = localStorage.getItem('sticker_pos_' + st.id);
    if (stored) {
      const coords = JSON.parse(stored);
      st.style.left = coords.left;
      st.style.top = coords.top;
    }
    
    st.addEventListener('mousedown', dragStart);
    st.addEventListener('touchstart', dragStart, { passive: false });
    
    function dragStart(e) {
      e.preventDefault();
      
      // Sonido al despegar
      playStickerSound('drag');
      
      let clientX = e.clientX;
      let clientY = e.clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
      
      startX = clientX;
      startY = clientY;
      initialX = st.offsetLeft;
      initialY = st.offsetTop;
      
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);
      document.addEventListener('touchmove', dragMove, { passive: false });
      document.addEventListener('touchend', dragEnd);
    }
    
    function dragMove(e) {
      let clientX = e.clientX;
      let clientY = e.clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
      
      const dx = clientX - startX;
      const dy = clientY - startY;
      
      st.style.left = (initialX + dx) + 'px';
      st.style.top = (initialY + dy) + 'px';
    }
    
    function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
      document.removeEventListener('touchmove', dragMove);
      document.removeEventListener('touchend', dragEnd);
      
      const coords = {
        left: st.style.left,
        top: st.style.top
      };
      localStorage.setItem('sticker_pos_' + st.id, JSON.stringify(coords));
      
      // Sonido al soltar (tac)
      playStickerSound('drop');
    }
  });
}

/* ================================================================= */
/* TAZA DE CAFÉ E INTERRUPTOR DE TEMAS */
/* ================================================================= */
const themes = ['theme-cozy', 'theme-lavender', 'theme-dark-pixel'];
let activeThemeIdx = 0;

function initCoffeeMugTheme() {
  const mug = document.getElementById('desk-mug');
  const themeBtn = document.getElementById('themeToggleBtn');
  
  document.body.classList.add(themes[activeThemeIdx]);
  
  const handleThemeChange = () => {
    document.body.classList.remove(themes[activeThemeIdx]);
    activeThemeIdx = (activeThemeIdx + 1) % themes.length;
    document.body.classList.add(themes[activeThemeIdx]);
    
    if (threeScene) {
      if (activeThemeIdx === 2) {
        threeScene.background.setHex(0x1e1e24);
      } else if (activeThemeIdx === 1) {
        threeScene.background.setHex(0xd8cde6);
      } else {
        threeScene.background.setHex(0x0f0f13);
      }
    }
  };
  
  mug?.addEventListener('click', () => {
    handleThemeChange();
    mug.style.transform = 'scale(1.15) rotate(-5deg)';
    setTimeout(() => { mug.style.transform = ''; }, 250);
  });
  
  themeBtn?.addEventListener('click', () => {
    handleThemeChange();
    themeBtn.style.transform = 'scale(1.2) rotate(15deg)';
    setTimeout(() => { themeBtn.style.transform = ''; }, 250);
  });
}

/* ================================================================= */
/* MODAL Y VISOR DE IMAGENES CLÁSICO */
/* ================================================================= */
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openGlobalModal(project) {
  if (!modal || !modalBody) return;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  
  const desc = activeLang === 'en' ? (project.description_en || project.description) : (project.description_es || project.description);
  const role = activeLang === 'en' ? (project.role_en || project.role) : (project.role_es || project.role);
  
  modalBody.innerHTML = `
    <h2 style="color: var(--accent); margin-bottom: 8px;">${project.title}</h2>
    <p class="muted" style="font-weight: 700; margin-bottom: 20px;">${project.year} • ${project.tools || ''}</p>
    <div style="display:flex; gap:20px; flex-wrap:wrap; margin-bottom: 20px;">
      <img src="${project.thumbnail}" alt="${project.title}" style="width:240px; max-width:100%; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.1); cursor: zoom-in;" onclick="openImageLightbox(['${project.thumbnail}'], 0)">
      <div style="flex:1; min-width:260px;">
        <p style="font-size:0.95rem; line-height:1.6; margin:0 0 15px;">${desc || ''}</p>
        ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener" class="btn" style="display:inline-block; font-size:0.85rem;">${activeLang === 'en' ? 'View Online Project' : 'Ver Proyecto en Línea'}</a>` : ''}
      </div>
    </div>
    <p style="font-size:0.85rem; font-weight:700;"><strong>${activeLang === 'en' ? 'Responsibilities' : 'Responsabilidades'}:</strong> ${role || '—'}</p>
    ${project.gallery && project.gallery.length ? `
      <h4 style="margin: 20px 0 10px;">${activeLang === 'en' ? 'Development Gallery' : 'Galería de Desarrollo'}</h4>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        ${project.gallery.map((g, i) => `<img src="${g}" class="gallery-img" style="width:130px; height:85px; object-fit:cover; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.05);" onclick="openImageLightbox(${JSON.stringify(project.gallery).replace(/"/g, "'")}, ${i})">`).join('')}
      </div>
    ` : ''}
  `;
}

modalClose?.addEventListener('click', closeGlobalModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeGlobalModal();
});

function closeGlobalModal() {
  modal?.classList.remove('show');
  modal?.setAttribute('aria-hidden', 'true');
  if (modalBody) modalBody.innerHTML = '';
}

let imageLightbox = null;
let currentImages = [];
let currentImageIndex = 0;

function createImageLightbox() {
  if (imageLightbox) return;
  
  imageLightbox = document.createElement('div');
  imageLightbox.className = 'image-lightbox';
  imageLightbox.innerHTML = `
    <button class="image-lightbox-close" aria-label="Cerrar">&times;</button>
    <button class="image-lightbox-nav prev" aria-label="Anterior">&#8249;</button>
    <img src="" alt="Vista ampliada">
    <button class="image-lightbox-nav next" aria-label="Siguiente">&#8250;</button>
  `;
  document.body.appendChild(imageLightbox);
  
  const closeBtn = imageLightbox.querySelector('.image-lightbox-close');
  const prevBtn = imageLightbox.querySelector('.prev');
  const nextBtn = imageLightbox.querySelector('.next');
  
  closeBtn.addEventListener('click', closeImageLightbox);
  prevBtn.addEventListener('click', showPreviousImage);
  nextBtn.addEventListener('click', showNextImage);
  
  imageLightbox.addEventListener('click', (e) => {
    if (e.target === imageLightbox) closeImageLightbox();
  });
  
  document.addEventListener('keydown', (e) => {
    if (!imageLightbox || !imageLightbox.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') showPreviousImage();
    else if (e.key === 'ArrowRight') showNextImage();
    else if (e.key === 'Escape') closeImageLightbox();
  });
}

function openImageLightbox(images, startIndex = 0) {
  createImageLightbox();
  currentImages = images;
  currentImageIndex = startIndex;
  updateLightboxImage();
  imageLightbox.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function updateLightboxImage() {
  const img = imageLightbox.querySelector('img');
  const prevBtn = imageLightbox.querySelector('.prev');
  const nextBtn = imageLightbox.querySelector('.next');
  
  img.src = currentImages[currentImageIndex];
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === currentImages.length - 1;
}

function showPreviousImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateLightboxImage();
  }
}

function showNextImage() {
  if (currentImageIndex < currentImages.length - 1) {
    currentImageIndex++;
    updateLightboxImage();
  }
}

function closeImageLightbox() {
  if (!imageLightbox) return;
  imageLightbox.classList.remove('show');
  document.body.style.overflow = '';
}
