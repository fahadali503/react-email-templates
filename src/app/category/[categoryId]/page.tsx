import { Metadata } from "next";
import { getCategoryById, getTemplatesByCategory } from "@/lib/templates";
import { generateCategoryMetadata, generateCategoryStructuredData } from "@/lib/seo";
import CategoryPageClient from "./category-page-client";

interface CategoryPageProps {
    params: { categoryId: string };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    return generateCategoryMetadata(params.categoryId);
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const category = getCategoryById(params.categoryId);
    const allTemplates = getTemplatesByCategory(params.categoryId);

    if (!category) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
                    <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
                    <a href="/" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                        ← Back to Home
                    </a>
                </div>
            </div>
        );
    }

    const structuredData = generateCategoryStructuredData(category);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            <CategoryPageClient category={category} allTemplates={allTemplates} />
        </>
    );
}