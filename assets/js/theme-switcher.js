// Theme Switcher Script
(function() {
  'use strict';

  // Available themes
  const themes = {
    cyberpunk: 'assets/css/cyberpunk-theme.css',
    classic: 'assets/css/theme-classic.css',
    modern: 'assets/css/theme-modern.css',
    warm: 'assets/css/theme-warm.css'
  };

  // Default theme
  let currentTheme = localStorage.getItem('resumeTheme') || 'cyberpunk';

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    initThemeSelector();
    loadTheme(currentTheme);
  });

  function initThemeSelector() {
    const themeButtons = document.querySelectorAll('.theme-btn');

    themeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        loadTheme(theme);

        // Update active state
        themeButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Set initial active button
    document.querySelector(`.theme-btn[data-theme="${currentTheme}"]`)?.classList.add('active');
  }

  function loadTheme(themeName) {
    if (!themes[themeName]) {
      console.error(`Theme ${themeName} not found`);
      return;
    }

    currentTheme = themeName;
    localStorage.setItem('resumeTheme', themeName);

    // Remove existing theme link if any
    const existingThemeLink = document.getElementById('active-theme');
    if (existingThemeLink) {
      existingThemeLink.remove();
    }

    // Create new theme link
    const themeLink = document.createElement('link');
    themeLink.id = 'active-theme';
    themeLink.rel = 'stylesheet';
    themeLink.href = themes[themeName] + '?v=' + Date.now();

    // Insert before language-selector.css to maintain proper cascade
    const languageSelectorCss = document.querySelector('link[href*="language-selector.css"]');
    if (languageSelectorCss) {
      languageSelectorCss.parentNode.insertBefore(themeLink, languageSelectorCss);
    } else {
      document.head.appendChild(themeLink);
    }

    // Add theme class to body for additional styling if needed
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${themeName}`);

    // Update theme color meta tag
    updateThemeColor(themeName);
  }

  function updateThemeColor(themeName) {
    const themeColors = {
      cyberpunk: '#0a0a0a',
      classic: '#2c3e50',
      modern: '#fafafa',
      warm: '#faf5f0'
    };

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor && themeColors[themeName]) {
      metaThemeColor.setAttribute('content', themeColors[themeName]);
    }
  }

  // Expose loadTheme function globally for debugging/testing
  window.loadTheme = loadTheme;

})();
