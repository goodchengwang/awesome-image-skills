---
name: theme-scene-line-diptych-poster
description: Create a printable 3:4 diptych poster from the user's latest theme, place, address, or reference image, with a coherent real-life scene above and a precise minimal line-art distillation of that same scene below. Use for cities, streets, districts, landmarks, shops, architecture, cultural subjects, objects, people, animals, or nature; do not use for unrelated generic tourism scenes, landmark collages, invented place details, or photo-edit requests that require preserving an uploaded image unchanged.
metadata:
  inspiration_source: https://x.com/xiaoxiaodong01/status/2089972269724619259
---

# Theme Scene Line Diptych Poster

Use the system `imagegen` skill and image-generation tool. Generate one high-resolution raster poster from the user's latest explicit theme. If several distinct themes are supplied, produce one independent poster for each rather than combining them.

This skill creates a new scene. When the user uploads reference images, use them as evidence for subject identity, spatial relations, architecture, signage, materials, color, and atmosphere; do not simply paste the reference into the upper half unless the user explicitly requests that.

## Output contract

- Use a 3:4 portrait canvas suitable for printing.
- Divide the canvas with one exact horizontal 50/50 boundary. The upper half is one coherent real-life scene; the lower half is a line-art redesign extracted from that exact scene.
- Keep both halves compositionally related through subject, silhouette, structure, direction, scale, and narrative relationship.
- Produce one complete poster per theme, with no multi-image collage, contact sheet, tourist checklist, or separate inset pictures.
- Include one main title and only supported subtitle/location/address/coordinate/identifier copy.
- Return the generated poster image with minimal user-facing commentary.

## Resolve the theme and factual scope

Identify the latest explicit subject and classify it:

- city, region, neighborhood, street, district, or commercial area;
- exact landmark, building, shop, restaurant, address, or coordinate;
- person, animal, plant, object, food, vehicle, interior, or natural scene;
- abstract theme, mood, event, cultural practice, or everyday activity.

Record which details are user-provided facts, which are visible in references, and which are reasonable non-factual creative choices.

For a real place, address, coordinate, shop, landmark, or named site:

- inspect user-supplied references first;
- use available browsing or reliable reference tools when exact spatial, architectural, signage, or location accuracy matters;
- preserve known street orientation, facade identity, neighboring structures, transit, signage language, and local visual systems;
- if a fact cannot be verified, omit it or use a generic but compatible minor detail rather than inventing a false name, address, coordinate, or landmark.

Do not fabricate storefront names, street signs, transit symbols, architectural features, addresses, or coordinates. If exact accuracy is essential and no evidence is available, request a reference rather than silently substituting a generic scene.

## Design one coherent upper scene

Build one unified real-life moment, not a collage of attractions or cultural symbols.

For a city or place, privately extract:

1. spatial landscape and street geometry;
2. characteristic architecture and material;
3. daily-life activity and crowd density;
4. commerce, food, transit, and public-facility cues;
5. cultural or historical layers supported by the theme;
6. climate, light, season, and time-of-day character;
7. signage language, wayfinding, storefront, and typographic rhythm;
8. one focal relationship tying people, place, activity, and landmark together.

Choose a restrained everyday moment: opening a shop, waiting for transit, crossing a street, sitting under shade, preparing food, walking past a facade, watching water, entering a market, or another theme-specific event.

Integrate any landmark naturally into the lived environment. Keep it correctly scaled and subordinate to the scene's human rhythm when appropriate.

For non-place themes, build one real-feeling scene showing the subject's identity, function, action, environment, and relationship. Avoid isolating it as a product unless the theme itself is a product portrait.

Use believable photography-like materials, natural light, coherent perspective, and one camera position. Avoid cheap tourism advertising, postcard landmark piles, cinematic spectacle, heroic monument exaggeration, stock-lifestyle poses, and unrelated generic scenery.

## Preserve reference truth

When references are provided, preserve:

- subject count, identity, orientation, pose, proportions, and relation;
- street/building layout and major perspective lines;
- facade openings, rooflines, storefront rhythm, transit or street furniture;
- local materials, color atmosphere, light, and weather;
- exact visible wording only when it can be read reliably.

You may simplify minor clutter or extend plausible sky, ground, street, wall, water, or surrounding environment for the 3:4 layout. Do not stretch, mirror, warp, or replace defining features.

## Distill the lower half from the upper scene

Treat the finished upper composition as the sole visual source for the lower line work. Extract:

1. the primary hero or inseparable relationship;
2. decisive silhouette and structural edges;
3. perspective grid, horizon, street or object axes;
4. key openings, signs, windows, transport, paths, or human gestures;
5. one or two rhythms that make the theme recognizable;
6. the negative spaces essential to identity.

