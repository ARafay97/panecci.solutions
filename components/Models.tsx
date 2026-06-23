import { tiers } from "@/data/tiers";

export default function Models() {
  return (
    <section id="models">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow reveal">The ladder · 01 — 04</span>
          <h2 className="reveal">Start small. Climb when you&apos;re ready.</h2>
          <p className="reveal">
            Every plan includes design, hosting and maintenance. Pick the
            altitude that fits today — move up the moment your business needs
            more.
          </p>
        </div>

        <div className="tiers">
          {tiers.map((t) => (
            <article key={t.id} className={`tier ${t.theme}`}>
              {t.flag && <span className="flag">{t.flag}</span>}
              <div className="tier-media">
                <div className="aurora" />
                {t.video && (
                  <video className="tier-video" autoPlay muted loop playsInline>
                    <source src={t.video} type="video/mp4" />
                  </video>
                )}
                <div className="tier-veil" />
              </div>
              <div className="tier-body">
                <span className="tier-no">{t.no}</span>
                <h3 className="tier-name">{t.name}</h3>
                <p className="tier-tag">{t.tag}</p>
                <div className="tier-price">
                  <span className="num">{t.price}</span>
                  <span className="per">{t.per}</span>
                </div>
                <ul className="tier-feats">
                  {t.features.map((f, i) => (
                    <li key={i}>
                      <span aria-hidden="true">✦</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="tier-pick">
                  Choose {t.name}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="finep reveal">
          All plans run on a 3-month minimum term, billed monthly thereafter.
          Cancel anytime once the term ends.
        </p>
      </div>
    </section>
  );
}
