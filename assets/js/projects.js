// Lightweight accordion behavior for Projects section
// Accessible toggles using aria-expanded and CSS transitions

(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') return fn();
    document.addEventListener('DOMContentLoaded', fn);
  }

  function slideToggle(panel, expanded) {
    if (expanded) {
      panel.classList.remove('slide-down');
      panel.classList.add('slide-up');
      panel.setAttribute('hidden', '');
    } else {
      panel.removeAttribute('hidden');
      panel.classList.remove('slide-up');
      panel.classList.add('slide-down');
    }
  }

  ready(function () {
    var toggles = document.querySelectorAll('.projects-section button[aria-controls]');
    toggles.forEach(function (btn) {
      var targetId = btn.getAttribute('aria-controls');
      var panel = document.getElementById(targetId);
      if (!panel) return;

      // Initial state
      if (btn.getAttribute('aria-expanded') !== 'true') {
        panel.classList.add('slide-up');
        panel.setAttribute('hidden', '');
      } else {
        panel.classList.add('slide-down');
      }

      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        slideToggle(panel, expanded);

        if (!expanded) {
          // Optional smooth scroll into view
          try { panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) {}
        }
      });
    });

    // Top quick-action buttons open specific project panels
    var quickButtons = document.querySelectorAll('[data-open-project]');
    quickButtons.forEach(function (el) {
      el.addEventListener('click', function (ev) {
        ev.preventDefault();
        var id = el.getAttribute('data-open-project');
        if (!id) return;
        var btn = document.querySelector(".projects-section button[aria-controls='" + id + "']");
        var panel = document.getElementById(id);
        if (!btn || !panel) return;

        if (btn.getAttribute('aria-expanded') !== 'true') {
          btn.click();
        }
        try { panel.scrollIntoView({ behavior: 'smooth' }); } catch (e) {}
      });
    });
  });
})();
