export interface FeedbackClientsResponse {
  data: {
    feedbackClients: FeedbackClient[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface FeedbackClient {
  __typename: string;
  id: string;
  carName: string;
  userName: string;
  city: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  videoUrl?: string;
}
