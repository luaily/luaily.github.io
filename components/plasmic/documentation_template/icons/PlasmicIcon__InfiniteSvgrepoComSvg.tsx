/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfiniteSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfiniteSvgrepoComSvgIcon(
  props: InfiniteSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M10 9.417C9.162 8.575 8.207 8 7 8a4 4 0 1 0 0 8c4.5 0 5.5-8 10-8a4 4 0 0 1 0 8c-1.207 0-2.162-.575-3-1.417"
        }
      ></path>
    </svg>
  );
}

export default InfiniteSvgrepoComSvgIcon;
/* prettier-ignore-end */
