import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" href="/" aria-label="NextFrame home">
          <span className="wordmark-icon" aria-hidden="true">
            <span />
          </span>
          <span>nextframe</span>
        </Link>

        <p className="header-descriptor">A curated series collection</p>
      </div>
    </header>
  );
}
