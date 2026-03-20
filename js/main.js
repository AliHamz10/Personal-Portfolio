const CONTACT_EMAIL = 'alihamzatk@gmail.com';

document.addEventListener('DOMContentLoaded', () => {
  initializeSmoothScrolling();
  initializeReveal();
  initializeContactForm();
});

function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initializeReveal() {
  const elements = document.querySelectorAll('[data-reveal]');

  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initializeContactForm() {
  const form = document.querySelector('[data-contact-form]');
  const feedback = document.querySelector('[data-form-feedback]');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const project = (formData.get('project') || '').toString().trim();

    const missing = [];
    if (!name) missing.push('name');
    if (!email) missing.push('email');
    if (!project) missing.push('project brief');

    if (missing.length) {
      if (feedback) {
        const readable =
          missing.length === 1
            ? missing[0]
            : `${missing.slice(0, -1).join(', ')} and ${missing[missing.length - 1]}`;
        feedback.textContent = `Please add your ${readable}.`;
      }
      return;
    }

    const subject = encodeURIComponent(`Project intro from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject:\n${project}\n\nFrom portfolio site.`
    );

    if (feedback) {
      feedback.textContent = 'Opening your email client...';
    }

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}
