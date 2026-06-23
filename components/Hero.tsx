export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="stars" />
      <div className="wrap">
        <div className="hero-inner">
          <span className="eyebrow reveal">
            Websites · Hosting · AI — from £15/month
          </span>
          <h1 className="reveal">
            A website worth showing off —
            <br />
            <span className="grad">without the agency invoice.</span>
          </h1>
          <p className="lede reveal">
            We design it, build it, host it and look after it. You pay one small
            amount each month. No four-figure quotes, no learning Wix, no
            maintenance headaches.
          </p>
          <div className="hero-actions reveal">
            <a href="#models" className="btn-primary">
              See the plans
            </a>
            <a href="#contact" className="btn-ghost">
              Get a free preview
            </a>
          </div>
          <div className="hero-meta reveal">
            <span>
              <b>1–2 hrs</b> typical build
            </span>
            <span>
              <b>£0</b> upfront design fee
            </span>
            <span>
              <b>Updates</b> handled for you
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
