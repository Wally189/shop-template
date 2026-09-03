(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (button && nav) {
    const close = () => {
      button.setAttribute('aria-expanded', 'false');
      nav.dataset.open = 'false';
    };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      nav.dataset.open = String(!open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        close();
        button.focus();
      }
    });
    const mq = window.matchMedia('(min-width: 851px)');
    const sync = () => { if (mq.matches) close(); };
    mq.addEventListener?.('change', sync);
  }
})();