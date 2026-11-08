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

### Useful Terminal Commands

## Daily Development Workflow

- ** 1. Start the local development server (http://localhost:4321)**

npm run dev

- ** 2. Build the site for production (generates the /dist folder)**

npm run build

- ** 3. Preview the compiled production build locally**

npm run preview

- ** 4. Create an instant live public preview link via Cloudflare tunnel**

npx cloudflared tunnel --url http://localhost:4321

---

## Repackaging & Maintenance

- \*\* 5. Deep clean: wipe node_modules, cache, and build output to repackage/zip the blueprint

rm -rf node_modules .astro dist

- \*\* 6. Reinstall dependencies (REQUIRED after running deep clean or duplicating the folder)

npm install

- \*\* 7. Complete reset & reinstall (use if Astro acts weird or throws cache errors)

rm -rf node_modules .astro dist && npm install
