
export interface CustomsBrokersResponse {
  data: {
    customsBrokers: CustomBroker[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface CustomBroker {
  id: string;
  title: {
    html: string
  };
  guarantees: {
    html: string
  },
}
