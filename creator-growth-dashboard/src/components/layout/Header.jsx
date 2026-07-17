import ThemeToggle from "../common/ThemeToggle";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-content">
        <div
          className="logo-celebration"
          tabIndex="0"
          aria-label="Animate the Creator Growth Dashboard logo"
        >
          <span
            className="logo-spark logo-spark-one"
            aria-hidden="true"
          ></span>

          <span
            className="logo-spark logo-spark-two"
            aria-hidden="true"
          ></span>

          <span
            className="logo-spark logo-spark-three"
            aria-hidden="true"
          ></span>

          <span
            className="logo-spark logo-spark-four"
            aria-hidden="true"
          ></span>

          <img
            className="site-logo"
            src={`${import.meta.env.BASE_URL}creator-dashboard-logo.svg`}
            alt="Creator Growth Dashboard logo showing rising analytics bars"
          />
        </div>

        <div className="site-header-text">
          <p className="site-eyebrow">Creator Business Workspace</p>

          <h1>Creator Growth Dashboard</h1>

          <p className="site-tagline">
            Organize platforms, digital products, marketing tasks, and business
            insights in one professional workspace.
          </p>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
