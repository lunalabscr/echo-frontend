interface SitemapUrl {
    loc: string;
    lastmod?: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}
export declare const generateSitemapUrl: (path: string, options?: Omit<SitemapUrl, "loc">) => SitemapUrl;
export declare const generateHreflangLinks: (path: string) => {
    rel: string;
    hreflang: "en" | "es" | "pt";
    href: string;
}[];
export {};
