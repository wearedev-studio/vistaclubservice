export interface AnyCarChoiceSectionsResponse {
    data: {
        anyCarChoices: AnyCarChoiceSection[];
    };
    loading: boolean;
    networkStatus: number;
}

export interface AnyCarChoiceSection {
    __typename: string;
    id: string;
    title: string;
    description: string;
    cars: Car[];
}

export interface Car {
    id: string;
    title: string;
    description: string;
    modalTitle: string;
    image: Image;
}

export interface Image {
    width: number;
    height: number;
    url: string;
}
