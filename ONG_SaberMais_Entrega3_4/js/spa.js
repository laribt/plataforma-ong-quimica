
// SPA com fallback offline (sem servidor): usa window.SABERMAIS_TEMPLATES quando fetch não é possível.
(function(){
  const routes = {
    '': {file:'home.html', key:'home'},
    '/': {file:'home.html', key:'home'},
    '/home': {file:'home.html', key:'home'},
    '/projetos': {file:'projetos.html', key:'projetos'},
    '/cadastro': {file:'cadastro.html', key:'cadastro'}
  };

  async function load(route){
    const container = document.getElementById('app');
    if(!container) return;
    const info = routes[route] || routes['/home'];

    // Se for file:// ou não houver fetch permitido, usa fallback inline
    const isFile = location.protocol === 'file:';
    if (isFile && window.SABERMAIS_TEMPLATES){
      container.innerHTML = window.SABERMAIS_TEMPLATES[info.key] || '<div class="alert error">Template não encontrado.</div>';
      afterLoad();
      return;
    }

    try {
      const resp = await fetch(`templates/${info.file}`, {cache: 'no-cache'});
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const html = await resp.text();
      container.innerHTML = html;
      afterLoad();
    } catch(e){
      if (window.SABERMAIS_TEMPLATES && window.SABERMAIS_TEMPLATES[info.key]){
        container.innerHTML = window.SABERMAIS_TEMPLATES[info.key];
        afterLoad();
      } else {
        container.innerHTML = `<div class="alert error" role="alert">Não foi possível carregar o conteúdo.</div>`;
      }
    }
  }

  function afterLoad(){
    if (typeof window.setupForms === 'function') window.setupForms();
    window.scrollTo(0,0);
  }

  function parseRoute(){
    const hash = location.hash || '#/home';
    const route = hash.replace('#','');
    load(route);
  }

  window.addEventListener('hashchange', parseRoute);
  window.addEventListener('DOMContentLoaded', parseRoute);
})();
