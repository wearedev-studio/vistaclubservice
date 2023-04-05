import { apolloClient } from "@/lib/appoloClient";
import { ArticleResponse, ArticlesResponse } from "@/types/articles";
import { gql } from "@apollo/client";

class ArticleService {
  static async getAllArticles(count: number = 100) {
    const data: ArticlesResponse = await apolloClient.query({
      query: gql`
        query AllArticles {
          articles (first: ${count}) {
            id
            slug
            title
            excerpt
            category {
              id
              name
              slug
            }
            content {
              html
            }
            mainImage {
              url
              width
              height
            }
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
            excerpt
            category {
              id
              name
              slug
            }
            content {
              html
            }
            mainImage {
              url
              width
              height
            }
          }
        }
      `,
    });
    return data;
  }
}

export { ArticleService };
