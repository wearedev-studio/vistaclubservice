import { apolloClient } from "@/lib/appoloClient";
import { WhyWeSectionsResponse } from "@/types/whyWeSection";
import { gql } from "@apollo/client";

class WhyWeSectionService {
  static async getAll() {
    const data: WhyWeSectionsResponse = await apolloClient.query({
      query: gql`
        query WhyWeSections {
          whyWeSections {
            id
            title
            features {
              id
              title
              description
              image {
                width
                height
                url
              }
            }
          }
        }
      `,
    });
    return data;
  }
}

export { WhyWeSectionService };
