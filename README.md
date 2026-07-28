# Hemela Peptides - E-commerce Website

Professional peptide manufacturer website built with Next.js, supporting both English and Chinese.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Language:** TypeScript
- **Hosting:** Vercel (recommended)

## Features

- 🌐 Bilingual support (English / 中文)
- 📱 Fully responsive design
- 🔍 Product catalog with search and category filtering
- 📄 Product detail pages with specifications
- 📜 Certificates & qualifications showcase
- 💬 Contact form with inquiry options
- ⭐ Customer testimonials
- 🎨 Modern, professional UI

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js
4. Add your custom domain
5. Deploy!

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/            # App Router pages
  components/     # Reusable React components
  data/           # Product data & company info
  lib/            # Utilities (i18n context)
public/
  images/         # Static images (products, certificates)
```

## Customization

### Edit Products
Edit `src/data/products.ts` to modify:
- Products list
- Categories
- Company info
- Testimonials
- Certificates

### Edit Contact Info
Update `companyInfo` object in `src/data/products.ts`

### Styling
Edit `tailwind.config.js` for theme colors and `src/app/globals.css` for global styles.

## Domain Suggestion

Consider domains like:
- `hemelapeptides.com`
- `hemela-peptide.com`
- `hkhemela.com`
