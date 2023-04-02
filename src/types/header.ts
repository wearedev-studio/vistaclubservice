
export interface HeaderResponse {
  data: {
    headers: Header[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface Header {
  __typename: string;
  id: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  description: {
    html: string
  }
  address: {
    html: string
  }
}
