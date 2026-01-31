/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaintBrushSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaintBrushSvgrepoComSvgIcon(
  props: PaintBrushSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M9.9 19.8c-2.6-.1-4.7 2.2-4.7 4.8v1c0 1.6-.9 2.9-2.3 3.4h6.7c2.6 0 4.8-2.1 4.8-4.7-.1-2.5-2-4.4-4.5-4.5"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"M11.2 20 26.3 6.5c.7-.6 1.7-.6 2.3 0h0c.6.6.6 1.6 0 2.2L14.4 23.8"}
      ></path>
    </svg>
  );
}

export default PaintBrushSvgrepoComSvgIcon;
/* prettier-ignore-end */
