// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if(target) target.classList.add('active');
  // Update active nav
  document.querySelectorAll('.nav-direct a, .dropdown-menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-page') === pageId);
  });
  closeDropdown();
  window.scrollTo({top:0, behavior:'smooth'});
  // Update URL hash
  history.pushState(null, '', '#' + pageId);
}

// Dropdown
function toggleDropdown() {
  document.getElementById('dropMenu').classList.toggle('open');
}
function closeDropdown() {
  document.getElementById('dropMenu').classList.remove('open');
}
document.addEventListener('click', function(e) {
  const btn = document.getElementById('hamBtn');
  const menu = document.getElementById('dropMenu');
  if(btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
    closeDropdown();
  }
});

// Load correct page from hash
window.addEventListener('load', function() {
  const hash = window.location.hash.replace('#','');
  if(hash) showPage(hash);
  else showPage('home');
});
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.replace('#','');
  if(hash) showPage(hash);
});
