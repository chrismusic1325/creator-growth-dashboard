const VIEWPORT_OPTIONS = [
  {
    name: "mobile",
    label: "Mobile",
    icon: "📱",
  },
  {
    name: "tablet",
    label: "Tablet",
    icon: "▯",
  },
  {
    name: "desktop",
    label: "Desktop",
    icon: "🖥️",
  },
];

function ViewportPreview({ viewport, onViewportChange }) {
  return (
    <div className="viewport-toolbar">
      <div
        className="viewport-button-group"
        role="group"
        aria-label="Choose application preview size"
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
            >
              <span aria-hidden="true">{option.icon}</span>
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
