# Pixel Battle Help

Documentation site for [Pixel Battle](https://pixelbattle.fun), built with [Astro Starlight](https://starlight.astro.build).

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/       # pages live here as .md/.mdx
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in `src/content/docs/`. Each file is exposed as a route based on its file name. Sidebar groups are configured in `astro.config.mjs` and autogenerate their items from each directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------- | :----------------------------------------------- |
| `yarn install`        | Installs dependencies                            |
| `yarn dev`            | Starts local dev server at `localhost:4321`      |
| `yarn build`          | Build your production site to `./dist/`          |
| `yarn preview`        | Preview your build locally, before deploying     |
| `yarn astro ...`      | Run CLI commands like `astro add`, `astro check` |
