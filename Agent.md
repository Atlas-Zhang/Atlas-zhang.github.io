# Agent Guide

## Project Overview

This repository is a brief personal website for Atlas Zhang, built with Vue 3 and Vite. The active route renders `src/views/aboutMe/AboutMe.vue`.

## Tech Stack

- Vue 3 with `<script setup>`
- Vite
- Tailwind CSS plus scoped component CSS
- Element Plus
- Vue Router

## Key Files

- `src/views/aboutMe/AboutMe.vue`: about page renderer, carousel state, language selection, and IP-based initial language detection.
- `src/constants/siteContent.js`: single source of truth for static content, profile data, text, language labels, image paths, gallery metadata, links, and icon path data.
- `src/router/index.js`: routes `/` to the about page.
- `package.json`: project scripts.

## Static Data Rule

Put all static website data in `src/constants/siteContent.js`.

This includes:

- English and Chinese page text
- Profile names, links, and contact values
- Image and folder paths
- Gallery item metadata
- Language labels and defaults
- External service endpoints
- Static icon path strings

Vue components should render imported data instead of defining hard-coded website copy or asset paths locally.

## Language Behavior

The website supports:

- `en`: English
- `cn`: Chinese

On initial page load, the about page requests `siteContent.ipLanguage.endpoint`. If the response country code is `CN`, it switches to Chinese. Other countries use English. If the IP lookup fails, browser language is used as a fallback.

The page also includes a visible language switch so users can override the initial automatic choice.

## Development Commands

```bash
npm run dev
npm run build
npm run lint
```

## Requirements

Make sure every code change will be versioned with git command( git add/commit etc), please aware of this requirement.

## Hook Event

After each new file is created or an existing file is updated, run one Git tracking command before continuing:

```bash
git add <created-or-updated-file>
```

For completed checkpoints where the user explicitly wants a commit, run:

```bash
git commit -m "<clear change summary>"
```

Do not commit automatically unless the user asks for commits. Staging with `git add` satisfies the required post-create/post-update hook for normal editing work.
