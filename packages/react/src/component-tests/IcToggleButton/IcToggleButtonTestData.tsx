import React, { ReactElement, useState } from "react";
import { IcBadge, IcToggleButton } from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const ReusableSlottedIcon = (): ReactElement => (
  <SlottedSVG
    slot="icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </SlottedSVG>
);

export const WithIcon = (): ReactElement => {
  return (
    <div style={{ padding: "8px" }}>
      <IcToggleButton label="Test">
        <ReusableSlottedIcon />
      </IcToggleButton>
    </div>
  );
};

export const IconVariant = (): ReactElement => {
  return (
    <div style={{ padding: "8px" }}>
      <IcToggleButton variant="icon" accessibleLabel="Refresh the page">
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton
        variant="icon"
        accessibleLabel="Refresh the page"
        disabled
      >
        <ReusableSlottedIcon />
      </IcToggleButton>
    </div>
  );
};

export const IconPlacementRight = (): ReactElement => {
  return (
    <div style={{ padding: "8px" }}>
      <IcToggleButton label="Test" iconPlacement="right">
        <ReusableSlottedIcon />
      </IcToggleButton>
    </div>
  );
};

export const IconPlacementTop = (): ReactElement => {
  return (
    <div style={{ padding: "8px" }}>
      <IcToggleButton label="Test" iconPlacement="top">
        <ReusableSlottedIcon />
      </IcToggleButton>
    </div>
  );
};

export const TooltipPlacement = (): ReactElement => {
  return (
    <div style={{ padding: "100px 8px" }}>
      <IcToggleButton
        variant="icon"
        accessibleLabel="Refresh the page"
        tooltipPlacement="right"
      >
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton
        variant="icon"
        accessibleLabel="Refresh the page"
        tooltipPlacement="top"
      >
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton
        variant="icon"
        accessibleLabel="Refresh the page"
        tooltipPlacement="left"
      >
        <ReusableSlottedIcon />
      </IcToggleButton>
    </div>
  );
};

export const Dark = (): ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "var(--ic-space-md)",
        gap: "var(--ic-space-xs)",
      }}
    >
      <IcToggleButton label="Test" appearance="dark" />
      <IcToggleButton label="Test" appearance="dark" toggleChecked />
      <IcToggleButton label="Test" appearance="dark" loading />
      <IcToggleButton label="Test" appearance="dark" loading toggleChecked />
      <IcToggleButton label="Test" appearance="dark" disabled />
      <IcToggleButton label="Test" appearance="dark" toggleChecked disabled />
      <IcToggleButton label="Test" appearance="dark" loading disabled />
      <IcToggleButton
        label="Test"
        appearance="dark"
        loading
        toggleChecked
        disabled
      />
      <IcToggleButton label="Test" appearance="dark">
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="dark" variant="icon">
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="dark" toggleChecked>
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton
        label="Test"
        appearance="dark"
        variant="icon"
        toggleChecked
      >
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="dark" disabled>
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="dark" variant="icon" disabled>
        <ReusableSlottedIcon />
      </IcToggleButton>
    </div>
  );
};

export const Light = (): ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#2c2f34",
        padding: "var(--ic-space-md)",
        gap: "var(--ic-space-xs)",
      }}
    >
      <IcToggleButton label="Test" appearance="light" />
      <IcToggleButton label="Test" appearance="light" toggleChecked />
      <IcToggleButton label="Test" appearance="light" loading />
      <IcToggleButton label="Test" appearance="light" loading toggleChecked />
      <IcToggleButton label="Test" appearance="light" disabled />
      <IcToggleButton label="Test" appearance="light" toggleChecked disabled />
      <IcToggleButton label="Test" appearance="light" loading disabled />
      <IcToggleButton
        label="Test"
        appearance="light"
        loading
        toggleChecked
        disabled
      />
      <IcToggleButton label="Test" appearance="light">
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="light" variant="icon">
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="light" toggleChecked>
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton
        label="Test"
        appearance="light"
        variant="icon"
        toggleChecked
      >
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="light" disabled>
        <ReusableSlottedIcon />
      </IcToggleButton>
      <IcToggleButton label="Test" appearance="light" variant="icon" disabled>
        <ReusableSlottedIcon />
      </IcToggleButton>
    </div>
  );
};

export const ConditionalBadge = (): ReactElement => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((previous) => previous + 1);

  return (
    <div
      style={{
        padding: "var(--ic-space-sm)",
      }}
    >
      <IcToggleButton>
        Button with badge
        {count > 0 && (
          <IcBadge
            slot="badge"
            variant="info"
            textLabel={`${count}`}
            maxNumber={99}
          />
        )}
      </IcToggleButton>
      <button onClick={incrementCount}>Increment count</button>
    </div>
  );
};
