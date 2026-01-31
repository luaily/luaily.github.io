/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleSvgrepoComSvgIcon(props: CircleSvgrepoComSvgIconProps) {
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
        d={"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}
      ></path>
    </svg>
  );
}

export default CircleSvgrepoComSvgIcon;
/* prettier-ignore-end */
