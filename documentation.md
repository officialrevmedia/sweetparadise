# Sweet Paradise Bakery & Deli — Website Documentation

**Prepared by revmedia for Sweet Paradise Bakery & Deli (Mancini family)**
Project: Full website redesign and rebuild
Locations: Hamilton (630 Stone Church Rd. W) and Waterdown (419 Dundas St E)
Production-ready static front-end with CMS-ready data structure

---

## Table of Contents

1. Strategy & Sitemap
2. Page-by-Page Wireframes & Copy
3. Design System
4. SEO Metadata (Per Page)
5. Schema Markup Specifications
6. CMS / Data Structure
7. Developer Implementation Notes
8. Launch Checklist

---

## 1. Strategy & Sitemap

### 1.1 Strategic Positioning

Sweet Paradise is positioned as **Hamilton's Italian bakery, deli, and catering destination**. The site must convey:

- Authentic Italian scratch bakery with 100+ years combined baking experience
- 35+ years as a Hamilton community staple, founded 1986 by the late Carmen Mancini
- Run by the Mancini family (Pat, Dino, Lidio), with Dino leading the cake program (50+ years)
- A complete Italian food destination: bread, cakes, pastries, donuts, deli, prepared meals, pasta sauce, catering, grocery, and gift baskets

The site reframes the bakery as a **premium but warm** brand. The visual language is editorial, warm, food-led, and trustworthy. Generic-bakery, cartoonish, or scripty design choices are deliberately avoided.

### 1.2 Primary Business Objectives

1. Drive **cake inquiries** (call-in / form) to Hamilton location
2. Drive **catering inquiries** for events 20 to 500 guests
3. Drive **in-store visits** to Hamilton and Waterdown
4. Make the **product range** instantly understandable
5. Improve **local SEO** for Hamilton and Waterdown food search
6. Make the site easy to update (CMS-ready data structures)

### 1.3 Primary Conversion Paths

| Goal | Primary CTA | Secondary CTA |
|---|---|---|
| Cake order | Cake inquiry form | Call Hamilton |
| Catering inquiry | Catering inquiry form | Call Hamilton |
| Store visit | Locations page / Get directions | Call location |
| Browse menu | Product List | Category pages |
| Specials awareness | Specials page | Instagram |

### 1.4 Sitemap

```
/                       Home
├── /cakes              Cakes
├── /bakery             Bakery (bread, donuts, pies, savoury)
├── /pastries           Pastries
├── /deli               Deli
├── /prepared-meals     Prepared Meals
├── /catering           Catering
├── /pasta-sauce        Pasta Sauce
├── /grocery            Grocery & Gift Baskets
├── /specials           Specials
├── /product-list       Product List (full directory)
├── /our-story          Our Story
├── /locations          Locations
├── /contact            Contact
└── /order              Order / Inquire (routing hub)
```

### 1.5 Information Architecture Principles

- Every page surfaces the two locations and click-to-call buttons
- Every page surfaces the four primary actions in the mobile sticky bar (Call Hamilton, Call Waterdown, Cake, Catering)
- Cake ordering routes only to Hamilton (clearly stated; Waterdown carries cash-and-carry only)
- Catering is treated as a serious revenue driver with a dedicated, conversion-focused page

---

## 2. Page-by-Page Wireframes & Copy

### 2.1 Home (`index.html`)

**Sections:**
1. Sticky nav with logo, primary nav, and Order/Inquire button
2. Cinematic hero with overlay headline, three CTAs (Order Cakes, Explore Menu, Plan Catering), and two location quick cards with live "open now" status
3. Category grid (10 tiles): Cakes, Fresh Bread, Pastries, Donuts, Deli, Prepared Meals, Catering, Pasta Sauce, Grocery, Gift Baskets
4. The Sweet Paradise Experience (short intro to the full food destination)
5. Featured Favourites (8 product cards)
6. Cakes Made for Every Occasion (espresso-bg conversion section)
7. Catering for Gatherings Big and Small
8. From Our Family to Yours (Mancini story preview)
9. Visit Us (two large location cards)
10. Reputation / loved-for copy
11. Instagram preview grid
12. Footer + mobile sticky bar

