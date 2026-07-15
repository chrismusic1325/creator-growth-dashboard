function PlatformOverviewTable({ platforms }) {
  return (
    <section
      className="analytics-table-section"
      aria-labelledby="platform-overview-heading"
    >
      <h2 id="platform-overview-heading">Platform Overview</h2>

      <p>
        This table updates automatically when creator platforms are added,
        edited, or deleted.
      </p>

      <div className="responsive-table-wrapper">
        <table className="platform-overview-table">
          <caption>
            Creator platforms, follower totals, and monetization status
          </caption>

          <thead>
            <tr>
              <th scope="col">Platform</th>
              <th scope="col">Followers</th>
              <th scope="col">Monetization</th>
            </tr>
          </thead>

          <tbody>
            {platforms.map((platform) => (
              <tr key={platform.id}>
                <th scope="row">{platform.name}</th>

                <td>
                  {Number(platform.followers || 0).toLocaleString()}
                </td>

                <td>
                  <span
                    className={
                      platform.monetized
                        ? "status-badge status-badge-success"
                        : "status-badge status-badge-pending"
                    }
                  >
                    {platform.monetized ? "Monetized" : "Not monetized"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {platforms.length === 0 && (
        <p className="empty-state">
          No platforms have been added yet. Add a platform from the Social
          Media page.
        </p>
      )}
    </section>
  );
}

export default PlatformOverviewTable;
