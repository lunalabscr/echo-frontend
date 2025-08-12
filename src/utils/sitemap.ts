import { SITE_CONFIG } from '@/constants/site';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemapUrl = (
  path: string,
  options: Omit<SitemapUrl, 'loc'> = {}
): SitemapUrl => {
  return {
    loc: `${SITE_CONFIG.baseUrl}${path}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8,
    ...options,
  };
};

export const generateHreflangLinks = (path: string) => {
  return SITE_CONFIG.supportedLangs.map((lang) => ({
    rel: 'alternate',
    hreflang: lang,
    href: lang === SITE_CONFIG.defaultLang 
      ? `${SITE_CONFIG.baseUrl}${path}`
      : `${SITE_CONFIG.baseUrl}/${lang}${path}`,
  }));
};