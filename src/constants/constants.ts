import { Hero } from '@homework-task/components/ui/Hero';
import { ItemsShowcase } from '@homework-task/components/ui/ItemsShowcase';
import { TrustBar } from '@homework-task/components/ui/TrustBar';
import { Layout } from '@homework-task/components/ui/Layout';
import { Button } from '@homework-task/components/ui/Button';
import FormGenerator from '@homework-task/components/ui/FormGenerator';
import { List } from '@homework-task/components/ui/List';

// models
import {
    ButtonProps,
    HeroProps,
    ItemsShowcaseProps,
    LayoutProps,
    TrustBarProps,
} from '@homework-task/models/app.models';

type LayoutType = React.FC<LayoutProps>;

type LayoutMap = Record<string, LayoutType>;
type ComponentMap = Record<string, any>;

export const layoutMap: LayoutMap = {
    layoutSection: Layout,
    // Add more layout as needed
};

export const componentMap: ComponentMap = {
    componentHero: Hero as React.FC<HeroProps>,
    componentItemsShowcase: ItemsShowcase as React.FC<ItemsShowcaseProps>,
    componentTrustBar: TrustBar as React.FC<TrustBarProps>,
    componentButton: Button as React.FC<ButtonProps>,
    componentForm: FormGenerator,
    componentList: List,
    // Add more components as needed
};
