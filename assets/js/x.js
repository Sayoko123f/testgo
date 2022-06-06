'use strict';
window.addEventListener('load', () => {
  document.querySelector('#goto-top-button').addEventListener('click', () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });
});
