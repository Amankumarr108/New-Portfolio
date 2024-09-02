// loadHeader.js

let domains = [
  {
    domain: "Frontend Developer",
    skills: [
      { skill: "Html", proficiency: 85 },
      { skill: "CSS", proficiency: 90 },
      { skill: "Js", proficiency: 90 },
      { skill: "Php", proficiency: 90 },
      { skill: "Wordpress", proficiency: 90 },
    ],
  },
  {
    domain: "Backend Developer",
    skills: [
      { skill: "Node.js", proficiency: 80 },
      { skill: "Express.js", proficiency: 75 },
      { skill: "MongoDB", proficiency: 70 },
    ],
  },
  {
    domain: "Frontend Developer",
    skills: [
      { skill: "Html", proficiency: 85 },
      { skill: "CSS", proficiency: 90 },
      { skill: "Js", proficiency: 90 },
      { skill: "Php", proficiency: 90 },
      { skill: "Wordpress", proficiency: 90 },
    ],
  },
  {
    domain: "Backend Developer",
    skills: [
      { skill: "Node.js", proficiency: 80 },
      { skill: "Express.js", proficiency: 75 },
      { skill: "MongoDB", proficiency: 70 },
    ],
  },
  {
    domain: "Frontend Developer",
    skills: [
      { skill: "Html", proficiency: 85 },
      { skill: "CSS", proficiency: 90 },
      { skill: "Js", proficiency: 90 },
      { skill: "Php", proficiency: 90 },
      { skill: "Wordpress", proficiency: 90 },
    ],
  },
  {
    domain: "Backend Developer",
    skills: [
      { skill: "Node.js", proficiency: 80 },
      { skill: "Express.js", proficiency: 75 },
      { skill: "MongoDB", proficiency: 70 },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
      const currentPath = window.location.pathname;
      const menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((item) => {
        if (item.getAttribute("href") === currentPath) {
          item.classList.add("active-tab");
        }
      });
    })
    .catch((error) => console.error("Error loading header:", error));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));

  renderDomains();
});

function renderDomains() {
  const skillsContainer = document.getElementById("skillContainer");
  skillsContainer.innerHTML = "";

  domains.forEach((domainData) => {
    const domainElement = document.createElement("div");
    domainElement.className = "skill-1";

    domainElement.innerHTML = `
      <div class="skill-1-child"></div>
      <div class="skill-type">
        <div class="front-end-development-container">
          <p class="front-end-development">${domainData.domain}</p>
        </div>
      </div>
    `;

    domainData.skills.forEach((skillData, index) => {
      const skillElement = document.createElement("div");
      skillElement.className = "skill-items-parent";

      skillElement.innerHTML = `
        <div class="skill-items">
          <div>${skillData.skill}</div>
          <div class="skill-divider">${skillData.proficiency}%</div>
        </div>
        <div class="line">
          <div class="line-child" style="width: ${
            skillData.proficiency
          }%;"></div>
          <div class="${index % 2 === 0 ? "line-item" : "divider-box"}"></div>
        </div>
      `;

      domainElement.appendChild(skillElement);
    });

    skillsContainer.appendChild(domainElement);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const fullName = form.fullName.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;

  console.log("Full Name:", fullName);
  console.log("Email:", email);
  if (subject) {
    console.log("Subject:", subject);
  }
  if (message) {
    console.log("Message:", message);
  }

  form.reset();
}

function openPopup() {
  const popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.classList.add("active");
}

function closePopup() {
  const popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.classList.remove("active");
}

function handleAddSkill(event) {
  event.preventDefault();

  const form = event.target;
  const newDomain = form.domain.value;
  const skills = [];
  for (let i = 1; i <= 5; i++) {
    const skill = form[`skill${i}`]?.value;
    const proficiency = form[`proficiency${i}`]?.value;
    if (skill && proficiency) {
      skills.push({ skill, proficiency: parseInt(proficiency) });
    }
  }
  if (newDomain && skills.length > 0) {
    domains.push({ domain: newDomain, skills });
    renderDomains();

    form.reset();

    closePopup();
  } else {
    alert("Atleast One Skill And Proficiency Is Required");
  }
}

function handleSideBar({ isOpen }) {
  const sideBar = document.getElementById("sideBar");
  if (isOpen) {
    sideBar.style.transform = "translateX(0)";
  } else {
    sideBar.style.transform = "translateX(100%)";
  }
}

// gh


