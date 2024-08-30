import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>K-Scale Labs</span>,
  project: {
    link: "https://github.com/kscalelabs/docs",
  },
  chat: {
    link: "https://discord.gg/kscale",
  },
  docsRepositoryBase: "https://github.com/\]kscalelabs/docs",
  useNextSeoProps() {
    return {
      titleTemplate: '%s - K-Scale Labs'
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
    }
  },
  footer: {
    text: (
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '0.9em',
          }}>
            <a href="https://forms.gle/xkba4WWGD5Pmayj96" target="_blank" rel="noopener noreferrer">Join Newsletter</a>
            <span>|</span>
            <a href="https://grant.kscale.dev/" target="_blank" rel="noopener noreferrer">Grant Program</a>
            <span>|</span>
            <a href="https://kscale.store/" target="_blank" rel="noopener noreferrer">K-Scale Store</a>
            <span>|</span>
            <a href="https://twitter.com/kscalelabs" target="_blank" rel="noopener noreferrer">Twitter</a>
            <span>|</span>
            <a href="https://github.com/kscalelabs" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
            MIT {new Date().getFullYear()} © K-Scale Labs
          </div>
        </div>
      </div>
    )
  }
};

export default config;