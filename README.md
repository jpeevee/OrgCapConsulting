# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Useful Terminal Commands

### Daily Development Workflow

- **1. Start local development server** (`http://localhost:4321`)

  ```bash
  npm run dev
  ```

- **2. Build site for production** (generates `/dist`)

  ```bash
  npm run build
  ```

- **3. Preview production build locally**

  ```bash
  npm run preview
  ```

- **4. Create instant public preview link via Cloudflare tunnel**
  ```bash
  npx cloudflared tunnel --url http://localhost:4321
  ```

### Repackaging & Maintenance

- **5. Deep clean** — wipe everything to repackage/zip blueprint

  ```bash
  rm -rf node_modules .astro dist
  ```

- **6. Reinstall dependencies** (required after deep clean or duplication)

  ```bash
  npm install
  ```

- **7. Complete reset & reinstall** (use if Astro acts weird or throws cache errors)
  ```bash
  rm -rf node_modules .astro dist && npm install
  ```

```

```
