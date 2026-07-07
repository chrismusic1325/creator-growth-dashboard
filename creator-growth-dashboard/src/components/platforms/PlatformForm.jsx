function PlatformForm() {
  return (
    <section>
      <h2>Add Platform</h2>

      <form>
        <input
          type="text"
          placeholder="Platform Name"
        />

        <button type="submit">
          Add Platform
        </button>
      </form>
    </section>
  );
}

export default PlatformForm;