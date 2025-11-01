// Common types used across the application
export type ContentSection = {
    id: string;
    title: string;
    slug: string;
};

export type NavigationItem = {
    label: string;
    href: string;
    icon?: string;
};

export type AnimationConfig = {
    duration: number;
    easing: string;
    delay?: number;
};

export type ViewportBreakpoint = 'mobile' | 'tablet' | 'desktop';

export interface MuseumConfig {
    theme: {
        primaryColor: string;
        secondaryColor: string;
        accentColor: string;
        fontFamily: string;
    };
    animations: {
        enabled: boolean;
        duration: number;
    };
    language: 'vi' | 'en';
}
