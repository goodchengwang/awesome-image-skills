---
name: photo-vector-diptych-poster
description: Edit each user-supplied photograph into its own 3:4 premium poster with a strictly equal real-photography upper half and a source-specific minimalist flat-vector travel-poster scene below. Use for tailored photo-and-illustration diptychs about places, people, animals, objects, vehicles, plants, architecture, or landscapes; do not use for multi-photo collages, sticker-memory layouts, full-scene illustration, or ordinary photo filters.
metadata:
  inspiration_source: https://x.com/xiaoxiaodong01/status/2091461184516227185
---

# Photo–Vector Diptych Poster

Use the system `imagegen` skill and the built-in image-generation tool. Treat every supplied photograph as an edit target and produce a raster poster, not SVG, HTML, or a text-only prompt.

## Output contract

- Return one independent image for each source photograph. Never combine several photographs into one canvas, collage, contact sheet, or sequence panel.
- Use a 3:4 vertical canvas for every output.
- Divide the canvas with one horizontal boundary at exactly 50% height. The upper photographic region and lower illustrated region must each occupy exactly half of the finished poster. Do not use an uneven split, overlap across the boundary, inset photo, floating frame, sticker edge, or decorative transition band.
- Keep the two halves visually related through subject identity, narrative relationship, palette, and rhythm, while making their media clearly different at thumbnail size.
- When several source photographs are supplied, analyze and edit them separately and issue one image-generation call per requested poster.

## Preserve the photographic upper half

The upper half must remain recognizably real photography. Preserve the source subject's identity, count, anatomy or structure, pose, silhouette, proportions, spatial relationships, viewpoint, natural light, texture, and original color atmosphere.

Apply only restrained art-magazine, independent-publication, or exhibition-photography color correction. Do not redraw, vectorize, beautify, stylize, replace, or materially relight the subject. Do not apply illustration texture, paper grain, gradients, stickers, or graphic overlays to this region. The only permitted addition is restrained editorial typography placed in genuine negative space as described below.

Crop naturally for the upper 3:2 region implied by the final layout. If more area is required, extend only plausible sky, ground, wall, water, foliage, or environmental background. Never stretch, warp, duplicate, or redesign the subject to fill the frame.

## Read the source before designing the lower half

Privately identify for each photograph:

1. the irreplaceable hero subject or relationship;
2. its defining silhouette, gesture, posture, direction, or structural rhythm;
3. the place, object, activity, state, or atmosphere actually supported by the image;
4. two to four supporting cues that best communicate environment, local character, everyday life, or the subject's condition;
5. a composition architecture that grows from the source rather than from a reusable template;
6. a short supported title and restrained tagline;
7. the source-derived temperature and the few colors worth carrying into the illustration.

Do not assume the image depicts a city. The same method must work for architecture, a person, an animal, a plant, an object, a vehicle, an interior, or a natural landscape. If the exact place or object name is not reliably known, use a truthful theme, state, or atmosphere instead of inventing a location or proper noun.

## Reconstruct a tailored lower scene

Translate the source into an original premium minimalist flat-vector travel-poster scene. Preserve the hero's recognizable identity, silhouette, pose, and narrative relationship, but simplify rather than mechanically trace the photograph.

Build the lower half around:

- one unmistakable main focal point derived from the source;
- two to four subordinate source-supported elements;
- clear foreground, middle-ground, and background separation when the scene benefits from depth;
- intentional negative space and a calm, ordered eye path;
- three to six small figures when people are needed for scale or daily-life context. Keep them naturally integrated and avoid turning a supporting person into a dominant protagonist. When the source hero is a person, preserve the defining silhouette, pose, and relationship without adding unrelated crowd activity.

Choose a source-specific scene form such as a street, square, shore, courtyard, passage, platform, garden, interior corner, open landscape, or quiet lived-in fragment only when the photograph supports it. Vary viewpoint, horizon, focal placement, foreground shape, negative-space location, and supporting-object arrangement from image to image.

