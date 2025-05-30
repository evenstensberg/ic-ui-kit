# ic-empty-state



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                             | Type                                          | Default     |
| ------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `aligned`    | `aligned`    | The alignment of the empty state container.                                                                                             | `"center" \| "left" \| "right" \| undefined`  | `"left"`    |
| `body`       | `body`       | The body text rendered in the empty state container.                                                                                    | `string \| undefined`                         | `undefined` |
| `heading`    | `heading`    | The title rendered in the empty state container.                                                                                        | `string \| undefined`                         | `undefined` |
| `imageSize`  | `image-size` | The size of the image or icon used in the image slot.                                                                                   | `"large" \| "medium" \| "small" \| undefined` | `"medium"`  |
| `maxLines`   | `max-lines`  | The number of lines of body text to display before truncating.                                                                          | `number \| undefined`                         | `undefined` |
| `subheading` | `subheading` | The subtitle rendered in the empty state container.                                                                                     | `string \| undefined`                         | `undefined` |
| `theme`      | `theme`      | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \| "inherit" \| "light" \| undefined` | `"inherit"` |


## Slots

| Slot           | Description                                               |
| -------------- | --------------------------------------------------------- |
| `"actions"`    | Content is placed at the bottom below all other content.  |
| `"body"`       | Content will be rendered in place of the body prop.       |
| `"heading"`    | Content will be rendered in place of the heading prop.    |
| `"image"`      | Content is placed at the top above all other content.     |
| `"subheading"` | Content will be rendered in place of the subheading prop. |


## Dependencies

### Depends on

- [ic-typography](../ic-typography)

### Graph
```mermaid
graph TD;
  ic-empty-state --> ic-typography
  style ic-empty-state fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


