import { apolloClient } from "@/lib/appoloClient";
import { CustomBrokerSectionResponse } from "@/types/customBrokerSection";
import { gql } from "@apollo/client";

class CustomsBrokersSectionService {
  static async getAll() {
    const data: CustomBrokerSectionResponse = await apolloClient.query({
      query: gql`
      query CustomsBrokers {
        customsBrokers {
          id
          title
          description
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

export { CustomsBrokersSectionService };
