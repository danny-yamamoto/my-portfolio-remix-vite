import { Link, Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import "../index.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" },
];

// route is here.
export default function PortfolioRoute() {
  return (
    <div id="root">
      <header>
        <h1>
          <Link className="header-title" to={`/portfolio`}>Welcome to my portfolio</Link>
        </h1>
      </header>
      <div className="flex-container">
        <div className="flex-item">
          <h2 id="experience"><Link className="fa-inverse contents-button" id="experience" to={`/portfolio/experience`}>Experience</Link></h2>
          <h2 id="articles"><Link className="fa-inverse contents-button" id="articles" to={`/portfolio/articles`}>Top 20 Articles</Link></h2>
          <h2 id="certificates"><Link className="fa-inverse contents-button" to={`/portfolio/certificates`}>Certificates</Link></h2>
        </div>
        <div className="flex-item">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
