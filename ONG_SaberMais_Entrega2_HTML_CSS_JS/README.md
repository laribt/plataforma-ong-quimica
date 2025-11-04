
# ONG SaberMais — Plataforma (Entregas I–IV)

Projeto acadêmico para uma ONG de educação em exatas (Matemática, Física e Química).

## Estrutura de pastas
```
ong-sabemais/
├── index.html
├── projetos.html
├── cadastro.html
├── imagens/
│   ├── logo.svg
│   ├── hero.svg
│   ├── projetos.svg
│   └── cadastro.svg
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Entrega 1 (HTML5)
- Páginas semânticas criadas, títulos hierárquicos e imagens por página.
- Formulário com validação nativa (pattern, required, title).
- Máscaras para CPF, telefone e CEP (JS progressivo).

## Entrega 2 (CSS3)
- **Design System** com 8+ cores, tipografia (5+ tamanhos) e escala de espaçamento.
- **Grid 12 col** + utilitários responsivos com 5 breakpoints.
- **Menu responsivo** (hambúrguer) e **submenu** (dropdown).
- **Componentes**: cards, botões (hover/focus/disabled), alert/badges, formulários estilizados.

## Como validar no W3C
1. Abra https://validator.w3.org/nu/
2. Use **Validate by File Upload** e envie `index.html`, `projetos.html` e `cadastro.html`.
3. Corrija eventuais avisos (se houver) e salve.

## Como publicar no GitHub Pages
1. Crie um repositório público `ong-sabemais`.
2. Faça upload de todos os arquivos e pastas mostrados acima.
3. Em **Settings > Pages**, selecione **Deploy from branch** (`main`, diretório `/root`).  
4. Acesse: `https://SEU-USUARIO.github.io/ong-sabemais/`.

## Acessibilidade (WCAG 2.1 AA) — checklist rápido
- [x] Estrutura semântica (header, nav, main, section, footer).
- [x] **Skip link** para pular direto ao conteúdo.
- [x] Foco visível em links/inputs/botões.
- [x] Contraste adequado (texto principal ≥ 4.5:1).
- [x] Navegação por teclado (menu e dropdown com foco).
- [x] Textos alternativos em imagens informativas.

## Próximos passos (Entrega 3 – JavaScript)
- Modularizar funcionalidades em `js/` (ex.: `forms.js`, `spa.js`).
- Implementar SPA simples (carregar seções via templates).
- Feedback de validação inline.
- Armazenar inscrições em `localStorage` (mock).

## Próximos passos (Entrega 4 – Profissional)
- **GitFlow**, commits semânticos e releases.
- Modo **alto contraste** e **escuro acessível**.
- Minificação de CSS/JS/HTML e compressão de imagens.
- README com screenshots e passos de deploy.

— Atualizado em 2025-10-26
