/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodMelonSliceSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodMelonSliceSvgrepoComSvgIcon(
  props: FruitFoodMelonSliceSvgrepoComSvgIconProps
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
        d={"M7 12H3c0 7.2 5.8 13 13 13s13-5.8 13-13h-4"}
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"M19 12c0 1.7-1.3 3-3 3s-3-1.3-3-3H7c0 5 4 9 9 9s9-4 9-9z"}
      ></path>
    </svg>
  );
}

export default FruitFoodMelonSliceSvgrepoComSvgIcon;
/* prettier-ignore-end */
