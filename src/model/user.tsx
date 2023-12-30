export interface Iuser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Iaddress;
    phone: string;
    website: string;
    company: {
        // company also can be another interface. We have name in common, so it can inherit one interface that will be in common for user and company. But, why to complicate if it's simple project?
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface Iaddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}
