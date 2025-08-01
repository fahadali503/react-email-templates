import { Template, TemplateCategory } from './types'

// Template base data - code will be loaded on-demand from server
export const templateData: Omit<Template, 'code'>[] = [
  // Newsletter Templates
  {
    id: 'newsletter-basic',
    title: 'Basic Newsletter',
    description: 'A clean and simple newsletter template with header, content sections, and footer',
    category: 'newsletter',
    isPro: false,
    author: 'React Email Team',
    tags: ['newsletter', 'clean', 'simple'],
    filePath: 'newsletter/basic.tsx',
  },
  {
    id: 'newsletter-advanced',
    title: 'Advanced Newsletter',
    description: 'A feature-rich newsletter template with images, buttons, and multiple content blocks',
    category: 'newsletter',
    isPro: false,
    author: 'React Email Team',
    tags: ['newsletter', 'advanced', 'images', 'buttons'],
    filePath: 'newsletter/advanced.tsx',
  },
  {
    id: 'newsletter-codepen-challengers',
    title: 'Codepen Challengers',
    description: 'A newsletter template for Codepen Challengers',
    category: 'newsletter',
    isPro: false,
    author: 'React Email Team',
    tags: ['newsletter', 'codepen', 'challengers'],
    filePath: 'newsletter/codepen-challengers.tsx',
  },
  {
    id: 'newsletter-google-play-policy-update',
    title: 'Google Play Policy Update',
    description: 'A professional policy update email template for Google Play developers',
    category: 'newsletter',
    isPro: false,
    author: 'React Email Team',
    tags: ['newsletter', 'policy', 'update', 'google-play'],
    filePath: 'newsletter/google-play-policy-update.tsx',
  },

  // Transactional Templates
  {
    id: 'transactional-welcome',
    title: 'Welcome Email',
    description: 'A warm welcome email for new users with next steps and resources',
    category: 'transactional',
    isPro: false,
    author: 'React Email Team',
    tags: ['welcome', 'onboarding', 'new-user'],
    filePath: 'transactional/welcome.tsx',
  },
  {
    id: 'transactional-password-reset',
    title: 'Password Reset',
    description: 'Secure password reset email with time-sensitive link',
    category: 'transactional',
    isPro: false,
    author: 'React Email Team',
    tags: ['password', 'reset', 'security'],
    filePath: 'transactional/password-reset.tsx',
  },

  // Marketing Templates
  {
    id: 'marketing-product-announcement',
    title: 'Product Announcement',
    description: 'Announce new products or features with compelling visuals and CTAs',
    category: 'marketing',
    isPro: false,
    author: 'React Email Team',
    tags: ['announcement', 'product', 'launch', 'marketing'],
    filePath: 'marketing/product-announcement.tsx',
  },

  // Announcement Templates
  {
    id: 'announcement-system-maintenance',
    title: 'System Maintenance',
    description: 'Notify users about scheduled maintenance with clear timing and expectations',
    category: 'announcement',
    isPro: false,
    author: 'React Email Team',
    tags: ['maintenance', 'system', 'notification'],
    filePath: 'announcement/system-maintenance.tsx',
  },
];

// Templates without code (client-side safe)
export const templates: Template[] = templateData.map(template => ({
  ...template,
  code: '' // Code will be loaded on-demand via API
}));

export const categories: TemplateCategory[] = [
  {
    id: 'newsletter',
    name: 'Newsletter',
    description: 'Engage your subscribers with beautiful newsletter templates',
    icon: '📧',
    templates: templates.filter(t => t.category === 'newsletter')
  },
  {
    id: 'transactional',
    name: 'Transactional',
    description: 'Essential emails for user interactions and notifications',
    icon: '⚙️',
    templates: templates.filter(t => t.category === 'transactional')
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Promotional emails to drive engagement and sales',
    icon: '🎯',
    templates: templates.filter(t => t.category === 'marketing')
  },
  {
    id: 'announcement',
    name: 'Announcement',
    description: 'Keep users informed about important updates and changes',
    icon: '📢',
    templates: templates.filter(t => t.category === 'announcement')
  },
  {
    id: 'welcome',
    name: 'Welcome Series',
    description: 'Onboard new users with welcoming email sequences',
    icon: '👋',
    templates: []
  }
]

export function getTemplatesByCategory(categoryId: string): Template[] {
  return templates.filter(template => template.category === categoryId)
}

export function getTemplateById(templateId: string): Template | undefined {
  return templates.find(template => template.id === templateId)
}

export function getCategoryById(categoryId: string): TemplateCategory | undefined {
  return categories.find(category => category.id === categoryId)
}