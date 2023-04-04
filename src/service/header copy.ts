import { apolloClient } from "@/lib/appoloClient";
import { ContactsResponse } from "@/types/contacts";
import { gql } from "@apollo/client";

class ContactsService {
  static async getAll() {
    const data: ContactsResponse = await apolloClient.query({
      query: gql`
      query Contacts {
        contacts {
          address{
            html
          }
          workTime{
            html
          }
          contacts {
            html
          }
        }
      }
      
      `,
    });
    return data;
  }
}

export { ContactsService };
