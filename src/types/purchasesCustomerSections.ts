export interface PurchasesCustomerResponse {
  data: {
    purchasesCustomers: PurchasesCustomer[];
  };
  loading: boolean;
  networkStatus: number;
}

export interface PurchasesCustomer {
  id: string;
  title: string;
  subtitle: string;
  purchases: Purchase[];
}

interface Purchase {
  id: string;
  title: string;
  content: {
    html: string;
  };
  image?: {
    url: string;
    width: number;
    height: number;
  };
}