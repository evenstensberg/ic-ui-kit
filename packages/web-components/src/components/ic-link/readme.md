# ic-link



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                                                                          | Type                                                                                                                                                                                                  | Default     |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `download`       | `download`       | If `true`, the user can save the linked URL instead of navigating to it. If the value is a string, it will be used as the filename for the download. | `boolean \| string \| undefined`                                                                                                                                                                      | `false`     |
| `href`           | `href`           | The URL that the link points to.                                                                                                                     | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `hreflang`       | `hreflang`       | The human language of the linked URL.                                                                                                                | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `monochrome`     | `monochrome`     | If `true`, the link will display as black in the light theme, and white in the dark theme.                                                           | `boolean \| undefined`                                                                                                                                                                                | `false`     |
| `referrerpolicy` | `referrerpolicy` | How much of the referrer to send when following the link.                                                                                            | `"" \| "no-referrer" \| "no-referrer-when-downgrade" \| "origin" \| "origin-when-cross-origin" \| "same-origin" \| "strict-origin" \| "strict-origin-when-cross-origin" \| "unsafe-url" \| undefined` | `undefined` |
| `rel`            | `rel`            | The relationship of the linked URL as space-separated link types.                                                                                    | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `target`         | `target`         | The place to display the linked URL, as the name for a browsing context (a tab, window, or iframe).                                                  | `string \| undefined`                                                                                                                                                                                 | `undefined` |
| `theme`          | `theme`          | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.              | `"dark" \| "inherit" \| "light" \| undefined`                                                                                                                                                         | `"inherit"` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on the link.

#### Returns

Type: `Promise<void>`




## Slots

| Slot            | Description                                         |
| --------------- | --------------------------------------------------- |
| `"router-item"` | Handle routing by nesting your routes in this slot. |


## Dependencies

### Used by

 - [ic-breadcrumb](../ic-breadcrumb)
 - [ic-footer-link](../ic-footer-link)
 - [ic-skip-link](../ic-skip-link)

### Graph
```mermaid
graph TD;
  ic-breadcrumb --> ic-link
  ic-footer-link --> ic-link
  ic-skip-link --> ic-link
  style ic-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


