/**
 * Mahmoud Mohajer - Personal Website JS Logic
 * Safe, vanilla DOM manipulation following secure coding guidelines.
 */

// Data collections
const projects = [
  {
    title: "CUDA Matrix Optimizations",
    description: "An implementation of custom GEMM (General Matrix Multiply) kernels in CUDA. Focuses on shared memory tiling, thread-level cache utilization, and avoiding bank conflicts. Benchmarked against cuBLAS.",
    tags: ["CUDA", "C++", "High-Performance Computing"],
    github: "https://github.com/MahmoudMohajer",
    category: "System Engineering"
  },
  {
    title: "Toy Transformer from Scratch",
    description: "A bare-metal educational implementation of a GPT-style decoder-only transformer model in Python and pure NumPy, written to master self-attention backpropagation and layer normalization from first-principles.",
    tags: ["Python", "NumPy", "Deep Learning"],
    github: "https://github.com/MahmoudMohajer",
    category: "Machine Learning"
  },
  {
    title: "Decentralized Compute Discovery Protocol",
    description: "A prototype peer-to-peer discovery node designed to map available local GPU hardware configurations over a distributed local network, exploring metadata indexing for decentralized training.",
    tags: ["Go", "Networking", "Distributed Systems"],
    github: "https://github.com/MahmoudMohajer",
    category: "Infrastructure"
  }
];

const blogPosts = [
  {
    title: "A First-Principles Guide to GPU Memory Hierarchies",
    summary: "Breaking down how registers, shared memory, L1/L2 caches, and global memory operate within the GPU architecture. Explores latency mitigation strategies and coalesced memory access.",
    date: "May 2026",
    readTime: "8 min read",
    link: "blog/gpu-memory-hierarchies.html"
  },
  {
    title: "Backpropagation Math: Manual Attention Gradients",
    summary: "Deriving the mathematical gradients of scaled dot-product attention step-by-step. A reference sheet written during the building of a custom transformer implementation.",
    date: "April 2026",
    readTime: "12 min read",
    link: "blog/backpropagation-gradients.html"
  },
  {
    title: "Decentralized Machine Learning: Verification Challenges",
    summary: "An analysis of the trust assumptions in decentralized model training. Looks at gradient validation, zero-knowledge verification, and cryptographic proofs of compute.",
    date: "March 2026",
    readTime: "6 min read",
    link: "blog/decentralized-verification.html"
  }
];

const roadmapItems = [
  {
    time: "CURRENT FOCUS",
    title: "Full-Stack AI & ML Systems",
    desc: "Learning the entire stack of AI/ML. Combines high-level architectures with low-level CUDA kernels and hardware constraints to build a complete, practical picture of modern intelligence systems.",
    active: true
  },
  {
    time: "NEXT MILESTONE",
    title: "Distributed AI Training Infrastructures",
    desc: "Understanding scale-up mechanics: data parallelism, model parallelism, parameter servers, NCCL primitives, and fault-tolerant orchestration in distributed environments.",
    active: false
  },
  {
    time: "LONG TERM GOAL",
    title: "Decentralized Compute & Open Intelligence",
    desc: "Researching secure, trustless protocol designs for decentralized training networks. Investigating how cryptographic verification and local compute nodes can build open-source artificial intelligence.",
    active: false
  }
];

// Helper to create and return dynamic SVG icons
function createSvgIcon(name) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  
  if (name === "github") {
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("stroke", "none");
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z");
    svg.appendChild(path);
  } else if (name === "arrow-up-right") {
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", "7");
    line.setAttribute("y1", "17");
    line.setAttribute("x2", "17");
    line.setAttribute("y2", "7");
    const polyline = document.createElementNS(svgNS, "polyline");
    polyline.setAttribute("points", "7 7 17 7 17 17");
    svg.appendChild(line);
    svg.appendChild(polyline);
  } else if (name === "terminal") {
    const polyline = document.createElementNS(svgNS, "polyline");
    polyline.setAttribute("points", "4 17 10 11 4 5");
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", "12");
    line.setAttribute("y1", "19");
    line.setAttribute("x2", "20");
    line.setAttribute("y2", "19");
    svg.appendChild(polyline);
    svg.appendChild(line);
  }
  
  return svg;
}

// Render Projects List
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;
  
  container.replaceChildren(); // Safe clean method
  
  projects.forEach(project => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.setAttribute("href", project.github);
    card.setAttribute("target", "_blank");
    card.setAttribute("rel", "noopener noreferrer");
    
    const cardTop = document.createElement("div");
    cardTop.className = "card-top";
    
    const meta = document.createElement("div");
    meta.className = "card-meta";
    
    const category = document.createElement("span");
    category.textContent = project.category;
    
    const icon = createSvgIcon("github");
    icon.style.width = "14px";
    icon.style.height = "14px";
    
    meta.appendChild(category);
    meta.appendChild(icon);
    
    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = project.title;
    
    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = project.description;
    
    cardTop.appendChild(meta);
    cardTop.appendChild(title);
    cardTop.appendChild(desc);
    
    const tagsContainer = document.createElement("div");
    tagsContainer.className = "project-tags";
    
    project.tags.forEach(tag => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "project-tag";
      tagSpan.textContent = tag;
      tagsContainer.appendChild(tagSpan);
    });
    
    const footerLink = document.createElement("div");
    footerLink.className = "card-link";
    footerLink.textContent = "View Repository";
    footerLink.appendChild(createSvgIcon("arrow-up-right"));
    
    card.appendChild(cardTop);
    card.appendChild(tagsContainer);
    card.appendChild(footerLink);
    
    container.appendChild(card);
  });
}

