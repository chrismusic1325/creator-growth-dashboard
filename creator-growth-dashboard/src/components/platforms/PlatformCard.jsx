import DeletePlatformButton from "./DeletePlatformButton";

function PlatformCard({ platform, onDeletePlatform, onEditPlatform }) {
  return (
    <div className="platform-card">
      <h3>{platform.name}</h3>

      <p>
        <strong>Followers:</strong> {platform.followers}
      </p>

      <p>
        <strong>Monetized:</strong> {platform.monetized ? "Yes" : "No"}
      </p>

      <button type="button" onClick={() => onEditPlatform(platform)}>
        Edit
      </button>

      <DeletePlatformButton onDelete={() => onDeletePlatform(platform.id)} />
    </div>
  );
}

export default PlatformCard;