const examples = [
  {
    id: "dnata",
    num: "01",
    name: "dnata Overtime",
    url: "https://www.dnataovertime.com",
    domain: "dnataovertime.com",
    desc: "Staff overtime management portal for one of the world's largest aviation services companies.",
    industry: "Aviation",
  },
  {
    id: "mybagh",
    num: "02",
    name: "MyBagh",
    url: "https://www.mybagh.co.uk",
    domain: "mybagh.co.uk",
    desc: "Premium gardening and landscaping services — designed to convert visitors into booked appointments.",
    industry: "Home & Garden",
  },
  {
    id: "panecci",
    num: "03",
    name: "Panecci",
    url: "https://www.panecci.com",
    domain: "panecci.com",
    desc: "Artisan pizza restaurant with an online presence built to drive footfall and delivery orders.",
    industry: "Food & Dining",
  },
];

export default function LiveExamples() {
  return (
    <section id="examples">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">Live examples &middot; 01 &mdash; 03</span>
          <h2 className="reveal">Websites we&apos;ve built.</h2>
          <p className="reveal">
            From aviation portals to local restaurants &mdash; here are three
            live sites we&apos;ve designed, built and now maintain for one flat
            monthly fee.
          </p>
        </div>

        <div className="examples-grid">
          {examples.map((ex) => (
            <a
              key={ex.id}
              href={ex.url}
              target="_blank"
              rel="noopener noreferrer"
              className="example-card reveal"
            >
              <div className="ex-preview">
                <div className="ex-bar">
                  <span className="ex-dots">
                    <i /><i /><i />
                  </span>
                  <span className="ex-url">{ex.domain}</span>
                </div>
                <div className="ex-screen" />
              </div>
              <div className="ex-info">
                <p className="ex-industry">{ex.industry}</p>
                <h3 className="ex-name">{ex.name}</h3>
                <p className="ex-desc">{ex.desc}</p>
                <span className="ex-link">
                  Visit site
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
