import { apolloClient } from "@/lib/appoloClient";
import { FeedbackClientsResponse } from "@/types/feedbackClient";
import { gql } from "@apollo/client";

class FeedbackClientService {
  static async getAll() {
    const data: FeedbackClientsResponse = await apolloClient.query({
      query: gql`
        query FeedbackClients {
          feedbackClients {
            id
            carName
            userName
            city
            image {
              url
              width
              height
            }
            videoUrl
          }
        }
      `,
    });
    return data;
  }
}

export { FeedbackClientService };
