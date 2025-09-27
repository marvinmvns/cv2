
# Boostrap 4 Github Pages

A [Bootstrap 4](https://getbootstrap.com/) template project for [Github Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/).

* A full Bootstrap 4 theme usable both on Github Pages and with a standalone Jekyll.
* Recompiles Bootstrap from SCSS files, which allows to customize Bootstrap's variables and use Bootstrap themes.
* Full support of Bootstrap's JavaScript plugins.
* Supports all features of Github Pages and Jekyll.

[See the website for demonstration and documentation](https://nicolas-van.github.io/bootstrap-4-github-pages/).

## Contribution

[See the contribution guide.](./CONTRIBUTING.md)

## License

[See the license file.](./LICENSE.md)

## Deployment (GitHub Pages + Jekyll)

- Prerequisites: Enable GitHub Pages in Settings → Pages with "GitHub Actions" as the source.
- Build and deploy: Push to `main`. The workflow in `.github/workflows/pages.yml` builds with Jekyll and publishes `_site/`.
- Local preview: `bundle install` then `bundle exec jekyll serve --livereload` and open `http://localhost:4000`.
- URLs:
  - User/Org pages: keep `baseurl: ""` and set `url: "https://<user>.github.io"` in `_config.yml` when known.
  - Project pages: `baseurl` is injected by the workflow; you can also set `baseurl: "/<repo>"` and `url: "https://<user>.github.io"`.
- Assets: Run `./update_bootstrap.sh` to refresh Bootstrap/jQuery assets (requires Node/npm).
