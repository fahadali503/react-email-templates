"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Copy, ExternalLink, Eye, Code } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { EmailPreview } from "@/components/email-preview";

interface TemplatePageClientProps {
    template: any;
    category: any;
}

export default function TemplatePageClient({ template, category }: TemplatePageClientProps) {
    const [copiedCode, setCopiedCode] = useState(false);
    const [activeView, setActiveView] = useState<"preview" | "code">("preview");
    const [templateCode, setTemplateCode] = useState<string>('');
    const [codeLoading, setCodeLoading] = useState(false);

    // Fetch template code when needed
    const fetchTemplateCode = async () => {
        if (!template || templateCode || codeLoading) return;

        setCodeLoading(true);
        try {
            const response = await fetch(`/api/template-code?templateId=${template.id}`);
            const data = await response.json();

            if (response.ok) {
                setTemplateCode(data.code);
            } else {
                console.error('Failed to fetch template code:', data.error);
            }
        } catch (error) {
            console.error('Error fetching template code:', error);
        } finally {
            setCodeLoading(false);
        }
    };

    const handleCopyCode = async () => {
        if (!template) return;

        // Fetch code if not already loaded
        if (!templateCode) {
            await fetchTemplateCode();
            return;
        }

        try {
            await copyToClipboard(templateCode);
            setCopiedCode(true);
            setTimeout(() => setCopiedCode(false), 2000);
        } catch (error) {
            console.error("Failed to copy code:", error);
        }
    };

    // Fetch code when code view is activated
    useEffect(() => {
        if (activeView === 'code' && !templateCode && !codeLoading) {
            fetchTemplateCode();
        }
    }, [activeView, templateCode, codeLoading]);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-white sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href={category ? `/category/${category.id}` : "/"}>
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back
                                </Button>
                            </Link>
                            <div>
                                {category && (
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                                        <span>{category.icon}</span>
                                        <span>{category.name}</span>
                                    </div>
                                )}
                                <h1 className="text-2xl font-bold">{template.title}</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant={activeView === "preview" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveView("preview")}
                            >
                                <Eye className="h-4 w-4 mr-2" />
                                Preview
                            </Button>
                            <Button
                                variant={activeView === "code" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setActiveView("code")}
                            >
                                <Code className="h-4 w-4 mr-2" />
                                Code
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Template Info */}
            <section className="border-b bg-muted/30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <p className="text-muted-foreground mb-4 max-w-2xl">
                                {template.description}
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    {template.author && (
                                        <Badge variant="outline">
                                            by {template.author}
                                        </Badge>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {template.tags.map((tag: string) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                onClick={handleCopyCode}
                                size="lg"
                            >
                                <Copy className="h-4 w-4 mr-2" />
                                {copiedCode ? "Copied!" : "Copy JSX"}
                            </Button>
                            {template.previewUrl && (
                                <Button variant="outline" size="lg" asChild>
                                    <a href={template.previewUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    {activeView === "preview" ? (
                        <div className="space-y-6">
                            {/* Email Preview */}
                            <EmailPreview templateId={template.id} />

                            {/* Usage Instructions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>How to Use This Template</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">1. Install React Email</h4>
                                        <code className="text-sm bg-background p-2 rounded block">
                                            npm install @react-email/components
                                        </code>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">2. Copy the template code</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Click the "Copy JSX" button above to copy the complete template code.
                                        </p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">3. Customize and use</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Paste the code into your project and customize it to match your brand and content.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ) : (
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle>Template Code</CardTitle>
                                        <CardDescription>
                                            Complete React Email component ready to use
                                        </CardDescription>
                                    </div>
                                    <Button onClick={handleCopyCode}>
                                        <Copy className="h-4 w-4 mr-2" />
                                        {copiedCode ? "Copied!" : "Copy"}
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    {codeLoading ? (
                                        <div className="bg-gray-950 text-gray-100 p-6 rounded-lg text-center">
                                            <div className="inline-flex items-center gap-2">
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                Loading template code...
                                            </div>
                                        </div>
                                    ) : templateCode ? (
                                        <pre className="bg-gray-950 text-gray-100 p-6 rounded-lg overflow-auto text-sm">
                                            <code>{templateCode}</code>
                                        </pre>
                                    ) : (
                                        <div className="bg-gray-950 text-gray-100 p-6 rounded-lg text-center">
                                            <Button variant="secondary" onClick={fetchTemplateCode}>
                                                Load Template Code
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </section>

            {/* Related Templates */}
            {category && category.templates.length > 1 && (
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl font-bold mb-8">More {category.name} Templates</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {category.templates
                                .filter((t: any) => t.id !== template.id)
                                .slice(0, 3)
                                .map((relatedTemplate: any) => (
                                    <Link key={relatedTemplate.id} href={`/template/${relatedTemplate.id}`}>
                                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                                            <CardHeader>
                                                <CardTitle className="text-lg flex items-center gap-2">
                                                    {relatedTemplate.title}
                                                </CardTitle>
                                                <CardDescription>{relatedTemplate.description}</CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Open Source Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Help Improve This Template</h3>
                    <p className="text-lg mb-8 opacity-90">
                        This template is open source. Contribute improvements or report issues on GitHub!
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