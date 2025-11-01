# Repository Guidelines

## Project Structure & Module Organization
- Root `index.html` defines page sections; keep hero and project cards consistent with existing Liquid tags.
- `_layouts/` hosts page shells, while reusable snippets live in `_includes/`. Duplicate components here before introducing new markup.
- Styles reside in `_sass/`; create partials with leading underscores and import them via `main.scss` in `assets/css`.
- Static assets (images, favicons) belong in `assets/`; prefer descriptive, kebab-case filenames and update references accordingly.

## Build, Test, and Development Commands
- `bundle install` installs the GitHub Pages plugin set pinned in `Gemfile`.
- `bundle exec jekyll serve --livereload` runs the local dev server on `http://127.0.0.1:4000`, rebuilding when content or styles change.
- `bundle exec jekyll build` produces the optimized `_site/` output matching the GitHub Pages deploy environment.
- `bundle exec jekyll doctor` highlights common configuration issues before pushing.

## Coding Style & Naming Conventions
- Use two-space indentation for HTML, Liquid, and SCSS; keep Liquid logic minimal and wrap in `{% comment %}` blocks when context is non-obvious.
- Favor semantic HTML tags (`section`, `article`) and accessible attributes (`aria-label`, descriptive alt text) for every addition.
- Name Liquid variables and includes in lowercase kebab-case (e.g., `project-card.html`) and SCSS variables in lower snake case (`$primary-blue`).
- Run `bundle exec jekyll serve` locally before committing to catch template or Sass compilation errors.

## Testing Guidelines
- No automated test suite exists; rely on `bundle exec jekyll build` to surface Liquid/Sass failures and scan the console for warnings.
- Manually verify responsive layouts in desktop and mobile breakpoints after each significant visual change.
- Before merging, validate external links and contact actions (GitHub, WhatsApp, email) in the generated `_site/` output.

## Commit & Pull Request Guidelines
- Follow the existing imperative, Portuguese commit style (e.g., `Adicionar seção de Projetos`). Prefix with the main action (`Adicionar`, `Corrigir`, `Atualizar`).
- Reference related issues in the description and describe visual changes with screenshots or GIFs when styling is touched.
- Ensure PRs summarize what changed, why it matters, and how to review (commands run, pages affected).

## Content Refresh Checklist
- Update project details in `_includes/projects.html` and keep metadata (links, tech stack) synchronized with any external repos.
- Re-run `bundle exec jekyll serve` to preview copy edits, and confirm localized strings remain in Brazilian Portuguese unless a new locale is introduced.
