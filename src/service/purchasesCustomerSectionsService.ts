import { apolloClient } from "@/lib/appoloClient";
import { PurchasesCustomerResponse } from "@/types/purchasesCustomerSections";
import { gql } from "@apollo/client";

class PurchasesCustomerSectionsService {
  static async getAll() {
    const data: PurchasesCustomerResponse = await apolloClient.query({
      query: gql`
        query PurchasesCustomers {
          purchasesCustomers {
            id
            title
            subtitle
            purchases {
              id
              title
              content {
                html
              }
              image {
                url
                width
                height
              }
            }
          }
        }
      `,
    });
    return data;
  }
}

export { PurchasesCustomerSectionsService };
