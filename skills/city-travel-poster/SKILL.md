---
name: city-travel-poster
description: Create or transform a raster image into an original 3:4 premium minimalist flat-vector travel poster tailored to a named city, preserving useful visual clues from an uploaded reference without copying its layout.
---

# Premium City Travel Poster

Use the system `imagegen` skill and the built-in image generation tool. Produce a raster image, not SVG, HTML, a photo edit, or a text-only prompt.

## Choose the input mode

- If the user uploads a photo or image, treat it as a visual reference/edit target. Inspect it first when it is a local file. Extract only useful city clues: landmark identity, architecture, transit, vegetation, viewpoint, palette, and everyday activity. Rebuild the final artwork as a new illustration; do not trace, collage, or retain photographic pixels.
- If the user provides only a city name or text, generate a new scene from the city’s recognizable visual identity.
- If the city is missing but the reference makes it reasonably inferable, use the strongest supported inference. Otherwise ask for the city name before generating.
- Keep the requested city as `[CITY_NAME]` in the internal prompt only; render the actual city name in the artwork.

## Design the city-specific scene

Before writing the image prompt, choose one composition that naturally belongs to this city. Do not reuse a generic template or simply replace the city name in an existing layout. Vary the camera angle, landmark placement, horizon, foreground treatment, negative space, and supporting details for each city.

Build the scene around five city-identity signals:

1. One recognizable landmark, architectural feature, or skyline element as the main focal point.
2. One distinctive local mode of transportation.
3. One subtle everyday-life moment.
4. One native plant, landscape, or environmental feature.
5. One viewpoint/composition that is naturally associated with this city.

Use only 2–4 supporting local elements in addition to the main focal point. Select a port view, historic lane, riverside garden, coastal path, elevated lookout, market passage, tram avenue, ferry terminal, botanical garden, heritage square, beach promenade, cultural plaza, or skyline terrace only when it is genuinely appropriate. Avoid landmark collections and postcard collages.

Include 3–6 small-scale people at most. Give each a believable local activity—walking, cycling, waiting for transit, sketching architecture, boarding a ferry, reading outdoors, taking a quiet photo, carrying beach gear, browsing a market, or jogging by the water. No crowd, oversized figure, or hero person.

Integrate traffic and signage quietly through small details such as a station clock, ferry information panel, bicycle symbol, painted road marking, beach flag, or restrained metro icon. Do not make signage the focal point. Keep any small labels, if needed, legible and minimal.

## Art direction and typography

Use a refined Japanese-stationery-inspired aesthetic: luxury sticker illustration, premium commercial vector art, modern editorial travel branding, clean precise outlines with consistent line weight, simple geometric forms, flat color shapes, soft silhouettes, balanced visual rhythm, and a high-end minimalist postcard finish.

Use a 3:4 vertical composition. Place the actual city name in the upper-left with generous clean negative space. Add one short, elegant English tagline inspired by the city’s mood. Typography must be understated, editorial, spacious, and secondary to the artwork; never let text dominate. Do not invent additional copy, logos, watermarks, or decorative lettering.

## Color and atmosphere

Use a cohesive, soft, slightly desaturated palette led by pale pink-blue, soft sky blue, mist blue, and cool clear blues. Balance with warm ivory, cream, soft beige, muted sage, gray-green, and quiet architectural neutrals. Reserve dusty rose or soft blush for tiny accents such as a flower, garment detail, small sign, awning, or ornament. The atmosphere should feel fresh, airy, calm, polished, contemporary, and elegant, with generous breathing room.

## Prompt construction

Write a complete image-generation prompt that explicitly states:

- the named city and the chosen city-specific composition;
- the focal landmark and the 2–4 supporting local elements;
- the local transit mode, subtle daily-life moment, native vegetation/environment, and viewpoint;
- 3–6 small figures with local activities;
- 3:4 vertical format, upper-left city-name placement, and one short English tagline;
- premium flat-vector / Japanese stationery / editorial travel-poster art direction;
- the restrained blue-led palette and airy negative space;
- the full negative constraints below.

For an image edit, add: preserve the reference’s useful identity clues and overall subject relationship, but redesign the composition and render every element as original flat vector artwork. Do not preserve photographic texture, exact framing, or copied layout unless the user explicitly asks for that.

## Hard exclusions

No photorealism, realism, watercolor, painterly brushstrokes, gradients, heavy shadows, dramatic cinematic lighting, paper texture, excessive detail, cluttered background, landmark collage, crowded street, oversized people, dominant hero figure, repetitive café composition, fixed sign placement, identical foreground treatment, generic tourism-poster formula, copied layout from another city, unnecessary decoration, logos, watermarks, or extra text.

## Deliver and refine

Generate the raster image with the built-in tool. Inspect the result for: recognizably city-specific identity; one clear focal landmark; no more than 2–4 supporting elements; 3–6 small people; quiet typography in the upper-left; clean 3:4 vertical framing; consistent flat-vector rendering; soft cohesive palette; and absence of photorealistic or cluttered details. If refinement is needed, make one targeted edit while repeating the preservation and exclusion constraints.
