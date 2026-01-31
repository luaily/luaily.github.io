/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodAppleSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodAppleSvgrepoComSvgIcon(
  props: FruitFoodAppleSvgrepoComSvgIconProps
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
          "M19.2 6.9c-1.7.7-3.8-.7-3.8-.7s.7-2.4 2.4-3 3.8.7 3.8.7-.7 2.3-2.4 3m2.9 2.2c-1.5-.3-3.1.1-4.3.9-1.1.7-2.5.7-3.5 0-1.3-.8-2.9-1.2-4.4-.9-3.7.6-6.3 4.5-5.8 8.7s4.6 11.7 8.3 11.1c.5-.1 1-.3 1.4-.6 1.3-.9 3.1-.9 4.4 0 .4.3.9.5 1.4.6 3.7.6 7.8-6.9 8.3-11.1.6-4.2-2-8.1-5.8-8.7"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"m12 3 .4.3C14.7 5 16 7.7 16 10.5v0"}
      ></path>
    </svg>
  );
}

export default FruitFoodAppleSvgrepoComSvgIcon;
/* prettier-ignore-end */
