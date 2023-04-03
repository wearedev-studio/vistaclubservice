
export interface CustomBrokerSectionResponse {
    data: {
        customsBrokers: CustomBrokerSection[];
    };
    loading: boolean;
    networkStatus: number;
}

export interface CustomBrokerSection {
    __typename: string;
    id: string;
    title: string;
    description: string;
    guarantees: {
        html: string
    }
}
