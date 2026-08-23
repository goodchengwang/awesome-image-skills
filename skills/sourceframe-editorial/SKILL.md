---
name: sourceframe-editorial
description: Transform a user-supplied photograph into an elegant real-scene editorial collage built from one truthful photographic anchor, a large source-derived illustration field, and a clearly visible material seam. Use when the user wants photography and tactile illustration to coexist as one spacious poster or artwork; do not use for a subtle photo filter, full-scene redraw, scrapbook montage, or ordinary graphic overlay.
---

# Sourceframe Editorial

Use the system `imagegen` skill and built-in image-generation tool. This is an edit of the supplied photograph. Inspect the source first, include it as the edit target, and return a raster image.

The result must visibly contain two different image states—truthful photography and authored illustration—joined into one continuous scene. A viewer should recognize both states immediately at thumbnail size. At full size, the photographic region must still look like an actual photograph, not a photograph redrawn or globally printed onto paper.

Resolve aesthetic conflicts in this order: scene identity, overall silhouette, cross-media continuity, visual hierarchy, material refinement, then microtexture. A conspicuous seam or rich texture never compensates for weak composition.

## Use the Anchor–Field–Seam system

Resolve these three parts before writing the generation prompt:

1. **Anchor:** preserve one irreplaceable photographic subject or relationship with enough supporting photographic area to carry visual authority.
2. **Field:** reinterpret a larger part of the source as a deliberately composed illustration field with one dominant mass, one supporting gesture, and quiet paper.
3. **Seam:** create a materially credible handoff where photography becomes illustration, with at least one source contour crossing it. The seam supports continuity; it is not the focal subject.

Do not reduce the field to a border, corner flourish, translucent overlay, or small doodle. Do not make the seam a clean digital mask.

## Lock a three-zone media map

Assign every meaningful region to exactly one zone before prompting:

- `PHOTO`: one contiguous or strongly connected photographic plate occupying about 35–55% of the artwork. Preserve native source pixels, natural tonal range, fine texture, realistic color, and photographic depth inside it.
- `ILLUSTRATION`: a separate field occupying most of the remaining composition. Rebuild it as simplified ink, wash, contour, cut-fiber, or another chosen illustration grammar; do not leave hidden photography underneath.
- `SEAM`: a narrow transition zone connecting the two states, usually only 1–3% of the whole artwork. It may abrade, feather, dissolve, or migrate material, but it may not spread across the photographic plate or become a full-height visual divider.

Do not apply paper grain, halftone, dry ink, watercolor, line work, faded color, or vintage print texture across `PHOTO`. Cropping and a narrow seam transition are allowed; repainting the anchor is not.

## Read the source into a scene blueprint

Identify:

- the hero anchor: one person, structure, vehicle, object group, or spatial relationship that carries identity;
- the continuity line: horizon, shoreline, bridge, road, roof, reflection, gaze, shadow, or silhouette that can pass through both media;
- the depth order and perspective that must remain believable;
- the visual entry, resting point, and quiet exit;
- the source color family and one minor color worth intensifying;
- the details that can disappear without losing the scene.

Preserve subject count, identity, gesture, perspective, relative position, and the continuity line. Preserve only the photographic region needed to make the anchor authoritative.

If the hero is a small person, animal, vehicle, or object, preserve an attached support plane—bridge, ground, wall, reflection, table, shadow, or nearby structure—rather than leaving the hero as a tiny isolated cutout.

## Allocate the canvas decisively

Default to a flat paper artwork with no frame, desk, wall, hands, or mockup environment.

- For portrait sources, use a 4:5 or 3:4 portrait canvas.
- For landscape sources, use a 3:2 or 5:3 landscape canvas.
- Let truthful photography occupy about 32–52% of the finished artwork.
- Let the interpreted field influence about 48–68% of the artwork, including quiet paper within that field.
- Let active illustrated ink or material occupy about 18–36% of the whole artwork.
- Keep approximately 30–52% of the whole artwork visually quiet.

Correct these ranges by visual weight, but never let the photograph remain as a full-frame plate with minor decoration.

The photographic share is measured by visibly photographic pixels, not by the area that merely depicts the same objects. If the model redraws or print-processes the anchor, that area no longer counts as photography.

## Choose one composition architecture

Read [references/collage-architectures.md](references/collage-architectures.md) and choose the architecture that grows from the source geometry. Use one architecture only.

The photographic anchor may touch an edge or float inside the field. The field must be large enough to establish the poster silhouette and viewing rhythm.

Prefer an edge-borne, horizon, depth, or reflective architecture when the source supports it. Use a suspended aperture only when the source contains a naturally compact scene cluster; do not default to a centered irregular photo island.

## Translate rather than trace

For the illustration field, decide what to:

- preserve as one defining silhouette or direction;
- merge into broad masses or sparse rhythms;
- remove as clutter;
- convert into line print, flat ink mass, translucent wash, dry brush, or cut-fiber shape;
- leave as unprinted paper.

Remove roughly two thirds of nonessential descriptive detail. Dense foliage, crowds, windows, waves, branches, roofs, and texture should become grouped masses and interrupted marks, not an exhaustive vintage tracing.

