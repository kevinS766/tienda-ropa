# Design System Document: The Inventory Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Atelier"**
This design system moves away from the "industrial warehouse" look of traditional ERPs and adopts the sophisticated, high-contrast aesthetic of a high-end fashion editorial. It treats inventory data not just as numbers, but as a curated collection. 

To break the "generic template" feel, we employ **Intentional Asymmetry** and **Tonal Depth**. Large `display-sm` headers sit with generous `16 (3.5rem)` top-margins to provide breathing room, while data-dense tables are nested within "sunken" containers to create a sense of focus and architectural hierarchy. We do not use lines to separate ideas; we use space and light.

---

## 2. Colors & Surface Architecture
The palette is anchored in `primary (#051125)`—a deep, authoritative navy—complemented by a sophisticated range of greys that define the workspace without cluttering it.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define different functional areas (e.g., a sidebar vs. a main content area), use background shifts:
*   **Main Workspace:** `surface (#f8f9fa)`
*   **Side Panels/Navigation:** `surface-container-low (#f3f4f5)`
*   **Active Inner Workspaces:** `surface-container-highest (#e1e3e4)`

### Surface Hierarchy & Nesting
Treat the UI as a physical desk. The base is `surface`. Metrics cards should be `surface-container-lowest (#ffffff)`, creating a natural "lift" against the slightly darker `surface`. Nested elements (like a search bar inside a header) should use `surface-container (#edeeef)`.

### The "Glass & Gradient" Rule
To elevate the "Atelier" feel, use **Glassmorphism** for floating elements like modals or dropdowns:
*   **Background:** `surface_container_low` at 80% opacity.
*   **Effect:** `backdrop-blur: 12px`.
*   **CTAs:** Use a subtle linear gradient from `primary (#051125)` to `primary_container (#1b263b)` at a 135-degree angle to add "soul" to interactive elements.

---

## 3. Typography: The Curated Voice
We utilize **Inter** for its neutral, high-legibility architecture, but we apply it with editorial intent.

*   **Display & Headlines (`display-sm` to `headline-lg`):** Set with `letter-spacing: -0.02em` and `font-weight: 700`. These are your anchors. They should be `on_surface (#191c1d)`.
*   **Body Text (`body-md`):** Our workhorse for inventory lists. Always use `on_surface_variant (#45474d)` for secondary descriptions to maintain a high-end contrast ratio.
*   **Labels (`label-sm`):** Used for SKU numbers and metadata. These should be uppercase with `letter-spacing: 0.05em` to feel like a premium garment tag.

---

## 4. Elevation & Depth
We convey importance through **Tonal Layering**, not shadows.

*   **The Layering Principle:** A "Positive Stock" card should not have a heavy shadow. Instead, place a `surface-container-lowest` card on a `surface-container-low` background. The subtle 2% difference in hex value is enough for the professional eye.
*   **Ambient Shadows:** For floating action buttons or critical pop-overs, use: `box-shadow: 0 12px 32px -4px rgba(5, 17, 37, 0.08)`. Note the use of the `primary` navy tint in the shadow rather than pure black.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility in forms, use `outline_variant (#c5c6cd)` at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Metrics Cards
*   **Background:** `surface-container-lowest (#ffffff)`.
*   **Corner Radius:** `xl (0.75rem)`.
*   **Style:** No borders. Use a `3.5 (0.75rem)` left-accent bar in `tertiary_fixed_dim (#68dba9)` for healthy stock or `error (#ba1a1a)` for low stock.

### Data Tables (High Density)
*   **Header:** `surface-container-high (#e7e8e9)` with `label-md` typography.
*   **Rows:** Alternate between `surface` and `surface-container-low` for readability. **Zero divider lines.**
*   **Padding:** Use `spacing-3 (0.6rem)` for vertical cell padding to maintain density without feeling cramped.

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`. Radius: `md (0.375rem)`.
*   **Secondary (Outlined):** Use the "Ghost Border" (20% `outline_variant`). 
*   **Status Chips:** Use `tertiary_container` with `on_tertiary_container` for "In Stock" (Emerald feel) and `secondary_container` with `on_secondary_container` for "Discontinued".

### Input Fields
*   **Default:** `surface-container-highest` background, flat. 
*   **Focus:** A 2px `primary` bottom-border only. This mimics the minimalist aesthetic of high-end retail signage.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use `spacing-16 (3.5rem)` to separate major sections. White space is a luxury.
*   **Do** use `tertiary` (Emerald) and `error` (Amber/Red) tokens sparingly as "jewels" against the navy and grey backdrop.
*   **Do** align all text to a strict horizontal rhythm using the `spacing` scale.

### Don't
*   **Don't** use 1px solid black or grey borders. They break the "Atelier" immersion.
*   **Don't** use pure black (#000000). Use `on_surface (#191c1d)` for deep tones.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light, it doesn't belong.
*   **Don't** use dividers in lists. Use a `0.5 (0.1rem)` height background strip of `outline_variant` at 10% opacity if a separator is legally required for legibility.