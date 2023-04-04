export interface VideoBlogResponse {
  data: {
    videoBlogs: VideoBlog[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface VideoBlog {
  __typename: string;
  id: string;
  title: string;
  videoUrl: string;
}
