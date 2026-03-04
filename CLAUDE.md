# Project: Utils Website (智能工具平台)

## Tech Stack
- **Framework**: Vue 3 + Vite
- **CSS**: Tailwind CSS 3 + custom scoped CSS (`<style scoped>`)
- **UI**: Element Plus, Flowbite (sidebar drawer)
- **Other**: Swiper (carousels), Vue Router 4, Axios, xlsx, Less

## Design System (Modern Dark-Hero)
Last updated: March 2026 redesign. Follow these tokens for all new UI.

| Token | Value | Use |
|-------|-------|-----|
| `--c-bg` | `#ffffff` | Page background |
| `--c-bg-soft` | `#f4f4f5` | Sidebar, alt sections |
| `--c-text-1` | `#09090b` | Headings, primary text |
| `--c-text-2` | `#52525b` | Body text |
| `--c-text-3` | `#a1a1aa` | Muted/placeholder |
| `--c-accent` | `#2563eb` | Links, active states |
| `--c-border` | `#e4e4e7` | Card & section borders |
| `--c-shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` | Card resting shadow |
| `--c-shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` | Card hover shadow |
| Hero bg | `linear-gradient(160deg, #0f0c29, #1a1535, #0d1b2e)` | Home hero |
| Font | `-apple-system, 'SF Pro Text', 'Helvetica Neue', Arial` | Body font |
| Nav height | `56px` (Tailwind `h-14`, content offset `mt-14`) | Fixed navbar |
| Card radius | `14px` (`.site-card` class) | All cards |

**Global `.site-card` class** defined in `src/assets/main.css` — use for all cards.

## Project Structure
```
src/
├── assets/
│   ├── base.css        # CSS variables + body reset (system font)
│   ├── main.css        # .site-card, global link styles, scrollbar
│   └── index.css       # Tailwind directives
├── components/
│   ├── card/
│   │   ├── HomeToolCardItem.vue         # Home: tool card (icon + title + desc + →)
│   │   ├── HomeArticleCardItem.vue      # Home: article card (title + desc + author)
│   │   ├── ToolBoxCardContentInfo.vue   # Home + toolbox list
│   │   ├── CardContentInfo.vue          # AI tools list
│   │   └── ArticleCardItem.vue          # Article list
│   └── layout/
│       ├── HeadBar.vue      # Frosted glass nav, h-14, navLinks array, active pill
│       └── SiderBarItem.vue # Sidebar item with count badge
├── views/
│   ├── home/HomeView.vue           # Dark hero + 3 content sections (alt bg)
│   ├── aiToolItem/AiToolItemList.vue   # Sidebar (w-56, mt-14) + grid
│   ├── articleItem/ArticleItemList.vue # Same pattern
│   ├── toolbox/index.vue           # Same pattern
│   └── aboutMe/AboutMe.vue         # Personal intro, tags, 3 projects with swiper
├── App.vue             # mt-14 offset for fixed nav
└── router/index.js
```

## Routes
| Path | View |
|------|------|
| `/` | HomeView |
| `/ai-tools/list` | AiToolItemList |
| `/ai-tool-item/:id/detail` | AiToolDetail |
| `/article/list` | ArticleItemList |
| `/article/:id/detail` | ArticleItemDetail |
| `/tool-box/list` | toolbox/index.vue |
| `/about/me` | AboutMe |

## Key Patterns
- **Home hero**: Dark gradient section, centered title, 3 pill nav shortcuts
- **Section alternation**: odd = `bg-white`, even = `bg-[#f9f9fb]`
- **Sidebar layout**: `w-56` fixed left + `sm:absolute sm:left-56` content, bg `bg-zinc-50`
- **Sidebar mt**: Always `mt-14` to clear the nav
- **Card pattern**: All use `.site-card` global class; inner layout via scoped `<style>`
- **Nav active**: `nav-active` class = `bg-blue-50 text-blue-600 font-medium` pill
- **Image cache-busting**: `?timestamp=` appended to logo URLs; `http://` → `https://`
- **API**: `src/api/` dir, via `src/utils/request.js` (axios wrapper)

## Development
```bash
npm run dev      # Vite dev server
npm run build    # Production build
```
