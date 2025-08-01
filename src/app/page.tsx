"use client";

import { categories } from "@/lib/templates";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Mail, Search, Star, Users, Zap, Shield, Github, Heart } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="border-b" role="banner">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Mail className="h-8 w-8 text-primary" aria-hidden="true" />
                            <h1 className="text-2xl font-bold">React Email Templates</h1>
                        </div>
                        <nav className="flex items-center space-x-4" role="navigation">
                            <Button variant="outline" size="sm">
                                <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                                Search
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                                <a href="https://github.com/your-username/react-email-templates" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                                    GitHub
                                </a>
                            </Button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 text-center" role="banner">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Beautiful Email Templates
                        <br />
                        <span className="text-primary">Built with React</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Copy and paste production-ready email templates powered by React Email.
                        Browse by category, preview live, and get the complete JSX code.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button size="lg" asChild>
                            <Link href="/category/newsletter">
                                Browse Templates
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="https://react.email/docs" target="_blank" rel="noopener noreferrer">
                                View Documentation
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-muted/30" aria-labelledby="features-heading">
                <div className="container mx-auto px-4">
                    <h3 id="features-heading" className="text-2xl font-bold text-center mb-12">Why Choose Our Templates?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <article className="text-center">
                            <Zap className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                            <h4 className="text-lg font-semibold mb-2">Ready to Use</h4>
                            <p className="text-muted-foreground">
                                Copy and paste complete JSX components into your React Email setup
                            </p>
                        </article>
                        <article className="text-center">
                            <Users className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                            <h4 className="text-lg font-semibold mb-2">Battle Tested</h4>
                            <p className="text-muted-foreground">
                                All templates tested across major email clients including Gmail, Outlook, and Apple Mail
                            </p>
                        </article>
                        <article className="text-center">
                            <Shield className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                            <h4 className="text-lg font-semibold mb-2">Best Practices</h4>
                            <p className="text-muted-foreground">
                                Built following React Email best practices for maximum compatibility
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20" aria-labelledby="categories-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 id="categories-heading" className="text-3xl font-bold mb-4">Template Categories</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Choose from our carefully curated collection of email templates organized by use case
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <Link href={`/category/${category.id}`} key={category.id}>
                                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                                                <CardTitle className="text-xl">{category.name}</CardTitle>
                                            </div>
                                            <Badge variant="secondary">
                                                {category.templates.length} templates
                                            </Badge>
                                        </div>
                                        <CardDescription>{category.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Badge variant="success" className="text-xs">
                                                    {category.templates.length} Free
                                                </Badge>
                                            </div>
                                            <Button variant="ghost" size="sm">
                                                View Templates →
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Source Section */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white" aria-labelledby="opensource-heading">
                <div className="container mx-auto px-4 text-center">
                    <h3 id="opensource-heading" className="text-3xl font-bold mb-4">Open Source & Free</h3>
                    <p className="text-xl mb-8 opacity-90">
                        All templates are completely free and open source. Contribute to the community!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button size="lg" variant="secondary" asChild>
                            <a href="https://github.com/your-username/react-email-templates" target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                                View on GitHub
                            </a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/category/newsletter">
                                Start Using Templates
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-12" role="contentinfo">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                                <span className="font-bold">React Email Templates</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Beautiful email templates built with React Email for modern developers.
                            </p>
                        </div>
                        <nav aria-labelledby="templates-heading">
                            <h4 id="templates-heading" className="font-semibold mb-4">Templates</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/category/newsletter">Newsletter</Link></li>
                                <li><Link href="/category/transactional">Transactional</Link></li>
                                <li><Link href="/category/marketing">Marketing</Link></li>
                                <li><Link href="/category/announcement">Announcements</Link></li>
                            </ul>
                        </nav>
                        <nav aria-labelledby="community-heading">
                            <h4 id="community-heading" className="font-semibold mb-4">Community</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="https://github.com/your-username/react-email-templates" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="https://github.com/your-username/react-email-templates/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing</a></li>
                                <li><a href="https://github.com/your-username/react-email-templates/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">License</a></li>
                                <li><a href="https://github.com/your-username/react-email-templates/blob/main/README.md" target="_blank" rel="noopener noreferrer">About</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p className="flex items-center justify-center gap-2">
                            Built with <Heart className="h-4 w-4 text-red-500" aria-hidden="true" /> by the React Email Templates team
                        </p>
                        <p>&copy; 2024 React Email Templates. Built with React Email and Next.js.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}