// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hello World Minima Dapp",
  tagline: "Interactive MiniDapp Tutorial",
  favicon: "img/favicon.ico",

  url: "https://baranakilli.github.io", // senin kullanıcı adın
  baseUrl: "/hackathon-workshop-docs/", // repo adın

  organizationName: "baranakilli", // GitHub kullanıcı adın
  projectName: "hackathon-workshop-docs", // repo adın

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          // Re-enable sidebar
          sidebarPath: require.resolve('./sidebars.js'),
          // Keep docs at root level
          routeBasePath: "/",
          path: "docs",
          // İstersen bu kısmı kaldırabilirsin
          editUrl: "https://github.com/your-org/minima-helloworld-docs",
          // Enable sidebar collapsible
          sidebarCollapsible: true,
        },
        blog: false, // Blog kullanılmıyor
        theme: {
          customCss: undefined, // Eğer özel stil dosyası kullanmıyorsan boş bırak
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg", // Sosyal kart resmi (opsiyonel)
    navbar: {
      title: "Hello World Minima Dapp",
      logo: {
        alt: "Minima Logo",
        src: "img/logo.svg", // Gerçekten varsa kullan, yoksa kaldırılabilir
      },
      items: [
        {
          href: "https://minima.global",
          label: "Minima Global",
          position: "left",
        },
        {
          href: "https://github.com/your-org/minima-helloworld-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/minima",
            },
            {
              label: "Discord",
              href: "https://discord.gg/minima",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/Minima_Global",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Minima Docs",
              href: "https://docs.minima.global/",
            },
            {
              label: "GitHub",
              href: "https://github.com/your-org/minima-helloworld-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hello World MiniDapp`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
