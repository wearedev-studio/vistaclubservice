import { apolloClient } from "@/lib/appoloClient";
import { CustomsBrokersResponse } from "@/types/customsBrokersSections";
import { gql } from "@apollo/client";

class BrokerService {
  static async getAll() {
    const data: CustomsBrokersResponse = await apolloClient.query({
      query: gql`
        query CustomsBrokers {
          customsBrokers {
            id
            title {
              html
            }
            guarantees {
              html
            }
          }
        }
      `,
    });
    return data;
  }
}

export { BrokerService };
