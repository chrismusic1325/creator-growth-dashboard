import ThemeToggle from "../common/ThemeToggle";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-content">
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
