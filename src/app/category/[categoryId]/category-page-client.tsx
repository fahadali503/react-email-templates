"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Copy, Eye, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { copyToClipboard } from "@/lib/utils";

interface CategoryPageClientProps {
    category: any;
    allTemplates: any[];
}

export default function CategoryPageClient({ category, allTemplates }: CategoryPageClientProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Filter templates based on search term
    const filteredTemplates = allTemplates.filter(template =>
        template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleCopyCode = async (templateId: string) => {
        try {
            // Fetch the code from the API
            const response = await fetch(`/api/template-code?templateId=${templateId}`);
            const data = await response.json();

            if (response.ok) {
                await copyToClipboard(data.code);
                setCopiedId(templateId);
                setTimeout(() => setCopiedId(null), 2000);
            } else {
                console.error("Failed to fetch template code:", data.error);
            }
        } catch (error) {
            console.error("Failed to copy code:", error);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-white sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back
                                </Button>
                            </Link>
                            <div className="flex items-center space-x-3">
                                <span className="text-3xl">{category.icon}</span>
                                <div>
                                    <h1 className="text-2xl font-bold">{category.name}</h1>
                                    <p className="text-sm text-muted-foreground">{category.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative max-w-sm">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder="Search templates..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Statistics */}
            <section className="border-b bg-muted/30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold">{allTemplates.length}</div>
                                <div className="text-sm text-muted-foreground">Total Templates</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">{allTemplates.length}</div>
                                <div className="text-sm text-muted-foreground">Free Templates</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" asChild>
                                <a href="https://github.com/your-username/react-email-templates" target="_blank" rel="noopener noreferrer">
                                    Contribute
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Templates Grid */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    {filteredTemplates.length === 0 ? (
                        <div className="text-center py-12">
                            <h3 className="text-xl font-semibold mb-2">No templates found</h3>
                            <p className="text-muted-foreground">Try adjusting your search terms.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTemplates.map((template) => (
                                <Card key={template.id} className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <CardTitle className="text-lg flex items-center gap-2">
                                                    {template.title}
                                                </CardTitle>
                                                <CardDescription className="mt-1">
                                                    {template.description}
                                                </CardDescription>
                                            </div>
                                        </div>
                                        {template.author && (
                                            <div className="text-xs text-muted-foreground">
                                                by {template.author}
                                            </div>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1">
                                                {template.tags.map((tag: string) => (
                                                    <Badge key={tag} variant="outline" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center gap-2">
                                                <Link href={`/template/${template.id}`} className="flex-1">
                                                    <Button variant="outline" size="sm" className="w-full">
                                                        <Eye className="h-4 w-4 mr-2" />
                                                        Preview
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="default"
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => handleCopyCode(template.id)}
                                                >
                                                    <Copy className="h-4 w-4 mr-2" />
                                                    {copiedId === template.id ? "Copied!" : "Copy JSX"}
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Open Source Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Help Improve These Templates</h3>
                    <p className="text-lg mb-8 opacity-90">
                        All templates are open source. Contribute new templates or improve existing ones!
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <a href="https://github.com/your-username/react-email-templates" target="_blank" rel="noopener noreferrer">
                            Contribute on GitHub
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
} 