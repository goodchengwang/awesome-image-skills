---
name: meaningforge-illustration
description: Distill a user-supplied photograph into an elegant, fully original conceptual editorial illustration by preserving its essential relationship and rebuilding it through one dominant form, one visible force, and one meaningful counterform or void. Use for expressive covers, posters, visual essays, and campaign illustrations when no source pixels should remain; do not use for photo edits, literal tracing, generic style transfer, or decorative paper collage.
---

# Meaningforge Illustration

Use the system `imagegen` skill and built-in image-generation tool. Inspect the supplied photograph, then generate a new raster artwork using it only as semantic evidence and compositional reference.

The finished artwork must contain no source pixels, photographic crops, copied signage, traced textures, or disguised photo fragments. It should still preserve the source's essential relationship and emotional direction.

## Distill one exact proposition

Extract:

- **subject:** the one actor or inseparable pair that carries the event;
- **relationship:** approaching, avoiding, waiting, following, sheltering, observing, enclosing, resisting, or another visible relation;
- **force:** pull, drift, repetition, pressure, interruption, stillness, expansion, or return;
- **absence:** what is unreachable, hidden, delayed, lost, or unsaid;
- **time state:** instant, anticipation, recurrence, aftermath, memory, or passage.

Write one plain proposition that contains a subject, action or condition, and tension. It must describe this source rather than a universal mood. Use that proposition to make every visual decision.

## Construct the Form–Force–Counterform triad

Build the artwork from three roles:

1. **Form:** one dominant illustrated silhouette or cluster representing the core subject.
2. **Force:** one directional system that visibly acts on the form through spacing, bending, repetition, erosion, compression, or flow.
3. **Counterform:** one smaller opposing mass or a shaped area of empty paper representing absence, destination, resistance, or reply.

The form should be readable at thumbnail size. The force must physically alter the composition, not appear as decorative lines. The counterform must change balance and meaning.

Add one **atmospheric carrier** only when the form, force, and counterform otherwise feel isolated: a low-density wash, rubbed field, broken contour, or sparse material echo derived from weather, water, light, ground, or distance in the source. It must connect existing roles and may not become a generic background texture.

## Choose one metaphor operation

Read [references/metaphor-director.md](references/metaphor-director.md). Choose one primary operation and, only when necessary, one supporting operation with a different job.

Translate the operation into exact geometry: what becomes larger or smaller, what moves, where the empty area sits, which contour is shared, and how the eye travels. Do not merely request a “poetic metaphor.”

Preserve two to four semantic anchors from the source, such as pose, facing direction, distance, path, season, material, or one minor color. Remove everything that does not support the proposition.

## Direct a complete editorial artwork

Default to a flat 4:5 portrait or 3:2 landscape composition according to the source unless the user requests another ratio.

- Let the form, force, and any atmospheric carrier activate about 30–50% of the artwork.
- Keep about 40–65% as deliberate quiet space, including any shaped counterform.
- Use clear asymmetry unless symmetry expresses the proposition.
- Establish an eye path with an entry, one moment of tension, and a quiet exit.
- Crop or partially omit forms when this increases scale and emotional pressure.

The artwork must feel finished through proportion, value, and spacing—not through many motifs.

Quiet space must have directional tension. At least one edge, axis, gaze, interval, or low-density material passage should lead into or out of it; avoid a large untouched rectangle that has no relationship to the proposition.

## Use a restrained material system

Choose one primary medium according to meaning:

- broad cut-fiber masses for rupture, shelter, weight, or vulnerability;
- dry ink and broken contour for erosion, persistence, memory, or distance;
- translucent washes and veils for uncertainty, atmosphere, or time;
- compact screenprint planes for pressure, signal, urban rhythm, or confrontation;
- soft graphite and rubbed pigment for intimacy, hesitation, or quiet observation.

Use one supporting texture only. Keep the artwork tactile and flat; avoid glossy 3D craft, cinematic photorealism, busy mixed media, or a sampler of print effects.

## Build value and color in order

1. Design the composition to work in grayscale.
2. Use a pale paper or restrained flat ground.
3. Use one dark or mid-value neutral family for the main structure.
4. Add one source-derived color family for atmosphere or secondary forms.
5. Add at most one high-chroma accent as an event: signal, wound, bridge, destination, or counterweight.

The accent should touch, oppose, or redirect an important form. Do not scatter decorative color dots or isolated swatches.

## Handle identity and text

Preserve exact likeness only when the user asks. Otherwise design an original illustrated character that preserves pose, gesture, orientation, and relational role.

No text by default. If the user supplies exact text, reserve a quiet area and add it deterministically after generation when possible. Never invent captions, signatures, pseudo-writing, logos, or metadata.

## Compile the generation prompt

State:

1. proposition and the source relationship that must survive;
2. two to four semantic anchors and the explicit discard list;
3. form, force, and counterform with exact scale, position, direction, and spacing;
4. metaphor operation and its visible geometric consequence;
5. canvas ratio, active-area share, quiet-space share, focal order, and eye path;
6. primary medium, supporting texture, edge behavior, value structure, palette, and accent function;
7. independence constraints: fully illustrated, no source pixels, no photo fragments, no literal tracing, no copied logos, no pseudo-text, no watermark, no generic decorative symbols.

Use concrete nouns and spatial verbs. Do not rely on “poetic,” “beautiful,” “dreamlike,” or “editorial” as substitutes for construction.

## Inspect and correct

Evaluate at full size, in grayscale, and at thumbnail size. Regenerate once with one targeted correction if needed.

- If it resembles the photograph too literally, remove descriptive detail and strengthen the metaphor operation.
- If it feels unrelated to the source, restore the key pose, direction, distance, or seasonal cue.
- If it is generic, replace decorative motifs with source-derived geometry.
- If it is busy, keep one form, one force, one counterform, and restore quiet space.
- If it is empty without tension, enlarge the force or move the counterform into active opposition.
- If the roles feel isolated on blank paper, add one source-derived atmospheric carrier that connects them without filling the canvas.
- If the counterform is merely a literal duplicate, alter its scale, alignment, completeness, or material so it reads as interpretation.
- If it is pretty but meaningless, restate the proposition and make the force visibly act on the form.
- If the colors feel arbitrary, rebuild value first and give the accent one structural job.
- If photographic fragments remain, regenerate as a fully independent illustration.

Before returning, confirm that the proposition is visible without explanation and that the artwork remains recognizable in grayscale and at thumbnail size. Return the final image plus two concise sentences: the proposition and the visible transformation. Do not add promotional copy or mandatory attribution.
