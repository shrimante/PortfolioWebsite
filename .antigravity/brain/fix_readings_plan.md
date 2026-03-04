# Fix Readings Pages

The `readings.astro` pages (both English and Arabic) have critical issues:
1. **Rendering Logic**: Content components must be pre-rendered using `await reading.render()`.
2. **Syntax Errors**: The English version has broken loop/div structure.
3. **Incomplete Content**: The English version lacks status and rating display found in the Arabic version.

## Proposed Changes

### [Pages]
#### [MODIFY] [readings.astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/readings.astro)
#### [MODIFY] [ar/readings.astro](file:///c:/Portfolio/Sriman-Architecture-Portfolio/src/pages/ar/readings.astro)
- Implement `Promise.all` with `reading.render()` in the frontmatter.
- Fix HTML structure and ensure consistent display of Title, Author, Category, Status, and Rating.

## Verification Plan
### Automated Tests
- Run `npm run build` to verify all pages render correctly.
