import { Metadata } from 'next';
import { getTemplateById, getCategoryById } from './templates';

export function generateTemplateMetadata(templateId: string): Metadata {
    const template = getTemplateById(templateId);

    if (!template) {
        return {
            title: 'Template Not Found',
            description: 'The requested email template could not be found.',
        };
    }

    const category = getCategoryById(template.category);
    const templateUrl = `https://react-email-templates.com/template/${template.id}`;

    return {
        title: template.title,
        description: template.description,
        keywords: [
            ...template.tags,
            'react email template',
            'email template',
            'react email',
            category?.name.toLowerCase() || '',
            'free email template'
        ],
        openGraph: {
            title: template.title,
            description: template.description,
            url: templateUrl,
            type: 'article',
            images: [
                {
                    url: `/images/templates/${template.id}-preview.png`,
                    width: 1200,
                    height: 630,
                    alt: `${template.title} - React Email Template Preview`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: template.title,
            description: template.description,
            images: [`/images/templates/${template.id}-preview.png`],
        },
        alternates: {
            canonical: templateUrl,
        },
        other: {
            'article:published_time': new Date().toISOString(),
            'article:author': template.author || 'React Email Templates Team',
            'article:section': category?.name || 'Email Templates',
        },
    };
}

export function generateCategoryMetadata(categoryId: string): Metadata {
    const category = getCategoryById(categoryId);

    if (!category) {
        return {
            title: 'Category Not Found',
            description: 'The requested category could not be found.',
        };
    }

    const categoryUrl = `https://react-email-templates.com/category/${category.id}`;

    return {
        title: `${category.name} Email Templates`,
        description: `${category.description} Browse our collection of ${category.name.toLowerCase()} email templates. All templates are free and ready to use with React Email.`,
        keywords: [
            `${category.name.toLowerCase()} email templates`,
            'react email templates',
            'email templates',
            'react email',
            'free email templates',
            ...category.templates.flatMap(t => t.tags)
        ],
        openGraph: {
            title: `${category.name} Email Templates`,
            description: `${category.description} Browse our collection of ${category.name.toLowerCase()} email templates.`,
            url: categoryUrl,
            type: 'website',
            images: [
                {
                    url: `/images/categories/${category.id}-preview.png`,
                    width: 1200,
                    height: 630,
                    alt: `${category.name} Email Templates`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${category.name} Email Templates`,
            description: `${category.description} Browse our collection of ${category.name.toLowerCase()} email templates.`,
            images: [`/images/categories/${category.id}-preview.png`],
        },
        alternates: {
            canonical: categoryUrl,
        },
    };
}

export function generateStructuredData(template: any) {
    const category = getCategoryById(template.category);

    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": template.title,
        "description": template.description,
        "url": `https://react-email-templates.com/template/${template.id}`,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "author": {
            "@type": "Person",
            "name": template.author || "React Email Templates Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "React Email Templates",
            "url": "https://react-email-templates.com"
        },
        "genre": category?.name || "Email Template",
        "keywords": template.tags.join(", "),
        "datePublished": new Date().toISOString(),
        "softwareVersion": "1.0",
        "downloadUrl": `https://react-email-templates.com/api/template-code?templateId=${template.id}`,
        "screenshot": `https://react-email-templates.com/images/templates/${template.id}-preview.png`
    };
}

export function generateCategoryStructuredData(category: any) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${category.name} Email Templates`,
        "description": category.description,
        "url": `https://react-email-templates.com/category/${category.id}`,
        "publisher": {
            "@type": "Organization",
            "name": "React Email Templates",
            "url": "https://react-email-templates.com"
        },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": category.templates.map((template: any, index: number) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "SoftwareApplication",
                    "name": template.title,
                    "description": template.description,
                    "url": `https://react-email-templates.com/template/${template.id}`
                }
            }))
        }
    };
} 