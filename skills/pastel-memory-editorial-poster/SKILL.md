---
name: pastel-memory-editorial-poster
description: Edit each user-supplied photograph into its own 3:4 premium editorial poster with truthful photography above and a soft, source-derived pastel painting reconstruction below. Use for quiet, healing art-book, travel-journal, exhibition, and personal-memory treatments; do not use for multi-photo collages, sticker layouts, literal full-scene redraws, commercial cartoon illustration, or ordinary photo filters.
metadata:
  inspiration_source: https://x.com/xiaoxiaodong01/status/2091726763701555207
---

# Pastel Memory Editorial Poster

Use the system `imagegen` skill and image-generation tool. Treat every supplied photograph as an edit target rather than a loose reference.

## Output contract

- Produce one independent 3:4 portrait raster poster for each uploaded photo. Make a separate image-generation call and return a separate output for every source; never combine photos into a collage, contact sheet, diptych, or shared canvas.
- Build a legible upper/lower composition: truthful real photography above and a source-derived painted reconstruction below. The transition may be clean, softly interlocked, or subtly overlapping, but the two image states must remain clear at thumbnail size.
- Preserve the upper photograph's subject identity, count, anatomy or structure, pose, silhouette, spatial relationships, authentic texture, natural light, and original color atmosphere. Apply only restrained art-magazine, independent-publication, or exhibition-photography color correction.
- When adapting the source to 3:4, extend only plausible ambient surroundings such as sky, wall, ground, water, or foliage. Never stretch, warp, duplicate, beautify, restage, or redesign the subject.
- Reconstruct the lower half from the same source without tracing or repainting the full scene. Retain only the most recognizable subject, silhouette, gesture, and narrative relationship, organized into a clear focal group, a few important color masses, and intentional quiet space.

Resolve conflicts in this order: source identity, defining pose or relationship, photographic truth above, narrative recognition below, composition and reading path, color atmosphere, handmade material character, then optional text.

## Distill the source narrative

Before prompting, privately determine:

1. the hero subject or relationship;
2. the defining silhouette, pose, direction, or interval between elements;
3. the action, emotion, memory, environment, or cultural cue that gives the photo meaning;
4. which visual clues are indispensable for recognition and which should disappear;
5. the lower composition's focal scale, offset, crop, depth order, and directional pull;
6. the source temperature and 4–7 useful colors, including one possible blush accent;
7. whether a small meaningful word, phrase, sound, or note genuinely strengthens the composition.

Prefer a relationship over an inventory. If the source depends on a person within a place, two subjects at a meaningful distance, a figure facing an environment, or an object connected to an action, preserve that relational geometry. Do not isolate a subject when doing so destroys the source's story.

Compress complexity aggressively. The lower half should usually contain one dominant subject or relational group, several broad supporting masses, and no more than a few quiet environmental cues. Remove crowds, repetitive architecture, excess foliage, props, surface detail, and incidental background description unless one is essential to recognition or atmosphere.

## Direct the lower composition

Compose the painted half with editorial discipline rather than ordinary illustration habits:

- establish one unmistakable visual center and a deliberate entry, movement, resting point, and quiet exit;
- use scale contrast, asymmetric balance, overlap, cropping, foreground/background separation, directional gestures, and shaped negative space;
- allow the hero to sit off-center, enlarge beyond realistic scale, touch or cross an edge, be partially cropped, or concentrate in the middle-lower area when this strengthens the narrative;
- merge secondary details into a few supporting masses instead of distributing many small objects evenly;
- keep the background calm and incomplete, retaining only the spatial or environmental clues needed to hold the subject;
- make quiet space carry air and rhythm; it need not be pure white, but it must be intentionally shaped around the subject and reading path.

The lower half must feel like a remembered and reorganized scene: immediately recognizable yet simplified, selective, and newly composed. Avoid centered badge layouts, evenly spaced objects, filled scenic backdrops, rigid symmetry, sticker collections, and decorative motifs unrelated to the source.

## Painting language

Use a tender, bright, healing handmade pastel-paint language that combines opaque gouache, acrylic, oil pastel, soft wax pastel, and restrained palette-knife character:

- soft but decisive color masses with visible, medium-scale brushwork;
- matte, opaque pigment with subtle buildup, layering, overpainting, scraping, dry drag, and occasional exposed ground;
- clean edges that loosen slightly in selected places rather than hard digital outlines;
- simplified forms with accurate identity, defining silhouette, and key pose;
- a small amount of tactile irregularity, correction, and incomplete coverage that makes the work feel hand-painted.

