import { newSpecPage } from "@stencil/core/testing";
import { RadioGroup } from "../../ic-radio-group";
import { RadioOption } from "../../../ic-radio-option/ic-radio-option";
import { TextField } from "../../../ic-text-field/ic-text-field";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(jest.fn());
});

describe("ic-radio-group", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test"></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders");
  });

  it("should render as required", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test"></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-required");
  });

  it("should render as helper text", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" helperText="helper test">
        <ic-radio-option value="test"></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-helpertext");
  });

  it("should render with selected option", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-selected-option");
  });

  it("should test radio option as submit on form", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<form id="new-form"></form><ic-radio-option id="ic-radio-option" label="IC Radio Test" value="test-value" form="new-form" selected></ic-radio-option>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with validation status", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required validation-status="error" validation-text="error">
        <ic-radio-option value="test" selected></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-validation-status");
  });

  it("should render radio group disabled", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" disabled>
        <ic-radio-option value="test" label="test label" group-label="test group"></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-disabled");

    page.rootInstance.disabled = false;

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("disabled-removed");
  });

  it("should render radio option disabled", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" disabled label="test label" group-label="test group"></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-option-disabled");

    document
      .querySelector("ic-radio-option")
      ?.setAttribute("disabled", "false");

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot("disabled-removed");
  });

  it("should render with unselected static additional field", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" disabled label="test label" group-label="test group">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot(
      "renders-with-unselected-additional-field"
    );
  });

  it("should render with selected static additional field", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" selected label="test label" group-label="test group">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-selected-additional-field");
  });

  it("should render with dynamic additional field", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test" label="test label" group-label="test group" additional-field-display="dynamic" selected>
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.root).toMatchSnapshot("renders-with-dynamic-additional-field");
  });

  it("should emit an updated checked value when selected", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icChange", callbackFn);
    page.rootInstance.selectHandler({
      detail: { value: "true" },
      target: document.querySelector("ic-radio-option"),
    });
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should get the next item to select", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>
        <ic-radio-option value="test2"></ic-radio-option>
      </ic-radio-group>`,
    });

    const nextItemCalc = page.rootInstance.getNextItemToSelect(0, true);

    page.waitForChanges();
    expect(nextItemCalc).toBe(1);
  });

  it("should select the radio option when clicked", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>
        <ic-radio-option label="test label">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label" value="Test value"></ic-text-field>
        </ic-radio-option>
        <ic-radio-option label="test label" value="Radio value">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icCheck", callbackFn);

    page.rootInstance.radioOptions[1].click();
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
    expect(page.rootInstance.checkedValue).toBe("Test value");

    page.rootInstance.radioOptions[2].click();
    await page.waitForChanges();
    expect(page.rootInstance.checkedValue).toBe("Radio value");
  });

  it("should not select the radio option when textfield clicked", async () => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>
        <ic-radio-option label="test label">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label" value="Test value"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    const div =
      page.rootInstance.radioOptions[1].querySelector(".dynamic-container");
    div.click();
    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[1].selected).toBe(false);
  });

  it("should emit new radio value when text field value given", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icCheck", callbackFn);
    page.rootInstance.additionalFieldValueHandler({
      detail: { value: "value" },
      stopImmediatePropagation: jest.fn(),
    });
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should emit default radio value when no text field value given", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
        <ic-radio-option value="test" selected></ic-radio-option>
      </ic-radio-group>`,
    });

    const callbackFn = jest.fn();
    page.doc.addEventListener("icCheck", callbackFn);
    page.rootInstance.additionalFieldValueHandler({
      detail: { value: "" },
      stopImmediatePropagation: jest.fn(),
    });
    await page.waitForChanges();

    expect(callbackFn).toHaveBeenCalled();
  });

  it("should call 'setFocus' when radio option is focused", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<ic-radio-option value="test" selected></ic-radio-option>  `,
    });

    //Can't expect anything in this test - this is to increase code coverage only
    await page.rootInstance.setFocus().toHaveBeenCalled;
  });

  it("should test form reset event", async () => {
    const page = await newSpecPage({
      components: [RadioOption],
      html: `<form>
        <ic-radio-option value="test" selected></ic-radio-option>
        <button id="resetButton" type="reset">Reset</button>
      </form>`,
    });

    expect(page.rootInstance.selected).toBe(true);

    page.rootInstance.checked = false;
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(false);

    await page.rootInstance.handleFormReset();
    await page.waitForChanges();

    expect(page.rootInstance.selected).toBe(true);

    //test disconnected callback
    page.setContent("");
  });

  it("should change the orientation of the radio group to vertical if the user sets the orientation as horizontal and there are more than 2 radio options in the radio group", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required orientation="horizontal">
        <ic-radio-option value="test1" selected></ic-radio-option>
        <ic-radio-option value="test2" ></ic-radio-option>
        <ic-radio-option value="test3"></ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.rootInstance.currentOrientation).toMatch("vertical");
  });

  it("should change the orientation of the radio group to vertical if the user has additional fields on any of the radio buttons in the group", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required orientation="horizontal">
        <ic-radio-option value="test1" selected></ic-radio-option>
        <ic-radio-option value="test" disabled label="test label" group-label="test group">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    expect(page.rootInstance.currentOrientation).toMatch("vertical");
  });

  it("should call runResizeObserver", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required orientation="horizontal">
        <ic-radio-option value="test1" selected></ic-radio-option>
        <ic-radio-option value="test" disabled label="test label" group-label="test group">
         <ic-text-field slot="additional-field" placeholder="Placeholder" label="Test label"></ic-text-field>
        </ic-radio-option>
      </ic-radio-group>`,
    });

    await page.rootInstance.runResizeObserver();
    page.waitForChanges();

    const resize = new ResizeObserver(() => {
      page.rootInstance.checkOrientation();
    });

    page.waitForChanges();

    expect(page.rootInstance.resizeObserver).toBe(resize);
  });

  it("should call checkOrientation", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption, TextField],
      html: `<ic-radio-group label="test label" name="test" required orientation="horizontal">
      <ic-radio-option value="test1" selected></ic-radio-option>
      <ic-radio-option value="test2"></ic-radio-option>
      <ic-radio-option value="test3"></ic-radio-option>
    </ic-radio-group>`,
    });

    await page.rootInstance.checkOrientation();
    page.waitForChanges();

    expect(page.rootInstance.currentOrientation).toBe("vertical");
  });

  it("should test key down handler", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test" required>
      <ic-radio-option value="test"></ic-radio-option>
      <ic-radio-option value="test2" disabled></ic-radio-option>
      <ic-radio-option value="test3" selected></ic-radio-option>
    </ic-radio-group>`,
    });

    //test wrap around from end to beginning
    page.root?.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(true);
    expect(page.rootInstance.radioOptions[2].selected).toBe(false);

    page.root?.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(false);
    expect(page.rootInstance.radioOptions[2].selected).toBe(true);

    page.root?.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(true);
    expect(page.rootInstance.radioOptions[2].selected).toBe(false);

    page.root?.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(false);
    expect(page.rootInstance.radioOptions[2].selected).toBe(true);

    page.root?.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(true);
    expect(page.rootInstance.radioOptions[2].selected).toBe(false);

    //test wrap around from beginning to end
    page.root?.dispatchEvent(
      new window.window.KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true,
      })
    );

    await page.waitForChanges();

    expect(page.rootInstance.radioOptions[0].selected).toBe(false);
    expect(page.rootInstance.radioOptions[2].selected).toBe(true);
  });

  it("should call this.setRadioOptions() when slot content changes", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test"></ic-radio-option>
      </ic-radio-group>`,
    });

    const radioContainer = document
      .querySelector("ic-radio-group")
      ?.shadowRoot?.querySelector(".radio-buttons-container");

    jest.spyOn(page.rootInstance, "setRadioOptions").mockImplementation();

    await page.rootInstance.addSlotChangeListener();

    radioContainer?.dispatchEvent(new Event("slotchange"));

    await page.waitForChanges();

    expect(page.rootInstance.setRadioOptions).toBeCalledTimes(1);
  });

  it("should test disconnectedCallback function", async () => {
    const page = await newSpecPage({
      components: [RadioGroup, RadioOption],
      html: `<ic-radio-group label="test label" name="test">
        <ic-radio-option value="test"></ic-radio-option>
      </ic-radio-group>`,
    });

    await page.waitForChanges();

    const radioContainer = page.root?.shadowRoot?.querySelector(
      ".radio-buttons-container"
    );
    expect((radioContainer as any).__listeners.length).toBe(1);

    page.rootInstance.disconnectedCallback();

    await page.waitForChanges();

    expect((radioContainer as any).__listeners.length).toBe(0);
  });
});
