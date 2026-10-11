# Douyin Player Sizing

## What the player is doing now

The player uses the dimensions returned by Douyin, with fallback dimensions when
the API does not provide them:

```ts
const videoWidth = source.videoWidth ?? 720;
const videoHeight = source.videoHeight ?? 1280;
const iframeHeight = videoHeight + 48;
```

The extra `48px` is part of the official Douyin iframe dimensions. The player
stores the resulting ratio on the outer stage:

```css
aspect-ratio: var(--iframe-ratio);
```

The stage is responsive: its width follows the available layout width, and its
height is calculated from the iframe ratio. This means the stage and the iframe
have the same proportions at every width.

The iframe is scaled with this calculation:

```ts
Math.min(width / videoWidth, height / iframeHeight)
```

This is the **contain** behavior. The iframe is never made larger than the
available stage in either direction, so the complete Douyin player remains
visible.

## Contain versus cover

These terms describe how content with one aspect ratio fits inside a container
with another aspect ratio.

### Contain

Contain means: show the entire iframe, even if empty space is needed.

```ts
Math.min(width / videoWidth, height / iframeHeight)
```

Advantages:

- Nothing is cropped.
- Douyin's video, controls, progress bar, and fullscreen button remain
  accessible.
- The iframe keeps its original proportions.
- It is the safest behavior for an embedded third-party player.

Trade-offs:

- If the stage has a different aspect ratio, black or empty space appears on
  two sides.
- The iframe cannot be enlarged beyond the stage just to make its controls
  larger.

### Cover

Cover means: fill the entire stage, even if part of the iframe must be
cropped.

```ts
Math.max(width / videoWidth, height / iframeHeight)
```

Advantages:

- There is no empty space inside the stage.
- The embedded controls can appear larger because the iframe is scaled up.

Trade-offs:

- Part of the iframe can be clipped.
- Douyin's bottom controls or side controls may become inaccessible.
- The video composition can lose important content.
- This is a poor fit for an iframe whose controls are part of the content.

## What the project uses

NextFrame currently uses **contain**, combined with a stage whose
`aspect-ratio` matches the iframe:

```css
.douyin-player-stage {
  width: 100%;
  height: auto;
  aspect-ratio: var(--iframe-ratio);
}
```

This combination is intentional. Matching the parent ratio minimizes empty
space while contain sizing guarantees that the complete official player stays
visible.

The stage previously participated in a viewport-height grid row. That caused
the parent to become taller than the iframe ratio, which created excess black
space. The stage now uses its own aspect ratio instead of being forced to fill
the remaining viewport height.

## Why the controls cannot be enlarged independently

The iframe is served by Douyin from another origin. Browser same-origin
security prevents NextFrame from selecting or styling elements inside it.
Therefore, NextFrame can scale the entire iframe, but cannot independently
increase the size of only the play button, control bar, icons, or labels.

To make the controls larger without cropping, the available player width must
increase. Scaling the iframe beyond its stage would enlarge everything, but it
would also either require more layout space or crop the iframe.

## Decision guide

| Goal | Best behavior | Main cost |
| --- | --- | --- |
| Keep all video and controls visible | Contain | Possible empty space with a mismatched ratio |
| Eliminate every empty pixel in a fixed stage | Cover | Cropping and inaccessible controls |
| Make controls larger without cropping | Increase player width | Requires more layout space |
| Style controls individually | Custom same-origin player | Not available through the official Douyin iframe |

