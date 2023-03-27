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
}
