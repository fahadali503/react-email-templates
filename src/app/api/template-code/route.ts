import { NextRequest, NextResponse } from 'next/server';
import { templateData } from '@/lib/templates';
import { getTemplateComponent, templateExists } from '@/lib/template-auto-registry';
import React from 'react';
import { render } from '@react-email/render';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const templateId = searchParams.get('templateId');

    if (!templateId) {
        return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    const template = templateData.find(t => t.id === templateId);
    if (!template) {
        return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    if (!templateExists(templateId)) {
        return NextResponse.json({ error: 'Template component not found' }, { status: 404 });
    }

    try {
        // Get the template component
        const TemplateComponent = await getTemplateComponent(templateId);
        
        // Sample data for the template
        const sampleData = getSampleDataForTemplate(templateId);
        
        // Create the React element
        const componentElement = React.createElement(TemplateComponent, sampleData);
        
        // Render to get the JSX code (we'll extract the component source)
        await render(componentElement);
        
        // For now, we'll return a placeholder since we can't easily extract the source
        // In a real implementation, you might want to read the actual file
        const code = `// Template: ${template.title}
// This is a React Email template component
// The actual source code is available in the file: ${template.filePath}

import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

// Template component code would be here
// For the full source code, check the file: ${template.filePath}

export default function ${templateId.replace(/-/g, '')}Template() {
  return (
    <Html>
      <Head />
      <Preview>Email Preview</Preview>
      <Body>
        <Container>
          <Section>
            <Heading>${template.title}</Heading>
            <Text>This is a placeholder for the actual template code.</Text>
            <Text>Check the source file for the complete implementation.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;

        return NextResponse.json({
            templateId,
            code,
            filePath: template.filePath
        });
    } catch (error) {
        console.error('Error getting template code:', error);
        return NextResponse.json({
            error: 'Failed to get template code',
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
        case 'newsletter-codepen-challengers':
            return {
                ...baseSampleData,
                newsletterTitle: 'Weekly Newsletter',
                featuredArticle: 'How to Build Better Email Templates',
            };
        case 'transactional-welcome':
            return {
                ...baseSampleData,
                welcomeMessage: 'Welcome to our amazing platform!',
            };
        case 'transactional-password-reset':
            return {
                ...baseSampleData,
                resetPasswordLink: 'https://example.com/reset-password?token=abc123',
            };
        case 'marketing-product-announcement':
            return {
                ...baseSampleData,
                productName: 'Revolutionary New Feature',
                launchDate: 'March 15, 2024',
            };
        default:
            return baseSampleData;
    }
}