**Headline:** A Hamilton Italian Bakery Tradition, Made Fresh Every Day
**Subhead:** For over 35 years, Sweet Paradise has brought Hamilton and Waterdown fresh-baked bread, scratch-made cakes, Italian pastries, deli favourites, prepared meals, catering, and family recipes made with care.

### 2.2 Cakes (`cakes.html`)

**Headline:** Cakes Worth Celebrating
**Subhead:** Scratch-made Italian cakes crafted with fresh creams, rich fillings, classic sponges, and decades of decorating experience.

**Ordering note (top callout):** Cake orders are processed through the Hamilton location only. Waterdown carries select cakes for cash and carry. Please call Hamilton for cake availability, sizing, customization, and pickup details.

**Sections:** Categories (8), Cake grid (18 cakes), Inquiry form, FAQ (6), Hamilton call-out CTA.

**Cake Inquiry Form fields:** Name, phone, email, pickup location (Hamilton/Waterdown), requested pickup date, cake type, cake size, occasion, message on cake, allergies/notes, inspiration image upload, preferred contact method.

### 2.3 Bakery (`bakery.html`)

Focus on fresh-baked-daily urgency. Sections for bread, donuts (apple fritters featured), pies and tarts, savoury (quiche, meat pies, calzones).

**Tagline callout:** Fresh baked daily. Come early for the favourites.

### 2.4 Pastries (`pastries.html`)

Filter chips: All / Italian Classics / Cream Pastries / Cake Slices / Bites & Bars / Weekend Only. 18 product cards.

### 2.5 Deli (`deli.html`)

Italian counter positioning. Two side-by-side features (Sliced Meats and Cheeses). Sandwiches feature. Self-serve counter cards. Espresso platter CTA.

### 2.6 Prepared Meals (`prepared-meals.html`)

Three approach tiles (Fresh case, Freezer, Cold salads). 8-product grid. 3-step "How it works" explainer.

### 2.7 Catering (`catering.html`)

**Headline:** Catering With Italian Heart
**Subhead:** From family celebrations to corporate luncheons and weddings, Sweet Paradise brings decades of Italian cooking, professional service, and generous hospitality to your table.

**Sections:** Cinematic hero, trust bar, 8 event types, service range (20-500 guests, casual to fine dining, food planning, equipment, service staff), 6-column menu highlights, full catering inquiry form, trust quote.

**Catering Inquiry Form fields:** Name, phone, email, event date, event type, guest count, location/venue, service style, budget range, menu interests, staff/equipment needs, message.

### 2.8 Pasta Sauce (`pasta-sauce.html`)

Recipe heritage feature. 8 sauce variety cards. Pairing tiles to bakery / prepared-meals / grocery.

### 2.9 Grocery & Gift Baskets (`grocery.html`)

4 category tiles (Olive Oils, Pasta & Pantry, Chocolates & Cookies, Custom Gift Baskets). Pantry feature. Sweets feature. Espresso gift-baskets section with custom-builder messaging.

### 2.10 Specials (`specials.html`)

CMS-friendly card system. Each card has: title, image, category badge, dates/availability, price, description, location, CTA. Filter chips (All, Bakery, Cakes, Pastries, Deli, Prepared Meals, Seasonal). Price-change disclaimer.

### 2.11 Product List (`product-list.html`)

Searchable, filterable product directory. Live JS search by name. 13 category filter chips. ~80+ products with category and location-availability tags. "Call to confirm availability" note prominent.

### 2.12 Our Story (`our-story.html`)

**Headline:** A Family Story, Baked Into Hamilton

