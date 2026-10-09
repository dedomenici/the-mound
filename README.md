# The Mound

A dating app for the Edinburgh Fringe shame spiral. Which bar, what time, what to say.

Live: https://dedomenici.github.io/the-mound/

The Mound started life as the `/themound` page of [redux-movie-location-finder](https://github.com/dedomenici/redux-movie-location-finder) and now has its own site here.

## Run it

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`. `.github/workflows/pages.yml` builds it and deploys it to GitHub Pages on every push to `main`.

The app sits behind a simple password gate (ask Richard for the password). It is checked in the browser against a SHA-256 hash and remembered in `localStorage`, so it keeps casual visitors out but is not real security: the site is static and its files are public.

Bravos are saved in the browser's `localStorage`. Walking routes are drawn over OpenStreetMap tiles.
