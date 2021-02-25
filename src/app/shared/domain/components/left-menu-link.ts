export interface LeftMenuLink {

    id: string,
    label: string;
    isNavigable: boolean;
    level: number,
    url?: string,
    icon?: string,
    children?: Array<LeftMenuLink>;

}