Keep the marks clear without becoming coarse, muddy, or aggressively impastoed. Avoid transparent watercolor dominance, delicate pen sketching, sticker cut edges, smooth vector geometry, airbrushed gradients, glossy 3D plastic, photographic realism in the painted half, anime, cartoon templates, and polished e-commerce illustration.

## Color direction

Derive the palette from the photograph's overall temperature, then translate it into a soft, airy, slightly desaturated system with clear warm/cool balance.

- Favor pale pink-blue, mist blue, sky blue, powder blue, and other cool atmospheric blues as the principal field when compatible with the source.
- Balance them with ivory, cream, pale beige, soft gray-green, and restrained architectural neutrals.
- Use blush pink, soft peach, dusty rose, or muted blush only as small accents that guide the eye or clarify hierarchy.
- Preserve important source colors when they carry subject identity, cultural meaning, or narrative function; harmonize them instead of replacing them with a generic pastel filter.
- Keep the result luminous, unified, and breathable through value and proportion, not by washing every region with the same tint.

Avoid dirty gray casts, dull brown nostalgia, heavy contrast, neon or highly saturated collisions, candy sweetness, cheap retro grading, and an indiscriminate all-over pastel filter.

## Editorial text

Do not impose a fixed title, issue number, date, place name, language, menu, logo, or information system. Decide from the individual source whether zero, one, or at most two very short textual fragments belong in the poster.

When text is justified, derive it from the visible subject, action, setting, emotion, memory, sound, or cultural context. Use an exact meaningful word, phrase, or short fragment rather than generic inspirational copy or pseudo-editorial filler. Keep it small, light, restrained, and subordinate, like editorial notation in an independent publication.

Place text within shaped quiet space, close to a relevant subject, along an existing visual axis, or as a delicate edge annotation. Let typography participate in balance without becoming a commercial headline. Require accurate, legible wording; remove text if generation produces gibberish, changes the intended phrase, or competes with the image.

## Compile the edit prompt

For each source, write a direct spatial production brief containing:

1. one independent 3:4 portrait output and the upper/lower media structure;
2. exact upper-photo preservation invariants and any safe ambient extension;
3. the hero subject or relationship, defining gesture, and central narrative or memory;
4. a short retain list and an explicit removal list for the lower reconstruction;
5. the lower hero's scale, offset, crop, depth order, directional pull, supporting masses, and shaped quiet space;
6. the source-derived temperature, cool atmospheric base, neutrals, and restrained blush accent;
7. the opaque handmade painting grammar and visible but refined material marks;
8. zero to two exact meaningful text fragments with placement, or an explicit no-text instruction;
9. hard exclusions: no multi-photo canvas, no source montage, no distorted subject, no complete lower-scene copy, no object catalog, no stickers, no filled decorative background, no template poster, no uniform pastel wash, no vector-clean finish, no plastic 3D, no cartoon/anime, no e-commerce illustration, no meaningless text, and no watermark.

Use concrete, source-specific visible decisions instead of relying on adjectives such as “premium,” “healing,” or “artistic.” Do not quote or display the user's full design brief; treat it as internal production direction and proceed directly to image editing.

## Inspect and correct

Review every poster at full size and thumbnail size. Regenerate once with one targeted correction when needed.

- If it looks like a filtered photograph, restore a clearly distinct painted lower reconstruction.
- If the upper half looks painted, smoothed, identity-altered, or globally textured, restore truthful photographic detail, natural color, and authentic surface texture.
- If the lower half resembles the complete source scene, remove background description and reduce it to the hero subject, key relationship, broad masses, and quiet space.
- If recognition is weak, restore the defining silhouette, pose, interval, or indispensable source cue before adding detail.
- If it feels busy, merge or remove secondary elements before shrinking everything; strengthen the focal scale and quiet field.
- If the layout feels generic, change the hero's offset, enlargement, crop, overlap, or direction and rebuild the eye path.
- If the painting looks digitally smooth, strengthen pigment buildup, dry drag, overpainting, broken edges, and selective incomplete coverage.
- If it looks coarse or muddy, simplify the brushwork, clean the main contours, and restore lighter color separation.
- If color is too gray, sweet, or saturated, rebalance cool blues, pale neutrals, and one restrained blush accent.
- If text is generic, garbled, oversized, or dominant, correct it or remove it.

Return all independent images clearly, one per source photograph, with no promotional copy. A single short status sentence is optional.
