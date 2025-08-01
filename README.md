# React Email Templates

A comprehensive library of React Email templates for developers. Browse by category, preview live, and copy complete, ready-to-use JSX email components into your own codebases.

![React Email Templates](https://via.placeholder.com/800x400/667eea/ffffff?text=React+Email+Templates)

## Features

✨ **Ready to Use** - Copy and paste complete JSX components into your React Email setup  
🧪 **Battle Tested** - All templates tested across major email clients including Gmail, Outlook, and Apple Mail  
🛡️ **Best Practices** - Built following React Email best practices for maximum compatibility  
🎯 **Categorized** - Templates organized by use case (Newsletter, Transactional, Marketing, etc.)  
🔍 **Searchable** - Find templates quickly with search and filtering  
🎨 **Open Source** - All templates are completely free and open source  
📱 **Responsive** - Mobile-first design with responsive layouts  

## Categories

- **📧 Newsletter** - Engage your subscribers with beautiful newsletter templates
- **⚙️ Transactional** - Essential emails for user interactions and notifications  
- **🎯 Marketing** - Promotional emails to drive engagement and sales
- **📢 Announcement** - Keep users informed about important updates and changes
- **👋 Welcome Series** - Onboard new users with welcoming email sequences

## Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Next.js 14+
- React Email

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/react-email-templates.git
cd react-email-templates
```

2. Install dependencies with bun:
```bash
bun install
```

3. Start the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Using Templates

### Basic Usage

1. **Browse Templates**: Visit the homepage and explore templates by category
2. **Preview Templates**: Click on any template to see a detailed preview
3. **Copy Code**: Use the "Copy JSX" button to copy the complete template code
4. **Customize**: Paste into your React Email setup and customize as needed

### Example: Using a Newsletter Template

```tsx
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

interface NewsletterEmailProps {
  userFirstname?: string;
}

export const NewsletterEmail = ({
  userFirstname = "there",
}: NewsletterEmailProps) => (
  <Html>
    <Head />
    <Preview>Our latest newsletter is here!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Heading style={h1}>📧 Newsletter</Heading>
          <Text style={text}>Hi {userFirstname},</Text>
          <Text style={text}>
            Welcome to our latest newsletter! We have some exciting updates to share with you.
          </Text>
          <Text style={text}>
            Thanks for reading!
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles would be defined here...
```

## Adding New Templates

### Template Structure

Templates are now file-based for better maintainability and type safety. Each template consists of:

1. **Component file** in `src/templates/[category]/[template].tsx`
2. **Metadata entry** in `src/lib/templates.ts`
3. **Auto-discovery** - Templates are automatically discovered and registered

```typescript
interface Template {
  id: string              // Unique identifier
  title: string          // Display name
  description: string    // Brief description
  category: string       // Category ID
  isPro: boolean        // Always false for open source
  author?: string       // Template author
  tags: string[]        // Searchable tags
  filePath: string      // Path to component file
  code: string          // Auto-loaded from file
  previewUrl?: string   // Optional live demo URL
  thumbnail?: string    // Optional thumbnail image
}
```

### Adding a New Template

1. **Create the component file** in the appropriate category folder:

```tsx
// src/templates/newsletter/my-new-template.tsx
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

interface MyNewTemplateProps {
  userName?: string;
}

export const MyNewTemplate = ({
  userName = "there",
}: MyNewTemplateProps) => (
  <Html>
    <Head />
    <Preview>My amazing new template</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Heading style={h1}>Hello {userName}!</Heading>
          <Text style={text}>
            This is my new template content.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Your styles here...
const main = { backgroundColor: "#ffffff" };
// ... other styles

export default MyNewTemplate;
```

2. **Add metadata** in `src/lib/templates.ts`:

```typescript
{
  id: 'my-new-template',
  title: 'My New Template',
  description: 'A description of what this template does',
  category: 'newsletter',
  isPro: false,
  author: 'Your Name',
  tags: ['newsletter', 'modern', 'clean'],
  filePath: 'newsletter/my-new-template.tsx',
},
```

3. **Auto-discovery** - The template will be automatically discovered and available!

The system automatically scans the `src/templates/` directory and registers all `.tsx` files as templates. The template ID is generated from the file path: `[category]-[filename]` (e.g., `newsletter-my-new-template`).

No manual registration is required - just add your template file and it will be available immediately!

2. **Update categories** if needed in the same file:

```typescript
export const categories: TemplateCategory[] = [
  {
    id: 'newsletter',
    name: 'Newsletter',
    description: 'Engage your subscribers with beautiful newsletter templates',
    icon: '📧',
    templates: templates.filter(t => t.category === 'newsletter')
  },
  // ... other categories
]
```

### Template Guidelines

- **Follow React Email best practices**
- **Test across email clients** (Gmail, Outlook, Apple Mail)
- **Use semantic HTML** and proper accessibility features
- **Include TypeScript interfaces** for props
- **Provide clear, descriptive names** and descriptions
- **Use appropriate tags** for searchability
- **Include proper styling** with email-safe CSS

## Project Structure

```
src/
├── app/                          # Next.js app router
│   ├── api/
│   │   └── preview/             # Email rendering API
│   ├── category/[categoryId]/    # Category pages
│   ├── template/[templateId]/    # Individual template pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # ShadCN UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── email-preview.tsx        # Email preview component
├── lib/
│   ├── templates.ts             # Template metadata and categories
│   ├── template-auto-registry.ts # Auto-discovery system
│   ├── types.ts                 # TypeScript interfaces
│   └── utils.ts                 # Utility functions
└── templates/                   # File-based template components
    ├── newsletter/
    │   ├── basic.tsx
    │   └── advanced.tsx
    ├── transactional/
    │   ├── welcome.tsx
    │   └── password-reset.tsx
    ├── marketing/
    │   └── product-announcement.tsx
    ├── announcement/
    │   └── system-maintenance.tsx
    └── index.ts                 # Template exports
```

## Development

### Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI
- **Package Manager**: Bun
- **Email**: React Email Components
- **Icons**: Lucide React

### Scripts

```bash
# Development
bun dev

# Build
bun build

# Start production
bun start

# Lint
bun lint
```

### Environment Setup

1. **Install bun** (if not already installed):
```bash
curl -fsSL https://bun.sh/install | bash
```

2. **Clone and setup**:
```bash
git clone <repo-url>
cd react-email-templates
bun install
bun dev
```

## Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **Add new templates** - Submit high-quality email templates
2. **Improve existing templates** - Fix bugs or enhance existing templates
3. **Enhance features** - Add new functionality to the platform
4. **Fix bugs** - Help us identify and fix issues
5. **Improve documentation** - Help make our docs clearer

### Contribution Process

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-template`
3. **Add your template** following our guidelines
4. **Test thoroughly** across different email clients
5. **Submit a pull request** with a clear description

### Template Submission Checklist

- [ ] Template follows React Email best practices
- [ ] Code is properly formatted and includes TypeScript types
- [ ] Template is tested in major email clients
- [ ] Includes appropriate tags and metadata
- [ ] Description is clear and helpful
- [ ] Author information is included

## Roadmap

### Phase 1 (Current)
- [x] Basic template library
- [x] Category organization
- [x] Search and filtering
- [x] Copy to clipboard functionality
- [x] Open source template collection

### Phase 2 (Next)
- [ ] Live email preview rendering
- [ ] Template thumbnails
- [ ] User accounts and favorites
- [ ] Template rating system
- [ ] Advanced search filters

### Phase 3 (Future)
- [ ] Template builder/editor
- [ ] Email testing tools
- [ ] Team collaboration features
- [ ] API for programmatic access
- [ ] Integration with email services

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [View docs](https://your-domain.com/docs)
- **Issues**: [GitHub Issues](https://github.com/your-username/react-email-templates/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/react-email-templates/discussions)
- **Email**: support@your-domain.com

## Acknowledgments

- **React Email Team** - For creating the amazing React Email framework
- **ShadCN** - For the beautiful UI components
- **Community Contributors** - For submitting templates and improvements

---

Built with ❤️ by the React Email Templates team