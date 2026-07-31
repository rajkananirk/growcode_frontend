# Growcode Solution

Enterprise software studio website built with Next.js App Router, Tailwind CSS, Framer Motion, and Hugging Face-powered contact automation.

## Project structure

```
growcode/
├── app/                  # Next.js App Router pages & API routes
│   ├── api/              # Server routes (contact, huggingface)
│   ├── about/
│   ├── career/
│   ├── contact/
│   ├── services/
│   └── work/
├── components/           # React UI components
├── data/                 # Portfolio & services content
├── lib/                  # Server utilities (email, inference)
├── public/               # Static assets (images, brand)
├── .env.local.example    # Environment variable template
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `HUGGINGFACE_API_TOKEN` | Hugging Face API token (server-side only) |
| `GMAIL_USER` | Gmail address for sending contact emails |
| `GMAIL_APP_PASSWORD` | Gmail app password |
| `CONTACT_TO_EMAIL` | Inbox for contact form submissions |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly booking link |
| `NEXT_PUBLIC_WHATSAPP_URL` | WhatsApp contact link |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |

## Portfolio content

Project entries are managed in `data/projects.ts`. See `PROJECTS.md` for the image and field workflow.

## License

Private — all rights reserved.
