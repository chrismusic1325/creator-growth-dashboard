import "../../styles/viewport-preview.css";

const VIEWPORT_OPTIONS = [
  {
    name: "mobile",
    label: "Mobile",
    icon: "📱",
    description: "375 pixel preview",
  },
  {
    name: "tablet",
    label: "Tablet",
    icon: "▯",
    description: "768 pixel preview",
  },
  {
    name: "desktop",
    label: "Desktop",
    icon: "🖥️",
    description: "Full-width preview",
  },
];

function ViewportPreview({ viewport, onViewportChange }) {
  return (
    <div className="viewport-controls">
      <div className="viewport-controls-heading">
        <h2>Display Preview</h2>

        <p>
          Choose a mobile, tablet, or desktop view of the business dashboard.
        </p>
      </div>

      <div
        className="viewport-button-group"
        role="group"
        aria-label="Choose dashboard preview size"
      >
        {VIEWPORT_OPTIONS.map((option) => {
          const isActive = viewport === option.name;

          return (
            <button
              key={option.name}
              type="button"
              className={
                isActive
                  ? "viewport-button viewport-button-active"
                  : "viewport-button"
              }
              onClick={() => onViewportChange(option.name)}
              aria-pressed={isActive}
              title={option.description}
            >
              <span className="viewport-button-icon" aria-hidden="true">
                {option.icon}
              </span>

              <span>{option.label}</span>
            </button>
          );
        })}
      </div>

      <p className="viewport-current-status" aria-live="polite">
        Current view: <strong>{viewport}</strong>
      </p>
    </div>
  );
}

export default ViewportPreview;
