export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot">
        <a href="#home" className="brand">
          <span className="dot" />
          PANECCI
        </a>
        <div className="socials">
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.7a5.3 5.3 0 1 1-5.3-5.3c.3 0 .5 0 .8.1v2.7a2.6 2.6 0 1 0 1.8 2.5V3h2.6z" />
            </svg>
          </a>
          <a href="#" aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.2 10.6 22 2h-2.5l-6.4 7.2L8 2H2l8.1 11.6L2 22h2.5l6.9-7.7L16 22h6l-7.8-11.4zM12 13.3l-.9-1.3L5 3.7h2.7l4.5 6.4.9 1.3 6 8.6h-2.7L12 13.3z" />
            </svg>
          </a>
          <a href="#" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 26 }}>
        <p className="copy">
          © {year} PANECCI. Premium websites from £15/month.
        </p>
      </div>
    </footer>
  );
}
