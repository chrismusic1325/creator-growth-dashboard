import PlatformCard from "./PlatformCard";

function PlatformList({
  platforms,
  onDeletePlatform,
  onEditPlatform,
}) {
  return (
    <section>
      <h2>Social Media Platforms</h2>

      {platforms.map((platform) => (
        <PlatformCard
          key={platform.id}
          platform={platform}
          onDeletePlatform={onDeletePlatform}
          onEditPlatform={onEditPlatform}
        />
      ))}
    </section>
  );
}

export default PlatformList;