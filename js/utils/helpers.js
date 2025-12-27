// Helper functions for portfolio functionality

// Projects page functionality
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("projects.html")) {
    initializeProjectsPage();
  }

  if (window.location.pathname.includes("contact.html")) {
    initializeContactForm();
  }
});

// Initialize projects page
async function initializeProjectsPage() {
  try {
    const response = await fetch("/data/projects.json");
    const projects = await response.json();

    displayProjects(projects);
    initializeProjectFilters(projects);
  } catch (error) {
    console.log("Could not load projects:", error);
    displayProjects([]);
  }
}

// Display projects in grid
function displayProjects(projects, filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  const template = document.getElementById("projectTemplate");

  if (!projectsGrid || !template) return;

  // Clear existing projects
  projectsGrid.innerHTML = "";

  // Filter projects if needed
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => {
          const category = project.category.toLowerCase();
          return category.includes(filter.toLowerCase());
        });

  // Create project cards
  filteredProjects.forEach((project) => {
    const projectCard = template.content.cloneNode(true);

    // Set project data
    const card = projectCard.querySelector(".project-card");
    card.setAttribute("data-category", project.category.toLowerCase());

    const img = projectCard.querySelector(".project-img");
    img.src = project.image;
    img.alt = project.title;

    const title = projectCard.querySelector(".project-title");
    title.textContent = project.title;

    const description = projectCard.querySelector(".project-description");
    description.textContent = project.description;

    const category = projectCard.querySelector(".project-category");
    category.textContent = project.category;

    const year = projectCard.querySelector(".project-year");
    year.textContent = project.year;

    // Add tags
    const tagsContainer = projectCard.querySelector(".project-tags");
    project.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "project-tag";
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    // Set link
    const link = projectCard.querySelector(".project-link");
    link.href = project.link;

    projectsGrid.appendChild(projectCard);
  });
}

// Initialize project filters
function initializeProjectFilters(projects) {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filter = this.getAttribute("data-filter");

      // Display filtered projects
      displayProjects(projects, filter);
    });
  });
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm);
  }
}

// Handle contact form submission
function handleContactForm(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    showNotification("Please fill in all required fields.", "error");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showNotification("Please enter a valid email address.", "error");
    return;
  }

  // Simulate form submission
  showNotification(
    "Message sent successfully! I'll get back to you soon.",
    "success"
  );

  // Reset form
  e.target.reset();
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Style the notification
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${
          type === "success"
            ? "var(--accent-available)"
            : "var(--accent-highlight)"
        };
        color: var(--primary-text);
        padding: 1rem 2rem;
        border-radius: 4px;
        z-index: 10000;
        font-size: var(--small-size);
        text-transform: uppercase;
        letter-spacing: 0.02em;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Utility function to format dates
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Utility function to truncate text
function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

// Utility function to generate random ID
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Utility function to debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility function to throttle
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
