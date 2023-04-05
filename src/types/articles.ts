import { Category } from "./categories";

export interface ArticlesResponse {
  data: {
    articles: Article[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface ArticleResponse {
  data: {
    article: Article;
  };
  loading: boolean;
  networkStatus: number;
}

export interface Article {
  __typename: string;
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  content: {
    html: string
  },
  mainImage?: {
    width: number,
    height: number,
    url: string
  }
}