Editorial hero, full-bleed image, founding story (Carmen Mancini, sons Pat / Dino / Lidio), 5-entry timeline (1986 / 1990s / 2000s / 2010s / Today), 4 values on espresso bg, visit CTA.

### 2.13 Locations (`locations.html`)

Two premium location cards with full details, hours, live "open now" status, parking notes, cake-ordering callout, Google Maps embed for each. Order paths tile grid below.

### 2.14 Contact (`contact.html`)

Three quick-path tiles (Cake, Catering, Call). General inquiry form. Location quick cards. Instagram preview.

### 2.15 Order / Inquire (`order.html`)

Routing hub with three large tiles (Order cake, Plan event, Everything else). Espresso-bg "How orders work" 3-step explainer.

---

## 3. Design System

### 3.1 Colour Tokens

| Token | Hex | Use |
|---|---|---|
| `--color-espresso` | `#2A1A10` | Primary text, dark sections, footer |
| `--color-cream` | `#F4EADA` | Section backgrounds (warm) |
| `--color-flour` | `#FAF5EC` | Page background, cards |
| `--color-tomato` | `#B33A2A` | Primary accent, CTAs, alerts |
| `--color-olive` | `#5E6B3C` | Secondary accent, eyebrow text |
| `--color-brass` | `#B08B4F` | Premium detail, dividers |
| `--color-charcoal` | `#1A1410` | Headline text |

### 3.2 Typography

- **Display & headings:** Fraunces (Google Fonts, variable: opsz 9-144, SOFT 30-100, weight 300-700, italic and roman)
- **Body & UI:** Plus Jakarta Sans (Google Fonts, weights 400/500/600/700)

Type scale (responsive, clamped):
- H1: clamp(2.5rem, 6vw, 4.5rem)
- H2: clamp(2rem, 4vw, 3.25rem)
- H3: clamp(1.4rem, 2.4vw, 1.85rem)
- H4: 1.25rem
- Body: 1rem (16px base)
- Eyebrow: 0.75rem, uppercase, tracked 0.16em

### 3.3 Spacing Scale

CSS custom properties from `--space-1` (0.25rem) to `--space-12` (8rem), using a multiplier of roughly 1.5 to 1.75 per step.

### 3.4 Components

| Component | Class | Notes |
|---|---|---|
| Sticky nav | `.nav` | Backdrop-blur, shadow appears on scroll |
| Mobile drawer | `.drawer` | Slide-in, focus-trapped |
| Hero | `.hero` | Background image + overlay, location panels |
| Page head | `.page-head` | Breadcrumb + eyebrow + H1 + lede |
| Category tile | `.cat-tile` | Image media + title/desc body |
| Product card | `.product-card` | Image + tag + name + description |
| Special card | `.special-card` | CMS-driven, with cat/date/price |
| Feature row | `.feature` | Two-column image + body |
| Quote card | `.quote-card` | Testimonial styling |
| Location card | `.loc-card` | Full address/hours/status/CTAs |
| FAQ accordion | `.faq` | One-open-at-a-time |
| Filter chip | `.chip` | Active state with tomato bg |
| Form | `.form` | Field labels, focus rings |
| Mobile sticky bar | `.mobile-bar` | 4 quick actions, last is accent |
| Footer | `.footer` | Brand + 3 link columns + legal |

### 3.5 Buttons

- `.btn--primary` (espresso bg, cream text)
- `.btn--tomato` (tomato bg, white text)
- `.btn--ghost` (transparent, espresso border)
- `.btn--ghost-cream` (transparent, cream border, for dark sections)
- `.btn--link` (text link with arrow)
- Size modifiers: `.btn--sm`, `.btn--lg`

### 3.6 Motion

- IntersectionObserver-driven `.reveal` class for fade-up on scroll
- Stagger delays for grid children (`.reveal:nth-child(n)` with transition-delay)
- Subtle hover lifts on cards (`transform: translateY(-2px)` + shadow)
- No bounce, no spring, no large parallax. Editorial restraint.

