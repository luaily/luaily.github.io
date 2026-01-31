/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MachineLearningIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MachineLearningIconSvgIcon(
  props: MachineLearningIconSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30 10V2h-8v8h3v4h-2v2h7v-2h-3v-4zm-6-6h4v4h-4zm-4 19.41L18.59 22 16 24.59 13.41 22 12 23.41 14.59 26 12 28.59 13.41 30 16 27.41 18.59 30 20 28.59 17.41 26 20 23.41zM20 14h-8v2h3v5h2v-5h3v-2zM7 9.86a4 4 0 10-2 0V14H2v2h7v-2H7zM4 6a2 2 0 112 2 2 2 0 01-2-2z"
        }
      ></path>

      <path
        data-name={"<Transparent Rectangle>"}
        fill={"none"}
        d={"M0 0h32v32H0z"}
      ></path>
    </svg>
  );
}

export default MachineLearningIconSvgIcon;
/* prettier-ignore-end */
