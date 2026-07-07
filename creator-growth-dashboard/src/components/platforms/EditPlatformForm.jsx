function EditPlatformForm({ platform, onUpdatePlatform, onCancelEdit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const updatedPlatform = {
      ...platform,
      name: event.target.name.value,
      followers: Number(event.target.followers.value),
      monetized: event.target.monetized.checked
    };

    onUpdatePlatform(updatedPlatform);
  }

  return (
    <section>
      <h2>Edit Platform</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" defaultValue={platform.name} />
        <input name="followers" type="number" defaultValue={platform.followers} />

        <label>
          Monetized
          <input
            name="monetized"
            type="checkbox"
            defaultChecked={platform.monetized}
          />
        </label>

        <button type="submit">Save Changes</button>
        <button type="button" onClick={onCancelEdit}>Cancel</button>
      </form>
    </section>
  );
}

export default EditPlatformForm;