### 3.7 Texture

- `.paper-grain` overlays a low-opacity SVG noise pattern on light sections
- Used sparingly on hero panels and accent sections for warmth

---

## 4. SEO Metadata (Per Page)

| Page | Title | Meta Description | H1 | Target Keywords |
|---|---|---|---|---|
| Home | Sweet Paradise Bakery & Deli · Hamilton's Italian Bakery, Cakes, Deli & Catering | Hamilton's Italian bakery since 1986. Scratch-made cakes, fresh bread, pastries, deli, prepared meals, catering, and pasta sauce. Hamilton & Waterdown. | A Hamilton Italian Bakery Tradition, Made Fresh Every Day | Hamilton bakery, Italian bakery Hamilton, Sweet Paradise Bakery |
| Cakes | Custom Cakes Hamilton · Italian Cakes & Birthday Cakes | Scratch-made Italian cakes, custom occasion cakes, and classics like Strawberry Romanoff and Tiramisu. Hamilton cake orders. | Cakes Worth Celebrating | Custom cakes Hamilton, Italian cakes Hamilton, Birthday cakes Hamilton |
| Bakery | Fresh Bread, Donuts & Apple Fritters Hamilton · Sweet Paradise Bakery | Fresh-baked daily. Italian bread, apple fritters, donuts, pies, quiche, and meat pies. Hamilton & Waterdown. | The Bakery, Fresh Every Morning | Bakery Hamilton, Donuts Hamilton, Apple fritters Hamilton |
| Pastries | Italian Pastries Hamilton · Cannoli, Tiramisu, Cream Horns | Filled cannoli, tiramisu, cream horns, custard tarts, macarons. Italian pastries Hamilton & Waterdown. | The Pastry Case | Pastries Hamilton, Cannoli Hamilton, Italian pastries Hamilton |
| Deli | Italian Deli Hamilton · Sliced Meats, Cheeses, Sandwiches | Imported prosciutto, salami, capicola, parmigiano, provolone. Hot and cold sandwiches. Italian deli Hamilton & Waterdown. | An Italian Counter, Sliced to Order | Deli Hamilton, Italian deli Hamilton, Italian sandwiches Hamilton |
| Prepared Meals | Prepared Meals Hamilton · Lasagna, Cabbage Rolls, Frozen Meals | House-made lasagna, cabbage rolls, perogies, prepared pastas, cold salads. Heat-and-serve from the case or freezer. | Heat, Serve, Sit Down | Prepared meals Hamilton, Frozen meals Hamilton, Lasagna Hamilton |
| Catering | Catering Hamilton · Italian Wedding, Corporate & Event Catering | Hamilton catering for weddings, corporate events, and family gatherings. 20 to 500 guests, casual to fine dining. Over 35 years. | Catering With Italian Heart | Catering Hamilton, Italian catering Hamilton, Wedding catering Hamilton, Corporate catering Hamilton |
| Pasta Sauce | Homemade Italian Pasta Sauce Hamilton · Sweet Paradise | Family-recipe Italian pasta sauces. Classic tomato, meat sauce, marinara, arrabbiata, vodka cream. Made in Hamilton. | The Sauce on Every Sunday Table | Pasta sauce Hamilton, Italian pasta sauce Hamilton |
| Grocery | Italian Grocery & Gift Baskets Hamilton | Imported Italian olive oils, vinegars, pasta, chocolates, biscotti, and custom gift baskets. Hamilton & Waterdown. | A Small Italian Market, Tucked Inside the Bakery | Italian grocery Hamilton, Italian gift baskets Hamilton |
| Specials | Weekly Specials · Sweet Paradise Bakery & Deli | This week at the bakery. Fresh features, seasonal items, and limited runs. Hamilton & Waterdown. | Fresh Features, Seasonal Runs | Bakery specials Hamilton |
| Product List | Product List · Sweet Paradise Bakery & Deli | Full Sweet Paradise catalogue. Searchable. Breads, cakes, pastries, deli, prepared meals, sauces, grocery, seasonal. | Everything We Make, Bake, Slice, and Stock | Italian bakery products Hamilton |
| Our Story | The Mancini Family Story · Sweet Paradise Bakery Hamilton | Founded 1986 by Carmen Mancini. Built by Pat, Dino, and Lidio. Over 35 years in Hamilton. Read the story. | A Family Story, Baked Into Hamilton | Mancini family bakery Hamilton, Sweet Paradise Bakery history |
| Locations | Locations · Hamilton & Waterdown · Sweet Paradise Bakery | Hamilton (630 Stone Church Rd. W) and Waterdown (419 Dundas St E). Hours, directions, phone, parking, cake-order info. | Two Locations, One Family | Bakery Hamilton Mountain, Bakery Waterdown, Italian bakery Waterdown |
| Contact | Contact Sweet Paradise · Cake, Catering & General Inquiries | Reach Sweet Paradise. Cake orders, catering inquiries, general questions. Hamilton 905-389-3487. Waterdown 905-689-8007. | Get in Touch | Contact Sweet Paradise Bakery |
| Order / Inquire | Order or Inquire · Sweet Paradise Bakery & Deli | Place a cake order, request catering, or send a general inquiry. The fastest path to the right team. | The Fastest Way to Get an Answer | Order cake Hamilton, Catering quote Hamilton |

