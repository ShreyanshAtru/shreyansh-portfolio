# Shreyansh Jain — Portfolio

A responsive, monochrome personal portfolio inspired by the modular studio layout of [Sublevel Studio on ThreeUI](https://threeui.com/landing-pages/sublevel-studio-landing-page). This is an original HTML/CSS implementation: it does not copy the reference template source or its Three.js media. It is intentionally framework-free, so it can be hosted as a static site.

## Files

- `index.html` — page content and project cards
- `styles.css` — responsive visual design
- `script.js` — active-state behavior for the floating quick navigation
- `assets/` — screenshots for the Structured Output Agent and Snipcast project cards

## Personalize it

- Update the project titles, descriptions, and technology tags in `index.html`.
- Replace the illustrated preview panels with screenshots or videos of your projects.
- Add verified experience and skills after confirming the exact resume details.
- Change the contact email if you prefer a different public address.

## Run locally

Open `index.html` in a browser, or start a local server from this directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish free with GitHub Pages

1. Create a public repository, for example `shreyansh-portfolio`, and upload the files in this folder.
2. In the repository, open **Settings → Pages**.
3. Under the build and deployment settings, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. GitHub Pages will publish at `https://ShreyanshAtru.github.io/shreyansh-portfolio/`.

The Structured Output Agent Streamlit playground currently runs on your machine at `http://127.0.0.1:8501/`. That address is only reachable from the same computer, so the portfolio links to the source repository. To share an interactive demo publicly, deploy the Streamlit app separately and replace the local address with its public deployment URL.

For the root address `https://ShreyanshAtru.github.io/`, the repository must be named `ShreyanshAtru.github.io`. GitHub Pages is available for public repositories on GitHub Free. The published site is publicly accessible.

See [GitHub’s official Pages setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) for current instructions.
