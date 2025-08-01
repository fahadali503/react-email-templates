"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Smartphone, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmailPreviewProps {
    templateId: string;
    className?: string;
}

type ViewMode = 'desktop' | 'mobile';

export function EmailPreview({ templateId, className }: EmailPreviewProps) {
    const [viewMode, setViewMode] = useState<ViewMode>('desktop');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');

    useEffect(() => {
        // Generate the preview URL
        const url = `/api/preview?templateId=${encodeURIComponent(templateId)}`;
        setPreviewUrl(url);
        setIsLoading(false);
    }, [templateId]);

    const handleIframeLoad = () => {
        setIsLoading(false);
        setError(null);
    };

    const handleIframeError = () => {
        setIsLoading(false);
        setError('Failed to load email preview');
    };

    return (
        <Card className={cn("", className)}>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Email Preview</CardTitle>
                        <CardDescription>
                            See how your email will look across different devices
                        </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant={viewMode === 'desktop' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('desktop')}
                        >
                            <Monitor className="h-4 w-4 mr-2" />
                            Desktop
                        </Button>
                        <Button
                            variant={viewMode === 'mobile' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setViewMode('mobile')}
                        >
                            <Smartphone className="h-4 w-4 mr-2" />
                            Mobile
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div
                        className={cn(
                            "mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300",
                            viewMode === 'desktop' ? "max-w-4xl" : "max-w-sm"
                        )}
                    >
                        {/* Mock email client header */}
                        <div className="bg-gray-200 p-4 border-b">
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>From: your-app@example.com</span>
                                <span>To: user@example.com</span>
                            </div>
                            <div className="mt-2 font-semibold text-gray-800">
                                Email Template Preview
                            </div>
                        </div>

                        {/* Email content area */}
                        <div className="relative">
                            {isLoading && (
                                <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
                                    <div className="text-center">
                                        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                                        <p className="text-sm text-gray-600">Loading preview...</p>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
                                    <div className="text-center text-red-600">
                                        <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                                        <p className="text-sm">{error}</p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-2"
                                            onClick={() => {
                                                setError(null);
                                                setIsLoading(true);
                                                // Trigger iframe reload by updating the src
                                                const iframe = document.getElementById(`preview-iframe-${templateId}`) as HTMLIFrameElement;
                                                if (iframe) {
                                                    iframe.src = iframe.src;
                                                }
                                            }}
                                        >
                                            Try Again
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {previewUrl && (
                                <iframe
                                    id={`preview-iframe-${templateId}`}
                                    src={previewUrl}
                                    className={cn(
                                        "w-full border-0 transition-all duration-300",
                                        viewMode === 'desktop' ? "h-96" : "h-80"
                                    )}
                                    style={{
                                        minHeight: viewMode === 'desktop' ? '600px' : '500px',
                                        maxHeight: '800px'
                                    }}
                                    onLoad={handleIframeLoad}
                                    onError={handleIframeError}
                                    title="Email Preview"
                                    sandbox="allow-same-origin"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Preview Controls */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                        <span>
                            Viewing in {viewMode} mode
                        </span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                            {viewMode === 'desktop' ? 'Max width: 800px' : 'Max width: 375px'}
                        </span>
                    </div>
                    <div className="text-xs">
                        <a
                            href={previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            Open in new tab
                        </a>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

// Loading skeleton component
export function EmailPreviewSkeleton({ className }: { className?: string }) {
    return (
        <Card className={cn("", className)}>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                        <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
                        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-gray-200 p-4 border-b">
                            <div className="flex items-center justify-between">
                                <div className="h-4 w-48 bg-gray-300 rounded animate-pulse" />
                                <div className="h-4 w-32 bg-gray-300 rounded animate-pulse" />
                            </div>
                            <div className="mt-2 h-5 w-40 bg-gray-300 rounded animate-pulse" />
                        </div>
                        <div className="h-96 bg-gray-50 flex items-center justify-center">
                            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}