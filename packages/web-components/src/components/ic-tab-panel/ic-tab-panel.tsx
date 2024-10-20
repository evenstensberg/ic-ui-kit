import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from "@stencil/core";
import {
  IcThemeForegroundEnum,
  IcThemeForegroundNoDefault,
} from "../../utils/types";

@Component({
  tag: "ic-tab-panel",
  styleUrl: "ic-tab-panel.css",
  shadow: true,
})
export class TabPanel {
  @Element() el: HTMLIcTabPanelElement;

  /**
   * @internal The appearance of the tabs, e.g dark, or light.
   */
  @Prop() appearance?: IcThemeForegroundNoDefault = "dark";

  /**
   * @deprecated This is no longer required.
   * The context id is passed down from `ic-tab-context`
   */
  @Prop({ reflect: true }) contextId?: string = "default";

  /**
   * @internal Emitted when a tab panel is dynamically created.
   */
  @Event() tabPanelCreated: EventEmitter<HTMLIcTabPanelElement>;

  /**
   * @internal Emitted when a tab panel is unmounted.
   */
  @Event() tabPanelRemoved: EventEmitter<void>;

  connectedCallback(): void {
    this.tabPanelCreated.emit(this.el);
  }

  disconnectedCallback(): void {
    document
      .querySelector<HTMLIcTabContextElement>(
        `ic-tab-context[context-id=${this.contextId}]`
      )
      ?.tabRemovedHandler();
  }

  render() {
    return (
      <Host
        class={{
          "ic-tab-panel-light": this.appearance === IcThemeForegroundEnum.Light,
        }}
        role="tabpanel"
      >
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
