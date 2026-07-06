import PlatformCard from "./PlatformCard";

function PlatformList({ platforms }) {
  return (
    <section>
      <h2>Social Media Platforms</h2>

      {platforms.map((platform) => (
        <PlatformCard
          key={platform.id}
          platform={platform}
        />
      ))}
    </section>
  );
}

export default PlatformList;