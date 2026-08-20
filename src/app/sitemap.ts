import { MetadataRoute } from 'next';
import { categories } from '@/lib/templates';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://react-email-templates.com';
    
    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
    ];

    // Category pages
    const categoryPages = categories.map((category) => ({
        url: `${baseUrl}/category/${category.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Template pages
    const templatePages = categories.flatMap((category) =>
        category.templates.map((template) => ({
            url: `${baseUrl}/template/${template.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    );

    return [...staticPages, ...categoryPages, ...templatePages];
} 