// Q-Dashboard simple client-side gate (GitHub Pages)
// NOTE: This is not real security. It keeps casual visitors out.
(function () {
  const PASS = 'Q2026';
  const KEY = 'q-auth';

  try {
    if (localStorage.getItem(KEY) === PASS) return;
  } catch (e) {
    // ignore and fall through to prompt
  }

  document.body.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0d0f14;font-family:'Inter',sans-serif;">
      <div style="background:#161b26;border:1px solid #1e2736;border-radius:14px;padding:40px 36px;text-align:center;max-width:320px;width:90%;">
        <div style="font-size:2rem;margin-bottom:12px;">🧭</div>
        <div style="font-size:1.1rem;font-weight:800;color:#f8fafc;margin-bottom:6px;">Q-Dashboard</div>
        <div style="font-size:0.75rem;color:#475569;margin-bottom:24px;">Grachten Holding · Private</div>
        <input id="pw" type="password" placeholder="Password" autofocus
          style="width:100%;background:#0d0f14;border:1px solid #1e2736;color:#f8fafc;padding:11px 14px;border-radius:8px;font-size:0.9rem;outline:none;margin-bottom:12px;text-align:center;"
          onkeydown="if(event.key==='Enter')checkPw()">
        <button onclick="checkPw()"
          style="width:100%;background:#818cf8;color:#fff;font-weight:700;padding:12px;border-radius:8px;border:none;cursor:pointer;font-size:0.9rem;">
          Enter →
        </button>
        <div id="pw-err" style="color:#f87171;font-size:0.72rem;margin-top:10px;display:none;">Incorrect password.</div>
      </div>
    </div>`;

  window.checkPw = function () {
    const v = document.getElementById('pw').value;
    if (v === PASS) {
      try { localStorage.setItem(KEY, PASS); } catch (e) {}
      location.reload();
    } else {
      document.getElementById('pw-err').style.display = 'block';
    }
  };
})();
