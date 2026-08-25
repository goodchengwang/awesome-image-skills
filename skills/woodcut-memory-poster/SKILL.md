---
name: woodcut-memory-poster
description: Edit each user-supplied photograph into its own 3:4 premium poster with a truthful photographic upper half and a source-derived, limited-color handmade woodcut print below. Use for warm editorial photo-and-print treatments; do not use for multi-photo collages, full-scene filters, polished vector illustration, or dark generic vintage posters.
metadata:
  inspiration_source: https://x.com/xiaoxiaodong01/status/2091453089954070791
---

# Woodcut Memory Poster

Use the system `imagegen` skill and image-generation tool. Treat the uploaded photograph as the edit source; do not create an unrelated scene.

## Output contract

- Produce one independent raster poster for every uploaded photo. Never combine photos into a collage, contact sheet, diptych, or shared canvas.
- Use a 3:4 portrait canvas with one precise horizontal division: truthful photography occupies the top 50% and the woodcut reconstruction occupies the bottom 50%. Do not use an approximate split or let either region invade the other.
- Preserve visual correspondence between the two halves, but make their media unmistakably different at thumbnail size.
- Return each poster as a separate image with no promotional copy.

## Preserve the photographic half

Keep the upper half recognizably photographic. Preserve subject identity and count, anatomy or construction, pose, proportions, direction, spatial relationships, real materials, perspective, natural light, and the source color atmosphere.

Apply only restrained art-publication color correction: controlled tonal balance, clean highlight and shadow separation, natural color, and subtle editorial refinement. Do not repaint, stylize, print-process, paper-texture, or globally vintage-filter this region.

Crop deliberately for the 3:4 layout. When more area is needed, extend only plausible sky, ground, wall, water, or environmental background. Never stretch, mirror, warp, duplicate, or redesign the subject.

## Read the source before prompting

For each photo, privately identify:

- the single most recognizable subject or subject relationship;
- its defining silhouette, pose, direction, proportion, and structural cues;
- the essential foreground/background or object-to-object relationship needed for recognition;
- a simplified light/dark map and the details that can be deleted;
- the source colors carrying the strongest emotional memory;
- one source-specific 1–3 word title and a few very short annotation words derived from identity, action, mood, state, place, or metaphor.

Do not expose this analysis or repeat the user's design brief.

## Rebuild the lower half as a woodcut memory

Translate rather than trace. Remove complicated background, small description, and incidental texture. Retain only the silhouette, proportions, direction, major value divisions, key structures, and core spatial relationship that make the source immediately recognizable.

Build the reconstruction around one dominant visual anchor. Place and scale it according to the source's own weight and movement: centered, offset, lightly cropped, or extended toward one edge are all valid. Surround it with generous warm paper. Prefer an incomplete composition over a complete scene or a neatly bounded illustration.

Render the subject as a limited-color woodcut or linocut impression made with real carving and matte ink:

- hesitant, uneven cuts; blunt or abrupt turns; irregular line width;
- fuzzy edges, small breaks, notches, missing fragments, and asymmetrical negative cuts;
- dry-brush drag, under-inking, ink gaps, coarse particles, and restrained registration drift;
- irregular paper show-through and naturally worn edges that fade into the substrate;
- broad printed masses and carved negative space instead of smooth outlines or exhaustive line work.

The lower half must not look like a filtered copy of the photograph, a complete background redraw, clean vector art, polished clip art, cartoon rendering, or a rectangular print pasted onto the page.

## Palette and paper

Derive the inks from the upper photograph, preserving its most memorable color cue while translating the full palette into a fresh, healing, high-key limited-color system. Favor cream, ivory, pale pink, mist green, light blue, tender yellow, pale orange, mint, soft coral, and light ochre when supported by the source.

Keep saturation low to medium, lightness high, and contrast soft but legible. Every color should feel like a separate layer of matte physical ink with visible grain. Avoid muddy gray-brown casts, oppressive shadows, dirty distressing, heavy sepia, dark nostalgia, or loud synthetic saturation.

Use warm paper as an active compositional shape, not merely a background fill. Let missing ink, broken contours, exposed paper, and natural abrasion dissolve the print before it forms a complete rectangular edge.

## Integrate source-grown typography

Typography is part of the print composition, not a fixed caption block.

- Add one meaningful 1–3 word title derived from the specific photo, plus a restrained cluster of very short keywords or a micro-note.
- Let the title follow a silhouette, negative-space boundary, visual axis, or broken print edge. It may support, cross, offset, or answer the image without obscuring recognition.
- Keep annotations tiny and controlled, using a typewriter, monospaced serif, or archival-note character.
- Do not default to a year, issue number, coordinates, branding, logo, signature, generic travel slogan, or invented factual claim.
- Keep wording concise enough to render clearly. Check spelling during inspection and correct obvious pseudo-text or malformed letters.

## Compile the image-edit prompt

Write one source-specific production prompt per input photo containing:

1. one independent 3:4 portrait output and an exact 50% photography / 50% woodcut horizontal split;
2. the upper-half subject-preservation invariants and any safe background extension;
3. the lower-half anchor, preserved recognition cues, deleted details, value map, position, scale, and directional energy;
4. the warm paper negative-space shape and the incomplete, dissolving print boundary;
5. the hand-carved line behavior, matte ink layers, grain, under-inking, and restrained misregistration;
6. the source-derived high-key limited palette and its one most important color memory;
7. the exact short title, microtext, and their source-responsive placement;
8. hard exclusions: no multi-photo layout, no distorted or redrawn upper subject, no approximate split, no lower-half photo filter, no literal full-scene copy, no smooth vector contour, no cartoon, no complete rectangular border, no dark dirty vintage palette, no postcard template, no generic decorations, no watermark.

Use concrete spatial and material language. Do not rely on adjectives such as “premium” or “editorial” without specifying the visible construction.

## Inspect and correct

Review every result at full size and thumbnail size. Regenerate once with one focused correction when a core invariant fails.

- If the split is not exactly half and half, restore the horizontal boundary to the canvas midpoint.
- If the top looks illustrated, printed, faded, or paper-textured, restore natural photographic pixels, fine detail, depth, and source-faithful color there.
- If the lower half looks like a filter or traced photo, delete more detail and rebuild it from broad value masses, carved marks, and paper voids.
- If the print looks smooth or vector-like, introduce irregular cuts, blunt transitions, broken contours, under-inking, and coarse physical grain.
- If the lower half is busy, merge elements into one anchor and enlarge the warm paper void.
- If it forms a complete rectangle, dissolve selected edges through missing ink and paper show-through.
- If the palette is dull, dirty, dark, or heavily retro, lift its value and return to clean source-derived pastel inks.
- If typography looks generic, detached, malformed, or factually invented, shorten it and tie its wording and placement more directly to the source.
- If multiple inputs were combined, separate them and generate one poster per source photo.

Before returning, confirm that the upper region is still a real photograph, the lower region is clearly a hand-printed selective reconstruction, the two regions occupy equal height, and both describe the same source-specific memory.
