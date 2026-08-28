---
name: selective-memory-editorial-poster
description: Edit each user-supplied photograph into its own 3:4 premium editorial memory poster with truthful real photography above and a spacious, theme-led selective-memory reconstruction below. Use for poetic visual diaries, independent-publication posters, and image-to-memory reinterpretations; do not use for multi-photo collages, literal full-scene redraws, or ordinary photo filters.
metadata:
  inspiration_source: https://github.com/nevertoday/xxd-panel-061/blob/main/references/original-prompt/zh-CN.md
---

# Selective Memory Editorial Poster

Use the system `imagegen` skill and image-generation tool. Treat every uploaded
photo as a separate edit target. The result should feel like a privately kept
visual diary, an independent art journal, and a carefully art-directed poster:
light, intelligent, relaxed, slightly naive, and visually mature.

## Output contract

- Produce one independent raster poster for each uploaded photo. Never combine photos into a collage, contact sheet, diptych, comparison layout, or shared canvas.
- Use a 3:4 portrait composition with a natural upper/lower two-layer relationship. The upper half is real photography; the lower half is selective artistic memory.
- Preserve the upper photo's subject identity, count, anatomy or construction, structure, pose, silhouette, spatial relationships, natural light, real texture, and original color atmosphere.
- Apply only restrained high-end editorial color correction. When the ratio needs more room, extend only plausible environmental background; never stretch, warp, mirror, or redesign the subject.
- Keep the result recognizably photographic in the upper half and clearly reconstructed in the lower half. It must not read as a full-scene illustration of the source.

## Find the memory before designing

For each source, privately determine:

1. the central subject, action, relationship, or emotional event;
2. what is genuinely worth remembering rather than every visible object;
3. the 3–6 most meaningful visual fragments that can tell that story together;
4. the source-derived temperature, quiet background color, and one or two characteristic accent colors;
5. one optional, very small text opportunity—or decide that no text is needed.

The lower half must be organized around one core theme. Fragments may be the
subject itself, a partial feature, a gesture, an environmental clue, a sound
translated into a shape, or a poetic form naturally implied by the photo. Every
metaphor must remain traceable to the source's subject, action, mood, setting,
or visual relationship. Do not randomly list attractive objects.

## Build the upper photographic half

Keep the original photograph as the truthful anchor. Preserve recognizable
faces, bodies, animals, objects, architecture, proportions, direction, pose,
surface, and relationships. Use a subtle magazine, independent-publication,
or exhibition-photography grade: clean exposure, gentle tonal control, and
quiet color refinement without changing the scene's identity or light logic.

If expanding the image for 3:4, continue sky, wall, ground, water, foliage, or
another believable surrounding field. Do not duplicate edges, invent a new
background story, retouch away meaningful evidence, or place graphic elements
over the photographic region.

## Reconstruct the lower selective memory

Use 3–6 related visual fragments, not a literal redraw of the whole scene.
Choose one dominant form or scene-memory, then supporting fragments that
clarify its emotion, movement, place, or metaphor. Simplify boldly into large
silhouettes, geometric shapes, cut forms, broad color blocks, and a few visible
handmade marks. The lower half should preserve the source's visual truth at the
level of recognition and feeling, not photographic detail.

Use a light, slightly imperfect flat language combining paper cutouts, gouache,
soft pastel, Risograph, and screen-print sensibilities. Allow handmade contour
variation, restrained registration drift, powdery edges, and paper grain, while
keeping the result refined rather than craft-shop busy.

Avoid full-scene tracing, realistic lower-half rendering, polished 3D objects,
glossy vector gradients, dense linework, decorative clip art, cartoon/anime
styling, or a collection of unrelated icons.

## Composition and visual path

Create a nearly white, clean tonal field for the lower section, subtly derived
from the source's overall light, temperature, and mood. It may lean warm white,
cool white, pale blush, mist blue, or soft gray-green. Large quiet areas are a
primary design element.

Arrange the fragments through controlled improvisation rather than a template:

- no regular grid, fixed center, fixed left/right formula, or equal-size row;
- vary scale, rotation, height, spacing, overlap, and directional emphasis;
- use scale contrast, diagonal echoes, staggered levels, positive/negative shape,
  and sparse/dense rhythm to create a hidden reading route;
- keep the overall visual weight stable even when the layout is asymmetric or
  casually off-balance;
- let each fragment breathe as if it were an observation or thought on paper.

The composition should look spontaneous at first glance but clearly guided on
second viewing. Keep the lower section spacious enough that the fragments do
not become a sticker sheet, catalog, scrapbook, or busy infographic.

## Palette and text

Derive a soft, translucent, slightly desaturated healing palette from the
source. Favor pale pink-blue, mist blue, sky blue, cream, ivory, pale beige,
soft gray-green, milky apricot, blush pink, soft peach, and dusty rose. Retain
only a small amount of a clearer source color as a visual punctuation point.
Avoid muddy gray, neon, high-saturation clashes, heavy brown, dirty vintage
filters, and thick dark shadows.

Do not predefine a title, number, location, year, language, or repeated label
system. If the photo supports it, add only a few meaningful characters, words,
short phrases, or handwritten observation fragments in the user's language.
Text may sit near a shape, follow its direction, rest in a quiet gap, or act as
a subtle bridge between fragments. It must be sparse, legible enough to read,
and semantically tied to the source's action, mood, sound, memory, or metaphor.
Never add pseudo-text, filler captions, invented factual metadata, logos,
watermarks, or typography solely to make the poster look designed.

## Prompt compilation

Before generating each poster, compile one direct source-specific image-edit
prompt that states:

1. one independent 3:4 portrait output and the real-photography / selective-memory lower-half relationship;
2. the upper-half preservation invariants and any safe environmental extension;
3. the core theme and the exact 3–6 lower visual fragments, with their hierarchy;
4. the pale background field, fragment sizes, positions, rotations, overlaps, and intended eye path;
5. the paper/gouache/pastel/Risograph/screen-print material language and source-derived palette;
6. the exact minimal text, if any, and its placement;
7. hard exclusions: no multi-photo layout, no distorted subject, no full-scene literal redraw, no random objects, no regular grid, no sticker catalog, no dense decoration, no fake metadata, no watermark.

Do not quote or display this production brief. Use it internally to make the
image edit. Return only the independent generated images, with at most one
short status sentence if needed.

## Inspect and correct

Review every result at full size and thumbnail size. Check that the upper half
still reads as genuine photography, the lower half contains 3–6 recognizable
source-connected fragments, the core theme is legible, negative space remains
generous, and the composition has a stable but non-formulaic eye path.

If the result is merely a filtered photo, strengthen the lower reconstruction.
If it is a full illustration, restore photographic detail above. If the lower
half feels random or crowded, remove fragments and consolidate them into larger
forms. If it resembles a grid or sticker sheet, vary scale and placement and
restore breathing room. If text is decorative or invented, delete it. Use one
targeted correction and regenerate only when the visual contract is missed.
