import { Link, Outlet } from "@remix-run/react";

// route is here.
export default function PortfolioRoute() {
  return (
    <div className="m-0 h-screen bg-gradient-to-b from-blue-600 to-purple-600 px-4 pt-20 text-white">
      <header>
        <h1 className="my-4 text-2xl font-bold">
          <Link className="text-white" to={`/portfolio`}>
            Welcome to my portfolio
          </Link>
        </h1>
      </header>
      <div className="flex">
        <div className="space-y-7 whitespace-nowrap p-4">
          <h2 id="experience">
            <Link
              className="rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white"
              id="experience"
              to={`/portfolio/experience`}
            >
              Experience
            </Link>
          </h2>
          <h2 id="articles">
            <Link
              className="rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white"
              id="articles"
              to={`/portfolio/articles`}
            >
              Top 20 Articles
            </Link>
          </h2>
          <h2 id="certificates">
            <Link
              className="rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white"
              to={`/portfolio/certificates`}
            >
              Certificates
            </Link>
          </h2>
        </div>
        <div className="whitespace-nowrap p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
