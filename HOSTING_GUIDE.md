# Custom Domain & Hosting Guide for Kosh Studios

When you are ready to put the website live on your purchased domain name, follow these straightforward steps.

---

## Recommended Free & Zero-Friction Hosting: Vercel

Because this site is built on Next.js, **Vercel** provides automatic deployments, free SSL certificates, global CDN edge caching, and 1-click custom domain setup at zero cost.

### Step 1: Push Code to GitHub
Ensure this project is pushed to your GitHub account:
```bash
git add .
git commit -m "Complete Kosh Studios website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kosh-studios.git
git push -u origin main
```

### Step 2: Import Project to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New..."** → **"Project"**.
3. Select the `kosh-studios` repository and click **Deploy**.
4. Within 60 seconds, your site will be live at a `.vercel.app` address.

### Step 3: Connect Your Purchased Custom Domain
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your custom domain (e.g., `koshstudios.com` or `www.koshstudios.com`) and click **Add**.
3. Vercel will display the exact DNS records to configure. Log into the registrar where you bought your domain (GoDaddy, Namecheap, Google Domains / Squarespace, Hostinger, Cloudflare, etc.) and add:
   - **Type A**: Host `@` → Points to `76.76.21.21`
   - **Type CNAME**: Host `www` → Points to `cname.vercel-dns.com`
4. That is it! Vercel will automatically verify DNS and generate a free auto-renewing SSL certificate (HTTPS) within a few minutes.

---

## Alternative: Traditional Hosting (cPanel / Hostinger / Apache / Nginx)

If you prefer traditional web hosting with static files via FTP:
1. In `next.config.ts`, add `output: 'export'`.
2. Run `npm run build`.
3. An `out/` folder containing static HTML, CSS, and JS will be generated.
4. Upload all files inside the `out/` folder directly to your hosting server's `public_html/` directory.
