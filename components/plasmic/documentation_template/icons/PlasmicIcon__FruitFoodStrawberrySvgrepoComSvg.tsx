/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodStrawberrySvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodStrawberrySvgrepoComSvgIcon(
  props: FruitFoodStrawberrySvgrepoComSvgIconProps
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
          "M20 4c-1.2 0-2.3.6-3 1.1-.6.5-1 .9-1 .9s-.4-.4-1-.9c-.7-.5-1.8-1.1-3-1.1-2.2 0-4 2-4 2s1.8 2 4 2c.8 0 1.5-.2 2.1-.5-.1.1-.1.3-.1.5 0 2.2 2 4 2 4s2-1.8 2-4c0-.2 0-.4-.1-.5.6.3 1.3.5 2.1.5 2.2 0 4-2 4-2s-1.8-2-4-2m-4 11v2m0 4v2m5-10v2m-10-2v2m1 3v2m8-2v2M16 2v3"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M10 7.5C7 9.1 5 11.8 5 15c0 1.8.7 3.6 1.9 5 1.5 1.9 2.9 3.9 3.7 6.1l.3.7c.6 1.6 2.5 2.5 4.2 2.1.6-.1 1.2-.1 1.7 0 1.8.4 3.6-.5 4.2-2.1l.3-.7c.9-2.2 2.2-4.2 3.7-6.1 1.2-1.4 1.9-3.1 1.9-5 0-3.1-2-5.9-5-7.5"
        }
      ></path>
    </svg>
  );
}

export default FruitFoodStrawberrySvgrepoComSvgIcon;
/* prettier-ignore-end */
