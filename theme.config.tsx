import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const siteHost = "docs.kscale.dev";
const siteUrl = `https://${siteHost}`;
const siteSocialUrl = `${siteUrl}/social.png`;
const siteDesc = `An open source community building a useful humanoid robot.`;
const siteTitle = "K-Scale Docs";

const config: DocsThemeConfig = {
  logo: <span>K-Scale Docs</span>,
  project: {
    link: "https://github.com/kscalelabs/docs",
  },
  chat: {
    link: "https://discord.gg/kscale",
  },
  docsRepositoryBase: "https://github.com/kscalelabs/docs/tree/master",
  editLink: {
    content: "Edit this page on GitHub",
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  head: function useHead() {
    const config = useConfig();
    const { asPath } = useRouter();
    const isIndex = asPath === "/";
    const title =
      config?.title && !isIndex ? `${config.title} - ${siteTitle}` : siteTitle;

    return (
        <>
            <meta httpEquiv="Content-Language" content="en"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="robots" content="index,follow"/>

            <meta name="description" content={siteDesc}/>
            <meta property="og:description" content={siteDesc}/>
            <meta name="twitter:description" content={siteDesc}/>

            <meta property="og:site_name" content={siteTitle}/>
            <meta name="apple-mobile-web-app-title" content={siteTitle}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content={siteSocialUrl}/>
            <meta name="og:image" content={siteSocialUrl}/>

            <meta property="twitter:domain" content={siteHost}/>
            <meta name="twitter:site:domain" content={siteHost}/>

            <meta name="twitter:url" content={siteUrl}/>

            <meta property="og:title" content={title}/>
            <meta name="twitter:title" content={title}/>
            <title>{title}</title>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon_16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon_32x32.png"/>

            <meta name="msapplication-TileColor" content="#EA530E"/>
            <meta name="msapplication-TileImage" content="/favicons/favicon_144x144.png"/>

            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon_180x180.png"/>

            <link
                rel="apple-touch-icon-precomposed"
                sizes="180x180"
                href="/favicons/favicon_180x180.png"
            />

            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/favicon_192x192.png"/>

            <link rel="icon" type="image/png" sizes="194x194" href="/favicons/favicon_194x194.png"/>

            <link rel="mask-icon" href="/favicons/favicon_svg.svg" color="#EA530E"/>

            <link rel="icon" sizes="32x32 48x48" type="image/x-icon" href="/favicons/favicon_ico.ico"/>

            <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon_ico.ico"/>

            <style>
                {`
          ul.nx-mt-6 {
            margin-top: 0;
          }
          `}
            </style>
        </>
    );
  },
    footer: {
        component: null,
    },
};

export default config;