Avoid landmark piles, postcard checklists, scrapbook composition, generic tourism formulas, excessive narrative, and repeated foreground props. The supporting elements must clarify why this particular subject, place, or situation is distinctive; they must not compete with the focal point.

## Illustration language and palette

Use refined minimalist flat-vector styling with Japanese stationery sensibility, boutique sticker-illustration polish, and modern editorial travel-branding restraint:

- clean geometric forms, soft contours, consistent line weight, flat color blocks, and controlled detail;
- fresh, quiet, contemporary composition with generous breathing room;
- no photorealism in the lower half, gradients, heavy shadows, watercolor, paper texture, painterly strokes, complex hatching, glossy 3D effects, dense background detail, or visual clutter.

Lead the palette with pale pink-blue, mist blue, sky blue, and cool airy blues. Balance them with ivory, cream, pale beige, muted sage or gray-green, and quiet architectural neutrals. Derive the exact balance from the source photograph's temperature. Reserve dusty rose or muted blush for a few tiny accents such as flowers, clothing, a small sign, awning, or ornament. Keep the entire poster light, cohesive, slightly desaturated, and spacious.

## Integrate editorial typography

Derive one concise title from the supported location, subject name, theme, state, or atmosphere. Add one short, restrained tagline that complements rather than explains the image. Prefer the poster's upper-left when it contains genuine negative space; otherwise use another spacious area in either half. Typography may sit over the photograph only when it remains quiet, does not cover the subject, and does not weaken the truthful photographic reading.

Use understated, spacious, premium editorial typography. Keep it subordinate to the focal subject. Add coordinates, a micro-caption, or tiny informational text only when the source supports it and it materially improves the design. Never invent logos, brands, issue numbers, dates, coordinates, pseudo-language, or unsupported facts.

Include the chosen title and tagline verbatim in the image prompt. Prefer short wording that the image model can render legibly. Do not use a fixed city-name template or a title bar pasted across the composition.

## Compile the edit prompt

For each photograph, write a direct production prompt that specifies:

1. one independent 3:4 portrait raster poster and the exact horizontal 50/50 media split;
2. the upper-half photographic preservation invariants, restrained color correction, crop, and any safe background extension;
3. the lower-half hero subject, defining silhouette or relationship, and source-specific scene architecture;
4. the selected two to four supporting cues, depth order, eye path, and shaped negative space;
5. any small figures and their quiet environmental role;
6. the flat-vector construction, consistent outlines, controlled detail, and source-derived blue-led palette;
7. the exact title and tagline with their restrained placement inside the lower half;
8. hard exclusions: no multi-photo canvas, no uneven split, no overlap across the midpoint, no stylization of the upper photo, no literal full-photo tracing below, no sticker-memory layout, no landmark collage, no reusable travel template, no gradients, no paper texture, no dense detail, no unsupported text, no logo, and no watermark.

Do not quote or restate the user's design brief in the user-facing response. Use it as internal production direction and proceed to the edits.

## Inspect and correct

Review every result at full size and thumbnail size. Confirm:

- the output is 3:4 and the horizontal boundary is exactly centered;
- the upper half still reads as truthful photography with intact identity, geometry, lighting, and texture;
- the lower half is unmistakably flat-vector illustration and not a filtered or traced photograph;
- the lower scene has one clear focal point, only two to four supporting cues, and source-specific composition;
- the palette is airy and restrained, with blush used only as a small accent;
- the title and tagline are relevant, legible, quiet, placed in real negative space, and do not obscure the photographic subject;
- different source photographs do not reuse the same layout, foreground, props, or object arrangement.

If the split drifts, correct only the region allocation and boundary. If the photograph looks illustrated or altered, restore photographic realism and the preserved invariants in the upper half. If the lower half looks generic, replace generic props with source-specific cues and change its composition architecture. If it is busy, remove supporting elements and enlarge negative space. If text is wrong or dominant, shorten it and retry with the exact wording and quieter placement. Make one targeted correction at a time while repeating all preservation constraints.

Return all final posters clearly as separate images, one per source photograph, with at most one short status sentence and no promotional copy.
