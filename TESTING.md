# Testing our components with Jest

[Jest](https://jestjs.io/) is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

These instructions have been written with JavaScript in mind. Jest also supports TypeScript. Further instructions on how to set up Jest for TypeScript can be found on their ['Getting Started'](https://jestjs.io/docs/getting-started#using-typescript) page.

## Installing Jest

### Step one

Install Jest with `npm` or `yarn`.

```shell
npm install --save-dev jest

yarn add --dev jest
```

### Step two

Create a test file using the extension: `.test.js` and add some tests.

### Step three

Add the following section to your package.json:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### Step four

Finally, run your tests using `npm test` or `yarn test`.

More information on setting up Jest can be found on [Jest’s Getting Started page](https://jestjs.io/docs/getting-started).

## What is the shadow DOM?

Typically, components sit in the DOM, also known as the ['light DOM'](https://www.codecademy.com/resources/blog/what-is-dom/). DOM stands for 'Document Object Model'. The light DOM represents the structure of a webpage as a tree, where each DOM object is a node.

A key part of our components is the shadow DOM. With the shadow DOM, we can encapsulate each component’s markup structure, styling and behaviour so different parts don’t clash.

According to [Mozilla](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM), the "shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which you can attach any element, in the same way as the normal DOM".

## Testing shadow components

In the DOM, elements can be found using `document.querySelector`. Shadow components can be found in a similar way using the `shadowRoot` prefix. The shadow root is the root node of the shadow DOM tree.

Note: components that have been slotted in can be found in the 'light' DOM. They are not a part of their parent component's shadow DOM.

### Example

```js
// Find all navigation items in a top nav
document
  .querySelector("ic-top-navigation")
  .querySelectorAll("ic-navigation-item");

// Find the text content of the first navigation item in a top nav
document
  .querySelector("ic-top-navigation > ic-navigation-item:first-child")
  .shadowRoot.querySelector("ic-tooltip > a > ic-typography").textContent;

// Find the search button for the search bar in the top nav (nested shadow DOM)
document
  .querySelector("ic-top-navigation > ic-search-bar")
  .shadowRoot.querySelector("ic-button#search-submit-button")
  .shadowRoot.querySelector("#ic-button-with-tooltip-search-submit-button");
```

## Example test

Below is an example of a React component that uses the `IcTopNavigation` component. The labels for the navigation items are being mapped to the `IcNavigationItem` component.

```js
// topNav.js
import React from "react";
import { IcTopNavigation, IcNavigationItem, IcSearchBar } from "@ukic/react";

export const topNav = () => {
  const navItemLabels = ["About", "Drinks", "Recipes", "Blog"];

  const navItems = navItemsLabels.map((navItemLabel, index) => (
    <IcNavigationItem
      key={index}
      label={navItemLabel}
      href={`/${navItemLabel}`}
      slot="navigation"
    />
  ));

  return (
    <IcTopNavigation
      appTitle="Wake me up before you cocoa"
      status="alpha"
      version="v0.0.7"
    >
      <IcSearchBar slot="search" placeholder="Search" label="Search" />
      {navItems}
    </IcTopNavigation>
  );
};
```

We are now going to test that the labels are being mapped correctly using the Arrange-Act-Assert pattern.

Jest has a range of [matchers](https://jestjs.io/docs/expect) to choose from for your test assertions. Below, we make use of the `.toMatch` matcher for our test assertion.

```js
// topNav.test.js
describe("top navigation", () => {
  it("renders navigation items correctly", async () => {
    // Arrange
    const navItemsLabels = ["About", "Drinks", "Recipes", "Blog"];

    // Act
    const navItems = Array.from(
      document.querySelectorAll("ic-top-navigation ic-navigation-item")
    ).map((i) => i.shadowRoot.querySelector(".ic-tooltip").textContent);

    // Assert
    navItems.forEach((navItem, i) => {
      expect(navItem).toMatch(navItemsLabels[i]);
    });
  });
});
```