Redraw with fine, accurate single lines, clean geometric perspective, controlled blank space, and moderately abstract forms. Use line density to distinguish focal structure, supporting scene, and quiet paper.

For cities and places, prioritize skyline, facade/street interface, sign rhythm, transit, shop windows, crowd posture, and spatial path. For other themes, preserve the core contour, structure, action, function, and memory cue.

Add only a few supporting horizontal, vertical, construction, or rhythm lines. The lower half should feel like a designed extraction, not a tracing, blueprint, engineering diagram, or empty outline.

Avoid excessive detail, crosshatching, realistic shading, many small icons, generic architectural lines, decorative grids, complex annotation, and any element not present in the upper scene.

## Coordinate both halves

Create a visible echo between halves:

- align a hero, horizon, axis, facade edge, path, or silhouette across the boundary;
- preserve the same facing or movement direction;
- repeat one proportional interval or negative-space relationship;
- let the lower line density answer the upper scene's visual weight;
- keep the exact 50/50 boundary clean and readable.

Do not overlay the line art onto the upper image or blend media across the midpoint. The relationship comes from structure and rhythm, not transparency or montage.

## Derive a theme-specific color system

Do not apply a fixed palette. Determine:

- climate and light;
- time and season;
- architecture and material;
- historical and commercial temperature;
- food, nature, and local color memory;
- emotional character of the chosen moment.

Choose one principal hue/background relation unique to the theme. Use monochrome printing or a very limited restrained palette when it clarifies the design. Build variation with line density, value, local ink weight, blank space, and a few controlled accents.

Keep the upper scene believable and the lower graphic unified. Avoid arbitrary brand colors, generic travel-poster orange/blue, rainbow palettes, flat uniform color, muddy grading, neon, and color unrelated to the theme.

## Build the title and information system

Place one clear main title at the top of the poster. It may use the theme's exact user-provided name or verified place/subject name.

Add only supported secondary information:

- original/local language name;
- country or region;
- verified address or coordinate;
- a user-provided or verified identifier/year;
- one short descriptive phrase.

Do not invent local-language spelling, addresses, coordinates, years, or numbers. For real street text and storefront signs, use only verified wording and the correct writing system. Keep exact text short enough to render clearly.

Use a clean modern editorial hierarchy with consistent margins, alignment axes, and spacing. Integrate type with the scene and line-art geometry rather than placing labels arbitrarily.

Check all prominent text for spelling and malformed characters. If an image-generation pass produces garbled text, shorten the wording and make one targeted correction.

Avoid large promotional slogans, dense tourist information, fake seals, logos, brands not present in the source, QR codes, interface panels, and multiple title treatments.

## Compile the generation prompt

Write a source-specific prompt containing:

1. one high-resolution printable 3:4 portrait raster poster and exact 50/50 horizontal split;
2. the latest theme and all verified/reference-backed facts;
3. the upper scene's camera position, spatial layout, hero relationship, architecture/environment, people/activity, materials, signage, light, and atmosphere;
4. the explicit everyday moment and why it represents the theme;
5. the lower hero, silhouette, perspective grid, axes, openings, sign/street/object rhythms, human gestures, negative spaces, and line-density hierarchy extracted from the upper scene;
6. the exact cross-half structural echoes and clean midpoint boundary;
7. the theme-specific principal hue, background relation, restrained palette, values, line weights, and blank-space proportions;
8. the exact verified title, local-language copy, region/address/coordinate/identifier/year, and short description to render;
9. hard exclusions: no multi-image collage, no unrelated generic landscape, no landmark pile, no invented architecture/signage/place facts, no cheap tourist advertising, no postcard montage, no distorted references, no line-art overlay across the top, no uneven split, no lower tracing or blueprint, no garbled prominent text, no dense decoration, no logo, and no watermark.

Use concrete factual, spatial, architectural, activity, line, color, and typography language rather than relying on adjectives such as “premium,” “authentic,” “city,” or “modern.”

## Inspect and correct

Review the result at full size and thumbnail size. Verify:

- exact 3:4 format and 50/50 split;
- one coherent upper scene rather than a collage;
- accurate theme and reference identity;
- believable real-life spatial relationship and daily activity;
- no invented prominent signs, addresses, coordinates, or landmarks;
- lower line art clearly extracted from the upper scene;
- shared structure and direction across halves;
- theme-specific restrained color;
- correct, legible title and supported information;
- quiet, unified, print-ready finish.

If the upper scene feels generic, strengthen verified local spatial and material cues. If it becomes a tourism collage, remove all but one coherent moment. If lower line work feels unrelated, re-extract its hero and axes from the generated upper scene. If text is malformed, shorten and regenerate. If facts are uncertain, remove them rather than guessing.
