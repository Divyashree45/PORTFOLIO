const projects = [
  {
    number: "01",
    category: "INVESTIGATION",
    title: "Phishing Email Investigation & IOC Analysis",
    summary:
      "A structured investigation of a simulated phishing email to identify indicators of compromise, analyse suspicious links and document a final verdict.",
    why:
      "I wanted to understand how a SOC analyst would investigate a suspicious email reported by an employee and determine whether it was malicious.",
    objective:
      "Analyse a simulated phishing email, identify indicators of compromise and document the investigation.",
    tools: [
      "Email header analysis",
      "VirusTotal",
      "CyberChef",
      "URL / domain analysis"
    ],
    work: [
      "Analysed the email headers",
      "Checked the sender and sending infrastructure",
      "Extracted URLs and other indicators",
      "Analysed suspicious links",
      "Checked indicators against threat intelligence sources",
      "Documented the evidence",
      "Reached a final verdict on whether the email was malicious"
    ],
    skills:
      "Suspicious email analysis, IOC extraction, threat intelligence, evidence documentation and structured investigation.",
    outcome:
      "Created a structured phishing investigation report containing the evidence, analysis and final verdict.",
    relevance:
      "This mirrors an important SOC workflow: triaging a reported email, extracting indicators, validating them with security intelligence and communicating the findings clearly.",
    evidence: [
      { label: "Illustrative investigation screenshot", image: "evidence/phishing-investigation-demo.png", note: "Demo visual — replace with your real evidence." },
      { label: "Investigation report — add file/link" },
      { label: "Sample email headers — add file/link" },
      { label: "IOC list — add file/link" }
    ],
    tags: ["Phishing", "IOC Analysis", "Threat Intel", "SOC"]
  },
  {
    number: "02",
    category: "SOC / DETECTION",
    title: "Home SOC / Threat Detection Lab",
    summary:
      "A small Windows-based home lab used to generate security events, collect logs, investigate suspicious activity and practise basic detection engineering.",
    why:
      "I wanted to understand how security analysts collect logs, investigate suspicious activity and create useful detections in a practical environment.",
    objective:
      "Build a small home lab where security events could be generated, collected and investigated.",
    tools: [
      "Windows virtual machine",
      "Sysmon",
      "Splunk",
      "Windows Event Logs",
      "PowerShell"
    ],
    work: [
      "Set up a Windows virtual machine",
      "Installed and configured Sysmon",
      "Generated different security events",
      "Collected and searched logs in Splunk",
      "Investigated suspicious PowerShell activity",
      "Created a basic detection query",
      "Documented the investigation process"
    ],
    skills:
      "Windows security logging, SIEM fundamentals, log analysis, event investigation and detection engineering.",
    outcome:
      "Built a repeatable mini SOC environment for generating and investigating security telemetry.",
    relevance:
      "The workflow connects directly to entry-level SOC tasks such as log collection, alert investigation, Windows event analysis and detection development.",
    evidence: [
      { label: "Illustrative SOC dashboard screenshot", image: "evidence/home-soc-demo.png", note: "Demo visual — replace with your real lab screenshot." },
      { label: "Splunk query / dashboard — add link" },
      { label: "Investigation notes — add link" },
      { label: "Detection example — add link" }
    ],
    tags: ["Windows", "Sysmon", "Splunk", "SIEM"]
  },
  {
    number: "03",
    category: "SECURITY AUTOMATION",
    title: "Python IOC Enrichment Tool",
    summary:
      "A Python tool that accepts an indicator such as an IP address or domain and retrieves useful information from a threat intelligence API.",
    why:
      "During security investigations, analysts often need to look up IP addresses, domains or hashes against multiple sources. I wanted to automate part of that process.",
    objective:
      "Create a simple Python tool that accepts an IOC as input and retrieves useful information for an analyst.",
    tools: [
      "Python",
      "REST APIs",
      "JSON",
      "VirusTotal API",
      "GitHub"
    ],
    work: [
      "Created a Python script that accepts an IOC as input",
      "Connected the script to a threat intelligence API",
      "Parsed the API response",
      "Extracted useful information",
      "Reviewed the returned data for analyst-relevant context"
    ],
    skills:
      "Python scripting, API integration, JSON parsing, threat intelligence workflows and security automation.",
    outcome:
      "Created a small IOC enrichment workflow that demonstrates how repetitive intelligence lookups can be automated.",
    relevance:
      "IOC enrichment is useful during alert triage and investigations because analysts can quickly gather context around suspicious infrastructure or indicators.",
    evidence: [
      { label: "Illustrative IOC enrichment screenshot", image: "evidence/ioc-enrichment-demo.png", note: "Demo visual — replace with your real tool output." },
      { label: "GitHub repository — add URL" },
      { label: "Short demo — add URL" },
      { label: "Technical notes — add link" }
    ],
    tags: ["Python", "REST API", "VirusTotal", "Automation"]
  }
];

