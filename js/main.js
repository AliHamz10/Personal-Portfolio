// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeAnimations();
    initializeSmoothScrolling();
    loadProjectData();
});

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Fade-in animations for sections
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Load project data from JSON
async function loadProjectData() {
    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        
        // Populate featured projects on homepage
        const featuredProjects = projects.filter(project => project.featured);
        if (featuredProjects.length > 0) {
            updateFeaturedProjects(featuredProjects);
        }
    } catch (error) {
        console.log('Could not load project data:', error);
    }
}

// Update featured projects on homepage
function updateFeaturedProjects(projects) {
    const projectImages = document.querySelectorAll('.project-image');
    
    projects.forEach((project, index) => {
        if (projectImages[index]) {
            const img = projectImages[index].querySelector('.project-img');
            const title = projectImages[index].querySelector('.project-title');
            const year = projectImages[index].querySelector('.project-year');
            
            if (img) img.src = project.image || img.src;
            if (title) title.textContent = project.title;
            if (year) year.textContent = project.year;
        }
    });
}

// Utility function for debouncing
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

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Recalculate any layout-dependent elements
    console.log('Window resized');
}, 250)); 