# Portfólio Profissional — João Herval Maia

Site de portfólio de **João Herval Maia**, desenvolvedor e estudante de Engenharia de Software na PUC Minas. Apresenta trajetória, competências, projetos e formas de contato.

É uma página única (SPA) em React, com navegação por âncoras, layout responsivo, conteúdo em português e inglês e textos centralizados em `src/data/content.js`.

Repositório: [github.com/Kennykiller36/SitePortfolioProfissional](https://github.com/Kennykiller36/SitePortfolioProfissional)

## Link do Wireframe no Figma

https://item-public-69282360.figma.site

## Imagens dos protótipos

### Dashboard

![Tela inicial do portfólio](Imagens/Dashboard.png)

### Sobre mim

![Seção Sobre mim](Imagens/SobreMim.png)

### Projetos

![Timeline de projetos — parte 1](Imagens/Projetos1.png)

![Timeline de projetos — parte 2](Imagens/Projetos2.png)

### Experiências

![Seção de experiências](Imagens/Experiencias.png)

### Contato

![Seção de contato e formulário](Imagens/Contato.png)

## Descrição do projeto

O portfólio é uma SPA com cabeçalho fixo, seções âncora e rodapé. O seletor **PT/EN** troca os textos da interface e atualiza o `lang` do documento.

1. **Hero** — nome, cargo e atalhos para projetos e contato
2. **Sobre mim** — formação, área de atuação, interesses, objetivos e competências (Java, Python, C#, JavaScript, Spring Boot, Flutter, Git, Scrum, entre outras)
3. **Projetos** — linha do tempo do mais antigo ao mais recente, com cargo, descrição, tecnologias e link no GitHub:
   - **Powerman(ager)** (2024) — artista 3D; Godot / GDScript
   - **Clothes Organizer** (2024–2025) — full stack; Flutter / SQL
   - **Bibliotech** (2025) — full stack; Java / TSX / JSON
   - **Jurisflow** (2026) — full stack; Java / TSX / SQL / IA
4. **Experiências** — Tagmavisions (arte 3D / VR), RDR Sistemas (programação Java/Spring Boot) e UFMG (pesquisa em Python)
5. **Contato** — e-mail, WhatsApp, LinkedIn e GitHub, além de formulário com envio via FormSubmit (sem abrir o app de e-mail)

Recursos de interface:

- menu hamburger no mobile
- link “Ir para o conteúdo”, rótulos ARIA e respeito a `prefers-reduced-motion`
- animação de entrada das seções (`IntersectionObserver`)

## Tecnologias utilizadas

- HTML5, CSS3 e JavaScript
- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- Google Fonts (Syne + DM Sans)
- [FormSubmit](https://formsubmit.co) (envio AJAX do formulário, sem backend próprio)
- [oxlint](https://oxc.rs/docs/guide/usage/linter) (`npm run lint`)

Não há UI kit externo (Mantine/MUI): o visual é CSS próprio, alinhado à identidade do perfil.

### Dependências

| Pacote | Uso |
| --- | --- |
| `react` / `react-dom` | Interface em componentes |
| `vite` | Bundler e servidor de desenvolvimento |
| `@vitejs/plugin-react` | Suporte a JSX/React no Vite |
| `oxlint` | Lint (`npm run lint`) |

## Estrutura do site

```text
SitePortfólioProfissional/
├── Imagens/                 # prints do protótipo (README)
│   ├── Dashboard.png
│   ├── SobreMim.png
│   ├── Projetos1.png
│   ├── Projetos2.png
│   ├── Experiencias.png
│   └── Contato.png
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experiences.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx
│   ├── data/
│   │   └── content.js       # perfil, textos PT/EN, projetos e experiências
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── .oxlintrc.json
└── README.md
```

Layout principal:

- **Cabeçalho** — marca + menu (Sobre mim, Projetos, Experiências, Contato) + PT/EN
- **Área de conteúdo** — seções âncora da página
- **Rodapé** — copyright e idiomas

Para alterar textos, projetos ou dados de contato, edite `src/data/content.js`.

## Instalação e execução local

Pré-requisitos: [Node.js](https://nodejs.org/) 20.19+ (recomendado para o Vite 8) e npm.

```bash
cd SitePortfólioProfissional
npm install
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

Outros comandos:

```bash
npm run build    # gera a pasta dist/
npm run preview  # pré-visualiza o build de produção
npm run lint
```

## Link do site publicado na nuvem

_Ainda não publicado._ Após o deploy (Vercel, Render, GitHub Pages ou similar), atualize este item com a URL.

## Observações

- Conteúdo baseado no currículo de João Herval Maia.
- O formulário envia e-mail via **FormSubmit** (API AJAX) para `joao.herval@gmail.com`, com campo honeypot contra bots. Não abre o aplicativo de e-mail.
- **Primeira vez:** o FormSubmit manda um link de confirmação para o Gmail (confira também o spam). Confirme e envie o formulário de novo.
- Alguns ambientes (localhost restrito ou bloqueio de `Referer`) podem recusar o envio. Nesse caso, publique o site ou tente outro navegador.
- O atalho de e-mail na lista de contatos continua sendo `mailto:` de propósito; quem dispara a mensagem sozinho é o botão **Enviar mensagem**.
