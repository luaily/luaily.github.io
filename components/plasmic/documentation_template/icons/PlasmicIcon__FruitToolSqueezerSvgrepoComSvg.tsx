/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitToolSqueezerSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitToolSqueezerSvgrepoComSvgIcon(
  props: FruitToolSqueezerSvgrepoComSvgIconProps
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
          "M23.5 28h-15c-1.5 0-2.9-.9-3.6-2.2L3 22h26l-1.9 3.8c-.7 1.3-2.1 2.2-3.6 2.2m2.5-6c0-7.4-4.1-13.9-10-17-5.9 3.1-10 9.6-10 17"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"M20.5 22c0-7.4-1.9-13.9-4.5-17-2.7 3.1-4.5 9.6-4.5 17"}
      ></path>
    </svg>
  );
}

export default FruitToolSqueezerSvgrepoComSvgIcon;
/* prettier-ignore-end */
