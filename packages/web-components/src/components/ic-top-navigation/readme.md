# ic-top-navigation



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                                                                                                                    | Type                                 | Default          |
| ------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------- |
| `appTitle`               | `app-title`                | The app title to be displayed. This is required, unless a slotted app title link is used.                                                                      | `string \| undefined`                | `undefined`      |
| `contentAligned`         | `content-aligned`          | The alignment of the top navigation content.                                                                                                                   | `"center" \| "full-width" \| "left"` | `"full-width"`   |
| `customMobileBreakpoint` | `custom-mobile-breakpoint` | Can set a custom breakpoint for the top navigation to switch to mobile mode. Must be one of our specified breakpoints in px: `0`, `576`, `768`, `992`, `1200`. | `0 \| 1200 \| 576 \| 768 \| 992`     | `DEVICE_SIZES.L` |
| `href`                   | `href`                     | The URL to navigate to when the app title is clicked.                                                                                                          | `string`                             | `"/"`            |
| `inline`                 | `inline`                   | If `true`, the flyout navigation menu on small devices will be contained by the parent element.                                                                | `boolean`                            | `false`          |
| `shortAppTitle`          | `short-app-title`          | The short title of the app to be displayed at small screen sizes in place of the app title.                                                                    | `string`                             | `""`             |
| `status`                 | `status`                   | The status info to be displayed.                                                                                                                               | `string`                             | `""`             |
| `theme`                  | `theme`                    | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.                        | `"dark" \| "inherit" \| "light"`     | `"inherit"`      |
| `version`                | `version`                  | The version info to be displayed.                                                                                                                              | `string`                             | `""`             |


## Events

| Event             | Description                                 | Type                             |
| ----------------- | ------------------------------------------- | -------------------------------- |
| `icTopNavResized` | Emitted when the top navigation is resized. | `CustomEvent<{ size: number; }>` |


## Slots

| Slot                | Description                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `"app-icon"`        | Content will be rendered to left of app title. Anything that is slotted here will be hidden from screen readers.        |
| `"app-title"`       | Handle routing by nesting a route in the app title.                                                                     |
| `"buttons"`         | Content will be rendered to right of search bar.                                                                        |
| `"navigation"`      | Content will be rendered in navigation panel.                                                                           |
| `"search"`          | Content will be rendered in search area to left of buttons.                                                             |
| `"short-app-title"` | Handle routing by nesting a route in the short app title (to be displayed in place of app title on small screen sizes). |
| `"toggle-icon"`     | Icon to be displayed on the button to toggle search slot content on smaller devices                                     |


## Dependencies

### Depends on

- [ic-section-container](../ic-section-container)
- [ic-typography](../ic-typography)
- [ic-button](../ic-button)
- [ic-horizontal-scroll](../ic-horizontal-scroll)
- [ic-navigation-menu](../ic-navigation-menu)

### Graph
```mermaid
graph TD;
  ic-top-navigation --> ic-section-container
  ic-top-navigation --> ic-typography
  ic-top-navigation --> ic-button
  ic-top-navigation --> ic-horizontal-scroll
  ic-top-navigation --> ic-navigation-menu
  ic-button --> ic-typography
  ic-button --> ic-loading-indicator
  ic-button --> ic-tooltip
  ic-loading-indicator --> ic-typography
  ic-tooltip --> ic-typography
  ic-horizontal-scroll --> ic-button
  ic-navigation-menu --> ic-button
  ic-navigation-menu --> ic-typography
  style ic-top-navigation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


