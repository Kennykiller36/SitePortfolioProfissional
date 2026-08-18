export const profile = {
  name: 'João Herval Maia',
  shortName: 'João Herval',
  age: 22,
  phoneDisplay: '(31) 99556-5403',
  phoneWhatsApp: '5531995565403',
  email: 'joao.herval@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joaohervalmaia/',
  github: 'https://github.com/Kennykiller36',
  role: {
    pt: 'Desenvolvedor & Engenheiro de Software',
    en: 'Software Developer & Engineer',
  },
};

export const about = {
  pt: {
    title: 'Sobre mim',
    lead:
      'Sou desenvolvedor e estudante de Engenharia de Software, apaixonado por criar soluções que unam tecnologia e usabilidade.',
    body: `Tenho experiência em programação back-end e front-end, integração com bancos de dados e desenvolvimento de aplicações em Java, Python e JavaScript. Participei de projetos acadêmicos e profissionais voltados a melhorar desempenho, experiência do usuário e qualidade do código.`,
    formationLabel: 'Formação',
    formation: [
      'Jogos Digitais — PUC Minas (concluído, 2021–2024)',
      'Engenharia de Software — PUC Minas (em andamento, previsão fev/2029)',
    ],
    areaLabel: 'Área de atuação',
    area:
      'Desenvolvimento full-stack, sistemas com Java/Spring Boot, interfaces web e aplicações com foco em usabilidade.',
    interestsLabel: 'Interesses',
    interests:
      'Engenharia de software, jogos digitais, experiência do usuário, automação com IA e qualidade de código.',
    goalsLabel: 'Objetivos profissionais',
    goals:
      'Atuar em times de produto construindo sistemas escaláveis, acessíveis e centrados no usuário, unindo rigor técnico e design de interação.',
    skillsLabel: 'Competências',
  },
  en: {
    title: 'About me',
    lead:
      "I'm a developer and Software Engineering student passionate about building solutions that bring technology and usability together.",
    body: `I have experience with back-end and front-end development, database integration, and building applications in Java, Python, and JavaScript. I've contributed to academic and professional projects focused on performance, user experience, and code quality.`,
    formationLabel: 'Education',
    formation: [
      'Digital Games — PUC Minas (completed, 2021–2024)',
      'Software Engineering — PUC Minas (in progress, expected graduation: Feb 2029)',
    ],
    areaLabel: 'Focus areas',
    area:
      'Full-stack development, Java/Spring Boot systems, web interfaces, and usability-driven applications.',
    interestsLabel: 'Interests',
    interests:
      'Software engineering, digital games, user experience, AI-powered automation, and code quality.',
    goalsLabel: 'Career goals',
    goals:
      'Join product teams that build scalable, accessible, user-centered systems — combining strong engineering with thoughtful interaction design.',
    skillsLabel: 'Skills',
  },
};

export const skills = {
  pt: [
    { group: 'Linguagens', items: ['Java', 'Python', 'C#', 'HTML', 'CSS', 'JavaScript', 'TSX', 'GDScript'] },
    { group: 'Bancos de dados', items: ['MySQL', 'SQLite'] },
    { group: 'Frameworks', items: ['Spring Boot', 'Node.js', 'Flutter'] },
    { group: 'Ferramentas', items: ['Git/GitHub', 'VS Code', 'Eclipse', 'Unity', 'Godot'] },
    { group: 'Metodologias', items: ['Scrum', 'Kanban'] },
  ],
  en: [
    { group: 'Languages', items: ['Java', 'Python', 'C#', 'HTML', 'CSS', 'JavaScript', 'TSX', 'GDScript'] },
    { group: 'Databases', items: ['MySQL', 'SQLite'] },
    { group: 'Frameworks', items: ['Spring Boot', 'Node.js', 'Flutter'] },
    { group: 'Tools', items: ['Git/GitHub', 'VS Code', 'Eclipse', 'Unity', 'Godot'] },
    { group: 'Methodologies', items: ['Scrum', 'Kanban'] },
  ],
};

/** Timeline: oldest → newest (as required by the lab brief) */
export const projects = [
  {
    id: 'powerman',
    year: '2024',
    name: 'Powerman(ager)',
    role: {
      pt: 'Artista 3D',
      en: '3D Artist',
    },
    description: {
      pt: 'Jogo premiado como Melhor Tecnologia em Jogo de Estudante no SB Games 2024 (Simpósio Brasileiro de Jogos e Entretenimento Digital), desenvolvido em GDScript na engine Godot.',
      en: 'Award-winning game named Best Student Game Technology at SB Games 2024 (Brazilian Symposium on Games and Digital Entertainment), built with GDScript in the Godot engine.',
    },
    technologies: ['GDScript', 'Godot Engine'],
    github: 'https://github.com/Kennykiller36',
  },
  {
    id: 'clothes',
    year: '2024–2025',
    name: 'Clothes Organizer',
    role: {
      pt: 'Programador full stack',
      en: 'Full-stack developer',
    },
    description: {
      pt: 'Aplicativo multiplataforma focado em experiência do usuário que permite catalogação e organização personalizada de vestuário, além da geração automática de outfits.',
      en: 'A cross-platform app focused on user experience that lets you catalog and organize your wardrobe, and automatically generate outfit suggestions.',
    },
    technologies: ['Flutter', 'SQL'],
    github: 'https://github.com/Kennykiller36/clothes_organizer',
  },
  {
    id: 'bibliotech',
    year: '2025',
    name: 'Bibliotech',
    role: {
      pt: 'Programador full stack',
      en: 'Full-stack developer',
    },
    description: {
      pt: 'Sistema de gerenciamento bibliotecário que integra controle de acervo e fluxo de empréstimos para modernizar a administração de bibliotecas.',
      en: 'A library management system that brings together collection control and loan workflows to modernize day-to-day library administration.',
    },
    technologies: ['Java', 'TSX', 'JSON'],
    github:
      'https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti2-1381100-bibliotech',
  },
  {
    id: 'jurisflow',
    year: '2026',
    name: 'Jurisflow',
    role: {
      pt: 'Programador full stack',
      en: 'Full-stack developer',
    },
    description: {
      pt: 'Plataforma de automação jurídica com integração de IA desenvolvida para otimizar a gestão de fluxos processuais e prazos através de uma arquitetura robusta e escalável.',
      en: 'A legal automation platform with AI integration, built to streamline case workflows and deadline management through a robust, scalable architecture.',
    },
    technologies: ['Java', 'TSX', 'SQL', 'AI'],
    github:
      'https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-1-ti3-5533100-jurisflow',
  },
];

