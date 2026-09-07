import "./index.css";

function App() {
  return (
    <main className="page-shell">

      {/* Hero */}
      <div className="hero">
        <div className="badge">
          <span className="badge-dot"></span>
          Chrome Extension
        </div>

        <h1>Smart Email Writer</h1>

        <p className="sub">
          AI-powered email replies for Gmail using Google Gemini.
          Follow the guide below to install the extension and start writing
          smarter replies.
        </p>
      </div>

      <hr className="divider" />

      {/* Get Project */}
      <section className="section">
        <div className="section-title">Get the project</div>

        <div className="download-card">
          <div className="download-info">
            <div className="dl-icon" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
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
              <div className="dl-title">Smart Email Writer</div>

              <div className="dl-sub">
                GitHub repository containing the backend and Chrome extension
              </div>
            </div>
          </div>

          <a
            href="https://github.com/atharv96k/SEW-EXTENSION"
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub
          </a>
        </div>
      </section>

      <hr className="divider" />

      {/* Installation */}
      <section className="section">
        <div className="section-title">
          Install the Chrome Extension
        </div>

        <div className="steps">

          {/* Step 1 */}
          <div className="step">
            <div className="step-num">1</div>

            <div className="step-body">
              <div className="step-title">
                Download the extension
              </div>

              <div className="step-desc">
                Download the{" "}
                <a
                  href="https://github.com/atharv96k/SEW-EXTENSION"
                  className="highlight-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  extension ZIP
                </a>{" "}
                from GitHub and extract it to a folder on your computer.
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-num">2</div>

            <div className="step-body">
              <div className="step-title">
                Open Chrome Extensions
              </div>

              <div className="step-desc">
                Open{" "}
                <code className="inline-code">
                  chrome://extensions
                </code>{" "}
                in Google Chrome and enable{" "}
                <strong>Developer mode</strong> using the toggle
                in the top-right corner.
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="step-num">3</div>

            <div className="step-body">
              <div className="step-title">
                Load the extension
              </div>

              <div className="step-desc">
                Click <strong>Load unpacked</strong> and select the
                extracted{" "}
                <code className="inline-code">
                  extension
                </code>{" "}
                folder. Chrome will install the extension locally.
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="step">
            <div className="step-num">4</div>

            <div className="step-body">
              <div className="step-title">
                Open Gmail
              </div>

              <div className="step-desc">
                Open Gmail in Chrome and open an email or compose a
                reply. The <strong>Smart Reply</strong> button will
                appear in the Gmail compose interface.
              </div>
            </div>
          </div>

        </div>

        {/* Video Tutorial */}
        <div className="video-card">

          <div className="video-header">
            <div>
              <div className="video-title">
                Quick installation guide
              </div>

              <div className="video-description">
                Watch the short tutorial to see exactly how to
                install the extension in Chrome.
              </div>
            </div>
          </div>

          <div className="video-wrapper">
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/videos/load-extension.mp4"
                type="video/mp4"
              />

              Your browser does not support the video element.
            </video>
          </div>

        </div>
      </section>

      <hr className="divider" />

      {/* How it works */}
      <section className="section">

        <div className="section-title">
          How it works
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-num">1</div>

            <div className="step-body">
              <div className="step-title">
                Select an email
              </div>

              <div className="step-desc">
                Open an email in Gmail that you want to respond to.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-num">2</div>

            <div className="step-body">
              <div className="step-title">
                Generate a reply
              </div>

              <div className="step-desc">
                Click the <strong>Smart Reply</strong> button to
                generate an AI-powered response.
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-num">3</div>

            <div className="step-body">
              <div className="step-title">
                Review and send
              </div>

              <div className="step-desc">
                Review the generated response, make any changes you
                want, and send it directly from Gmail.
              </div>
            </div>
          </div>

        </div>

      </section>


    </main>
  );
}

export default App;
