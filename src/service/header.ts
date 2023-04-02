import { apolloClient } from "@/lib/appoloClient";
import { HeaderResponse } from "@/types/header";
import { gql } from "@apollo/client";

class HeaderService {
  static async getAll() {
    const data: HeaderResponse = await apolloClient.query({
      query: gql`
        query Header {
          headers {
            phone1
            phone2
            whatsapp
            description {
              html
            }
            address {
              html
            }
          }
        }
      `,
    });
    return data;
  }
}

export { HeaderService };
