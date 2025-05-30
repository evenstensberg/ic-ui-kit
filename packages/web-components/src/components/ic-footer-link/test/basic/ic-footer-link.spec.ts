import { newSpecPage } from "@stencil/core/testing";
import { FooterLink } from "../../ic-footer-link";

describe("ic-footer-link", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [FooterLink],
      html: `<ic-footer-link href="/">Link</ic-footer-link>`,
    });

    expect(page.root).toMatchSnapshot("footer-link");
  });

  it("should render small with grouped links", async () => {
    const page = await newSpecPage({
      components: [FooterLink],
      html: `<ic-footer-link href="/">Link</ic-footer-link>`,
    });

    page.rootInstance.footerConfig = { small: true, grouped: true };
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot("small-footer-link-with-grouped-links");
  });

  it("should set foregroundColor on theme change", async () => {
    const page = await newSpecPage({
      components: [FooterLink],
      html: `<ic-footer-link label="button1" onclick="alert('test')">
      </ic-footer-link>`,
    });

    await page.rootInstance.footerBrandChangeHandler({
      detail: { mode: "light" },
    });
    await page.waitForChanges();

    expect(page.rootInstance.foregroundColor).toEqual("light");
  });

  it("should test footer resize handler", async () => {
    const page = await newSpecPage({
      components: [FooterLink],
      html: `<ic-footer-link label="button1" onclick="alert('test')">
      </ic-footer-link>`,
    });

    await page.rootInstance.footerResizeHandler();
    await page.waitForChanges();

    expect(page.rootInstance.footerConfig).toStrictEqual({
      grouped: false,
      small: false,
    });
  });
});
