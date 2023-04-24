import { apolloClient } from "@/lib/appoloClient";
import { ContractContentSectionsResponse } from "@/types/contractContentSections";
import { gql } from "@apollo/client";

class ContractContentService {
  static async getAll() {
    const data: ContractContentSectionsResponse = await apolloClient.query({
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

export { ContractContentService };
