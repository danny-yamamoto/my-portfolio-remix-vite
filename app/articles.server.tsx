import type { IArticles } from "./types";

export async function getArticles(count: number): Promise<IArticles[]> {
  const response = await fetch(
    `https://qiita.com/api/v2/users/daisuke-yamamoto/items?page=1&per_page=${count}`
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const qiitaItems: any[] = await response.json();
  const articles: IArticles[] = qiitaItems.map(item => ({
    title: item.title,
    url: item.url,
    id: item.id,
  }));
  return articles;
}
