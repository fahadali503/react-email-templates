interface StructuredDataProps {
    data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data)
            }}
        />
    );
}

export function WebsiteStructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "React Email Templates",
        "description": "Comprehensive library of free, production-ready React Email templates for developers",
        "url": "https://react-email-templates.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://react-email-templates.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "publisher": {
            "@type": "Organization",
            "name": "React Email Templates",
            "url": "https://react-email-templates.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://react-email-templates.com/images/logo.png"
            }
        },
        "sameAs": [
            "https://github.com/your-username/react-email-templates"
        ]
    };

    return <StructuredData data={data} />;
}

export function OrganizationStructuredData() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "React Email Templates",
        "url": "https://react-email-templates.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://react-email-templates.com/images/logo.png"
        },
        "description": "Free React Email templates for developers",
        "foundingDate": "2024",
        "sameAs": [
            "https://github.com/your-username/react-email-templates"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://github.com/your-username/react-email-templates/issues"
        }
    };

    return <StructuredData data={data} />;
}

export function BreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
    const data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return <StructuredData data={data} />;
} 