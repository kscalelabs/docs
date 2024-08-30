import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>K-Scale Labs Docs</span>,
  project: {
    link: "https://github.com/kscalelabs/docs",
  },
  chat: {
    link: "https://discord.gg/kscale",
  },
  docsRepositoryBase: "https://github.com/kscalelabs/docs",
  useNextSeoProps() {
    return {
      titleTemplate: '%s – K-Scale Labs'
    };
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{
            background: '#f0f0f0',
            padding: '8px 12px',
            margin: '8px 0',
            borderRadius: '4px',
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            fontSize: '0.8em',
            letterSpacing: '0.05em'
          }}>
            {title}
          </div>
        )
      }
      return <>{title}</>
    },
    autoCollapse: true, // Automatically collapse inactive folders
    defaultMenuCollapseLevel: 1, // Collapse all folders by default
  },

  docsRepositoryBase: "https://github.com/kscalelabs/docs/tree/master",
  footer: {
    text: "K-Scale Labs Documentation",
  },
};

export default config;
