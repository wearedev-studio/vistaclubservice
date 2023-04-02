// Import Engine
import { apolloClient } from "@/lib/appoloClient";
import { gql } from "@apollo/client";

// Import Types
import { AnyCarChoiceSectionsResponse } from "@/types/anyCarChoiceSection";

// Create Class For Any Car Service
class AnyCarChoiceSetionService {
  static async getAll() {
    const data: AnyCarChoiceSectionsResponse = await apolloClient.query({
      query: gql`
        query AnyCarChoiceSections {
            anyCarChoices {
                title
                id
                description
                cars {
                    title
                    id
                    description
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

// Export Services
export { AnyCarChoiceSetionService };
