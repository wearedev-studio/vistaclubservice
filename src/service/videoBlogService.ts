import { apolloClient } from "@/lib/appoloClient";
import { VideoBlogResponse } from "@/types/videoBlog";
import { gql } from "@apollo/client";

class VideoBlogService {
  static async getAll() {
    const data: VideoBlogResponse = await apolloClient.query({
      query: gql`
        query VideoBlog {
          videoBlogs {
            id
            title
            videoUrl
          }
        }
      `,
    });
    return data;
  }
}

export { VideoBlogService };
