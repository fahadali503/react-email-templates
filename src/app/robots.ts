import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
        },
        sitemap: 'https://react-email-templates.com/sitemap.xml',
        host: 'https://react-email-templates.com',
    };
} 