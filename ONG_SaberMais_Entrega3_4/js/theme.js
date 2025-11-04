
// Toggle entre claro, escuro e alto contraste, com persistência
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  function setTheme(v){
    if (v) root.setAttribute('data-theme', v);
    else root.removeAttribute('data-theme');
    if (v) localStorage.setItem('theme', v); else localStorage.removeItem('theme');
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    const clr = document.getElementById('theme-clear');
    const drk = document.getElementById('theme-dark');
    const hi  = document.getElementById('theme-contrast');
    if (clr) clr.addEventListener('click', ()=> setTheme(''));
    if (drk) drk.addEventListener('click', ()=> setTheme('dark'));
    if (hi)  hi.addEventListener('click', ()=> setTheme('contrast'));
  });
})();
