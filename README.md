# Portfolio

This is a React + Vite portfolio with Tailwind CSS.

## EmailJS setup
To enable direct email sending from the contact form, create a `.env` file in the `portfolio/` directory with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then configure a template in EmailJS with fields:
- `from_name`
- `from_email`
- `subject`
- `message`

Install deps and run:

```
npm install
npm run dev
```
