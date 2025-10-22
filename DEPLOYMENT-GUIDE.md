# Deployment Guide for astro-ai.dev

## Domain Setup

**Domain:** astro-ai.dev  
**Registrar:** (Where you purchased it - e.g., Google Domains, Namecheap, Cloudflare)

---

## Recommended Deployment: Vercel (Easiest)

### Why Vercel?
- ✅ Built for React/Vite apps
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Zero-config deployment
- ✅ Free tier is generous
- ✅ Excellent performance

### Step-by-Step Deployment

#### 1. Push to GitHub (if not already)
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
4. Import your `astro-ai-landing` repository
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`

6. Add Environment Variables (from your `.env` file):
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

#### 3. Connect Custom Domain
1. In Vercel project settings, go to "Domains"
2. Add domain: `astro-ai.dev`
3. Vercel will show DNS records to add
4. Go to your domain registrar (where you bought astro-ai.dev)
5. Add the DNS records Vercel provides:
   - **Type:** A Record
   - **Name:** @ (or leave blank)
   - **Value:** 76.76.21.21
   
   AND
   
   - **Type:** CNAME
   - **Name:** www
   - **Value:** cname.vercel-dns.com

6. Wait 5-60 minutes for DNS propagation
7. Vercel will automatically provision SSL certificate

#### 4. Verify Deployment
- Visit `https://astro-ai.dev`
- Check SSL certificate (should show green padlock)
- Test waitlist form
- Test mobile navigation
- Try the secret fairy gesture (5 taps!)

---

## Alternative: Netlify

### Step-by-Step
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure:
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (leave empty)

6. Add environment variables in Netlify dashboard
7. Deploy
8. Add custom domain in Site settings → Domain management
9. Follow Netlify's DNS instructions

---

## DNS Configuration Reference

### If using Cloudflare (Recommended for performance)
1. Add site to Cloudflare
2. Update nameservers at your registrar
3. Add DNS records:
   ```
   Type: A
   Name: @
   Content: [Your hosting provider's IP]
   Proxy: Enabled (orange cloud)
   
   Type: CNAME
   Name: www
   Content: astro-ai.dev
   Proxy: Enabled (orange cloud)
   ```

### If using Google Domains
1. Go to DNS settings
2. Add custom resource records as provided by Vercel/Netlify

---

## Post-Deployment Checklist

- [ ] Site loads at https://astro-ai.dev
- [ ] SSL certificate is valid (green padlock)
- [ ] All pages work (Home, Features, Pricing, etc.)
- [ ] Mobile navigation works (hamburger menu)
- [ ] Waitlist form submits to database
- [ ] Secret fairy gesture works (5 taps)
- [ ] Images load correctly
- [ ] Analytics tracking works
- [ ] Social media preview looks good (check with [metatags.io](https://metatags.io))
- [ ] Site is fast (check with [PageSpeed Insights](https://pagespeed.web.dev))

---

## Environment Variables Needed

Make sure these are set in your deployment platform:

### Required for Backend
- `DATABASE_URL` - Your database connection string
- `JWT_SECRET` - Secret for session tokens
- `OAUTH_SERVER_URL` - OAuth server URL
- `OWNER_OPEN_ID` - Your owner ID
- `OWNER_NAME` - Your name

### Required for Frontend
- `VITE_APP_TITLE` - "Astro AI"
- `VITE_APP_LOGO` - "/astro-ai-logo.png"
- `VITE_OAUTH_PORTAL_URL` - OAuth portal URL
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID
- `VITE_APP_ID` - App ID

### Required for API Integration
- `BUILT_IN_FORGE_API_URL` - API URL
- `BUILT_IN_FORGE_API_KEY` - API key

---

## Troubleshooting

### Site not loading
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify DNS records are correct
- Wait up to 48 hours for full propagation (usually much faster)

### Build failing
- Check build logs in Vercel/Netlify
- Verify all environment variables are set
- Make sure `pnpm` is selected as package manager

### Database not connecting
- Verify `DATABASE_URL` is correct
- Check database is accessible from deployment platform
- Ensure IP whitelist includes deployment platform IPs

### Images not loading
- Check images are in `client/public/` directory
- Verify paths start with `/` (e.g., `/astro-ai-logo.png`)
- Clear browser cache

---

## Performance Optimization (Post-Launch)

1. **Enable Cloudflare** (if not using)
   - Free CDN
   - DDoS protection
   - Automatic image optimization

2. **Monitor with Analytics**
   - Already configured with Umami
   - Track conversion rates
   - Monitor page load times

3. **SEO Monitoring**
   - Submit sitemap to Google Search Console
   - Monitor rankings for target keywords
   - Track backlinks

---

## Support

If you run into issues:
1. Check Vercel/Netlify deployment logs
2. Verify DNS settings
3. Test locally first: `pnpm run dev`
4. Check browser console for errors

---

**Your site is production-ready and configured for astro-ai.dev!** 🚀

Just purchase the domain, deploy to Vercel, and you're live.

