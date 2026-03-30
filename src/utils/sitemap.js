import { SITE_CONFIG } from '@/constants/site';
export const generateSitemapUrl = (path, options = {}) => {
    return {
        loc: `${SITE_CONFIG.baseUrl}${path}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8,
        ...options,
    };
};
export const generateHreflangLinks = (path) => {
    return SITE_CONFIG.supportedLangs.map((lang) => ({
        rel: 'alternate',
        hreflang: lang,
        href: lang === SITE_CONFIG.defaultLang
            ? `${SITE_CONFIG.baseUrl}${path}`
            : `${SITE_CONFIG.baseUrl}/${lang}${path}`,
    }));
};
