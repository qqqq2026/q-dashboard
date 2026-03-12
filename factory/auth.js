// Simple client-side gate to keep GitHub Pages pages aligned with Q-Dashboard auth
// Uses same localStorage key as index.html
(function () {
  const PASS = 'Grachten2026';
  const KEY = 'q-auth';
  try {
    if (localStorage.getItem(KEY) !== PASS) {
      // redirect to dashboard root (password prompt)
      location.href = '../index.html';
    }
  } catch (e) {
    location.href = '../index.html';
  }
})();
