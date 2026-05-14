function App() {
  return (
    <>
      <style>{`
        :root {
          --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          --color-background-primary: #ffffff;
          --color-background-secondary: #f6f7f9;
          --color-border-tertiary: #e5e7eb;
          --color-text-primary: #15171a;
          --color-text-secondary: #667085;
          --border-radius-md: 10px;
          --border-radius-lg: 16px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: var(--font-sans);
          background: var(--color-background-primary);
        }

        .page-shell {
          min-height: 100vh;
        }

        .hero {
          text-align: center;
          padding: 3rem 1.5rem 2rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-background-secondary);
          border: 0.5px solid var(--color-border-tertiary);
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          color: var(--color-text-secondary);
          margin-bottom: 1.25rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
        }

        h1 {
          font-size: 28px;
          font-weight: 500;
          color: var(--color-text-primary);
          line-height: 1.3;
        }

        .sub {
          font-size: 15px;
          color: var(--color-text-secondary);
          margin-top: 10px;
          line-height: 1.6;
        }

        .divider {
          border: none;
          border-top: 0.5px solid var(--color-border-tertiary);
          margin: 0 1.5rem;
        }

        .section {
          padding: 2rem 1.5rem;
        }

        .section-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-secondary);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .download-card {
          background: var(--color-background-primary);
          border: 0.5px solid var(--color-border-tertiary);
          border-radius: var(--border-radius-lg);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .download-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dl-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-md);
          background: var(--color-background-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--color-text-secondary);
        }

        .dl-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-primary);
        }

        .dl-sub {
          font-size: 12px;
          color: var(--color-text-secondary);
          margin-top: 2px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          background: var(--color-text-primary);
          color: var(--color-background-primary);
          border-radius: var(--border-radius-md);
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
        }

        .btn-primary:hover {
          opacity: 0.85;
        }

        .steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .step {
          display: flex;
          gap: 16px;
          padding: 1rem 0;
          border-bottom: 0.5px solid var(--color-border-tertiary);
        }

        .step:last-child {
          border-bottom: none;
        }

        .step-num {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-background-secondary);
          border: 0.5px solid var(--color-border-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
          color: var(--color-text-secondary);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .step-body {
          flex: 1;
        }

        .step-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .step-desc {
          font-size: 13px;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }

        .inline-code {
          font-family: var(--font-mono);
          font-size: 12px;
        }

        .highlight-link {
          color: var(--color-text-primary);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: #22c55e;
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }

        .highlight-link:hover {
          color: #15803d;
        }

        .code-block {
          background: var(--color-background-secondary);
          border: 0.5px solid var(--color-border-tertiary);
          border-radius: var(--border-radius-md);
          color: var(--color-text-primary);
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.7;
          margin-top: 8px;
          overflow-x: auto;
          padding: 10px 14px;
          white-space: pre;
        }

        .footer-note {
          font-size: 12px;
          color: var(--color-text-secondary);
          text-align: center;
          padding: 1.5rem;
        }
      `}</style>

      <main className="page-shell">
        <div className="hero">
          <div className="badge">
            <span className="badge-dot"></span> Chrome Extension
          </div>
          <h1>Smart Email Writer</h1>
          <p className="sub">
            Complete setup guide for the SEW repo with backend and extension
            folders.
          </p>
        </div>

        <hr className="divider" />

        <section className="section">
          <div className="section-title">Get the project</div>
          <div className="download-card">
            <div className="download-info">
              <div className="dl-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 4a2 2 0 0 1 4 0v2h2a2 2 0 0 1 2 2v2h2a2 2 0 1 1 0 4h-2v2a2 2 0 0 1-2 2h-2v2a2 2 0 1 1-4 0v-2H8a2 2 0 0 1-2-2v-2H4a2 2 0 1 1 0-4h2V8a2 2 0 0 1 2-2h2V4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="dl-title">SEW Project</div>
                <div className="dl-sub">
                  One repo containing backend and extension folders
                </div>
              </div>
            </div>
            <a
              href="https://github.com/atharv96k/Smart-Email-Writer"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Open repo
            </a>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-title">Project structure</div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <div className="step-title">Clone or download the repo</div>
                <div className="step-desc">
                  Download the{" "}
                  <a
                    href="https://github.com/atharv96k/Smart-Email-Writer/blob/main/extension.zip"
                    className="highlight-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    extension ZIP from GitHub
                  </a>{" "}
                  or clone the repository to your system.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <div className="step-title">Open the SEW parent folder</div>
                <div className="step-desc">
                  After extracting or cloning, your project should look like
                  this:
                </div>
                <div className="code-block">{`SEW/
  backend/
  extension/`}</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-title">Run backend in Spring Tool Suite</div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <div className="step-title">Import the backend folder</div>
                <div className="step-desc">
                  Open Spring Tool Suite, then go to{" "}
                  <strong>
                    File &gt; Import &gt; Maven &gt; Existing Maven Projects
                  </strong>
                  . Select the <code className="inline-code">SEW/backend</code>{" "}
                  folder and finish the import.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <div className="step-title">Run the backend app</div>
                <div className="step-desc">
                  In STS, open the main Spring Boot application file, then click{" "}
                  <strong>Run As &gt; Spring Boot App</strong>.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <div className="step-title">Confirm server is running</div>
                <div className="step-desc">
                  The backend should start on{" "}
                  <code className="inline-code">http://localhost:8080</code>.
                  Keep it running while using the Chrome extension.
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-title">Load in Chrome</div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-body">
                <div className="step-title">Open Chrome extensions</div>
                <div className="step-desc">
                  Go to <code className="inline-code">chrome://extensions</code>{" "}
                  and enable <strong>Developer mode</strong> using the toggle in
                  the top right.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">2</div>
              <div className="step-body">
                <div className="step-title">Load unpacked extension</div>
                <div className="step-desc">
                  Click <strong>Load unpacked</strong>, then select the{" "}
                  <code className="inline-code">SEW/extension</code> folder.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">3</div>
              <div className="step-body">
                <div className="step-title">Check backend URL</div>
                <div className="step-desc">
                  The extension already includes the backend URL configuration
                  in the repo. For local setup it should point to{" "}
                  <code className="inline-code">http://localhost:8080</code>.
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-num">4</div>
              <div className="step-body">
                <div className="step-title">Open Gmail</div>
                <div className="step-desc">
                  Open Gmail in Chrome. The AI Reply button will appear inside
                  Gmail after the extension is loaded.
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer-note">
          Keep the backend running from STS before using the extension in Gmail.
        </div>
      </main>
    </>
  );
}

export default App;
