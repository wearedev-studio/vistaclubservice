import { apolloClient } from "@/lib/appoloClient";
import { ContractSectionsResponse } from "@/types/contractsSections";
import { gql } from "@apollo/client";

class ContractService {
  static async getAll() {
    const data: ContractSectionsResponse = await apolloClient.query({
      query: gql`
      query Contract {
        contract {
          createdAt
          id
          publishedAt
          updatedAt
          text {
            html
          }
        }
      }
      `,
    });
    return data;
  }
}

export { ContractService };