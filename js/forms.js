
// Configura máscaras, validação inline e storage das inscrições
(function(){
  function onlyDigits(s){ return s.replace(/\D/g,''); }
  function cpfMask(v){
    v = onlyDigits(v).slice(0,11);
    return v.replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1-$2');
  }
  function telMask(v){
    v = onlyDigits(v).slice(0,11);
    v = v.replace(/(\d{2})(\d)/,'($1) $2');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }
  function cepMask(v){
    v = onlyDigits(v).slice(0,8);
    return v.replace(/(\d{5})(\d)/, '$1-$2');
  }
  function mask(el, formatter){ if(!el) return; el.addEventListener('input', () => el.value = formatter(el.value)); }

  // Feedback inline de validação
  function attachValidation(form){
    if(!form) return;
    form.querySelectorAll('input,select,textarea').forEach(el => {
      el.addEventListener('invalid', ()=>{
        let msg = el.validationMessage || 'Campo inválido.';
        showFieldError(el, msg);
      });
      el.addEventListener('input', ()=> clearFieldError(el));
      el.addEventListener('blur', ()=>{
        if (!el.checkValidity()) showFieldError(el, el.validationMessage);
        else clearFieldError(el);
      });
    });
    form.addEventListener('submit', (e)=>{
      if(!form.checkValidity()){
        e.preventDefault();
        const invalid = form.querySelector(':invalid');
        if (invalid) invalid.focus();
      } else {
        // Salvar mock da inscrição
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        const store = JSON.parse(localStorage.getItem('inscricoes') || '[]');
        store.push({...data, timestamp: new Date().toISOString()});
        localStorage.setItem('inscricoes', JSON.stringify(store));
        showToast('Cadastro enviado! Obrigado por se voluntariar ❤️', 'success');
        form.reset();
      }
    });
  }

  function showFieldError(el, msg){
    clearFieldError(el);
    el.setAttribute('aria-invalid','true');
    const small = document.createElement('div');
    small.className = 'ajuda';
    small.style.color = 'var(--danger-600)';
    small.textContent = msg;
    el.insertAdjacentElement('afterend', small);
  }
  function clearFieldError(el){
    el.removeAttribute('aria-invalid');
    const next = el.nextElementSibling;
    if (next && next.classList.contains('ajuda')){
      next.remove();
    }
  }

  // Toast simples
  function showToast(text, type='info'){
    let toast = document.getElementById('toast');
    if(!toast){
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.position='fixed';
      toast.style.right='16px';
      toast.style.bottom='16px';
      toast.style.zIndex='9999';
      toast.style.padding='12px 16px';
      toast.style.borderRadius='8px';
      toast.style.background='var(--neutral-900)';
      toast.style.color='#fff';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.opacity = '1';
    setTimeout(()=>{ toast.style.opacity='0'; }, 3000);
  }

  // Expor setup para reuso após SPA carregar
  window.setupForms = function(){
    const cpf = document.getElementById('cpf');
    const tel = document.getElementById('tel');
    const cep = document.getElementById('cep');
    mask(cpf, cpfMask);
    mask(tel, telMask);
    mask(cep, cepMask);
    attachValidation(document.querySelector('form'));
  }

  // Inicialização direta para páginas não-SPA
  document.addEventListener('DOMContentLoaded', window.setupForms);
})();
