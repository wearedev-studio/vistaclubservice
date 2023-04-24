export interface ContractSectionsResponse {
    data: {
        contract: ContractsSections[];
    };
    loading: boolean;
    networkStatus: number;
}

export interface ContractsSections {
    createdAt: string;
    id: string;
    publishedAt: string;
    updatedAt: string;
    text: {
        html: string
    }
}