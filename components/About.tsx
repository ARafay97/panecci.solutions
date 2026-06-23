export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow reveal">About</span>
            <h2 className="sec-title reveal">
              Good websites shouldn&apos;t be a luxury.
            </h2>
            <p className="lead reveal">
              Most small businesses get quoted thousands for a website, then
              chased for more every time they need a change. We think
              that&apos;s backwards.
            </p>
            <p className="reveal">
              We use modern tooling and AI to build sites in hours, not weeks —
              then host and maintain them for one flat monthly fee. You get the
              polish of an agency without the upfront cost or the waiting. When
              you outgrow a plan, you move up the ladder; nothing gets rebuilt.
            </p>
            <a href="/examples" className="link-arrow reveal">
              View live examples
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="about-stats">
            <div className="stat reveal">
              <div className="n">£15</div>
              <div className="l">Entry price, all-in</div>
            </div>
            <div className="stat reveal">
              <div className="n">4</div>
              <div className="l">Plans, one ladder</div>
            </div>
            <div className="stat reveal">
              <div className="n">24/7</div>
              <div className="l">Hosting &amp; uptime</div>
            </div>
            <div className="stat reveal">
              <div className="n">AI</div>
              <div className="l">Built in at the top tier</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