### 4.1 Open Graph & Twitter Cards

Every page includes:
- `og:title`, `og:description`, `og:image`, `og:type=website`
- `twitter:card=summary_large_image`
- `theme-color: #2A1A10` for browser chrome tinting
- Canonical URL

### 4.2 Local SEO Priorities

1. **NAP consistency** across the site, Google Business Profile, Facebook, TripAdvisor:
   - Hamilton: Sweet Paradise Bakery & Deli, 630 Stone Church Rd. W, Hamilton, ON, 905-389-3487
   - Waterdown: Sweet Paradise Bakery & Deli, 419 Dundas St E, Waterdown, ON, 905-689-8007
2. **Two LocalBusiness schemas** (one per location) embedded site-wide
3. **Google Business Profile** posts linked to specials and seasonal items
4. **Page-level keyword targeting** as mapped in the table above (avoid keyword stuffing; one primary keyword per page)
5. **Internal linking** between related pages (e.g. catering ↔ deli ↔ prepared meals; cakes ↔ pastries ↔ specials)

---

## 5. Schema Markup Specifications

All schema is `application/ld+json` and embedded site-wide and per-page where useful.

### 5.1 Site-wide (in `<head>` on every page)

**Organization schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sweet Paradise Bakery & Deli",
  "url": "https://www.sweetparadise.ca",
  "logo": "https://www.sweetparadise.ca/assets/logo.png",
  "sameAs": [
    "https://www.instagram.com/sweetparadisebakery/",
    "https://www.facebook.com/sweetparadisebakerydeli/"
  ],
  "foundingDate": "1986",
  "founder": { "@type": "Person", "name": "Carmen Mancini" }
}
```

**Two LocalBusiness / Bakery schemas (one per location):**

```json
{
  "@context": "https://schema.org",
  "@type": ["Bakery", "FoodEstablishment"],
  "name": "Sweet Paradise Bakery & Deli (Hamilton)",
  "image": "https://www.sweetparadise.ca/assets/hamilton.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "630 Stone Church Rd. W",
    "addressLocality": "Hamilton",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "telephone": "+1-905-389-3487",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00",
    "closes": "20:00"
  }],
  "url": "https://www.sweetparadise.ca/locations#hamilton",
  "priceRange": "$$",
  "servesCuisine": ["Italian","Bakery"]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": ["Bakery", "FoodEstablishment"],
  "name": "Sweet Paradise Bakery & Deli (Waterdown)",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "419 Dundas St E",
    "addressLocality": "Waterdown",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "telephone": "+1-905-689-8007",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "08:00", "closes": "19:00" }
  ],
  "url": "https://www.sweetparadise.ca/locations#waterdown"
}
```

### 5.2 Page-Specific Schemas

| Page | Schema |
|---|---|
| Home | `Organization`, two `LocalBusiness` |
| Cakes | `Product` per featured cake, `FAQPage` for the FAQ section |
| Catering | `Service` (Catering, area served Hamilton + Burlington + Waterdown + GTA West) |
| Specials | `Offer` per special (with `validFrom` / `validThrough`) |
| Product List | Optional `ItemList` of `Product` entries (do not over-schema; primary value is browsability) |
| All pages | `BreadcrumbList` |
| Our Story | `Organization` (founding info enriched) |
| Locations | Both `LocalBusiness` schemas |

### 5.3 Review Schema Note

Review snippets are **not** included by default. If aggregating reviews from Google Business Profile or TripAdvisor for `AggregateRating`, ensure compliance with Google's structured data guidelines (reviews must be from a verifiable source on the same domain, or you must use the platform's own integration).

---

## 6. CMS / Data Structure

The site is built as static HTML for fast hosting, but every dynamic content type is structured so it can be moved into a headless CMS (Webflow, Contentful, Sanity, Storyblok, or WordPress + ACF). Below are the recommended content models.

### 6.1 Product

```yaml
product:
  id: string (unique)
  name: string
  slug: string
  category: enum [bread, cakes, pastries, donuts, cookies, pies, prepared, deli, grocery, sauces, catering, seasonal]
  short_description: text (≤ 140 chars)
  long_description: rich text (optional)
  image: media
  price: decimal (optional, often left blank since stock varies)
  price_label: string (optional, e.g. "From $32")
  available_locations: multi-select [hamilton, waterdown]
  availability_note: string (optional, e.g. "Weekend only", "Pre-order 24 hrs")
  is_featured: boolean
  display_order: integer
  tags: multi-select (italian, cream, weekend, bites, signature, etc.)
