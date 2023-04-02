import { apolloClient } from "@/lib/appoloClient";
import { WelcomeSectionResponse } from "@/types/welcomeSections";
import { gql } from "@apollo/client";

class WelcomeSectionService {
  static async getAll() {
    const data: WelcomeSectionResponse = await apolloClient.query({
      query: gql`
        query WelcomeSection {
          welcomeSections {
            title {
              html
            }
            features {
              html
            }
          }
        }
      `,
    });
    return data;
  }
}

export { WelcomeSectionService };
