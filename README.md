# RootsEco — Client Review Demo

A complete frontend demo built with Next.js App Router + JavaScript. It uses local images supplied for the RootsEco project and data-driven product/category pages so a backend can be connected later.

## Run locally

Requirements: Node.js 20+

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Demo pages

- `/` Homepage
- `/products` Product catalogue with search, sort and category filters
- `/products/employee-welcome-gift-set` Product details
- `/categories` Main categories
- `/categories/festive-hampers` Category detail
- `/categories/festive-hampers/diwali-hampers` Subcategory detail
- `/about` About RootsEco
- `/solutions` Corporate gifting solutions
- `/contact` Contact
- `/quote` Bulk quote enquiry
- `/blog` Guides and ideas

## Assets

- `/public/images/client/` contains selected semantic aliases copied from the latest supplied `images.zip`.
- `/public/images/supplied/` retains deduplicated supplied images for future product mapping.

## Important before sharing/publishing

This is a review demo, not a production commerce system. Product names are descriptive labels based on supplied photos; confirm exact model/SKU, specs, MOQ, current pricing, GST, availability, delivery timelines, and branding permissions with the supplier. Do not claim a product is sustainable/eco-friendly unless its materials and claims are verified. Business phone, WhatsApp, email and domain must be confirmed before launch. Enquiry forms open WhatsApp and do not store submissions in a database. Add backend/API, spam protection, privacy policy, analytics and conversion tracking before running ads.

## Deploy to Vercel

Push the extracted project to a GitHub repository, import it into Vercel, and use the default Next.js build settings. Build command is `next build`; output is managed by Next.js.
