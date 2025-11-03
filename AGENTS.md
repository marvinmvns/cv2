# Repository Guidelines

This repository hosts a GitHub Pages site powered by Jekyll. Use the guidance below to keep structure, style, and workflow consistent.

## Project Structure & Module Organization
- Root `index.html` defines page sections; keep hero and project cards consistent with existing Liquid tags.
- Layout shells live in `_layouts/`; reusable snippets in `_includes/`. Duplicate and adapt includes here before introducing new markup.
- Styles reside in `_sass/` as partials (leading `_`); import them from `assets/css/main.scss`.
- Static assets (images, favicons) go in `assets/` with descriptive, kebab-case filenames; update references when moving/renaming.

## Build, Test, and Development Commands
- `bundle install` — install the pinned GitHub Pages/Jekyll plugins from `Gemfile`.
- `bundle exec jekyll serve --livereload` — start local dev at `http://127.0.0.1:4000` with auto-rebuild.
- `bundle exec jekyll build` — produce optimized `_site/` matching GitHub Pages output.
- `bundle exec jekyll doctor` — surface common config issues before pushing.

## Coding Style & Naming Conventions
- Two-space indentation for HTML, Liquid, and SCSS; keep Liquid logic minimal. Wrap non-obvious logic in `{% comment %}...{% endcomment %}`.
- Favor semantic HTML (`section`, `article`) and accessibility (descriptive `alt`, `aria-label`).
- Name includes and Liquid variables in lowercase kebab-case (e.g., `project-card.html`).
- SCSS variables use lower snake case (`$primary-blue`); keep naming consistent across partials.

## Testing Guidelines
- No automated tests. Rely on `bundle exec jekyll build` to catch Liquid/Sass errors and scan console warnings.
- Manually verify responsive layouts at desktop and mobile breakpoints after visual changes.
- In `_site/`, validate external links and contact actions (GitHub, WhatsApp, email) before merging.

## Commit & Pull Request Guidelines
- Commit messages in Portuguese, imperative mood: `Adicionar`, `Corrigir`, `Atualizar` (e.g., `Adicionar seção de Projetos`).
- PRs should: describe what changed and why, link related issues, list pages affected, and include screenshots/GIFs for style changes. Note commands run for review (`jekyll build`/`serve`).

## Content Refresh Checklist
- Update project data in `_includes/projects.html`; keep links and tech stacks synchronized with external repos.
- Re-run `bundle exec jekyll serve` to preview copy edits; keep user-facing strings in Brazilian Portuguese unless introducing a new locale.

