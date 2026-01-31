/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FruitFoodCherriesSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function FruitFoodCherriesSvgrepoComSvgIcon(
  props: FruitFoodCherriesSvgrepoComSvgIconProps
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
          "M22.6 14c-2.5-1.1-3.2-4.9-3.2-4.9s3.3-1.9 5.8-.8 3.2 4.9 3.2 4.9-3.3 1.9-5.8.8"
        }
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={"M8 21c0-9.4 7.6-17 17-17"}
      ></path>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
        d={
          "M20.5 23.5c-4.6-4.6-6-11.1-4.3-16.9M13 22c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-4 5-4 5 1.2 5 4"
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
          "M25 21.4c1.5 2.3.8 5.4-1.5 6.8s-5.3.7-6.8-1.6-.3-4.5 2-5.9c2.3-1.5 4.8-1.6 6.3.7"
        }
      ></path>
    </svg>
  );
}

export default FruitFoodCherriesSvgrepoComSvgIcon;
/* prettier-ignore-end */
