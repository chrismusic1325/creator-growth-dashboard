import { useState } from "react";

function PlatformForm({ onAddPlatform }) {
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState("");
  const [monetized, setMonetized] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    const newPlatform = {
      id: Date.now(),
      name: trimmedName,
      handle: "",
      category: "Social Media",
      status: "Planning",
      followers: Number(followers) || 0,
      monetized,
    };

    onAddPlatform(newPlatform);

    setName("");
    setFollowers("");
    setMonetized(false);
  }

  return (
    <section>
      <h2>Add Platform</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="platform-name">Platform Name</label>

          <input
            id="platform-name"
            type="text"
            placeholder="Facebook"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="platform-followers">Followers</label>

          <input
            id="platform-followers"
            type="number"
            min="0"
            placeholder="0"
            value={followers}
            onChange={(event) => setFollowers(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="platform-monetized">
            <input
              id="platform-monetized"
              type="checkbox"
              checked={monetized}
              onChange={(event) => setMonetized(event.target.checked)}
            />
            Monetized
          </label>
        </div>

        <button type="submit">Add Platform</button>
      </form>
    </section>
  );
}

export default PlatformForm;