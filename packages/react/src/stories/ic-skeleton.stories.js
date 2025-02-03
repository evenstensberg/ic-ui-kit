import React from 'react';
import { IcSkeleton, IcTypography } from "../components";
import readme from "../../../web-components/src/components/ic-skeleton/readme.md";

const defaultArgs = {
  appearance: "default",
  variant: "rectangle",
};

export default {
  title: "Skeleton",
  component: IcSkeleton,
};

export const Rectangle = {
  render: () => (
    <>
      <IcTypography variant="h4">Default</IcTypography>
      <IcSkeleton />
      <IcTypography variant="h4">Inherited from child</IcTypography>
      <IcSkeleton>
        <div style={{ height: "200px", width: "450px" }}>Test text</div>
      </IcSkeleton>
      <IcTypography variant="h4">Height and width set with styles</IcTypography>
      <IcSkeleton style={{ height: "200px", width: "200px" }} />
      <IcTypography variant="h4">Height set with styles</IcTypography>
      <IcSkeleton style={{ height: "75px" }} />
      <IcTypography variant="h4">Width set with styles</IcTypography>
      <IcSkeleton style={{ width: "450px" }} />
    </>
  ),
  name: "Rectangle",
};

export const Circle = {
  render: () => <IcSkeleton variant="circle" />,
  name: "Circle",
};

export const Text = {
  render: () => (
    <>
      <IcTypography variant="h1">h1</IcTypography>
    <IcTypography variant="h1">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="h2">h2</IcTypography>
    <IcTypography variant="h2">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="h3">h3</IcTypography>
    <IcTypography variant="h3">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="h4">h4</IcTypography>
    <IcTypography variant="h4">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="subtitle-large">subtitle-large</IcTypography>
    <IcTypography variant="subtitle-large">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="subtitle-small">subtitle-small</IcTypography>
    <IcTypography variant="subtitle-small">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="body">body</IcTypography>
    <IcTypography variant="body">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="caption">caption</IcTypography>
    <IcTypography variant="caption">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="label">label</IcTypography>
    <IcTypography variant="subtitle-small">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="caption-uppercase">caption uppercase</IcTypography>
    <IcTypography variant="caption-uppercase">
      <IcSkeleton variant="text" />
    </IcTypography>
    <IcTypography variant="label-uppercase">label uppercase</IcTypography>
    <IcTypography variant="subtitle-small">
      <IcSkeleton variant="text" />
    </IcTypography>
    </>
  ),
  name: "Text",
};

export const Example = {
  render: () => (
    <>
      <IcSkeleton variant="circle" height="20" />
      <div style={{ height: "8px" }}></div>
      <IcTypography variant="caption">
        <IcSkeleton variant="text" />
      </IcTypography>
      <div style={{ height: "8px" }}></div>
      <IcSkeleton />
    </>
  ),
  name: "Example",
};

export const Light = {
  render: () => (
    <>
      <IcSkeleton variant="circle" height="20" appearance="light" />
      <div style={{ height: "8px" }}></div>
      <IcTypography variant="caption">
        <IcSkeleton variant="text" appearance="light" />
      </IcTypography>
      <div style={{ height: "8px" }}></div>
      <IcSkeleton appearance="light" />
    </>
  ),
  name: "Light",
};

export const DeprecatedDark = {
  render: () => (
    <>
      <IcSkeleton variant="circle" height="20" dark="true" />
      <div style={{ height: "8px" }}></div>
      <IcTypography variant="caption">
        <IcSkeleton variant="text" dark="true" />
      </IcTypography>
      <div style={{ height: "8px" }}></div>
      <IcSkeleton dark="true" />
    </>
  ),
  name: "Deprecated - dark",
};

export const Playground = {
  render: (args) => (
    <div>
      <IcSkeleton
        appearance={args.appearance}
        variant={args.variant}
        style={{
          height: args.variant == "circle" ? "20px" : "",
          width: args.variant == "circle" ? "20px" : "",
        }}
      ></IcSkeleton>
    </div>
  ),

  args: defaultArgs,

  argTypes: {
    appearance: {
      options: ["default", "light"],

      control: {
        type: "inline-radio",
      },
    },

    variant: {
      options: ["rectangle", "circle", "text"],

      control: {
        type: "radio",
      },
    },
  },

  name: "Playground",
};
