import { Metadata } from "next";
import { getTemplateById, getCategoryById } from "@/lib/templates";
import { generateTemplateMetadata, generateStructuredData } from "@/lib/seo";
import TemplatePageClient from "./template-page-client";

interface TemplatePageProps {
    params: { templateId: string };
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
    return generateTemplateMetadata(params.templateId);
}

export default function TemplatePage({ params }: TemplatePageProps) {
    const template = getTemplateById(params.templateId);
    const category = template ? getCategoryById(template.category) : null;

    if (!template) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Template Not Found</h1>
                    <p className="text-muted-foreground mb-8">The template you're looking for doesn't exist.</p>
                    <a href="/" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                        ← Back to Home
                    </a>
                </div>
            </div>
        );
    }

    const structuredData = generateStructuredData(template);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <TemplatePageClient template={template} category={category} />
        </>
    );
}