const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;
const form = document.querySelector('#newsletter-form');
const formMessage = document.querySelector('#form-message');

const getPreferredTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
  localStorage.setItem('theme', theme);
};

setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  setTheme(isDark ? 'light' : 'dark');
});

const animateCounters = () => {
  const counters = document.querySelectorAll('[data-counter]');
  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    let current = 0;
    const step = Math.max(1, Math.round(target / 60));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target.toString();
        clearInterval(interval);
        return;
      }
      counter.textContent = current.toString();
    }, 18);
  });
};

animateCounters();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = new FormData(form).get('email');
  if (!email || !String(email).includes('@')) {
    formMessage.textContent = 'Please enter a valid work email.';
    return;
  }

  formMessage.textContent = 'Thanks! You are on the list.';
  form.reset();
});
