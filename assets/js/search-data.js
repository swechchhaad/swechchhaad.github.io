// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "My research projects, papers, and code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-eduquest-llm-powered-framework-for-automation-amp-personalization",
          title: 'EduQuest — LLM-Powered Framework for Automation &amp;amp; Personalization',
          description: "A multi-agent LLM system generating personalized, curriculum-aligned homework.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eduquest/";
            },},{id: "projects-informational-sufficiency-in-llms",
          title: 'Informational Sufficiency in LLMs',
          description: "A framework measuring when a model has &quot;enough&quot; information to reason well.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/informational_sufficiency/";
            },},{id: "projects-post-quantum-cryptographic-engineering-ml-kem",
          title: 'Post-Quantum Cryptographic Engineering (ML-KEM)',
          description: "A novel noise distribution for ML-KEM at elevated security levels, with verified constant-time assembly.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlkem_noise/";
            },},{id: "projects-monogenic-fields-of-cryptographic-size",
          title: 'Monogenic Fields of Cryptographic Size',
          description: "Explicit number field constructions for Ring-LWE, with discriminant and ramification analysis in SageMath.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/monogenic_fields/";
            },},{id: "projects-tolerants",
          title: 'Tolerants',
          description: "A novel invariant extending and strengthening classical discriminant theory.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tolerants/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