```

### 6.2 Special

```yaml
special:
  id: string
  title: string
  slug: string
  category: enum [bakery, cakes, pastries, deli, prepared, seasonal]
  image: media
  description: text
  price: decimal (optional)
  price_label: string
  valid_from: date
  valid_to: date
  available_locations: multi-select [hamilton, waterdown]
  cta_label: string
  cta_url: string
  display_order: integer
```

### 6.3 Cake (extends Product)

```yaml
cake:
  id: string
  name: string
  slug: string
  category: enum [signature, chocolate, fruit, italian, mousse, slab, custom, cash_and_carry]
  short_description: text
  long_description: rich text
  image: media
  available_sizes: multi-select [6", 8", 10", 12", quarter, half, full slab]
  occasion: multi-select (birthday, anniversary, wedding, etc.)
  flavour_tags: multi-select (chocolate, vanilla, fruit, cream, etc.)
  cash_and_carry: boolean
  hamilton_order_required: boolean (default true)
  display_order: integer
```

### 6.4 Location

```yaml
location:
  id: string (hamilton | waterdown)
  name: string
  address: string
  phone: string
  phone_secondary: string (optional)
  hours:
    monday: { open: time, close: time }
    tuesday: { ... }
    ... (per day)
  google_maps_url: string
  google_maps_embed: string
  parking_note: text
  highlights: list of strings
  is_cake_orders: boolean
  is_cash_and_carry_only: boolean
  image: media
```

### 6.5 FAQ

```yaml
faq:
  id: string
  category: enum [cakes, catering, general, ordering]
  question: string
  answer: rich text
  display_order: integer
