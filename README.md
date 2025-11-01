# CV / Portfólio — Marcus Segundo

Site pessoal estático construído com Jekyll e publicado no GitHub Pages. A página principal (`index.html`) apresenta experiência, habilidades e projetos (FastrackGPS e Marvin Robô) com um visual dark refinado.

## Visão Geral
- Gerador: Jekyll (GitHub Pages plugin set)
- Linguagem: HTML + Sass (SCSS)
- Deploy: GitHub Pages em `https://marvinmvns.github.io/cv2/`
- Base URL: configurada para `/cv2` em `_config.yml`

## Requisitos
- Ruby e Bundler instalados
- Acesso a terminal

## Desenvolvimento Local
```bash
bundle install
bundle exec jekyll serve --livereload
# Acesse: http://127.0.0.1:4000/cv2/
```

Dicas:
- Se houver erro de permissão ao escrever `Gemfile.lock`, use um path local:
  ```bash
  bundle config set path 'vendor/bundle'
  bundle install
  ```
- Rode `bundle exec jekyll doctor` para checar problemas comuns.

## Estrutura do Projeto
- `index.html`: página principal com o conteúdo (hero, experiência, projetos, habilidades e contatos)
- `_layouts/`: shells de página
- `_includes/`: snippets reutilizáveis de HTML (cabeçalho/rodapé)
- `_sass/`: parciais Sass
  - `_theme.scss`, `_utilities.scss`, `_accessibility.scss`
- `assets/css/`:
  - `devresume.css`: base do tema
  - `cyberpunk-theme.css`: overrides visuais dark
  - `main.scss`: ponto de entrada do Sass (compila para `assets/css/main.css`)
- `assets/`: imagens, ícones e fontes

## Editando Conteúdo
- Experiência, habilidades e contatos: edite diretamente em `index.html`.
- Projetos: os botões na seção “Projetos” representam FastrackGPS (vídeo) e Marvin Robô (referência). Adicione/remova botões editando `index.html`.
- Imagem de perfil: substitua em `assets/images/` e atualize o `src` em `index.html`.

## Estilos e Personalização
- Ajustes finos de tipografia, espaçamento e acessibilidade moram em `assets/css/main.scss` e parciais em `_sass/`.
- Recomenda-se manter overrides no `main.scss` em vez de editar `devresume.css` diretamente.
- Preferir duas espaços de indentação (HTML, Liquid e SCSS).

## Boas Práticas de Acessibilidade/Performance
- Fontes com `preconnect` e `display=swap` já configurados em `index.html`.
- Imagem de perfil com `alt` descritivo e `loading="lazy"`.
- Foco visível e respeito a `prefers-reduced-motion` implementados em `_accessibility.scss`.

## Build de Produção
```bash
bundle exec jekyll build
# Saída otimizada em _site/
```

## Deploy no GitHub Pages
- O repositório está preparado para GitHub Pages com `github-pages` no `Gemfile`.
- Garanta que `url` e `baseurl` em `_config.yml` reflitam o caminho publicado.

## Solução de Problemas
- Erros de Liquid em arquivos de documentação: adicione o arquivo em `exclude` no `_config.yml`.
- Sass 3.7 (via GitHub Pages) tem limitações: use `calc()` dentro de `clamp()` quando misturar unidades.

## Créditos
- Layout base inspirado no tema DevResume (Xiaoying Riley, 3rd Wave Media), com overrides próprios.

---
Siga o `AGENTS.md` para convenções de código, organização e revisão manual antes de publicar.
