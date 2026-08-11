document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  const faqItems = document.querySelectorAll('.faq-list details');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) {
            other.open = false;
          }
        });
      }
    });
  });

  const appointmentForm = document.querySelector('.appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const button = appointmentForm.querySelector('button[type="submit"]') || appointmentForm.querySelector('button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Request Sent';
        button.disabled = true;

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          appointmentForm.reset();
        }, 1800);
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { transform: 'translateY(18px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
          ],
          { duration: 520, easing: 'ease-out', fill: 'forwards' }
        );
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('section').forEach((section) => observer.observe(section));
});
