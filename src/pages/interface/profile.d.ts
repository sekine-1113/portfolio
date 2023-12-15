export type Profile = {
    itemName: string;
    item: string | number;
    isLink?: boolean;
};


export type ProfileResponse = {
    items: Profile[]
};