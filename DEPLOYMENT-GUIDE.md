# Deployment Guide - Astro AI Domains

You have **TWO domains** to deploy:

1. **astro-ai.dev** - Main production site (this project)
2. **astro-ai.space** - Coming soon page for community hub (separate simple page)

---

## 🚀 Quick Start (Both Domains in 15 Minutes)

### Step 1: Deploy astro-ai.dev (Main Site)
1. Push this project to GitHub
2. Deploy to Vercel (instructions below)
3. Connect astro-ai.dev domain
4. ✅ Main site live!

### Step 2: Deploy astro-ai.space (Coming Soon)
1. Push `/home/ubuntu/astro-ai-space` to GitHub
2. Deploy to Vercel (separate project)
3. Connect astro-ai.space domain
4. ✅ Coming soon page live!

---

## Domain Strategy

### **astro-ai.dev** (Primary - Production Site)
- **Purpose:** Main product website
- **Content:** Technical manifesto, features, pricing, waitlist
- **Status:** ✅ Production-ready
- **Project:** `/home/ubuntu/astro-ai-landing`

### **astro-ai.space** (Secondary - Future Hub)
- **Purpose:** Community, documentation, government contracts
- **Content:** Coming soon page (for now)
- **Future:** Full community hub, docs, compliance portal
- **Status:** 🔜 Simple placeholder ready
- **Project:** `/home/ubuntu/astro-ai-space`

---

## Deployment: astro-ai.dev (Main Site)

### Option 1: Vercel (Recommended)

#### 1. Push to GitHub
```bash
cd /home/ubuntu/astro-ai-landing
git init
git add .
git commit -m "Initial commit - Astro AI production ready"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/astro-ai-landing.git
git push -u origin main
```

#### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import `astro-ai-landing` repository
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`

6. Add Environment Variables:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   VITE_APP_TITLE=Astro AI
   VITE_APP_LOGO=/astro-ai-logo.png
   VITE_OAUTH_PORTAL_URL=your_oauth_url
   OAUTH_SERVER_URL=your_oauth_server
   OWNER_OPEN_ID=your_owner_id
   OWNER_NAME=your_name
   VITE_ANALYTICS_ENDPOINT=your_analytics_endpoint
   VITE_ANALYTICS_WEBSITE_ID=your_analytics_id
   VITE_APP_ID=your_app_id
   BUILT_IN_FORGE_API_URL=your_api_url
   BUILT_IN_FORGE_API_KEY=your_api_key
   ```

7. Click "Deploy"

#### 3. Connect Domain
1. In Vercel project → Settings → Domains
2. Add domain: `astro-ai.dev`
3. Add DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait 5-60 minutes for DNS propagation
5. SSL certificate auto-provisioned ✅

---

## Deployment: astro-ai.space (Coming Soon Page)

### Option 1: Vercel (Simplest - Same Platform)

#### 1. Push to GitHub
```bash
cd /home/ubuntu/astro-ai-space
git init
git add .
git commit -m "Astro AI Space - Coming soon page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/astro-ai-space.git
git push -u origin main
```

#### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import `astro-ai-space` repository
4. Configure:
   - **Framework Preset:** Other
   - **Build Command:** (leave empty)
   - **Output Directory:** `./`
   - **Install Command:** (leave empty)
5. Click "Deploy"

#### 3. Connect Domain
1. In Vercel project → Settings → Domains
2. Add domain: `astro-ai.space`
3. Add DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation
5. ✅ Done!

### Option 2: GitHub Pages (Free Alternative)

1. Create repository named `astro-ai-space`
2. Push the `index.html` file
3. Settings → Pages → Enable from `main` branch
4. Add custom domain `astro-ai.space`
5. Create `CNAME` file with content: `astro-ai.space`
6. Add DNS records at registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## DNS Configuration Summary

### At Your Domain Registrar (Where You Bought the Domains)

#### For astro-ai.dev (Vercel):
```
A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

#### For astro-ai.space (Vercel):
```
A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

**Note:** If using different hosting for `.space`, use those DNS values instead.

---

## Post-Deployment Checklist

