export interface Template {
    id: string
    title: string
    description: string
    category: string
    isPro: boolean
    author?: string
    tags: string[]
    filePath: string  // Path to the template component file
    code: string      // Keep for copy functionality
    previewUrl?: string
    thumbnail?: string
}

export interface TemplateCategory {
    id: string
    name: string
    description: string
    icon: string
    templates: Template[]
}

export interface User {
    isProUser: boolean
}