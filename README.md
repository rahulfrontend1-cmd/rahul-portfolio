# Rahul Kumar — Portfolio

A premium dark editorial portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Playfair Display (serif) + DM Sans + DM Mono via Google Fonts
- **Deployment**: Vercel (recommended)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles, CSS variables, animations
├── components/
│   ├── Navbar.tsx       # Sticky nav with mobile menu
│   ├── Hero.tsx         # Hero section with profile image + badges
│   ├── About.tsx        # About section with stats grid
│   ├── Experience.tsx   # Timeline of work history
│   ├── Skills.tsx       # Skills grid with progress bars
│   ├── Projects.tsx     # Featured projects cards
│   ├── Services.tsx     # Services offered grid
│   ├── Contact.tsx      # Contact form + social links
│   └── Footer.tsx       # Footer
├── public/
│   ├── profile.jpg      # ← ADD YOUR PHOTO HERE
│   └── resume.pdf       # ← ADD YOUR RESUME HERE
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your assets

Place the following in the `/public` folder:
- `profile.jpg` — your profile photo (portrait orientation recommended, ~400×500px)
- `resume.pdf` — your latest resume

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

## Customization

### Personal details
All personal content is in the component files under `/components`. Each file is self-contained and clearly organized:

| File | What to edit |
|------|-------------|
| `app/layout.tsx` | Page title, meta description, SEO keywords |
| `components/Hero.tsx` | Headline, subtitle text |
| `components/About.tsx` | Bio paragraphs, stat numbers |
| `components/Experience.tsx` | `experiences` array at the top |
| `components/Skills.tsx` | `skills` array at the top |
| `components/Projects.tsx` | `projects` array at the top |
| `components/Services.tsx` | `services` array at the top |
| `components/Contact.tsx` | `EMAIL` constant, social links |

### Colors (CSS variables in `globals.css`)

```css
--gold: #c9a84c;        /* Primary accent */
--gold-light: #e2c97e;  /* Hover state */
--navy: #0a0f1e;        /* Page background */
--cream: #f5f0e8;       /* Primary text */
--muted: #6b7a99;       /* Secondary text */
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect your repo at [vercel.com](https://vercel.com).

## Contact

- Email: rahul.javascript1@gmail.com
- LinkedIn: [devmantrarahulkumar](https://www.linkedin.com/in/devmantrarahulkumar/)
- GitHub: [rahulfrontend1-cmd](https://github.com/rahulfrontend1-cmd)
