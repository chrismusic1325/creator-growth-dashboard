import { useState } from "react";
import { Link } from "react-router";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [managementOpen, setManagementOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    setManagementOpen(false);
    setInsightsOpen(false);
    setCompanyOpen(false);
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-bar">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          Creator Growth Dashboard
        </Link>

        <button
          className="hamburger-button"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="hamburger-menu">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/dashboard" onClick={closeMenu}>
            Dashboard
          </Link>

          <div className="menu-group">
            <button
              type="button"
              aria-expanded={managementOpen}
              onClick={() =>
                setManagementOpen((current) => !current)
              }
            >
              Management
              <span>{managementOpen ? " ▲" : " ▼"}</span>
            </button>

            {managementOpen && (
              <div className="submenu">
                <Link to="/social-media" onClick={closeMenu}>
                  Social Media
                </Link>

                <Link to="/digital-products" onClick={closeMenu}>
                  Digital Products
                </Link>
              </div>
            )}
          </div>

          <div className="menu-group">
            <button
              type="button"
              aria-expanded={insightsOpen}
              onClick={() =>
                setInsightsOpen((current) => !current)
              }
            >
              Planning &amp; Insights
              <span>{insightsOpen ? " ▲" : " ▼"}</span>
            </button>

            {insightsOpen && (
              <div className="submenu">
                <Link to="/analytics" onClick={closeMenu}>
                  Analytics
                </Link>

                <Link to="/calendar" onClick={closeMenu}>
                  Calendar
                </Link>
              </div>
            )}
          </div>

          <div className="menu-group">
            <button
              type="button"
              aria-expanded={companyOpen}
              onClick={() =>
                setCompanyOpen((current) => !current)
              }
            >
              Company
              <span>{companyOpen ? " ▲" : " ▼"}</span>
            </button>

            {companyOpen && (
              <div className="submenu">
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>

                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;