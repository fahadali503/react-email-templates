# React Email Templates

A comprehensive library of beautiful, production-ready email templates built with React Email. Browse by category, preview live, and copy complete JSX components into your projects.

![React Email Templates](https://via.placeholder.com/800x400/667eea/ffffff?text=React+Email+Templates)

## ✨ Features

- **🎨 Beautiful Templates** - Carefully crafted email templates for every use case
- **📱 Responsive Design** - Mobile-first templates that work across all devices
- **🔧 Ready to Use** - Copy and paste complete JSX components
- **🧪 Battle Tested** - Templates tested across Gmail, Outlook, Apple Mail, and more
- **🎯 Categorized** - Organized by Newsletter, Transactional, Marketing, and more
- **🔍 Searchable** - Find templates quickly with search and filtering
- **🌐 Open Source** - All templates completely free and open source
- **📖 TypeScript** - Full TypeScript support for better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or [Bun](https://bun.sh/)
- Next.js 14+
- React Email

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/fahadali503/react-email-templates.git
cd react-email-templates
```

2. **Install dependencies:**
```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

3. **Start the development server:**
```bash
# Using Bun
bun dev

# Or using npm
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Template Categories

### Newsletter Templates
Engage your subscribers with beautiful newsletter templates designed for maximum readability and engagement.

- **Basic Newsletter** - Clean and simple newsletter with header, content sections, and footer
- **Advanced Newsletter** - Feature-rich template with images, buttons, and multiple content blocks
- **Codepen Challengers** - Newsletter template for developer communities
- **Google Play Policy Update** - Professional policy update template for app developers

### Transactional Templates
Essential emails for user interactions and notifications.

- **Welcome Email** - Warm welcome email for new users with next steps
- **Password Reset** - Secure password reset email with time-sensitive links

### Marketing Templates
Promotional emails to drive engagement and sales.

- **Product Announcement** - Announce new products with compelling visuals and CTAs

### Announcement Templates
Keep users informed about important updates and changes.

- **System Maintenance** - Notify users about scheduled maintenance with clear timing

## 🛠️ Using Templates

### Basic Usage

1. **Browse Templates** - Visit the homepage and explore templates by category
2. **Preview Templates** - Click on any template to see a detailed preview
3. **Copy Code** - Use the "Copy JSX" button to copy the complete template code
4. **Customize** - Paste into your React Email setup and customize as needed

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

// Styles
const main = { backgroundColor: "#ffffff" };
const container = { margin: "0 auto", padding: "20px 0 48px" };
const section = { padding: "24px" };
const h1 = { fontSize: "24px", fontWeight: "bold", margin: "0 0 20px" };
const text = { fontSize: "16px", lineHeight: "24px", margin: "0 0 16px" };

export default NewsletterEmail;
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js app router
│   ├── api/
│   │   ├── preview/             # Email rendering API
│   │   └── template-code/       # Template code API
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
    │   ├── advanced.tsx
    │   ├── codepen-challengers.tsx
    │   └── google-play-policy-update.tsx
    ├── transactional/
    │   ├── welcome.tsx
    │   └── password-reset.tsx
    ├── marketing/
    │   └── product-announcement.tsx
    ├── announcement/
    │   └── system-maintenance.tsx
    └── index.ts                 # Template exports
```

## 🎯 Adding New Templates

### Template Structure

Templates are file-based for better maintainability and type safety. Each template consists of:

1. **Component file** in `src/templates/[category]/[template].tsx`
2. **Metadata entry** in `src/lib/templates.ts`
3. **Auto-discovery** - Templates are automatically discovered and registered

### Template Interface

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

1. **Create the component file:**

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

// Styles
const main = { backgroundColor: "#ffffff" };
const container = { margin: "0 auto", padding: "20px 0 48px" };
const section = { padding: "24px" };
const h1 = { fontSize: "24px", fontWeight: "bold", margin: "0 0 20px" };
const text = { fontSize: "16px", lineHeight: "24px", margin: "0 0 16px" };

export default MyNewTemplate;
```

2. **Add metadata:**

```typescript
// src/lib/templates.ts
{
  id: 'newsletter-my-new-template',
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

### Template Guidelines

- **Follow React Email best practices**
- **Test across email clients** (Gmail, Outlook, Apple Mail)
- **Use semantic HTML** and proper accessibility features
- **Include TypeScript interfaces** for props
- **Provide clear, descriptive names** and descriptions
- **Use appropriate tags** for searchability
- **Include proper styling** with email-safe CSS

## 🛠️ Development

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

1. **Install Bun** (if not already installed):
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

## 🤝 Contributing

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


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [React Email Docs](https://react.email/docs)
- **Issues**: [GitHub Issues](https://github.com/fahadali503/react-email-templates/issues)
- **Discussions**: [GitHub Discussions](https://github.com/fahadali503/react-email-templates/discussions)
- **Email**: fahada094@gmail.com

## 🙏 Acknowledgments

- **Fahad Ali** - Project creator and maintainer
- **React Email Team** - For creating the amazing React Email framework
- **ShadCN** - For the beautiful UI components
- **Community Contributors** - For submitting templates and improvements

---

Built with ❤️ by Fahad Ali and the React Email Templates team