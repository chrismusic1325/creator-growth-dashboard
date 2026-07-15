import { Link } from "react-router";

export default function NotFound() {
  return (
    <main>
      <section>
        <h1>Page Not Found</h1>

        <p>
          The page you requested does not exist. Return to the home page to
          continue using Creator Growth Dashboard.
        </p>

        <Link to="/">Return Home</Link>
      </section>
    </main>
  );
}
