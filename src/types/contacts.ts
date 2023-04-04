
export interface ContactsResponse {
  data: {
    contacts: Contact[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface Contact {
  address: {
    html: string
  };
  workTime: {
    html: string
  };
  contacts: {
    html: string
  };
}
