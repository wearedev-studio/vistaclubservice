import { apolloClient } from "@/lib/appoloClient";
import { ArticleResponse, ArticlesResponse } from "@/types/articles";
import { gql } from "@apollo/client";

class ArticleService {
  static async getAllArticles() {
    const data: ArticlesResponse = await apolloClient.query({
      query: gql`
        query AllArticles {
          articles {
            id
            slug
            title
          }
        }
      `,
    });
    return data;
  }
  static async getArticleBySlug(slug: string) {
    const data: ArticleResponse = await apolloClient.query({
      query: gql`
        query Article {
          article(where: { slug: "${slug}" }) {
            id
            slug
            title
          }
        }
      `,
    });
    return data;
  }
}

export { ArticleService };
