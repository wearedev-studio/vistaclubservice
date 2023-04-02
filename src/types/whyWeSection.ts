export interface WhyWeSectionsResponse {
  data: {
    whyWeSections: WhyWeSection[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface WhyWeSection {
  __typename: string;
  id: string;
  title: string;
  features: Feature[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
  url: string;
}
