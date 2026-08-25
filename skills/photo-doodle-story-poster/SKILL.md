---
name: photo-doodle-story-poster
description: Edit each user-supplied photograph into its own 3:4 premium poster with truthful photography above and a source-derived real-subject micro-story with sparse black-line doodle people below. Use for witty, meaning-led lifestyle and editorial interpretations; do not use for generic cute stickers, object-label posters, dense cartoons, decorative doodles, or multi-photo collages.
metadata:
  inspiration_source: https://x.com/xiaoxiaodong01/status/2090834371423183135
---

# Photo Doodle Story Poster

Use the system `imagegen` skill and image-generation tool. Treat each uploaded photograph as the edit source. The lower scene should feel like a concise visual thought about that exact image, not a generic doodle treatment.

## Output contract

- Produce one independent raster poster for every uploaded photo. Never combine photos into a collage, contact sheet, comparison layout, diptych, or shared canvas.
- Use a 3:4 portrait canvas with one exact horizontal 50/50 division. Keep truthful photography in the upper half and the real-subject doodle story in the lower half. Do not let either medium invade the other.
- Preserve immediate correspondence through the selected visual anchor's identity, material, silhouette, posture, color, spatial relationship, and story role.
- Render all visible wording in English unless the user explicitly requests another language.
- Return every poster as a separate image. Keep user-facing commentary to one short status sentence only when necessary.

## Preserve the photographic upper half

Keep the source recognizably photographic. Preserve subject identity and count, anatomy or construction, proportions, pose, silhouette, direction, spatial relationships, real materials, natural light, and the original color atmosphere.

Apply only restrained lifestyle-magazine, independent-publication, or art-photography color correction. Do not redraw, vectorize, beautify, materially relight, or apply doodles, paper texture, typography, or graphic overlays to this region.

Crop deliberately for the upper half. When more area is needed, extend only plausible environmental background such as sky, ground, wall, water, foliage, or ambient space. Never stretch, warp, mirror, duplicate, or redesign the subject.

## Find what deserves to be remembered

Do not automatically choose the largest object. Before prompting, privately identify:

1. the photograph's core proposition: `[subject or relationship] + [action/state] + [tension, feeling, contrast, or implication]`;
2. the visual anchor that best carries that proposition;
3. its essential contour, posture, material, color, orientation, and spatial role;
4. any second subject, gap, path, shadow, gaze, scale contrast, or environmental cue necessary for the meaning;
5. one possible response, amplification, reversal, or unsaid thought that doodle figures can embody;
6. the source's most recognizable and spirited colors;
7. one very short English handwritten line that expresses the meaning without naming the object.

The memorable core may be one subject, an action, a relationship, a contrast, an emotional instant, or a symbolic condition. Prefer the smallest set of elements that preserves both recognition and meaning.

Do not expose this analysis or repeat the user's design brief.

## Rebuild a truthful visual anchor

Keep the lower anchor materially believable and recognizably real. Preserve its defining identity, surface, proportions, silhouette, posture, direction, and relationship. You may refine view, scale, light, or color only enough to make the core features clear and the composition coherent.

Remove unrelated surroundings and incidental detail. Retain every secondary element that the proposition depends on. If meaning relies on distance, shelter, pursuit, imbalance, repetition, waiting, reflection, or another relation, make that relation visible rather than isolating one object.

The lower anchor may be a clean photographic-looking cutout, a faithfully rendered real-material subject, or a tightly reconstructed real scene fragment. It must not become a flat cartoon, generic icon, sticker with a white border, glossy product render, or unrelated stock object.

## Direct the doodle actors

Add one to four tiny black or deep-gray line-drawn people only. Choose their number, scale, pose, location, gaze, and action from the source proposition and the anchor's exact geometry.

Give the doodles one clear narrative job:

- respond to the source action or mood;
- amplify scale, weight, distance, fragility, speed, or absurdity;
- reveal a hidden use or interpretation of the anchor;
- reverse the apparent power relationship;
- speak or enact a thought the photograph leaves unsaid.

