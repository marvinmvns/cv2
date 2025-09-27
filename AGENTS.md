# Repository Guidelines

## Project Structure & Module Organization
- Source: static site powered by Jekyll/GitHub Pages.
- Layouts/partials: `_layouts/`, `_includes/`.
- Styles: SCSS entry `assets/main.scss`; Bootstrap SCSS in `_sass/bootstrap/` (do not edit files marked `__DO_NOT_MODIFY`).
- Scripts: custom JS in `assets/js/`; vendor JS in `assets/javascript/bootstrap/`.
- Site config: `_config.yml`. Main page: `index.html`. Assets under `assets/`.

## Build, Test, and Development Commands
- Install Ruby deps: `bundle install` (uses `github-pages`).
- Serve locally with live reload: `bundle exec jekyll serve --livereload`.
- Build site for production: `bundle exec jekyll build` (outputs `_site/`).
- Refresh Bootstrap/JS assets: `./update_bootstrap.sh` (requires Node/npm; updates `_sass/bootstrap/` and `assets/javascript/bootstrap/`).

## Coding Style & Naming Conventions
- HTML/Liquid: keep logic minimal in templates; prefer includes for reusable blocks; indent 2 spaces.
- SCSS: add custom styles in `assets/main.scss` and additional partials in `_sass/` (prefix partials with `_` and import from `assets/main.scss`).
- JavaScript: place site-specific code in `assets/js/` (one feature per file when practical). Use ES6+, semicolons, and 2-space indentation.
- Filenames: use lowercase-hyphenated names (e.g., `profile-card.html`, `dark-mode.scss`).

## Testing Guidelines
- Local check: `bundle exec jekyll build` should complete without errors/warnings.
- Visual QA: run `bundle exec jekyll serve` and verify pages, navigation, and assets load correctly in a private window.
- Optional: if `html-proofer` is installed, run link checks against `_site/`.

## Commit & Pull Request Guidelines
- Commits: concise, imperative mood (e.g., "Add floating nav animation"). Group related changes; prefer English messages. Reference issues when relevant (e.g., `Fix #12`).
- Branching: feature branches named `feature/short-description` or `fix/short-description`.
- PRs: include summary of changes, screenshots/GIFs for UI updates, reproduction steps, and risk/roll-back notes. Ensure the site builds locally before opening.

## Security & Configuration Tips
- Do not commit secrets to `_config.yml` or templates. Keep third-party scripts pinned; use `update_bootstrap.sh` for Bootstrap/jQuery updates.
- Follow GitHub Pages-supported gem versions (managed via `github-pages` in `Gemfile`).
