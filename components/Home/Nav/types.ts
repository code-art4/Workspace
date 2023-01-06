export interface NavItemProps {
    svg: string;
    more: undefined | { nav: string, link?: string }[];
    nav: string;
    existingNumber?: number;
    openNavFn: (item: any) => void;
    openItemsMore?: boolean
}

export interface FooterNavProps {
    svg: string;
    nav: string;
}