Make them physically and compositionally specific: climbing a real edge, measuring a gap, pulling against a direction, sheltering beneath a form, following a contour, peering through an opening, balancing a mass, crossing a shadow, or another interaction supported by the source.

Use deliberately simple, slightly naive hand-drawn black lines with varied pressure and minimal detail. Doodles may pass behind, overlap, touch, or be occluded by the real anchor. Keep their scale small enough that the anchor remains dominant.

Do not add doodle figures merely waving, posing, celebrating, or performing generic cute activity. Avoid emoji faces, cartoon costumes, sticker borders, colored characters, comic panels, speech balloons, crowds, decorative stars, hearts, arrows, or unrelated props.

## Compose with light editorial space

Use warm off-white, a pale source-derived color, or the photograph's most comfortable light hue as the lower ground. Keep abundant negative space, one clear anchor, and a compact narrative zone. Let the anchor's contour, direction, and the doodles' movement create the eye path.

Derive the active colors from the upper photo's most recognizable and lively hues. Gently purify, lighten, and reorganize them. Let the real anchor carry almost all color; use black or deep gray for doodles and type.

Keep the result clean, light, restrained, and energetic. Avoid fixed pastel palettes, muddy mixtures, dense scenery, gradients, heavy shadows, colorful doodles, or large decorative background shapes.

Present the result as a flat editorial artwork. Do not add a frame, wall, desk, hands, notebook, tape, product mockup, or gallery setting.

## Write the unsaid line

Create one short English handwritten phrase, usually two to seven words, from the core meaning, emotional relation, or visual irony. It should feel light, smart, slightly humorous, double-edged, or gently surprising when the source supports that tone.

Do not directly name or label the depicted object. Avoid fixed slogans, motivational quotes, generic positivity, literal captions, hashtags, brand copy, meme templates, and forced puns.

Place the phrase along the anchor contour, doodle action, or negative-space rhythm. It may look like a figure's note, thought, stage direction, or off-screen aside without using a comic speech bubble. Keep lettering small, handmade, and integrated.

Do not use years, issue numbers, unsupported locations or facts, long copy, pseudo-language, logos, brands, signatures, or watermarks.

## Compile the image-edit prompt

Write one source-specific production prompt per input photo containing:

1. one independent 3:4 portrait output and the exact 50% photography / 50% doodle-story split;
2. the upper-half preservation invariants, restrained color correction, crop, and any safe background extension;
3. the exact proposition, memorable visual anchor, preserved material and identity cues, and any necessary relationship or scale clue;
4. the lower anchor's position, scale, direction, real-material treatment, removed clutter, and surrounding negative-space shape;
5. the exact number of doodle figures, their scale, poses, locations, occlusions, actions, and single narrative job;
6. the warm off-white or pale source-derived ground, exact source-derived anchor colors, and black/deep-gray line treatment;
7. the exact short English handwritten line and its contour-, action-, or negative-space-aware placement;
8. hard exclusions: no multi-photo layout, no altered or redrawn upper subject, no approximate split, no automatic largest-object selection, no loss of the core relationship, no flat cartoon anchor, no sticker border, no generic cute figure activity, no crowd, no colorful doodles, no comic panel or speech bubble, no direct object label, no fixed slogan, no decorative clutter, no mockup environment, no logo, and no watermark.

Use concrete meaning, placement, action, scale, and interaction language rather than relying on adjectives such as “witty,” “cute,” or “editorial.”

## Inspect and correct

Review every result at full size and thumbnail size. Verify the exact split, truthful upper photography, immediate lower correspondence, retained core proposition, materially real anchor, one focused micro-story, sparse black-line doodles, source-derived color, abundant quiet space, and short meaningful English wording.

If the lower scene selects a prominent object but loses the story, restore the essential relationship, action, or contrast. If doodles feel decorative, assign them one response, amplification, reversal, or unsaid-thought role tied to exact anchor geometry. If they dominate, reduce their count and scale. If the anchor looks like a sticker or product asset, remove the border and restore natural material and light. If text is literal or generic, rewrite it from the proposition without naming the object. Regenerate with one targeted correction when needed.
