
export interface ContractContentSectionsResponse {
    data: {
      contractSections: ContractsContentSections[];
    };
    loading: boolean;
    networkStatus: number;
  }
  
  export interface ContractsContentSections {
    createdAt: string;
    id: string;
    publishedAt: string;
    updatedAt: string;
    text: {
        html: string
    }
  }
  