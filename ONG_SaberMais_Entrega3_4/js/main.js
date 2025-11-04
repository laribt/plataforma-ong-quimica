
const nav = document.querySelector('nav[aria-label="Principal"]');
const burger = document.querySelector('.hamburger');
if (burger && nav){
  burger.addEventListener('click', ()=>{
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    burger.setAttribute('aria-expanded', String(!open));
  });
}
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
mask(document.getElementById('cpf'), cpfMask);
mask(document.getElementById('tel'), telMask);
mask(document.getElementById('cep'), cepMask);
const form = document.querySelector('form');
if (form){
  form.addEventListener('submit', (e)=>{
    if(!form.checkValidity()){
      e.preventDefault();
      const invalid = form.querySelector(':invalid');
      if (invalid) invalid.focus();
      alert('Por favor, corrija os campos destacados.');
    }
  });
}
