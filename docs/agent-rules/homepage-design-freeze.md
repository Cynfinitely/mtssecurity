# Homepage design freeze — HARD STOP

The customer has signed off on the homepage design. It must not change visibly: no layout, styling, text, image, section, header, footer or language-toggle changes on `/`, not even small ones. A request to "improve" the homepage is not permission to change how it looks; ask the human first.

## Allowed on the homepage (invisible)

- `<head>` content: title, meta description, canonical, Open Graph, structured data, preload hints, icons and manifest links.
- `alt` text, `width`/`height`, `loading="lazy"` on images.
- Link targets (`href`), as long as the link still looks exactly the same.
- Hashed asset URLs and cache headers.

## Not allowed without the human's explicit OK

```text
❌ Editing or adding a rule in styles.css that changes how the homepage renders
❌ Changing visible text, headings, the hero, sections, the stats, or the footer
❌ Replacing or re-encoding the homepage images (logo, hero, work photos)
❌ Changing the language toggle or the EN translations' behavior
❌ theme-color or any meta tag that tints the browser UI
```

Put new visible content on service or hub pages (`src/content/`) instead. Their styles live in `subpages.css`, which the homepage does not load.

## How to check

Capture full-page screenshots of `master` and of your build at 375, 768 and 1440 px, in DE and EN, with headless Chrome, and compare them:

- Every pixel outside photo areas must be identical.
- Visible text must be identical.
- Photo pixels may differ by a few /255. Chrome resamples photos slightly differently depending on load timing, even for an unchanged page.

Any difference outside photos means the change is visible: revert it or ask.
