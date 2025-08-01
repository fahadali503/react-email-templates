import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WebsiteStructuredData, OrganizationStructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "React Email Templates - Free Email Templates for Developers",
        template: "%s | React Email Templates"
    },
    description: "Comprehensive library of free, production-ready React Email templates for developers. Copy and paste beautiful email templates built with React Email framework.",
    keywords: [
        "react email templates",
        "email templates",
        "react email",
        "email development",
        "html email templates",
        "responsive email templates",
        "newsletter templates",
        "transactional email templates",
        "marketing email templates",
        "email design",
        "react email components",
        "free email templates"
    ],
    authors: [{ name: "React Email Templates Team" }],
    creator: "React Email Templates",
    publisher: "React Email Templates",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://react-email-templates.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://react-email-templates.com',
        title: 'React Email Templates - Free Email Templates for Developers',
        description: 'Comprehensive library of free, production-ready React Email templates for developers. Copy and paste beautiful email templates built with React Email framework.',
        siteName: 'React Email Templates',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'React Email Templates - Free Email Templates for Developers',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'React Email Templates - Free Email Templates for Developers',
        description: 'Comprehensive library of free, production-ready React Email templates for developers.',
        images: ['/images/twitter-image.png'],
        creator: '@reactemail',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffffff" />

                {/* Structured Data */}
                <WebsiteStructuredData />
                <OrganizationStructuredData />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}