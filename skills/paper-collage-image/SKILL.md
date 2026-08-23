---
name: paper-collage-image
description: Create or edit raster images in a handmade 3D layered-paper collage style. Use when the user asks to transform a photo, portrait, pet, object, or scene into textured torn-paper artwork, or to draw a new illustration with a clean white-paper background, playful paper flowers, stars, clouds, hearts, and soft dimensional shadows while preserving recognizable subject details and excluding photorealistic elements and text.
---

# Handcrafted 3D Paper Collage

Use the system `imagegen` skill and the built-in image generation tool. Produce a raster image, not an SVG, HTML composition, or simulated text description.

## Choose the mode

- Treat an attached or previously generated image that must be transformed as an **edit**.
- Treat a request based only on a written scene as a **generation**.
- If an edit target exists only as a local file, inspect it with the image-viewing tool before editing.
- Generate directly unless a required source image is missing.

## Preserve the subject in edits

Inspect the source before writing the prompt. Preserve:

- pose, gesture, body orientation, and framing
- facial expression, gaze, hairstyle, and identity-defining features
- clothing silhouette, important accessories, and recognizable color relationships
- subject count and the essential scene composition

Translate these features into layered paper shapes. Do not retain photographic skin, hair, fabric, background fragments, or other realistic photo patches.

## Apply the visual direction

Recreate the entire image as a handcrafted 3D paper collage:

- Build subjects and scenery from overlapping, visibly layered paper cutouts.
- Use tactile paper grain, subtle fibers, handmade imperfections, and slightly torn or deckled edges.
- Use a clean white paper background unless the user specifies another paper background.
- Add a restrained selection of cute paper flowers, stars, clouds, and hearts around the subject. Keep them secondary and do not obscure the face or key details.
- Add soft, consistent cast shadows and slight layer separation to create believable physical depth.
- Favor playful, artistic, nostalgic, warm, whimsical, one-of-a-kind craft aesthetics.
- Keep shapes readable and colors harmonious; preserve important source colors during edits.

## Enforce constraints

- Exclude photorealistic or photographic elements everywhere in the result.
- Exclude all text, letters, numbers, captions, logos, signatures, and watermarks.
- Avoid glossy plastic, clay, fabric, wood, metal, or digital-paint textures that weaken the paper medium.
- Avoid distorted anatomy, changed identity, changed expression, extra people, extra limbs, or unrelated props.
- Avoid flattening the artwork into a single printed illustration; retain visible physical layering and depth.

## Build the generation prompt

Use this structure and adapt only details supported by the request or source image:

```text
Use case: style-transfer for an edit; stylized-concept for a new image
Primary request: Recreate the complete scene as a handcrafted 3D layered-paper collage.
Subject: <source subject and recognizable details, or requested subject>
Composition: <preserved pose, expression, framing, and layout, or requested composition>
Style/medium: overlapping textured paper cutouts, subtle fibers, slightly torn edges, handmade imperfections
Scene/backdrop: clean white paper background with a restrained arrangement of cute paper flowers, stars, clouds, and hearts
Lighting/mood: soft consistent cast shadows between layers; playful, artistic, nostalgic, warm, whimsical
Constraints: preserve identity and all essential subject details for edits; render every visible element as paper craft; no photorealistic elements; no text, letters, numbers, logos, signatures, or watermark
```

For edits, repeat the preservation constraints explicitly and instruct the model to change only the medium and decorative treatment. For generation, follow the user's requested subject and composition without inventing extra characters or story elements.

## Deliver and refine

Generate the image with the built-in tool. Inspect the result for subject recognition, paper-only rendering, layered depth, clean background, decorative balance, and absence of text. If refinement is needed, make one targeted change while repeating all preservation constraints. Save non-destructively and show the final image to the user.
