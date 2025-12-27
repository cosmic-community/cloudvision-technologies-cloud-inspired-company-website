# CloudVision Technologies - Cloud-Inspired Company Website

![CloudVision Technologies](https://imgix.cosmicjs.com/1f55d1e0-e367-11f0-aa94-9b0338c074a4-photo-1517483000871-1dbf64a6e1c6-1766869249147.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, cloud-themed company website built with Next.js 16 and powered by Cosmic CMS. Features a stunning hero section, dynamic cloud-inspired content sections, and a beautiful about page - all fully manageable through Cosmic's intuitive CMS interface.

## ✨ Features

- 🌥️ **Cloud-Inspired Design** - Beautiful gradient backgrounds and cloud imagery throughout
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16 App Router
- 🎨 **Dynamic Content** - All content managed through Cosmic CMS
- 🖼️ **Image Optimization** - Automatic image optimization using imgix
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML structure
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔄 **Auto-Sorted Sections** - Display sections in custom order using display_order field

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6950488b6d538c4d2c710f71&clone_repository=695049916d538c4d2c710f8d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with clouds as a particulare elements to fill in the website, add some sections, and a title starter"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a company website with clouds as a particulare elements to fill in the website, add some sections, and a title starter", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and transformation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd cloudvision-website
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
```bash
# Copy the example env file
cp .env.example .env.local
```

Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

### Fetching Company Info (Singleton)

```typescript
import { cosmic } from '@/lib/cosmic'

const { object: companyInfo } = await cosmic.objects
  .findOne({
    type: 'company-info',
    slug: 'cloudvision-technologies'
  })
  .props(['id', 'title', 'metadata'])
  .depth(0)
```

### Fetching Cloud Sections (Sorted by Display Order)

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: sections } = await cosmic.objects
  .find({
    type: 'cloud-sections'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(0)

// Sort by display_order
const sortedSections = sections.sort((a, b) => {
  const orderA = a.metadata?.display_order || 999
  const orderB = b.metadata?.display_order || 999
  return orderA - orderB
})
```

## 🌐 Cosmic CMS Integration

This application uses two content types in Cosmic:

### Company Info (Singleton)
- **Company Name** - Company name displayed in header and hero
- **Tagline** - Company tagline shown in hero section
- **Hero Image** - Main hero section background image
- **About** - Rich HTML content for the about section

### Cloud Sections
- **Section Title** - Title displayed above section content
- **Content** - Rich HTML content for the section
- **Cloud Image** - Cloud-themed image for visual interest
- **Display Order** - Number to control section ordering (lower numbers first)

All content can be updated through the Cosmic dashboard at https://app.cosmicjs.com

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy with Vercel" button
2. Add your environment variables in the Vercel dashboard
3. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button
2. Add your environment variables in the Netlify dashboard
3. Deploy!

### Environment Variables for Deployment

Make sure to set these environment variables in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->