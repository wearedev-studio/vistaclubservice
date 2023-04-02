
export interface WelcomeSectionResponse {
  data: {
    welcomeSections: WelcomeSection[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface WelcomeSection {
  __typename: string;
  id: string;
  title: {
    html: string
  }
  features: {
    html: string
  }
}