```

### 6.6 Catering Inquiry / Cake Inquiry / General Inquiry (form submissions)

Submissions captured via Netlify Forms (default), or replace `data-netlify="true"` with a backend of choice (Formspree, custom endpoint, HubSpot, Salesforce). All forms include `<input type="hidden" name="form-name" value="...">` for Netlify recognition.

```yaml
catering_inquiry:
  name, phone, email
  event_date, event_type, guest_count, location
  service_style, budget_range
  menu_interests (multi)
  staff_equipment_needs
  message
  submitted_at
```

```yaml
cake_inquiry:
  name, phone, email
  pickup_location, requested_pickup_date
  cake_type, cake_size, occasion
  message_on_cake, allergies_notes
  inspiration_image (file upload)
  preferred_contact
  submitted_at
```

---

## 7. Developer Implementation Notes

### 7.1 File Structure

```
sweet-paradise/
├── index.html
├── cakes.html
├── bakery.html
├── pastries.html
├── deli.html
├── prepared-meals.html
├── catering.html
├── pasta-sauce.html
├── grocery.html
├── specials.html
├── product-list.html
├── our-story.html
├── locations.html
├── contact.html
├── order.html
├── css/
│   └── main.css
├── js/
│   └── main.js
├── assets/
│   └── (client photography to replace Unsplash placeholders)
└── documentation.md
```

### 7.2 Image Strategy

**All product, hero, and feature images currently use Unsplash placeholders for visual fidelity.** Before launch, swap all Unsplash URLs with client-supplied photography. Recommendations:

- Hire a local food photographer for one full day at each location (cakes, pastry case, deli counter, prepared meals, bread, exterior)
- Target image specs: hero images 2400×1600, product cards 900×900 (square crop) or 800×600 (landscape), feature images 1200×900
- Use `loading="lazy"` on all below-fold images (already in place)
- Use `srcset` and `sizes` for responsive images once final assets are in (defer until final photography)
- Serve via a CDN with WebP/AVIF auto-conversion (Cloudflare Images, Imgix, or Netlify Image CDN)
- Photography style: warm natural light, top-down or 45° angle, minimal props, real bakery surfaces (wood, marble), avoid the "stock food photo" look

### 7.3 Hosting & Performance

**Recommended host:** Netlify or Vercel
- Free tier covers expected traffic
- Built-in CDN, HTTPS, form handling, branch previews
- Auto-deploy from a Git repo

**Performance targets:**
- Lighthouse Performance: 90+
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- First load JS: minimal (current `main.js` is ~3KB)

**Current optimizations in place:**
- System fonts preconnect (Google Fonts)
- `display=swap` on Google Fonts to prevent FOIT
- No render-blocking scripts (single `main.js` at end of body)
- IntersectionObserver for reveal animations (paint when in view)
- Lightweight CSS (~38KB, ~12KB gzipped)

**Pre-launch checklist:**
- Add `<meta name="robots" content="index,follow">` to all production pages
- Generate `sitemap.xml` from the sitemap above
- Add `robots.txt` allowing all, referencing `sitemap.xml`
- Submit to Google Search Console and Bing Webmaster Tools

### 7.4 Form Backend

Forms use `data-netlify="true"` (Netlify Forms). When deploying to Netlify:
1. Netlify auto-detects forms on first deploy
2. Submissions land in Netlify dashboard → Forms
3. Set up email notifications (Settings → Forms → Notifications)
4. Optional: forward to a CRM via Zapier (Netlify → Zapier → Mailchimp/HubSpot/Google Sheets)

**Spam protection:** Add `<input type="hidden" name="bot-field">` (honeypot, already supported by Netlify) or enable reCAPTCHA in Netlify settings.

### 7.5 Accessibility Checklist

- [x] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- [x] Single `<h1>` per page
- [x] Form labels associated with inputs via `for`/`id`
- [x] All interactive elements keyboard-reachable (no `tabindex="-1"` on links/buttons)
- [x] Focus rings visible (do not `outline: none` without replacement)
- [x] ARIA labels on icon-only buttons (mobile drawer toggle, close button)
- [x] Image `alt` text (decorative images use empty `alt=""`)
- [x] Colour contrast: espresso on cream = 12.4:1 ✓, tomato on flour = 5.9:1 ✓
- [ ] Skip-to-content link (recommend adding for production)
- [ ] Test with VoiceOver / NVDA before launch

### 7.6 Live "Open Now" Logic

`main.js` calculates real-time open status based on browser local time:
- Hamilton: 7:00 AM to 8:00 PM, all 7 days
- Waterdown: 9:00 AM to 7:00 PM Mon-Fri; 8:00 AM to 7:00 PM Sat-Sun

The script updates the badge text and colour every page load. For accuracy across time zones, it uses browser local time (the assumption is most visitors are in or near the Eastern time zone).

### 7.7 Filter & Search Logic

- **Pastries page:** filter chips toggle visibility of product cards by `data-tag`
- **Specials page:** same pattern
- **Product List:** combined search (live input filter against `data-name` and visible text) and category filter chips. Inline script in `product-list.html`.

If a CMS is added later, replace the static markup with templated loops; keep the JS filter logic identical.

### 7.8 Browser Support

Modern evergreen browsers: Chrome, Edge, Firefox, Safari (last 2 versions). IntersectionObserver, CSS custom properties, `clamp()`, and CSS Grid are all required. No IE11 support.

### 7.9 Recommended Next Steps After Launch

1. **Photography swap-out** (Week 1-2 post-launch with client)
2. **Google Business Profile optimization** (link to site, post specials weekly)
3. **Google Search Console** verification and sitemap submission
4. **Google Tag Manager** install for event tracking on form submissions and click-to-call
5. **Schema validation** via [validator.schema.org](https://validator.schema.org/)
6. **Page-level conversion tracking:** GA4 events for cake-form-submit, catering-form-submit, contact-form-submit, tel-link-click
7. **Specials page CMS migration** (priority: client wants weekly updates)
8. **Local citation building** for the Waterdown location (Yelp, Yellow Pages, BBB)
9. **Backlink outreach** to Hamilton food blogs, wedding planners, event venues
10. **Seasonal landing pages** (Easter colomba, Christmas panettone, Mother's Day cakes)

---

## 8. Launch Checklist

### Pre-Launch
- [ ] Replace all Unsplash placeholder images with client photography
- [ ] Confirm all phone numbers and addresses
- [ ] Confirm hours for both locations (especially holidays)
- [ ] Confirm cake program details (Hamilton-only ordering, Waterdown cash-and-carry)
- [ ] Confirm catering capacity range (20 to 500 guests)
- [ ] Have client review all copy for tone and accuracy
- [ ] Test all forms (submit and confirm receipt)
- [ ] Test on iOS Safari, Chrome Android, desktop Chrome, Firefox, Safari
- [ ] Run Lighthouse audit on every page (target 90+ Performance, 95+ Accessibility, 95+ SEO)
- [ ] Validate schema via Google Rich Results Test
- [ ] Validate sitemap.xml and robots.txt
- [ ] Set up Google Search Console + Bing Webmaster Tools
- [ ] Set up Google Analytics 4 (or Plausible)
- [ ] Add favicon and apple-touch-icon
- [ ] Set up 301 redirects from old URLs (sweetparadise.ca/cakes, /about-1, /product-list, /catering)

### Launch Day
- [ ] DNS cutover
- [ ] Confirm HTTPS active
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Update Google Business Profile with new website URL
- [ ] Update Facebook and Instagram bio links
- [ ] Test all click-to-call buttons on real mobile devices

### Post-Launch (Week 1)
- [ ] Monitor form submissions and click-to-call events
- [ ] Check Google Search Console for crawl errors
- [ ] Confirm both locations appear correctly in local pack
- [ ] Schedule weekly specials updates with client

---

**Document version:** 1.0
**Built by:** revmedia
**Contact:** info@revmedia.ca · 365-357-3006

*Family-run since 1986.*
