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
    en: 'Developer & Software Engineer',
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
      'I am a developer and Software Engineering student passionate about building solutions that combine technology and usability.',
    body: `I have experience in back-end and front-end programming, database integration, and application development with Java, Python, and JavaScript. I have taken part in academic and professional projects focused on performance, user experience, and code quality.`,
    formationLabel: 'Education',
    formation: [
      'Digital Games — PUC Minas (completed, 2021–2024)',
      'Software Engineering — PUC Minas (in progress, expected Feb/2029)',
    ],
    areaLabel: 'Field of work',
    area:
      'Full-stack development, Java/Spring Boot systems, web interfaces, and applications focused on usability.',
    interestsLabel: 'Interests',
    interests:
      'Software engineering, digital games, user experience, AI-assisted automation, and code quality.',
    goalsLabel: 'Professional goals',
    goals:
      'Join product teams building scalable, accessible, user-centered systems that balance technical rigor and interaction design.',
    skillsLabel: 'Skills',
  },
};

export const skills = [
  { group: 'Linguagens', items: ['Java', 'Python', 'C#', 'HTML', 'CSS', 'JavaScript', 'TSX', 'GDScript'] },
  { group: 'Bancos de dados', items: ['MySQL', 'SQLite'] },
  { group: 'Frameworks', items: ['Spring Boot', 'Node.js', 'Flutter'] },
  { group: 'Ferramentas', items: ['Git/GitHub', 'VS Code', 'Eclipse', 'Unity', 'Godot'] },
  { group: 'Metodologias', items: ['Scrum', 'Kanban'] },
];

/** Timeline: oldest → newest (as required by the lab brief) */
export const projects = [
  {
    id: 'powerman',
    year: '2024',
    name: 'Powerman(ager)',
    description:
      'Jogo premiado como Melhor Tecnologia em Jogo de Estudante no SB Games 2024 (Simpósio Brasileiro de Jogos e Entretenimento Digital), desenvolvido em GDScript na engine Godot.',
    technologies: ['GDScript', 'Godot Engine'],
    github: 'https://github.com/Kennykiller36',
  },
  {
    id: 'clothes',
    year: '2024–2025',
    name: 'Clothes Organizer',
    description:
      'Aplicativo multiplataforma focado em experiência do usuário que permite catalogação e organização personalizada de vestuário, além da geração automática de outfits.',
    technologies: ['Flutter', 'SQL'],
    github: 'https://github.com/Kennykiller36/clothes_organizer',
  },
  {
    id: 'bibliotech',
    year: '2025',
    name: 'Bibliotech',
    description:
      'Sistema de gerenciamento bibliotecário que integra controle de acervo e fluxo de empréstimos para modernizar a administração de bibliotecas.',
    technologies: ['Java', 'TSX', 'JSON'],
    github:
      'https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-2-ti2-1381100-bibliotech',
  },
  {
    id: 'jurisflow',
    year: '2026',
    name: 'Jurisflow',
    description:
      'Plataforma de automação jurídica com integração de IA desenvolvida para otimizar a gestão de fluxos processuais e prazos através de uma arquitetura robusta e escalável.',
    technologies: ['Java', 'TSX', 'SQL', 'IA'],
    github:
      'https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2026-1-ti3-5533100-jurisflow',
  },
];

export const experiences = [
  {
    company: 'Tagmavisions',
    role: 'Estagiário de Arte 3D',
    period: 'dez 2023 – jun 2024',
    description:
      'Modelagem e integração de ativos 3D para simulações VR médicas em parceria com a USP.',
  },
  {
    company: 'RDR Sistemas',
    role: 'Estagiário de Programação',
    period: 'jan 2023 – fev 2024',
    description:
      'Desenvolvimento de sistemas em Java (Spring Boot) integrados a bancos de dados, programação front-end (HTML, CSS, JavaScript) e testes de software no Eclipse.',
  },
  {
    company: 'UFMG',
    role: 'Estagiário de Pesquisa',
    period: 'jan 2023 – dez 2023',
    description:
      'Criação de aplicação em Python para medir tempo de reação e latência de hardware.',
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
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experiences: 'Experience',
      contact: 'Contact',
    },
    heroCta: 'View projects',
    heroSecondary: 'Get in touch',
    projectsTitle: 'Projects',
    projectsLead: 'Timeline from oldest to most recent.',
    experiencesTitle: 'Experience',
    experiencesLead: 'Internships, research, and technical project work.',
    contactTitle: 'Contact',
    contactLead: "Let's talk about opportunities, projects, or collaborations.",
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Send message',
    formSending: 'Sending…',
    formSuccess: 'Message sent successfully. Thank you!',
    formError: 'Could not send right now. Try email or WhatsApp instead.',
    github: 'GitHub repository',
    languages: 'Languages: Portuguese (fluent) · English (advanced)',
  },
};
