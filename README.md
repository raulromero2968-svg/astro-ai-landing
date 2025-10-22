# Apex Commons Landing Page

A premium, production-ready landing page for Apex Commons - an AI-powered automation platform for freelancers and agencies.

## 🎨 Design Features

- **Dark Theme**: Deep black (#0A0A0A) backgrounds with electric cyan (#00B4D8) and vibrant cyan (#00F5FF) accents
- **Premium Aesthetics**: Inspired by Nintendo, Studio Ghibli, and Corsair design principles
- **Smooth Animations**: Scroll-triggered animations with fade-in effects
- **Responsive Design**: Mobile-first approach with perfect responsiveness across all devices
- **High Performance**: Optimized for sub-2-second load times

## 🚀 Tech Stack

- **React 19** - Latest React with modern hooks
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development

## 📁 Project Structure

```
client/
├── public/              # Static assets
│   ├── command_center_refined_v2.png
│   ├── blog_scale_refined.png
│   └── feature_ai_insights.png
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   └── AnimatedSection.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx    # Main landing page
│   │   └── NotFound.tsx
│   ├── App.tsx         # Root component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles & theme
```

## 🎯 Key Sections

### Hero Section
- Compelling headline with gradient text
- Command center dashboard mockup
- Clear CTAs (Start Free Trial, See How It Works)
- Trust indicators (No credit card, 5 automations free)

### Features Section
- **Automate Client Work** - Connect apps and let AI handle busywork
- **Scale Up, Stress Down** - Handle more clients without hiring
- **AI Insights** - Get actionable insights from your data

### Pricing Section
- **Free Tier**: $0/month - 5 automations, basic dashboard, email support
- **Pro Tier**: $50/month - Unlimited automations, AI insights, priority support
- **Agency Tier**: $200/month - White-label, team collaboration, API access

### CTA Section
- Email capture form
- Clear value proposition
- No friction signup

## 🛠️ Development

### Prerequisites
- Node.js 22.x
- pnpm (recommended) or npm

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development Server
The dev server runs on `http://localhost:3000` with hot module replacement (HMR) enabled.

## 🎨 Customization

### Colors
Edit `client/src/index.css` to customize the color palette:

```css
.dark {
  --primary: oklch(0.65 0.19 215);      /* Electric cyan/blue */
  --accent: oklch(0.75 0.20 200);       /* Vibrant cyan */
  --secondary: oklch(0.45 0.15 295);    /* Subtle purple */
  --background: oklch(0.08 0 0);        /* Deep black */
}
```

### Content
Edit `client/src/pages/Home.tsx` to update:
- Headlines and copy
- Feature descriptions
- Pricing tiers
- CTA text

### Images
Replace images in `client/public/` with your own assets. Current images:
- `command_center_refined_v2.png` - Dashboard mockup
- `blog_scale_refined.png` - Growth/scaling visual
- `feature_ai_insights.png` - AI insights visual

## 📊 SEO Optimization

The landing page includes comprehensive SEO meta tags:
- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Keywords for search engines

## 🚢 Deployment

### Option 1: Manus Platform (Recommended)
1. Click the "Publish" button in the Manus UI
2. Configure deployment settings
3. Deploy with one click

### Option 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Netlify
```bash
# Build the project
pnpm build

# Deploy the client/dist folder to Netlify
```

## 📈 Performance Targets

- ✅ Sub-2-second load time
- ✅ Mobile-first responsive design
- ✅ Smooth scroll animations
- ✅ Optimized images
- ✅ Clean, semantic HTML

## 🎯 Conversion Optimization

- Clear value proposition above the fold
- Multiple CTAs throughout the page
- Trust indicators (no credit card, free tier)
- Social proof ready (add testimonials)
- Friction-free email capture

## 📝 Next Steps

1. **Add Analytics**: Analytics are pre-configured via Umami (check index.html)
2. **Connect Email Service**: Wire up the email form to your backend/service
3. **Add Testimonials**: Include social proof in the features section
4. **A/B Testing**: Test different headlines and CTAs
5. **Blog Integration**: Link to your Substack or blog

## 🤝 Brand Guidelines

**Apex Commons Brand Identity:**
- Premium, clean, sophisticated
- High-contrast dark theme
- Wolf branding (geometric, modern)
- Electric cyan/blue primary colors
- Inspired by Nintendo, Studio Ghibli, Corsair

## 📄 License

© 2025 Apex Commons. All rights reserved.

---

Built with ❤️ using React, Tailwind CSS, and shadcn/ui