Choose one main illustration grammar and at most one subordinate texture. Build the field from one dominant mass, one supporting directional gesture, and one restrained texture passage. Keep it spacious, incomplete, and source-specific.

## Build the material seam

Choose exactly one seam treatment:

- peeled emulsion: an irregular photographic edge with a narrow pale abrasion band;
- feathered pulp: short, uneven paper fibers exposing the substrate;
- ink migration: photographic color breaks into dry printed dots and then simplified illustration;
- translucent laminate: a thin cloudy membrane lifts from the photo and becomes the illustrated field.

The seam must affect a meaningful section of the composition, not form a uniform decorative frame. Continue the continuity line, reflection, shadow, or silhouette across it so the two media describe the same place.

Keep exposed abrasion, pulp, or transition bands visually narrow—usually about 0.4–1.5% of the short canvas edge. Show the seam along roughly 25–60% of the photographic perimeter and let it disappear where crossing forms can join the media more elegantly. Avoid a thick pale halo around the anchor.

Concentrate visible seam behavior at two to four meaningful pressure points such as the horizon, bridge, shoulder, reflection, shoreline, or shadow. Avoid continuous top-to-bottom splatter, a central rupture stripe, or residue dispersed far from the handoff.

## Unify the art direction

- Use warm natural paper or a scene-appropriate pale substrate as the common ground.
- Use one principal ink family derived from the source: blue-gray, charcoal, umber, moss, muted burgundy, or another specific family.
- Optionally intensify one source-derived accent; it must redirect balance or eye movement.
- When the anchor contains a meaningful minor color, echo it once in the field as a small structural continuation rather than a detached decorative mark.
- Keep photography naturally colored inside the anchor. Do not wash the complete photo with a global vintage filter.
- Preserve the anchor's native photographic contrast, edge acuity, depth cues, and fine surface detail. It should remain recognizably photographic even when viewed alone.
- Apply grain, fibers, misregistration, dry ink, and scanning character only to the paper, translated field, and narrow seam; never continue them across the photographic plate.
- Prefer flat diffuse reproduction over cinematic lighting, glossy effects, deep shadows, curled paper, or three-dimensional craft mockups.

Do not mix watercolor, vector shapes, charcoal, collage scraps, film burns, tape, stickers, and halftone merely to look artistic.

Before compiling the prompt, read [references/refinement-director.md](references/refinement-director.md) and resolve the artwork's silhouette, density, seam restraint, color balance, and quiet-space shape.

## Handle text

No text by default. If the user supplies exact wording, reserve one quiet paper area and add the text deterministically after image generation when possible. Keep it small and subordinate. Never invent issue numbers, branding, captions, signatures, or pseudo-text.

## Compile the image prompt

Write a production brief with these visible decisions:

1. canvas ratio, paper substrate, quiet-space share, and eye path;
2. exact photographic anchor and preservation invariants;
3. explicit `PHOTO`, `ILLUSTRATION`, and `SEAM` map with approximate allocation;
4. continuity line and how it crosses the material seam;
5. translation map: preserve, merge, remove, convert, leave blank;
6. illustration grammar, active density, ink family, and accent function;
7. dominant illustrated mass, supporting gesture, texture passage, and the shape of quiet paper;
8. seam treatment, narrow transition width, affected perimeter, and crossing forms;
9. hard exclusions: no redrawing or print-processing inside `PHOTO`, no global paper or faded wash over the complete artwork, no full-frame photo underneath, no subtle filter, no centered torn snapshot by default, no thick pale halo, no exhaustive line tracing, no clean clipping mask, no scrapbook fragments, no generic decorations, no accidental text, no watermark.

Use direct spatial language and approximate areas. Do not rely on words such as “premium,” “beautiful,” or “editorial” without describing visible construction.

## Inspect and correct

Evaluate at full size and thumbnail size. Regenerate once with one targeted correction if needed.

- If it looks like a filtered photograph, shrink the photo to a distinct anchor and enlarge the translated field.
- If it looks like a photo with decoration, replace overlays with a real material seam and source-derived field.
- If it looks like a full illustration, restore natural photographic detail only inside the anchor.
- If the anchor looks printed, painted, faded, or paper-textured, restore the original source pixels, native contrast, photographic color, and fine texture throughout `PHOTO`; confine all tactile treatment to `ILLUSTRATION` and `SEAM`.
- If the two media feel unrelated, force the same continuity line and palette through both.
- If the field looks like a literal line-art copy, remove most object detail and rebuild it as one dominant mass, one gesture, and one texture passage.
- If it is busy, merge details into one dominant mass and restore shaped quiet paper.
- If it is dull, strengthen value separation before adding saturation or texture.
- If quiet space feels dead, reshape it around the eye path or introduce one very low-density source-derived passage without filling it.
- If the seam looks digitally clipped, make its contour irregular and give it physical transition behavior.
- If the seam dominates, narrow it, hide part of the perimeter, and let crossing forms perform more of the transition.

Before returning, confirm that removing either the anchor or the field would materially weaken the artwork. Also confirm that a viewer can point to a substantial region and say “this is still a real photograph,” and to another substantial region and say “this is clearly illustration.” Return the final image and one concise sentence explaining the anchor, field, and seam. Do not add promotional copy or mandatory attribution.
