import { Link, Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet }
];

// route is here.
export default function PortfolioRoute() {
  return (
    <div id="root" className="pt-20 px-4 bg-gradient-to-b from-blue-600 to-purple-600 text-white h-screen m-0">
      <header>
        <h1 className="text-2xl font-bold my-4">
          <Link className="text-white" to={`/portfolio`}>Welcome to my portfolio</Link>
        </h1>
      </header>
      <div className="flex">
        <div className="p-4 whitespace-nowrap space-y-7">
          <h2 id="experience"><Link className="bg-gray-900 py-3 px-6 rounded-lg font-medium text-white text-base" id="experience" to={`/portfolio/experience`}>Experience</Link></h2>
          <h2 id="articles"><Link className="bg-gray-900 py-3 px-6 rounded-lg font-medium text-white text-base" id="articles" to={`/portfolio/articles`}>Top 20 Articles</Link></h2>
          <h2 id="certificates"><Link className="bg-gray-900 py-3 px-6 rounded-lg font-medium text-white text-base" to={`/portfolio/certificates`}>Certificates</Link></h2>
        </div>
        <div className="p-4 whitespace-nowrap">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
