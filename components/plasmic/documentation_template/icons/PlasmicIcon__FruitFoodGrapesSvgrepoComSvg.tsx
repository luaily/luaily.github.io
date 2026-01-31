/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodGrapesSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodGrapesSvgrepoComSvgIcon(
  props: FruitFoodGrapesSvgrepoComSvgIconProps
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

      <circle
        cx={"16"}
        cy={"18"}
        r={"3"}
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
      ></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"M21.2 15c1.6.1 2.8 1.4 2.8 3 0 1.7-1.3 3-3 3-1 0-1.9-.5-2.5-1.3"}
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M21.2 21c.7 1.4.2 3.1-1.2 3.9s-3.3.3-4.1-1.1c-.5-.9-.5-1.9-.1-2.8m.2 3a3 3 0 0 1-4 .9c-1.4-.8-1.9-2.7-1.1-4.1.5-.9 1.4-1.4 2.4-1.5"
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
          "M10.8 21C9.2 20.9 8 19.6 8 18c0-1.7 1.3-3 3-3 1 0 1.9.5 2.5 1.3M10.8 15c-.7-1.4-.2-3.1 1.2-3.9s3.3-.3 4.1 1.1c.5.9.5 1.9.1 2.8m-.2-3a3 3 0 0 1 4-.9c1.4.8 1.9 2.7 1.1 4.1-.5.9-1.4 1.4-2.4 1.5m.2 8.6c.1.2.1.5.1.7 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.2 0-.5.1-.7"
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
          "M16 12c0-3.9 3.1-7 7-7m0 0c1.7 0 3 .9 3 2s-1.3 2-3 2c-.9 0-1.7-.3-2.3-.7m-5.2-3.4C14.7 3.7 13.7 3 13.7 3s-1.3 1-2.2 2.4C9.8 3.8 6.7 4.1 6.7 4.1s-.5 2 0 3.7C4.6 8.3 3 10.5 3 10.5s1.7 2.4 3.9 2.8c-.3.5-.5 1.1-.6 1.7"
        }
      ></path>
    </svg>
  );
}

export default FruitFoodGrapesSvgrepoComSvgIcon;
/* prettier-ignore-end */