export const experiences = [
  {
    company: 'Tagmavisions',
    role: {
      pt: 'Estagiário de Arte 3D',
      en: '3D Art Intern',
    },
    period: {
      pt: 'dez 2023 – jun 2024',
      en: 'Dec 2023 – Jun 2024',
    },
    description: {
      pt: 'Modelagem e integração de ativos 3D para simulações VR médicas em parceria com a USP.',
      en: 'Modeled and integrated 3D assets for medical VR simulations in partnership with USP.',
    },
  },
  {
    company: 'RDR Sistemas',
    role: {
      pt: 'Estagiário de Programação',
      en: 'Programming Intern',
    },
    period: {
      pt: 'jan 2023 – fev 2024',
      en: 'Jan 2023 – Feb 2024',
    },
    description: {
      pt: 'Desenvolvimento de sistemas em Java (Spring Boot) integrados a bancos de dados, programação front-end (HTML, CSS, JavaScript) e testes de software no Eclipse.',
      en: 'Developed Java (Spring Boot) systems integrated with databases, built front-end features (HTML, CSS, JavaScript), and performed software testing in Eclipse.',
    },
  },
  {
    company: 'UFMG',
    role: {
      pt: 'Estagiário de Pesquisa',
      en: 'Research Intern',
    },
    period: {
      pt: 'jan 2023 – dez 2023',
      en: 'Jan 2023 – Dec 2023',
    },
    description: {
      pt: 'Criação de aplicação em Python para medir tempo de reação e latência de hardware.',
      en: 'Built a Python application to measure reaction time and hardware latency.',
    },
  },
];

export const uiCopy = {
  pt: {
    nav: {
      about: 'Sobre mim',
      projects: 'Projetos',
      experiences: 'Experiências',
      contact: 'Contato',
    },
    heroSupport:
      'Portfólio de trajetória, habilidades, projetos e formas de contato — com foco em software útil e bem feito.',
    heroCta: 'Ver projetos',
    heroSecondary: 'Falar comigo',
    projectsTitle: 'Projetos',
    projectsLead: 'Linha do tempo do mais antigo ao mais recente.',
    experiencesTitle: 'Experiências',
    experiencesLead: 'Estágios, pesquisa e participação em projetos técnicos.',
    contactTitle: 'Contato',
    contactLead: 'Vamos conversar sobre oportunidades, projetos ou colaborações.',
    formName: 'Nome',
    formEmail: 'E-mail',
    formMessage: 'Mensagem',
    formSubmit: 'Enviar mensagem',
    formSending: 'Enviando…',
    formSuccess: 'Mensagem enviada com sucesso. Obrigado!',
    formError: 'Não foi possível enviar agora. Tente pelo e-mail ou WhatsApp.',
    github: 'Repositório no GitHub',
    languages: 'Idiomas: Português (fluente) · Inglês (avançado)',
    skipToContent: 'Ir para o conteúdo',
    openMenu: 'Abrir menu',
    primaryNav: 'Principal',
    techListLabel: 'Tecnologias',
    roleLabel: 'Cargo',
  },
  en: {
    nav: {
      about: 'About me',
      projects: 'Projects',
      experiences: 'Experience',
      contact: 'Contact',
    },
    heroSupport:
      'A portfolio showcasing my background, skills, projects, and ways to get in touch — with a focus on useful, well-crafted software.',
    heroCta: 'View projects',
    heroSecondary: 'Contact me',
    projectsTitle: 'Projects',
    projectsLead: 'A timeline from the earliest project to the most recent.',
    experiencesTitle: 'Experience',
    experiencesLead: 'Internships, research, and technical project work.',
    contactTitle: 'Contact',
    contactLead: "I'd love to hear about opportunities, projects, or collaborations.",
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Send message',
    formSending: 'Sending…',
    formSuccess: 'Your message was sent successfully. Thank you!',
    formError: "Couldn't send your message right now. Please try email or WhatsApp instead.",
    github: 'View on GitHub',
    languages: 'Languages: Portuguese (fluent) · English (advanced)',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    primaryNav: 'Primary',
    techListLabel: 'Technologies',
    roleLabel: 'Role',
  },
};
