# Portfólio Profissional — João Herval Maia

Site de portfólio moderno e acessível para apresentar trajetória, habilidades, projetos e contato.

> **Protótipo inicial de front-end** (React + Vite). O deploy em nuvem e o link público podem ser adicionados na etapa seguinte (Vercel/Render/etc.).

## Tecnologias utilizadas

- HTML5 / CSS3 / JavaScript (ES modules)
- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- Google Fonts (Syne + DM Sans)
- FormSubmit (envio de e-mail do formulário de contato, sem backend próprio)

## Dependências e bibliotecas/frameworks

| Pacote | Uso |
| --- | --- |
| `react` / `react-dom` | UI em componentes |
| `vite` | Bundler e servidor de desenvolvimento |
| `@vitejs/plugin-react` | Suporte a JSX/React no Vite |
| `oxlint` | Lint (script `npm run lint`) |

Não há UI kit externo (Mantine/MUI): o visual é CSS próprio para identidade alinhada ao perfil.

## Estrutura de diretórios

```text
SitePortfólioProfissional/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experiences.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx
│   ├── data/
│   │   └── content.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Instalação e execução local

Pré-requisitos: Node.js 18+ e npm.

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

## Seções do menu

1. **Sobre mim** — apresentação em PT/EN (formação, área, interesses, objetivos e competências)
2. **Projetos** — timeline do mais antigo ao mais recente, com tecnologias, GitHub e preview visual
3. **Experiências** — estágios e atividades (empresa, cargo, período, descrição)
4. **Contato** — ícones (e-mail, WhatsApp, LinkedIn, GitHub) + formulário com envio de e-mail

## Observações do protótipo

- Conteúdo baseado no currículo de João Herval Maia.
- No primeiro envio pelo FormSubmit, confirme o e-mail na caixa de entrada de `joao.herval@gmail.com`.
