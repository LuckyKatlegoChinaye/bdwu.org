// Mobile menu toggle and small enhancements
document.addEventListener('DOMContentLoaded', function(){
  // Set footer year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Graceful local-form feedback (Netlify forms work on Netlify)
  const forms = document.querySelectorAll('form[data-netlify]');
  forms.forEach(form => {
    form.addEventListener('submit', function(e){
      // If running locally, allow normal submit to attempt POST; provide quick client feedback
      const isLocal = location.protocol === 'file:' || location.hostname === 'localhost';
      if(isLocal){
        e.preventDefault();
        this.querySelectorAll('input,textarea,button').forEach(el=>el.setAttribute('disabled',''));
        const msg = document.createElement('div');
        msg.className = 'mt-4 p-3 bg-success bg-opacity-10 border border-success text-success rounded';
        msg.textContent = 'Form submitted (local demo). When deployed, submissions go to your hosting provider.';
        this.appendChild(msg);
      }
    });
  });

  // Bootstrap form validation enhancement
  (function () {
    'use strict'
    const bsForms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(bsForms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })();

  // Interactive Elements and Animations
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Card hover effects
  const cards = document.querySelectorAll('.card, .benefit-card, .focus-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Button hover animations
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s ease';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      } else {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
        navbar.style.boxShadow = '';
      }
    });
  }

  // Fade in animation for sections on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply fade-in to main sections
  document.querySelectorAll('section, .card').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Loading states for forms
  forms.forEach(form => {
    form.addEventListener('submit', function() {
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Loading...';
        submitBtn.disabled = true;

        // Reset after 3 seconds (for demo purposes)
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  });

  // Enhanced accessibility: Keyboard navigation improvements
  document.addEventListener('keydown', function(e) {
    // Skip to main content with Ctrl/Cmd + Home
    if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) main.focus();
    }
  });

  // Focus management for modals/cards
  const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close any open dropdowns or focus traps
      const activeDropdowns = document.querySelectorAll('.dropdown-menu.show');
      activeDropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });
});
