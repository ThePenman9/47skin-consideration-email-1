# 47 Skin – Consideration-stage Gmail-inspired Email Experience

An **unofficial speculative portfolio concept**. Not sent, published, commissioned, or approved by 47 Skin. Gmail-style interface is a simulation, not a Google product.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Production and Vercel

```bash
npm run build
npm run preview
```

Upload the contents of `47-skin-email-experience/` to a GitHub repository, import in Vercel and select **Vite**. Build command: `npm run build`; output: `dist`. Suggested Vercel project name: `47skin-still-thinking-email`.

## Interaction

- The home screen is the inbox, not the opened email.
- Only the 47 Skin message opens; unrelated messages are intentionally non-openable.
- Return with the back arrow or Escape.
- Search, select folder, star messages and refresh the simulated inbox.
- The **EXPLORE THE SERUM** link opens the user-supplied URL: https://47-skin-product-page-wm55.vercel.app/

## Assets

- `public/assets/editorial-real-skin-mirror.png`: newly generated editorial portrait, **not** an actual customer or a product-use testimonial.
- `public/assets/authentic-47-skin-serum-reference.png`: user-supplied original packaging photograph. Kept intact rather than reconstructing a label.

Body paragraphs and qualifications are reproduced from the user's supplied email copy. Subject and preheader are shown as message metadata, not additional email-body copy. The campaign-wide headline is used as the sole hero headline.
