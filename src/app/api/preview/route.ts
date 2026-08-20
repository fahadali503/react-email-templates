import { NextRequest, NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { getTemplateById } from '@/lib/templates';
import { getTemplateComponent, templateExists } from '@/lib/template-auto-registry';
import React from 'react';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const templateId = searchParams.get('templateId');
    const mode = searchParams.get('mode') || 'html'; // html or plainText

    if (!templateId) {
        return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    const template = getTemplateById(templateId);
    if (!template) {
        return NextResponse.json({ error: 'Template not found in database' }, { status: 404 });
    }

    if (!templateExists(templateId)) {
        return NextResponse.json({ error: 'Template component not found' }, { status: 404 });
    }

    try {
        // Get the auto-discovered React component
        const TemplateComponent = await getTemplateComponent(templateId);

        // Sample data for the preview
        const sampleData = getSampleDataForTemplate(templateId);

        // Create the React element with sample data
        const componentElement = React.createElement(TemplateComponent, sampleData);

        // Render the email
        const html = await render(componentElement);

        if (mode === 'plainText') {
            // For plain text mode, strip HTML tags
            return new NextResponse(html.replace(/<[^>]*>/g, ''), {
                headers: { 'Content-Type': 'text/plain' },
            });
        }

        // Return HTML with proper content type
        return new NextResponse(html, {
            headers: {
                'Content-Type': 'text/html',
                'X-Frame-Options': 'SAMEORIGIN' // Allow iframe embedding from same origin
            },
        });
    } catch (error) {
        console.error('Error rendering template:', error);
        return NextResponse.json({
            error: 'Failed to render template',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}

function getSampleDataForTemplate(templateId: string) {
    // Return different sample data based on template type
    const baseSampleData = {
        userFirstname: 'John',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        companyName: 'Acme Inc',
        productName: 'Amazing Product',
        resetPasswordLink: '#',
        verificationLink: '#',
        unsubscribeLink: '#',
        supportEmail: 'support@example.com',
        maintenanceDate: 'Sunday, January 15, 2024 at 2:00 AM EST',
        maintenanceDuration: '2 hours',
    };

    // Template-specific sample data
    switch (templateId) {
        case 'newsletter-basic':
        case 'newsletter-advanced':
            return {
                ...baseSampleData,
                newsletterTitle: 'Weekly Newsletter',
                featuredArticle: 'How to Build Better Email Templates',
            };
        case 'welcome-email':
            return {
                ...baseSampleData,
                welcomeMessage: 'Welcome to our amazing platform!',
            };
        case 'password-reset':
            return {
                ...baseSampleData,
                resetPasswordLink: 'https://example.com/reset-password?token=abc123',
            };
        case 'product-announcement':
            return {
                ...baseSampleData,
                productName: 'Revolutionary New Feature',
                launchDate: 'March 15, 2024',
            };
        default:
            return baseSampleData;
    }
}