// Render Blog Posts List
function renderBlogPosts() {
  const container = document.getElementById("blog-grid");
  if (!container) return;
  
  container.replaceChildren();
  
  blogPosts.forEach(post => {
    const card = document.createElement("a");
    card.className = "note-card";
    card.setAttribute("href", post.link);
    
    const cardTop = document.createElement("div");
    cardTop.className = "card-top";
    
    const meta = document.createElement("div");
    meta.className = "card-meta";
    
    const date = document.createElement("span");
    date.textContent = post.date;
    
    const readTime = document.createElement("span");
    readTime.textContent = post.readTime;
    
    meta.appendChild(date);
    meta.appendChild(readTime);
    
    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = post.title;
    
    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = post.summary;
    
    cardTop.appendChild(meta);
    cardTop.appendChild(title);
    cardTop.appendChild(desc);
    
    const footerLink = document.createElement("div");
    footerLink.className = "card-link";
    footerLink.textContent = "Read Article";
    footerLink.appendChild(createSvgIcon("arrow-up-right"));
    
    card.appendChild(cardTop);
    card.appendChild(footerLink);
    
    container.appendChild(card);
  });
}

// Render Roadmap Items
function renderRoadmap() {
  const container = document.getElementById("roadmap-timeline");
  if (!container) return;
  
  container.replaceChildren();
  
  roadmapItems.forEach(item => {
    const roadmapItem = document.createElement("div");
    roadmapItem.className = `roadmap-item${item.active ? " active" : ""}`;
    
    const dot = document.createElement("div");
    dot.className = "roadmap-dot";
    
    const timeSpan = document.createElement("span");
    timeSpan.className = "roadmap-time";
    timeSpan.textContent = item.time;
    
    const title = document.createElement("h3");
    title.className = "roadmap-title";
    title.textContent = item.title;
    
    const desc = document.createElement("p");
    desc.className = "roadmap-desc";
    desc.textContent = item.desc;
    
    roadmapItem.appendChild(dot);
    roadmapItem.appendChild(timeSpan);
    roadmapItem.appendChild(title);
    roadmapItem.appendChild(desc);
    
    container.appendChild(roadmapItem);
  });
}

// Navigation active status update on scroll
function setupScrollSpy() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav a, .mobile-nav-list a");
  
  window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Triggers active change when the section is at 30% of the viewport height
      if (window.scrollY >= (sectionTop - sectionHeight * 0.3)) {
        current = section.getAttribute("id") || "";
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Setup Mobile Navigation Menu Overlay
function setupMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const overlay = document.getElementById("mobile-nav-overlay");
  const overlayLinks = document.querySelectorAll(".mobile-nav-list a");
  
  if (!menuBtn || !overlay) return;
  
  let menuOpen = false;
  
  function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      overlay.style.display = "flex";
      // Change burger to clean X icon dynamically
      menuBtn.replaceChildren();
      const closeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      closeSvg.setAttribute("viewBox", "0 0 24 24");
      closeSvg.setAttribute("fill", "none");
      closeSvg.setAttribute("stroke", "currentColor");
      closeSvg.setAttribute("stroke-width", "2");
      const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line1.setAttribute("x1", "18");
      line1.setAttribute("y1", "6");
      line1.setAttribute("x2", "6");
      line1.setAttribute("y2", "18");
      const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line2.setAttribute("x1", "6");
      line2.setAttribute("y1", "6");
      line2.setAttribute("x2", "18");
      line2.setAttribute("y2", "18");
      closeSvg.appendChild(line1);
      closeSvg.appendChild(line2);
      closeSvg.style.width = "24px";
      closeSvg.style.height = "24px";
      menuBtn.appendChild(closeSvg);
    } else {
      overlay.style.display = "none";
      // Revert to burger menu icon
      menuBtn.replaceChildren();
      const burgerSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      burgerSvg.setAttribute("viewBox", "0 0 24 24");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("fill-rule", "evenodd");
      path.setAttribute("clip-rule", "evenodd");
      path.setAttribute("d", "M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z");
      burgerSvg.appendChild(path);
      burgerSvg.style.width = "24px";
      burgerSvg.style.height = "24px";
      menuBtn.appendChild(burgerSvg);
    }
  }
  
  menuBtn.addEventListener("click", toggleMenu);
  
  overlayLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (menuOpen) toggleMenu();
    });
  });
}

// Initializer
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderBlogPosts();
  renderRoadmap();
  setupScrollSpy();
  setupMobileMenu();
});