const projectGrid = document.getElementById("project-grid");
const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const toast = document.getElementById("toast");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function createProjectCard(project) {
  return `
    <article class="project-card reveal">
      <div class="card-number">${project.number} / ${project.category}</div>
      <div class="card-topline">
        <span class="tag">${project.category}</span>
        <span class="muted">Practical project</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
      <div class="project-action">
        <button class="text-button" type="button" data-project="${project.number}">
          View investigation ↗
        </button>
      </div>
    </article>
  `;
}

function renderProjects() {
  projectGrid.innerHTML = projects.map(createProjectCard).join("");
}

function openProject(projectNumber) {
  const project = projects.find(item => item.number === projectNumber);
  if (!project) return;

  modalContent.innerHTML = `
    <div class="modal-inner">
      <p class="section-kicker">${project.number} / ${project.category}</p>
      <h2 id="modal-title">${project.title}</h2>
      <p class="modal-intro">${project.summary}</p>

      <div class="modal-tags">
        ${project.tags.map(tag => `<span class="project-tags"><span>${tag}</span></span>`).join("")}
      </div>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>Why I built it</h4>
          <p>${project.why}</p>
        </div>

        <div class="detail-block">
          <h4>Objective</h4>
          <p>${project.objective}</p>
        </div>

        <div class="detail-block">
          <h4>Tools / technologies</h4>
          <ul>
            ${project.tools.map(tool => `<li>${tool}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-block">
          <h4>What I did</h4>
          <ul>
            ${project.work.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-block">
          <h4>Skills developed</h4>
          <p>${project.skills}</p>
        </div>

        <div class="detail-block">
          <h4>Outcome</h4>
          <p>${project.outcome}</p>
        </div>

        <div class="detail-block full">
          <h4>Real-world relevance</h4>
          <p>${project.relevance}</p>
        </div>
      </div>

      <div class="modal-evidence">
        ${project.evidence.map(item => item.image
          ? `<div class="evidence-preview">
               <img src="${item.image}" alt="${item.label}">
               <div><strong>${item.label}</strong><small>${item.note || ""}</small></div>
             </div>`
          : `<span class="evidence-placeholder">${item.label || item}</span>`).join("")}
      </div>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

projectGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  openProject(button.dataset.project);
});

document.addEventListener("click", (event) => {
  const placeholder = event.target.closest(".placeholder-link");
  if (placeholder) {
    event.preventDefault();
    showToast(placeholder.dataset.placeholder || "Add your real profile URL here.");
  }

  const placeholderButton = event.target.closest("[data-placeholder-button]");
  if (placeholderButton) {
    showToast(placeholderButton.dataset.placeholderButton);
  }

  if (event.target.matches("[data-close-modal]")) {
    closeModal();
  }

  const navLink = event.target.closest(".nav-links a");
  if (navLink) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function observeRevealElements() {
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderProjects();
observeRevealElements();

document.getElementById("year").textContent = new Date().getFullYear();