### astro-ai.dev (Main Site)
- [ ] Site loads at https://astro-ai.dev
- [ ] SSL certificate valid (green padlock)
- [ ] All pages work (Home, Features, Pricing, About, etc.)
- [ ] Mobile navigation works (hamburger menu)
- [ ] Waitlist form submits to database
- [ ] Secret fairy gesture works (5 taps!)
- [ ] Images load correctly
- [ ] Analytics tracking works
- [ ] Social media preview looks good ([metatags.io](https://metatags.io))

### astro-ai.space (Coming Soon)
- [ ] Site loads at https://astro-ai.space
- [ ] SSL certificate valid
- [ ] "Coming Soon" page displays correctly
- [ ] Link to astro-ai.dev works
- [ ] Mobile responsive
- [ ] Logo displays correctly

---

## Alternative Deployment Options

### Netlify (Alternative to Vercel)

**For astro-ai.dev:**
1. Import from GitHub
2. Build command: `pnpm run build`
3. Publish directory: `dist`
4. Add environment variables
5. Connect custom domain

**For astro-ai.space:**
1. Import from GitHub
2. Build command: (empty)
3. Publish directory: `./`
4. Connect custom domain

### Cloudflare Pages

**Benefits:**
- Free
- Excellent performance
- Built-in DDoS protection
- Great analytics

**Setup:**
1. Connect GitHub repository
2. Configure build settings
3. Add custom domain
4. Automatic SSL

---

## Recommended Setup

**Best Practice:**
- Deploy both sites to **Vercel** (easiest, same platform)
- Use **Cloudflare** for DNS (better performance, free)
- Enable **Cloudflare proxy** (orange cloud) for DDoS protection

**Cloudflare DNS Setup:**
1. Add both domains to Cloudflare
2. Update nameservers at registrar
3. Add DNS records from Vercel
4. Enable proxy (orange cloud icon)
5. ✅ Maximum performance + security

---

## Environment Variables (astro-ai.dev Only)

Required for the main site:

```env
# Database
DATABASE_URL=your_database_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
OAUTH_SERVER_URL=your_oauth_server_url
VITE_OAUTH_PORTAL_URL=your_oauth_portal_url
OWNER_OPEN_ID=your_owner_id
OWNER_NAME=your_name

# App Configuration
VITE_APP_TITLE=Astro AI
VITE_APP_LOGO=/astro-ai-logo.png
VITE_APP_ID=your_app_id

# Analytics
VITE_ANALYTICS_ENDPOINT=your_analytics_endpoint
VITE_ANALYTICS_WEBSITE_ID=your_analytics_id

# API Integration
BUILT_IN_FORGE_API_URL=your_api_url
BUILT_IN_FORGE_API_KEY=your_api_key
```

**Note:** astro-ai.space needs NO environment variables (it's just a static HTML page)

---

## Troubleshooting

### DNS Not Propagating
- Check propagation: [whatsmydns.net](https://whatsmydns.net)
- Usually takes 5-60 minutes
- Can take up to 48 hours (rare)
- Clear browser cache

### Build Failing (astro-ai.dev)
- Check Vercel/Netlify logs
- Verify environment variables set
- Ensure `pnpm` selected as package manager
- Test locally: `pnpm run build`

### SSL Certificate Issues
- Wait for automatic provisioning (5-10 minutes)
- Verify DNS records correct
- Check domain ownership verified

### Images Not Loading
- Verify images in `client/public/` directory
- Check paths start with `/`
- Clear CDN cache
- Hard refresh browser (Cmd/Ctrl + Shift + R)

---

## Performance Optimization

### After Launch

1. **Enable Cloudflare** (if not using)
   - Free CDN
   - DDoS protection
   - Image optimization
   - Caching

2. **Monitor Performance**
   - [PageSpeed Insights](https://pagespeed.web.dev)
   - [GTmetrix](https://gtmetrix.com)
   - Vercel Analytics (built-in)

3. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Add to Bing Webmaster Tools
   - Monitor rankings

---

## Future: astro-ai.space Full Build

When ready to build the full community hub, you'll replace the coming soon page with:

### Planned Features
- **Documentation Site** - Full technical docs, API references
- **Community Forum** - Developer discussions, Q&A
- **Compliance Portal** - Security certs, government resources
- **Open Source Hub** - Community projects, showcases
- **Case Studies** - Government contract examples

### Recommended Stack
- Next.js or Docusaurus for documentation
- Discourse or custom forum
- Same design system as astro-ai.dev
- Separate deployment, same Vercel account

---

## Quick Reference

| Domain | Purpose | Status | Deployment |
|--------|---------|--------|------------|
| astro-ai.dev | Main product site | ✅ Ready | Full React app |
| astro-ai.space | Community hub | 🔜 Coming soon | Simple HTML page |

---

## Support Resources

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **DNS Help:** [whatsmydns.net](https://whatsmydns.net)
- **SSL Check:** [ssllabs.com](https://www.ssllabs.com/ssltest/)
- **SEO Test:** [metatags.io](https://metatags.io)

---

**Both sites are ready to deploy!** 🚀

1. Deploy astro-ai.dev (main site) first
2. Deploy astro-ai.space (coming soon) second
3. Both live within 30 minutes!

