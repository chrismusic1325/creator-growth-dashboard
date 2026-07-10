import PlatformList from "../components/platforms/PlatformList";
import PlatformForm from "../components/platforms/PlatformForm";
import EditPlatformForm from "../components/platforms/EditPlatformForm";

function SocialMedia({
  platforms,
  platformBeingEdited,
  onAddPlatform,
  onDeletePlatform,
  onEditPlatform,
  onUpdatePlatform,
  onCancelEdit,
}) {
  return (
    <section>
      <header>
        <h1>Social Media Management</h1>

        <p>
          Manage the social platforms connected to your creator business from
          one organized workspace.
        </p>

        <p>
          Review account details, audience size, activity status, and
          monetization progress without mixing platform information with
          products or marketing tasks.
        </p>
      </header>

      <section>
        <h2>
          {platformBeingEdited
            ? "Update Social Media Platform"
            : "Add Social Media Platform"}
        </h2>

        <p>
          Keep platform information current so audience and business summaries
          remain accurate.
        </p>

        {platformBeingEdited ? (
          <EditPlatformForm
            platform={platformBeingEdited}
            onUpdatePlatform={onUpdatePlatform}
            onCancelEdit={onCancelEdit}
          />
        ) : (
          <PlatformForm onAddPlatform={onAddPlatform} />
        )}
      </section>

      <section>
        <h2>Connected Platforms</h2>

        <p>
          View and manage all social media accounts currently included in your
          creator business.
        </p>

        <PlatformList
          platforms={platforms}
          onDeletePlatform={onDeletePlatform}
          onEditPlatform={onEditPlatform}
        />
      </section>
    </section>
  );
}

export default SocialMedia;