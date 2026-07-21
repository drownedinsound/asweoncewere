## Project context

This is the lead website for The Anchoress (Catherine Anne Davies), replacing her old Squarespace site at theanchoress.co.uk. It deploys to asweoncewere.com.

**Structure rule — do not change without asking:** the homepage (`src/pages/index.astro`) is a single long scroll matching the original Squarespace site's structure exactly. Catherine is autistic and dislikes change, so the first deployed version was built as an exact replica, not a redesign. Only `/news`, `/contact`, and `/admin` are separate routes. Do not split the homepage into multiple pages or reorder its sections without explicit sign-off — ask before adding anything not already on the live site.

The old album campaign build lives at `/album3` (static HTML in `public/album3/`) and is intentionally unlinked from main navigation.

**Content collections** (`src/content.config.ts`): `news`, `tourDates`, `press` (quote/source/sourceUrl/forAlbum), `bio` (singleton), `settings` (singleton — social/store/preorder/Patreon URLs, contact blocks). Press quotes are ordered by filename prefix (`01-`, `02-`...) to control display order — Decap CMS doesn't support manual reordering, so this is deliberate.

**Fonts:** headline font is Adobe Fonts "Peckham Press" (Typekit kit `ety4fua`), served CSS class name is lowercase `peckham-press` — different from the display name. Labels use Google Fonts Source Code Pro. Body is Georgia serif.

**Gotcha — repo root vs `public/`:** Astro only deploys files inside `public/`. This repo previously had `robots.txt` and `og-image.jpg` sitting in the repo root doing nothing (never actually served). Always double-check new static assets land in `public/`, not root.

**YouTube embeds:** use the `YouTubeFacade.astro` component (click-to-play poster + iframe pattern). Its container div holds the `aspect-video` sizing — swap children with `replaceChildren`, never `replaceWith` the container itself, or the iframe loses its aspect ratio.

**Deferred/not-yet-built:** Netlify Identity + Git Gateway setup for Catherine's CMS access (deferred, ask Sean before setting up), and a future "gig history" section (Robert Smith's Meltdown, Manic Street Preachers shows) — see project memory.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
