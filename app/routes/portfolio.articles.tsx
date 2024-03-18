import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { getArticles } from "../articles.server";
import { IArticles } from "~/types";

export const loader = async () => {
  const articles = await getArticles(20);
  return json(articles);
};

export default function PortfolioArticlesRoute() {
  const articles: IArticles[] = useLoaderData();
  return (
    <ul>
      {articles &&
        articles.map(({ title, url, id }) => (
          <li key={id} className="w-1/2 overflow-ellipsis whitespace-nowrap">
            <Link key={id} to={url} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
