import { ComponentType } from 'react';
import fs from 'fs';
import path from 'path';

// Auto-discovered template info
interface TemplateInfo {
    id: string;
    category: string;
    component: ComponentType<any>;
}

// Cache for loaded templates
let templateCache: Map<string, ComponentType<any>> | null = null;
let templateList: string[] | null = null;

// Get all template files from the filesystem
function discoverTemplateFiles(): string[] {
    if (templateList) return templateList;

    const templatesDir = path.join(process.cwd(), 'src', 'templates');
    const templateFiles: string[] = [];

    function scanDirectory(dir: string, category: string = '') {
        try {
            const items = fs.readdirSync(dir);

            for (const item of items) {
                const itemPath = path.join(dir, item);
                const stat = fs.statSync(itemPath);

                if (stat.isDirectory()) {
                    // Scan subdirectory (category folder)
                    scanDirectory(itemPath, item);
                } else if (item.endsWith('.tsx') && item !== 'index.ts') {
                    // Found a template file
                    const templateId = generateTemplateId(category, item);
                    templateFiles.push(templateId);
                }
            }
        } catch (error) {
            console.warn(`Failed to scan directory ${dir}:`, error);
        }
    }

    scanDirectory(templatesDir);
    templateList = templateFiles;
    return templateFiles;
}

// Generate template ID from category and filename
function generateTemplateId(category: string, filename: string): string {
    const basename = path.basename(filename, '.tsx');
    return category ? `${category}-${basename}` : basename;
}

// Dynamically import a template component using a more static approach
async function loadTemplateComponent(templateId: string): Promise<ComponentType<any>> {
    if (templateCache?.has(templateId)) {
        return templateCache.get(templateId)!;
    }

    try {
        // Use a switch statement for static imports that Next.js can analyze
        let module: any;
        
        switch (templateId) {
            case 'newsletter-basic':
                module = await import('@/templates/newsletter/basic');
                break;
            case 'newsletter-advanced':
                module = await import('@/templates/newsletter/advanced');
                break;
            case 'newsletter-codepen-challengers':
                module = await import('@/templates/newsletter/codepen-challengers');
                break;
            case 'newsletter-google-play-policy-update':
                module = await import('@/templates/newsletter/google-play-policy-update');
                break;
            case 'transactional-welcome':
                module = await import('@/templates/transactional/welcome');
                break;
            case 'transactional-password-reset':
                module = await import('@/templates/transactional/password-reset');
                break;
            case 'marketing-product-announcement':
                module = await import('@/templates/marketing/product-announcement');
                break;
            case 'announcement-system-maintenance':
                module = await import('@/templates/announcement/system-maintenance');
                break;
            default:
                throw new Error(`Template ${templateId} not found`);
        }

        // Try different export patterns
        const component = module.default || module[Object.keys(module)[0]];

        if (!component) {
            throw new Error(`No component found in template ${templateId}`);
        }

        // Initialize cache if needed
        if (!templateCache) {
            templateCache = new Map();
        }

        templateCache.set(templateId, component);
        return component;
    } catch (error) {
        console.error(`Failed to load template ${templateId}:`, error);
        throw error;
    }
}

// Get template component by ID (async)
export async function getTemplateComponent(templateId: string): Promise<ComponentType<any>> {
    return loadTemplateComponent(templateId);
}

// Check if template exists
export function templateExists(templateId: string): boolean {
    const availableTemplates = discoverTemplateFiles();
    return availableTemplates.includes(templateId);
}

// Get all available template IDs
export function getAvailableTemplateIds(): string[] {
    return discoverTemplateFiles();
}

// Get template info (category, etc.) from ID
export function getTemplateInfo(templateId: string): { category: string; filename: string } {
    const parts = templateId.split('-');
    if (parts.length < 2) {
        throw new Error(`Invalid template ID: ${templateId}`);
    }

    return {
        category: parts[0],
        filename: parts.slice(1).join('-')
    };
}

// Preload all templates (optional optimization)
export async function preloadAllTemplates(): Promise<void> {
    const templateIds = getAvailableTemplateIds();
    await Promise.all(templateIds.map(id => loadTemplateComponent(id)));
}

// Clear template cache (useful for development)
export function clearTemplateCache(): void {
    templateCache = null;
    templateList = null;
}