# Maryam Portfolio — clean project structure

## Editing projects

Project information is stored directly in the HTML, not JavaScript or CSS.

- `index.html` contains the 4 projects shown on the homepage.
- `work.html` contains the complete project list.
- `assets/css/style.css` controls the visual design.
- `assets/js/main.js` controls interactions only (navigation, filters, animations, FAQ).

To change a project, edit its `<article class="project-card">` in `index.html` or `work.html`.
You can change the title, category, label, year, image path, alt text, and link without touching JavaScript.

The Work filters read the `data-category` attribute from each HTML card.
