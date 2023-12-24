export interface LayoutProps {
    children: React.ReactNode;
    background?: string;
    title?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export interface Card {
    title: string;
    image: string;
    description: string;
    background?: string;
    onClick?: () => void;
    buttonText?: string;
}

export interface CardsProps {
    cards: Card[];
}

export interface HeroProps {
    title: string;
    image?: string;
}

export interface PanelShowcaseItem {
    title: string;
    description: string;
    image: string;
}

export interface PanelShowcaseProps {
    items: PanelShowcaseItem[];
}

export interface TrustBarProps {
    images: string[];
}

export interface ItemsShowcaseItem {
    title: string;
    description: string;
}

export interface ItemsShowcaseProps {
    items: ItemsShowcaseItem[];
}

export interface ListItem {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export interface ListItemsProps {
    listItems: ListItem[];
}

export interface PageComponent {
    type: string;
    props?: object;
}

export interface PageSection {
    type: string;
    props: object;
    components: PageComponent[];
}

export interface PageDataProps {
    data: PageSection[];
}
