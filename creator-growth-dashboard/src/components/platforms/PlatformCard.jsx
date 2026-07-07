function PlatformCard({ platform }) {
  return (
    <div className="platform-card">
      <h3>{platform.name}</h3>

      <p>
        <strong>Followers:</strong> {platform.followers}
      </p>

      <p>
        <strong>Monetized:</strong>{" "}
        {platform.monetized ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default PlatformCard;