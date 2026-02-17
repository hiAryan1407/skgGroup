# SKG Group Website - Next.js Conversion

A modern, professional website for SKG Group built with Next.js 16, React 19, and Tailwind CSS. Features animated components, serverless email API, and optimized performance.

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Image assets ready to place in `/public/images/`

### Installation

```bash
# Navigate to project
cd skg-website

# Install dependencies
npm install

# Copy environment configuration
cp .env.local.example .env.local

# Edit .env.local with your SMTP settings (nano, vim, VSCode, etc.)
# Set: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_EMAIL, CONTACT_EMAIL_TO

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
skg-website/
├── app/
│   ├── components/           # React components
│   │   ├── Navigation.tsx     # Main navigation with mobile menu
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── ClientsSlider.tsx  # Infinite scrolling clients
│   │   ├── Services.tsx       # Services grid with hover effects
│   │   ├── GalleryPreview.tsx # Gallery preview with auto-scroll
│   │   ├── Leadership.tsx     # Leadership team and company entities
│   │   ├── Contact.tsx        # Contact form with API integration
│   │   ├── Footer.tsx         # Footer with contact details
│   │   ├── WhatsAppFloat.tsx  # WhatsApp floating button
│   │   └── GalleryGrid.tsx    # Gallery grid for /gallery page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Serverless email API (Vercel Edge Functions)
│   ├── gallery/
│   │   └── page.tsx           # Dedicated gallery page
│   ├── layout.tsx             # Root layout with fonts and metadata
│   ├── page.tsx               # Home page (client component)
│   └── globals.css            # Global styles, animations, and theme
├── lib/
│   ├── constants.ts           # App constants, company info, and data
│   ├── types.ts               # TypeScript interfaces
│   └── email.ts               # Email utility functions
├── public/
│   └── images/                # Image assets (user provides)
│       ├── logo-brief.png
│       ├── Founder.jpeg
│       ├── Admin.jpeg
│       ├── Admin1.jpeg
│       ├── client1.jpeg - client13.jpeg
│       └── gallery/
│           └── Work1.jpeg - Work10.jpeg
├── package.json
├── tsconfig.json
└── .env.local                 # Environment variables (not tracked in git)
```

## Setup & Configuration

### 1. Image Assets

Place all required images in `/public/images/`:

**Team Photos:**
- `Founder.jpeg` - Mr. Sunil Kumar Gupta (Founder)
- `Admin.jpeg` - Krish Gupta (Administrator)
- `Admin1.jpeg` - Avinash Kumar (Co-Partner)

**Client Logos:**
- `client1.jpeg` through `client13.jpeg` - Client company logos

**Gallery Images:**
- Place in `/public/images/gallery/`
- `Work1.jpeg` through `Work10.jpeg` - Site execution photos

### 2. Email Configuration

Copy `.env.local.example` to `.env.local` and configure SMTP:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
CONTACT_EMAIL_TO=admin@skggroup.com
```

**For Gmail:**
1. Enable 2-Factor Authentication
2. Generate [App-Specific Password](https://support.google.com/accounts/answer/185833)
3. Use the generated 16-character password

**For Office 365:**
- Host: `smtp.office365.com`
- Port: `587`
- User: Your Office 365 email
- Password: Your Office 365 password

**For Custom SMTP:**
- Contact your email provider for SMTP settings

### 3. Company Information

Edit `/lib/constants.ts` to update:
- Company name, founder, and admin details
- Contact information and addresses
- Services descriptions
- Leadership team information
- Safety compliance points
- Vision statement

## Development

### Running Development Server

```bash
npm run dev
```

- Server runs on `http://localhost:3000`
- Hot reload on file changes
- API routes work locally

### Production Build

```bash
npm run build
npm start
```

Creates optimized production build:
- Automatic code splitting
- Image optimization
- CSS minification
- JavaScript compression

### Linting

```bash
npm run lint
```

## Features

### Animations & Interactions

- **AOS (Animate on Scroll)**: Fade-up and zoom-out animations
- **CSS Keyframes**: Infinite scrolling clients and gallery sliders
- **Hover Effects**: Interactive cards, buttons, and images
- **Smooth Scroll**: Navigation links scroll smoothly to sections
- **Responsive**: Mobile-first design with Tailwind precedence

### Component Features

#### Navigation
- Fixed responsive header
- Logo and branding
- Links to main sections
- Mobile hamburger menu
- Smooth scroll anchors

#### Hero Section
- Full-height background
- Responsive headline with `clamp()`
- CTA button with hover effects
- AOS zoom-out animation

#### Clients Slider
- Infinite looping animation
- Pause on hover
- Fade edge masking
- Responsive image sizing
- Next.js Image optimization

#### Services Grid
- 3-column responsive layout
- Hover effects with transform and shadow
- Service titles and bullet points
- Arrow indicators
- AOS staggered animation

#### Gallery Preview
- Auto-scrolling gallery
- Pause on hover
- Responsive image sizing
- "View Full Gallery" CTA
- Links to dedicated gallery page

#### Leadership Section
- Company entities cards (SKG, S&M, ACS)
- Team member photos with image optimization
- Role descriptions
- Vision statement box
- Safety and compliance checklist

#### Contact Form
- Name, email, phone, message fields
- Server-side validation
- Error and success feedback
- Sends confirmation email to user
- Sends notification email to company
- Serverless API on Vercel Edge Functions

#### Footer
- Multi-column layout
- Contact information with icons
- Multiple office locations
- Phone and email links
- Social media references
- Copyright notice

#### WhatsApp Floating Button
- Fixed bottom-right button
- Direct WhatsApp link
- Hover scale effect
- Always accessible

### API Endpoints

#### POST `/api/contact`

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "message": "I want to inquire about your services..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your inquiry! We'll get back to you shortly."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description",
  "error": "Technical error details"
}
```

**Validation:**
- `name`: Required, string
- `email`: Required, valid email format
- `phone`: Required, 7+ characters
- `message`: Required, 10+ characters

**Processing:**
1. Validates all input
2. Sends HTML confirmation email to user
3. Sends HTML notification email to company
4. Returns success/error response
5. No data storage (can be added to database)

## Customization

### Update Colors

Edit `/app/globals.css` CSS variables:

```css
:root {
  --primary: #c5a02c;        /* Gold accent */
  --dark: #000000;           /* Black */
  --paper: #f2f1ed;          /* Cream background */
  --text-main: #1a1a1a;      /* Dark text */
  --white: #ffffff;          /* White */
  --footer-bg: #0b0b0b;      /* Very dark footer */
}
```

### Update Company Data

Edit `/lib/constants.ts`:

```typescript
export const COMPANY = {
  name: "SKG GROUP",
  tagline: "Premium Contractual Solutions...",
  founder: "Mr. Sunil Kumar Gupta",
  // ... more fields
};

export const CONTACT = {
  headOffice: { ... },
  branch1: { ... },
  branch2: { ... },
  phones: [ ... ],
  email: "...",
  // ... more fields
};

export const SERVICES = [ ... ];
export const LEADERSHIP = [ ... ];
export const SAFETY = [ ... ];
```

### Animation Timing

Adjust animation speeds in:

1. **Scroll animations** - `/app/globals.css`:
   ```css
   @keyframes scroll { 0% { ... } 100% { transform: translateX(calc(-250px * 10)); } }
   @keyframes galleryScroll { 0% { ... } 100% { transform: translateX(-50%); } }
   ```

2. **Component delays** - Individual component files:
   ```jsx
   data-aos-delay={index * 100}  // Milliseconds
   ```

3. **Transition speeds** - Component styles:
   ```jsx
   transition: "0.3s"  // Change to desired duration
   ```

## Performance

### Optimizations Included

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic per-component splitting
- **Server Functions**: Serverless API on Vercel Edge
- **CSS**: Hardware-accelerated animations
- **Fonts**: Self-hosted Google Fonts (Oswald, Inter)
- **Responsive**: Mobile-first Tailwind CSS
- **Caching**: Vercel Edge caching for API responses

### Expected Performance

- Lighthouse Performance: 90+
- SEO Score: 100
- Mobile-Friendly: Yes
- Core Web Vitals: Pass

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM_EMAIL`
   - `CONTACT_EMAIL_TO`
4. Deploy automatically on push

### Other Platforms

Works on any platform supporting Next.js 16:
- Netlify
- Railway
- AWS Amplify
- Docker / VPS
- Self-hosted servers

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## Common Issues & Solutions

### Images Not Showing

**Problem:** Images appear broken or don't load

**Solutions:**
1. Verify images exist in `/public/images/` directory
2. Check filenames match exactly (case-sensitive on Linux)
3. Ensure image format is .jpeg or .png
4. Check file size isn't too large (2MB max recommended)
5. Run `npm run build` and check for errors

### Animations Not Working

**Problem:** Scroll or hover animations don't trigger

**Solutions:**
1. Check browser DevTools console for errors
2. Verify JavaScript is enabled
3. Wait for page to fully load (check Network tab)
4. Clear browser cache (Ctrl+Shift+Delete)
5. Try in different browser

### Email Not Sending

**Problem:** Contact form submission fails

**Solutions:**
1. Verify `.env.local` file exists and has values
2. Check SMTP credentials are correct
3. Ensure email is not in spam folder
4. Test SMTP with external tool (e.g., Thunderbird)
5. Check server logs for error messages
6. Verify firewall isn't blocking outbound port 587

### Styling Issues

**Problem:** Colors or layout looks wrong

**Solutions:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Force rebuild: `npm run build`
3. Restart dev server: Kill and `npm run dev`
4. Check `/app/globals.css` for CSS conflicts
5. Inspect element in DevTools to see applied styles

## File Upload Notes

**Important:** Add these files before deployment:

```
/public/images/
  ├── logo-brief.png
  ├── Founder.jpeg
  ├── Admin.jpeg
  ├── Admin1.jpeg
  ├── client1-13.jpeg
  └── gallery/
      └── Work1-10.jpeg
```

Without these images, the website will show placeholders or broken image icons.

## Tech Stack

- **Framework**: Next.js 16.1.6
- **Runtime**: React 19.2.3
- **Styling**: Tailwind CSS 4 + custom CSS
- **Language**: TypeScript 5
- **Animations**: AOS, CSS Keyframes
- **Email**: Nodemailer
- **Fonts**: Google Fonts (Oswald, Inter)
- **Images**: Next.js Image Component
- **Deployment**: Vercel Edge Functions

## Security

- Input validation on contact form
- SMTP credentials in `.env.local` (not in version control)
- Environment variables for sensitive data
- HTML escaping in email templates
- HTTPS recommended for production
- No external tracking scripts

## License

© 2026 SKG Group of Companies. All Rights Reserved.

## Support & Contact

**SKG Group**
- Email: skggroup.8006@gmail.com
- WhatsApp: +91 7992305348
- Phone: +91 8085818006 / +91 7992305348
- Headquarters: Ashok Nagar, Dhansar, Dhanbad, J.H. 826001, India

---

**Website Features:**
✅ Professional responsive design
✅ Serverless email API
✅ Scroll animations
✅ Mobile optimized
✅ Image optimization
✅ Performance tuned
✅ Easy to customize
✅ Production ready
